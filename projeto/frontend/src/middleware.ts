import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const COOKIE_NAMES = [
    '__Secure-next-auth.session-token',
    'next-auth.session-token',
];

function getTokenFromCookies(request: NextRequest): string | null {
    for (const name of COOKIE_NAMES) {
        const cookie = request.cookies.get(name)?.value;
        if (cookie) return cookie;
    }
    return null;
}

export function middleware(request: NextRequest) {
    const token = getTokenFromCookies(request);
    if (!token) {
        const url = new URL('/auth/login', request.url);
        url.searchParams.set('from', request.nextUrl.pathname);
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/adm/:path*',
        '/home/:path*',
        '/aviso-adm/:path*',
        '/tarefas/:path*',
        '/adm',
        '/home',
        '/aviso-adm',
        '/tarefas',
    ],
};
