import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';


// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    
    const cookiesStore = await cookies();
    const token = cookiesStore.get('token');
    console.log(token);
    if (!token) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/dashboard/:path*',
}