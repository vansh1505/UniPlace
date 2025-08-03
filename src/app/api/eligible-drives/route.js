import connectDB from "@/lib/db";
import Student from "@/models/student";
import Drive from "@/models/drive";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        await connectDB();

        const { searchParams } = new URL(req.url);
        const admnno = searchParams.get("admnno");

        if (!admnno) {
            return NextResponse.json({ error: "Missing admission number" }, { status: 400 });
        }

        const student = await Student.findOne({ admnno });

        if (!student) {
            return NextResponse.json({ message: "Student not found" }, { status: 404 });
        }
        const academicInfo = student.academicInfo;
        if (!academicInfo) {
            return NextResponse.json({ message: "Complete your profile to view Eligible Drives" }, { status: 403 });
        }

        const drives = await Drive.find({});

        const eligibleDrives = drives.filter(drive =>
            drive.minCGPA <= academicInfo.cgpa &&
            drive.minBacklogs >= academicInfo.backlogs
            // drive.courses.filter(course => course === academicInfo.course).length > 0 &&
            // drive.branches.filter(branch => branch === academicInfo.branch).length > 0
            // && drive.isActive
        );

        console.log("Eligible Drives Count:", eligibleDrives.length);
        return NextResponse.json({ eligibleDrives, totalDrives: drives.length }, { status: 200 });
    } catch (error) {
        console.error("Error fetching academic info:", error.message);
        return NextResponse.json({ error: "Error occurred while fetching academic info" }, { status: 500 });
    }
}