import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 許可されたパスのリスト
const ALLOWED_PATHS = [
  '/',
  '/works',
  '/blog',
  '/all-articles',
  '/category',
  '/free-consultation',
  '/company',
  '/privacy-policy',
  '/terms-of-service'
]

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // ルートパスまたは許可されたパスで始まるかチェック
  const isAllowedPath = ALLOWED_PATHS.some(allowedPath => 
    path === allowedPath || path.startsWith(`${allowedPath}/`)
  )

  // 静的ファイルへのアクセスは許可
  if (
    path.startsWith('/_next') || 
    path.startsWith('/api') ||
    path.startsWith('/images') ||
    path.startsWith('/fonts')
  ) {
    return NextResponse.next()
  }

  // 許可されていないパスの場合は404ページへ
  if (!isAllowedPath) {
    return NextResponse.rewrite(new URL('/404', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
} 