import { NextResponse } from "next/server";
import { getUser } from "@/lib/auth";
import connectDB from "@/lib/db";
import Application from "@/models/application";

export async function POST(req) {
    try {
        const { driveId, skills } = await req.json();
        const user = await getUser(req);

        if (!user || user.role !== "student") {
            return NextResponse.json({ msg: "Unauthorized" }, { status: 401 });
        }
        await connectDB();

        const existing = await Application.findOne({
            driveId: driveId,
            studentId: user.id,
        });

        if (existing) {
            return NextResponse.json({ msg: "You have already applied for this drive" }, { status: 400 });
        }

        await Application.create({
            driveId: driveId,
            studentId: user.id,
            resumeUrl: user.resumeUrl || "",
            skills,
            status: "applied",
            appliedAt: new Date(),
        });


        return NextResponse.json({ msg: "Application submitted successfully" }, { status: 200 });

    } catch (err) {
        console.error("Apply Error:", err);
        return NextResponse.json({ msg: "Internal Server Error" }, { status: 500 });
    }
}