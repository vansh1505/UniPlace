import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Drive from "@/models/drive";

export async function POST(req) {
    try {
        await connectDB();
        const formData = await req.json();
        const existingDrive = await Drive.findOne({ name: formData.name });
        if (existingDrive) {
            return NextResponse.json({ message: 'Drive already exists', data: existingDrive }, { status: 409 });
        }
        const data = await Drive.create(formData);
        await data.save();

        return NextResponse.json({ message: 'Drive created successfully', data }, { status: 201 });
    } catch (error) {
        console.error('Error creating drive:', error);
        return NextResponse.json({ message: 'Internal Server Error', error: error.message }, { status: 500 });
    }
}