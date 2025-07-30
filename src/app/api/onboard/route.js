import Student from "@/models/student";
import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { cookies } from "next/headers";
import { SignJWT } from "jose";

export async function PATCH(req) {
  try {
    const formData = await req.formData();

    const admnno = formData.get("admnno");
    const academicInfoStr = formData.get("academicInfo");
    const resumeURL = formData.get("resumeURL");
    const academicInfo = JSON.parse(academicInfoStr);

    if (!admnno || !academicInfo) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    await connectDB();
    const student = await Student.findOneAndUpdate(
      { admnno },
      { $set: { academicInfo }, profileCompleted: true, resumeURL },
      { new: true }
    );

    if (!student) {
      return NextResponse.json({ message: "Student not found" }, { status: 404 });
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
      resumeURL: student.resumeURL,
      academicInfo: student.academicInfo,
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

    return NextResponse.json({ message: "Profile updated successfully" }, { status: 200 });

  } catch (error) {
    console.error("Error updating profile:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

