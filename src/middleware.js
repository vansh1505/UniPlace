import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req) {
    console.log("Middleware running for:", req.nextUrl.pathname);

    const token = req.cookies.get("token")?.value;
    console.log("Token found:", !!token);
    console.log("JWT_SECRET exists:", !!process.env.JWT_SECRET);

    if (!token) {
        console.log("No token found, redirecting to login");
        return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const { payload } = await jwtVerify(token, secret);
        console.log("Token verified successfully for user:", payload.email);

        // Add user info to request headers (since we can't modify req object in edge runtime)
        const response = NextResponse.next();
        response.headers.set('x-user-id', payload.id);
        response.headers.set('x-user-email', payload.email);
        return response;

    } catch (err) {
        console.log("Invalid token error:", err.message);
        console.log("Token that failed:", token.substring(0, 20) + "...");

        return NextResponse.redirect(new URL("/login", req.url));

    }
}

export const config = {
    matcher: ["/dashboard/:path*"],
};