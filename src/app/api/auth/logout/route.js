import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req) {
    try {
        const cookieStore = await cookies();
        cookieStore.delete("token");
        return NextResponse.redirect(new URL("/", req.url));

    } catch (error) {
        console.error("Logout error:", error.message);
        return NextResponse.json({ error: "Server error during logout" }, { status: 500 });
    }
}
