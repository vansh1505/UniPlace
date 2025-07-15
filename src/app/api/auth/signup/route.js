import connectDB from "@/lib/db";
import Student from "@/models/student";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import {cookies} from "next/headers";

export async function POST(req) {
    try {
        await connectDB();
        const { name, email, password } = await req.json();

        const exist = await Student.findOne({
            email: email
        })
        if (exist) {
            return NextResponse.json({ error: "User already Exists" }, { status: 201 });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const student = new Student({ name, email, password: hashedPassword });
        await student.save();

        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const token = await new SignJWT({ 
            id: student._id.toString(), 
            name: student.name, 
            email: student.email 
        })
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('7d')
            .sign(secret);

        // Set the token in a cookie
        const cookieStore = await cookies();
        cookieStore.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: 7 * 24 * 60 * 60
        });

        return NextResponse.json({ success: true, student: student.name }, { status: 201 });
    } catch (err) {
        console.error("Error during signup:", err);
        return NextResponse.json({ error: "Server error", details: err.message }, { status: 500 });
    }
}