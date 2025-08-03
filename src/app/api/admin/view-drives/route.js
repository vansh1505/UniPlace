import connectDB from "@/lib/db";
import Drive from "@/models/drive";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        await connectDB();
        const drives = await Drive.find({}).sort({ createdAt: -1 });
        return NextResponse.json(drives, { status: 200 });
    } catch (error) {
        console.error("Error fetching drives:", error);
        return NextResponse.json({ message: "Internal Server Error", error: error.message }, { status: 500 });
    }
}