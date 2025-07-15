import connectDB from "@/lib/db";
import Student from "@/models/student";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { SignJWT } from "jose";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();

    const user = await Student.findOne({ email: data.email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const passwordMatch = await bcrypt.compare(data.password, user.password);
    if (!passwordMatch) {
      return NextResponse.json({ error: "Incorrect Username or Password" }, { status: 401 });
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new SignJWT({
      id: user._id.toString(),
      name: user.name,
      email: user.email
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('7d')
      .sign(secret);

    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return NextResponse.json({ success: true, student: user.name }, { status: 200 });

  } catch (error) {
    console.error("Login error:", error.message);
    return NextResponse.json({ error: "Error occurred while logging in" }, { status: 500 });
  }
}
