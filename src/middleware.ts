import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function middleware(request: NextRequest) {
  const isLogin = request.cookies.get('session');
  if (request.nextUrl.pathname.startsWith('/dasboard')) {
    if (!isLogin?.value) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }
}
