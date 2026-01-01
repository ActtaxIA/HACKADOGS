// Middleware desactivado temporalmente - usando autenticación local en lugar de Supabase
// import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  // Por ahora, permitir todo el acceso
  // La autenticación se verifica en cada página individual con getLocalSession()
  return NextResponse.next()
}

export const config = {
  matcher: ['/cliente/:path*', '/app/:path*', '/admin/:path*']
}
