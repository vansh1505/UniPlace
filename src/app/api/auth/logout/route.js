import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
    try {
        const cookieStore = cookies();

        cookieStore.set("token", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: 0,
        });

        return NextResponse.redirect(new URL("/login", req.url));

    } catch (error) {
        console.error("Logout error:", error.message);
        return NextResponse.json({ error: "Server error during logout" }, { status: 500 });
    }
}
