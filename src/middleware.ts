import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect old URLs to new Slovak URLs
  if (pathname === '/contact') {
    return NextResponse.redirect(new URL('/kontakt', request.url), 301);
  }
  if (pathname === '/about') {
    return NextResponse.redirect(new URL('/o-mne', request.url), 301);
  }
  if (pathname === '/terapia') {
    return NextResponse.redirect(new URL('/o-terapii', request.url), 301);
  }
  if (pathname === '/privacy-policy') {
    return NextResponse.redirect(new URL('/ochrana-udajov', request.url), 301);
  }

  // Optimize font caching for better performance
  if (pathname.startsWith('/fonts/')) {
    const response = NextResponse.next();
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    response.headers.set('Vary', 'Accept-Encoding');
    return response;
  }

  // Optimize SVG caching and CORS for network access
  if (pathname.startsWith('/svgs/')) {
    const response = NextResponse.next();
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    response.headers.set('Content-Type', 'image/svg+xml');
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    return response;
  }

  // Admin routes protection
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    // Check if user is authenticated
    const adminUser = request.cookies.get('admin_user');
    
    if (!adminUser || !adminUser.value) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Redirect from admin login if already authenticated
  if (pathname === '/admin/login') {
    const adminUser = request.cookies.get('admin_user');
    
    if (adminUser && adminUser.value) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  // Set proper cache headers for bfcache compatibility
  const response = NextResponse.next();
  
  // Add CORS headers for network access
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Ensure main page can be cached by bfcache
  if (pathname === '/') {
    response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
  } else {
    // Set appropriate cache headers based on content type
    response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
  }
  
  return response;
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/fonts/:path*',
    '/svgs/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
