import { NextRequest, NextResponse } from 'next/server';
import { newsletterSchema } from '@/lib/validations/schemas';
import { ErrorHandler } from '@/lib/errors/ErrorHandler';
import { ValidationError, RateLimitError } from '@/lib/errors/AppError';

// Rate limiting for newsletter subscriptions
const newsletterRateLimit = new Map<string, { count: number; resetTime: number }>();

function checkNewsletterRateLimit(email: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const maxRequests = 3; // Max 3 subscription attempts per hour per email

  const current = newsletterRateLimit.get(email);
  
  if (!current || now > current.resetTime) {
    newsletterRateLimit.set(email, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (current.count >= maxRequests) {
    return false;
  }
  
  current.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validatedData = newsletterSchema.parse(body);

    // Check rate limit by email
    if (!checkNewsletterRateLimit(validatedData.email)) {
      throw new RateLimitError('Too many subscription attempts. Please try again later.');
    }

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Here you would typically:
    // 1. Check if email already exists
    // 2. Add to newsletter service (Mailchimp, ConvertKit, etc.)
    // 3. Send welcome email
    // 4. Save preferences to database

    console.log('Newsletter subscription:', {
      ...validatedData,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to our newsletter!',
    }, { status: 200 });

  } catch (error) {
    ErrorHandler.logError(error, 'Newsletter API');
    const errorResponse = ErrorHandler.createErrorResponse(error);
    
    return NextResponse.json(errorResponse, { 
      status: error instanceof ValidationError ? 400 : 500 
    });
  }
}

export async function GET() {
  return NextResponse.json({
    success: false,
    message: 'Method not allowed',
  }, { status: 405 });
}