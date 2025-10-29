import connectDB from "@/lib/db";
import RecruiterToken from "@/models/RecruiterToken";
import Drive from "@/models/drive";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    if (!token)
      return new Response(JSON.stringify({ error: "missing token" }), { status: 400 });

    await connectDB();

    const tokenDoc = await RecruiterToken.findOne({ token });
    if (!tokenDoc)
      return new Response(JSON.stringify({ error: "Invalid Token" }), { status: 403 });

    if (tokenDoc.used)
      return new Response(JSON.stringify({ error: "Used Token" }), { status: 403 });

    if (Date.now() > tokenDoc.expiresAt)
      return new Response(JSON.stringify({ error: "Expired Token" }), { status: 403 });

    const drive = await Drive.findById(tokenDoc.driveId).lean();
    if (!drive)
      return new Response(JSON.stringify({ error: "Drive not found" }), { status: 404 });

    return new Response(
      JSON.stringify({
        valid: true,
        drive: {
          companyName: drive.name,
          collegeName: drive.collegeName,
          expireAt: tokenDoc.expiresAt,
          _id: drive._id,
        },
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Recruiter Verify Error:", err);
    return new Response(JSON.stringify({ error: "server error" }), { status: 500 });
  }
}
