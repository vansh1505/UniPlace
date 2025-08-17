import connectDB from "@/lib/db"
import Drive from "@/models/drive"

export async function POST(request) {
    const { driveId, isActive } = await request.json();

    await connectDB();

    try {
        const drive = await Drive.updateOne(
            { _id: driveId },
            { $set: { isActive: isActive } }
        );

        return new Response("Drive status updated", { status: 200 });
    } catch (error) {
        console.error("Error updating drive status:", error);
        return new Response("Failed to update drive status", { status: 500 });
    }
}