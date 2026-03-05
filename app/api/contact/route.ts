import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations/schemas';
import { ErrorHandler } from '@/lib/errors/ErrorHandler';
import { ValidationError, RateLimitError } from '@/lib/errors/AppError';

// Rate limiting map (in production, use Redis or database)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const contactNotificationWorkerUrl = process.env.CLOUDFLARE_CONTACT_WORKER_URL;

// Rate limiting function
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // Max 5 requests per window

  const current = rateLimitMap.get(ip);
  
  if (!current || now > current.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (current.count >= maxRequests) {
    return false;
  }
  
  current.count++;
  return true;
}

async function notifyContactSubmission(payload: {
  name: string;
  email: string;
  company?: string;
  message: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  submittedAt: string;
  ip: string;
}) {
  if (!contactNotificationWorkerUrl) {
    throw new Error('Missing CLOUDFLARE_CONTACT_WORKER_URL environment variable.');
  }

  const workerResponse = await fetch(contactNotificationWorkerUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      event: 'contact_form_submission',
      subject: `New contact message from ${payload.name}`,
      sender: {
        name: payload.name,
        email: payload.email,
        company: payload.company || 'N/A',
      },
      message: payload.message,
      metadata: {
        projectType: payload.projectType || 'N/A',
        budget: payload.budget || 'N/A',
        timeline: payload.timeline || 'N/A',
        submittedAt: payload.submittedAt,
        ip: payload.ip,
      },
    }),
  });

  if (!workerResponse.ok) {
    const errorText = await workerResponse.text();
    throw new Error(
      `Cloudflare Worker notification failed (${workerResponse.status}): ${errorText || 'Unknown error'}`
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      throw new RateLimitError('Too many contact form submissions. Please try again later.');
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);
    const submittedAt = new Date().toISOString();

    console.log('Contact form submission:', {
      ...validatedData,
      timestamp: submittedAt,
      ip,
    });

    await notifyContactSubmission({
      ...validatedData,
      submittedAt,
      ip,
    });

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
    }, { status: 200 });

  } catch (error) {
    ErrorHandler.logError(error, 'Contact API');
    const errorResponse = ErrorHandler.createErrorResponse(error);
    
    return NextResponse.json(errorResponse, { 
      status: error instanceof ValidationError ? 400 : 500 
    });
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({
    success: false,
    message: 'Method not allowed',
  }, { status: 405 });
}