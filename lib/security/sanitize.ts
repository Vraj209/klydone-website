// Security utilities for input sanitization and validation

// Sanitize HTML to prevent XSS attacks
export function sanitizeHtml(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

// Sanitize URL to prevent malicious redirects
export function sanitizeUrl(url: string): string {
  try {
    const parsed = new URL(url);
    
    // Only allow http and https protocols
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return '#';
    }
    
    return url;
  } catch {
    return '#';
  }
}

// Validate and sanitize email
export function sanitizeEmail(email: string): string {
  return email.toLowerCase().trim();
}

// Remove potentially dangerous characters from file names
export function sanitizeFileName(fileName: string): string {
  return fileName
    .replace(/[^a-zA-Z0-9.-]/g, '_')
    .replace(/_{2,}/g, '_')
    .substring(0, 255);
}

// Generate secure random token - SSR-safe implementation
export function generateSecureToken(length: number = 32): string {
  // Use crypto.getRandomValues if available (modern browsers and Node.js)
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(array[i] % chars.length);
    }
    return result;
  }
  
  // Fallback for older environments
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return result;
}

// Rate limiting helper
export class RateLimiter {
  private attempts: Map<string, { count: number; resetTime: number }> = new Map();

  check(key: string, maxAttempts: number, windowMs: number): boolean {
    const now = Date.now();
    const current = this.attempts.get(key);

    if (!current || now > current.resetTime) {
      this.attempts.set(key, { count: 1, resetTime: now + windowMs });
      return true;
    }

    if (current.count >= maxAttempts) {
      return false;
    }

    current.count++;
    return true;
  }

  reset(key: string): void {
    this.attempts.delete(key);
  }
}