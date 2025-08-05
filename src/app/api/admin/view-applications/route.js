import Application from "@/models/application";
import connectDB from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const collegeName = searchParams.get("collegeName");
    if (!collegeName) {
      return NextResponse.json({ error: "College Name is required" }, { status: 400 });
    }

    await connectDB();

    const applications = await Application.find({ collegeName });

    return NextResponse.json(applications, { status: 200 });
  } catch (error) {
    console.error("Error fetching applications:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}