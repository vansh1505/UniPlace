import connectDB from "@/lib/db";
import { getUser } from "@/lib/auth";
import Drive from "@/models/drive";
import { NextResponse } from "next/server";
import Application from "../../../models/application";

export async function GET(req) {
    try {
        await connectDB();

        const { searchParams } = new URL(req.url);
        const admnno = searchParams.get("admnno");

        if (!admnno) {
            return NextResponse.json({ error: "Missing admission number" }, { status: 400 });
        }

        const student = await getUser(req);

        if (!student) {
            return NextResponse.json({ message: "Student not found" }, { status: 404 });
        }
        const academicInfo = student.academicInfo;
        if (!academicInfo) {
            return NextResponse.json({ message: "Complete your profile to view Eligible Drives" }, { status: 403 });
        }

        const drives = await Drive.find({});

        const applied = await Application.find({
            studentId: student.id,
        });
        const appliedDriveIds = new Set(applied.map(app => app.driveId.toString()));

        const eligibleDrives = drives.filter(drive =>
            drive.minCGPA <= academicInfo.cgpa &&
            drive.minBacklogs >= academicInfo.backlogs &&
            !appliedDriveIds.has(drive._id.toString())
            // drive.courses.filter(course => course === academicInfo.course).length > 0 &&
            // drive.branches.filter(branch => branch === academicInfo.branch).length > 0
            // && drive.isActive
        );
        return NextResponse.json({ eligibleDrives, totalDrives: drives.length - applied.length }, { status: 200 });
    } catch (error) {
        console.error("Error fetching academic info:", error.message);
        return NextResponse.json({ error: "Error occurred while fetching academic info" }, { status: 500 });
    }
}