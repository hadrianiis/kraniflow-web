import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

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

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
  ],
};
