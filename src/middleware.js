import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

export async function middleware(req) {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const url = req.nextUrl.clone();

    if (!token) {
        url.pathname = "/login";
        return NextResponse.redirect(url);
    }

    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const { payload } = await jwtVerify(token, secret);

        // Redirect admin to dashboard/admin only when they hit base dashboard
        if (payload.role === "admin" && url.pathname === "/dashboard") {
            url.pathname = "/dashboard/admin";
            return NextResponse.redirect(url);
        }

        // Block non-admins from accessing /dashboard/admin
        if (payload.role !== "admin" && url.pathname.startsWith("/dashboard/admin")) {
            url.pathname = "/dashboard";
            return NextResponse.redirect(url);
        }

        if (url.pathname.startsWith("/api/admin") && payload.role !== "admin" && payload) {
            return new NextResponse(
                JSON.stringify({ message: "Unauthorized access" }),
                { status: 403, headers: { "Content-Type": "application/json" } }
            );
        }

        return NextResponse.next();

    } catch (err) {
        console.log("Invalid token error:", err.message);
        url.pathname = "/login";
        return NextResponse.redirect(url);
    }
}

export const config = {
    matcher: ["/api/admin/:path*","/dashboard/:path*"],
};
