import { cookies } from "next/headers";
import { jwtVerify } from "jose";

export async function getUser() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
        return null;
    }

    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const { payload } = await jwtVerify(token, secret);
        return payload;
    } catch (err) {
        console.log("Invalid token error:", err.message);
        return null;
    }
}
