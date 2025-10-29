import crypto from "crypto";
import connectDB from "@/lib/db";
import RecruiterToken from "@/models/RecruiterToken";

export async function POST(req) {
  const { driveId } = await req.json();
  await connectDB();

  const existingToken = await RecruiterToken.findOne({ driveId, used: false }).sort({ createdAt: -1 });
  if (existingToken && existingToken.expiresAt > Date.now() && !existingToken.used) {
    return new Response(JSON.stringify({ link: `${process.env.BASE_URL}/recruiter?token=${existingToken.token}`, accessCode: existingToken.accessCode }), { status: 200 });
  }

  const token = crypto.randomBytes(32).toString("hex");
  const accessCode = String(Math.floor(100000 + Math.random() * 900000));
  const now = Date.now();

  const doc = {
    token,
    accessCode,
    driveId,
    createdAt: now,
    expiresAt: now + 24 * 60 * 60 * 1000,
    used: false,
    attempts: 0
  };

  await RecruiterToken.create(doc);

  const link = `${process.env.BASE_URL}/recruiter?token=${token}`;
  return new Response(JSON.stringify({ link, accessCode }), { status: 200 });
}
