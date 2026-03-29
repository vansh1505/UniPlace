import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Application from "@/models/application";
import Drive from "../../../../models/drive";

export async function POST(req) {
    try {
        const { driveId, roundName, updates } = await req.json();
        await connectDB();

        const drive = await Drive.findById(driveId);
        if (!drive) {
            return new Response(JSON.stringify({ error: "Drive not found" }), { status: 404 });
        }

        const roundIndex = drive.roundDetails.findIndex(r => r.name === roundName);

        if (roundIndex === -1) {
            return new Response(JSON.stringify({ error: "Round not found" }), { status: 404 });
        }

        const bulkOperations = updates.map(u => {
            let globalStatus = "in_progress";

            if (u.status === "rejected") {
                globalStatus = "rejected";
            } else if (roundIndex === drive.roundDetails.length - 1 && u.status === "selected") {
                globalStatus = "offered";
            }

            return {
                updateOne: {
                    filter: { _id: u.applicationId, driveId },
                    update: {
                        $set: {
                            [`rounds.${roundIndex}.attendance`]: !!u.attendance,
                            [`rounds.${roundIndex}.status`]: u.status,
                            status: globalStatus
                        }
                    }
                }
            };
        });

        await Application.bulkWrite(bulkOperations);
        await Drive.findByIdAndUpdate(driveId, {
        $set: {
            [`roundDetails.${roundIndex}.isComplete`]: true
        }
        });

        //O(N) approach
        // for (const update of updates) {
        //   const { applicationId, attendance, status } = update;
        //   await Application.findByIdAndUpdate(applicationId, {
        //     $set: {
        //       "rounds.$[elem].attendance": attendance,
        //       "rounds.$[elem].status": status,
        //       status: status === "rejected" ? "rejected" : isFinalRound && status === "selected" ? "offered" : "in_progress"
        //     }
        //   }, {
        //     arrayFilters: [{ "elem.roundNumber": roundNumber }]
        //   });
        // }

        return new Response(JSON.stringify({ message: "Applications updated successfully" }), { status: 200 });

    } catch (error) {
        console.error("Error in /submit:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}