import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import cookieOptions from "@/lib/cookieOptions";
export async function GET(req) {
    try {
        const cookieStore = await cookies();
        cookieStore.set("token", "", {
            ...cookieOptions,
            maxAge: 0,
        });
        return NextResponse.redirect(new URL("/", req.url));

    } catch (error) {
        console.error("Logout error:", error.message);
        return NextResponse.json({ error: "Server error during logout" }, { status: 500 });
    }
}
