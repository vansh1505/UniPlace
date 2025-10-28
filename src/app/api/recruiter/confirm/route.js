// /api/recruiter/confirm/route.js
import connectDB from "@/lib/db";
import RecruiterToken from "@/models/RecruiterToken";
import Drive from "@/models/drive";
import Application from "@/models/application";

export async function POST(req) {
  try {
    const { token, accessCode } = await req.json();

    if (!token || !accessCode) {
      return new Response(JSON.stringify({ error: "missing token or accessCode" }), { status: 400 });
    }

    await connectDB();

    const tokenDoc = await RecruiterToken.findOne({ token });
    if (!tokenDoc) return new Response(JSON.stringify({ error: "invalid token" }), { status: 403 });

    if (tokenDoc.used) return new Response(JSON.stringify({ error: "used token" }), { status: 403 });

    if (Date.now() > tokenDoc.expiresAt) return new Response(JSON.stringify({ error: "expired token" }), { status: 403 });

    // Access code check
    if (tokenDoc.accessCode !== accessCode) {
      tokenDoc.attempts = (tokenDoc.attempts || 0) + 1;
      await tokenDoc.save();
      return new Response(JSON.stringify({ error: "invalid access code" }), { status: 403 });
    }

    // Mark token used
    tokenDoc.used = true;
    await tokenDoc.save();

    // Fetch drive
    const drive = await Drive.findById(tokenDoc.driveId).lean();
    if (!drive) return new Response(JSON.stringify({ error: "drive not found" }), { status: 404 });

    // Fetch applications (same fields as your /verify)
    const applications = await Application.find({ driveId: drive._id })
      .select("_id studentName admnno")
      .lean();

    const response = {
      drive: {
        companyName: drive.name,
        collegeName: drive.collegeName,
        expireAt: tokenDoc.expiresAt,
        _id: drive._id,
      },
      applicants: applications.map(a => ({
        _id: a._id,
        name: a.studentName,
        admnNo: a.admnno,
      })),
    };

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    console.error("Recruiter Confirm Error:", err);
    return new Response(JSON.stringify({ error: "internal server error" }), { status: 500 });
  }
}
