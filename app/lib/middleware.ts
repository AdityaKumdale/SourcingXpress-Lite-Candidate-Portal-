import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  // Check for cookie or token
  const currentUser = request.cookies.get('currentUser')?.value
 
  // If trying to access protected route without user
  if (!currentUser && request.nextUrl.pathname.startsWith('/jobs/applied')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}