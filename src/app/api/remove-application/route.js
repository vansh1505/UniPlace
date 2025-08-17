import connectDB from "@/lib/db";
import Application from "@/models/application";
import { NextResponse } from "next/server";

export const DELETE = async (req) => {
  const { applicationId } = await req.json();

  if (!applicationId) {
    return NextResponse.json({ error: "Application ID is required" }, { status: 400 });
  }

  try {
    await connectDB();
    // Delete application from the database
    const deletedApplication = await Application.findByIdAndDelete(applicationId);

    if (!deletedApplication) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Application deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting application:", error);
    return NextResponse.json({ error: "Error deleting application" }, { status: 500 });
  }
};
