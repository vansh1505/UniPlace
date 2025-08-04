import connectDB from "@/lib/db";
import { getUser } from "@/lib/auth";
import Application from "@/models/application";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        await connectDB();
        const student = await getUser(req);

        if (!student) {
            return NextResponse.json({ error: "Student not found" }, { status: 404 });
        }

        const applications = await Application.find({ studentId: student.id }).populate("driveId");
        const appliedDrives = applications.map(app => ({
            drive: app.driveId,
            status: app.status,
            appliedAt: app.appliedAt,
        }));
        return NextResponse.json({ appliedDrives }, { status: 200 });
    } catch (error) {
        console.error("Error fetching applied drives:", error.message);
        return NextResponse.json({ error: "Failed to fetch applied drives" }, { status: 500 });
    }
}
