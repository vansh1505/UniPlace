import connectDB from "@/lib/db";
import Student from "@/models/student";
import { cookies } from "next/headers";
import { SignJWT } from "jose";

export async function PATCH(req) {
    try {
        await connectDB();

        const body = await req.json();
        const { email, url } = body;

        console.log("Received data:", { email, url });

        if (!url || !email) {
            return new Response(JSON.stringify({ error: "All fields are required" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const student = await Student.findOneAndUpdate(
            { email },
            { resumeURL: url },
            { new: true }
        );

        if (!student) {
            return new Response(JSON.stringify({ error: "Student not found" }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }

        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const token = await new SignJWT({
            id: student._id.toString(),
            name: student.name,
            email: student.email,
            collegeName: student.collegeName,
            admnno: student.admnno,
            role: student.role,
            profileCompleted: student.profileCompleted,
            academicInfo: student.academicInfo,
            resumeURL: student.resumeURL,
        })
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('1h')
            .sign(secret);

        const cookieStore = await cookies();
        cookieStore.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: 60 * 60,
        });
        return new Response(JSON.stringify({ message: "Resume Updated" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });


    } catch (error) {
        console.error("Error in upload resume route:", error);
        return new Response(JSON.stringify({ error: "Internal server error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}