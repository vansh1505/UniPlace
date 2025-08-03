import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Drive from "@/models/drive";

export async function DELETE(req) {
    try {
        await connectDB();
        const { name } = await req.json();
        if (!name) {
            return NextResponse.json({ message: "Drive name is required" }, { status: 400 });
        }
        console.log("Deleting drive with name:", name);
        const drive = await Drive.findOneAndDelete({ name });
        if (!drive) {
            return NextResponse.json({ message: "Drive not found" }, { status: 404 });
        }
        return NextResponse.json({ message: "Drive deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting drive:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
