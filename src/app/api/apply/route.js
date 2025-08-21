import { NextResponse } from "next/server";
import { getUser } from "@/lib/auth";
import connectDB from "@/lib/db";
import Application from "@/models/application";
import { Resend } from 'resend';
export async function POST(req) {
    try {
        const { driveId, companyName, position, skills } = await req.json();
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
            collegeName: user.collegeName,
            studentName: user.name,
            admnno: user.admnno,
            resumeURL: user.resumeURL,
            companyName,
            position,
            status: "applied",
            appliedAt: new Date(),
        });

        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
            from: 'UniPlace <uniplace@resend.dev>',
            to: user.email,
            subject: `Application for ${position} at ${companyName}`,
            html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <title>Application Confirmation</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8f9fa;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; margin-top: 20px; background-color: #ffffff; border: 1px solid #dee2e6; border-radius: 8px;">
              <tr>
                <td align="center" style="padding: 20px 0;">
                  <img src="https://uniplace.vercel.app/logo.png" alt="UniPlace Logo" width="120" style="display: block;" />
                </td>
              </tr>
              <tr>
                <td style="padding: 0 30px 20px 30px;">
                  <h1 style="font-size: 24px; color: #343a40; text-align: center;">Application Received!</h1>
                  <p style="font-size: 16px; color: #495057; line-height: 1.5;">Hi ${user.name},</p>
                  <p style="font-size: 16px; color: #495057; line-height: 1.5;">
                    This is a confirmation that your application for the <strong>${position}</strong> role at <strong>${companyName}</strong> has been successfully submitted.
                  </p>
                  <p style="font-size: 16px; color: #495057; line-height: 1.5;">
                    You can track the status of your application on your UniPlace dashboard. Best of luck!
                  </p>
                  <div style="text-align: center; padding-top: 20px;">
                    <a href="https://uniplace.vercel.app/dashboard/applications" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 5px; font-weight: bold;">View My Applications</a>
                  </div>
                </td>
              </tr>
              <tr>
                <td align="center" style="padding: 20px; background-color: #f1f3f5; color: #6c757d; font-size: 12px; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
                  This is an automated email. Please do not reply.
                </td>
              </tr>
            </table>
          </body>
          </html>
            `
        });

        return NextResponse.json({ msg: "Application submitted successfully" }, { status: 200 });

    } catch (err) {
        console.error("Apply Error:", err);
        return NextResponse.json({ msg: "Internal Server Error" }, { status: 500 });
    }
}