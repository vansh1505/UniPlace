import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Student from "@/models/student";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const collegeName = searchParams.get("collegeName");
    if (!collegeName) {
      return NextResponse.json({ error: "College name is required" }, { status: 400 });
    }

    await connectDB();
    const students = await Student.find({ collegeName, role: "student" }).sort({ createdAt: -1 });

    if (students.length === 0) {
      return NextResponse.json({ message: "No students found for this college" }, { status: 404 });
    }
    return NextResponse.json(students, { status: 200 });
  } catch (error) {
    console.error("Error fetching students:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
