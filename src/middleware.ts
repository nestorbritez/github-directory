import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export const middleware = (request: NextRequest) => {
  if (request.nextUrl.pathname.startsWith('/api')) {
    const origin = request.headers.get('origin') || ''
    const host = request.headers.get('host') || ''

    if (origin && new URL(origin).host !== host) {
      return NextResponse.json(
        { message: 'Forbidden: Same-origin API requests only' },
        { status: 403 },
      )
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*',
}
