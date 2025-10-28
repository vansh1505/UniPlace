// models/RecruiterToken.js
import mongoose from "mongoose";

const RecruiterTokenSchema = new mongoose.Schema({
  token: String,
  accessCode: String,
  driveId: String,
  createdAt: Number,
  expiresAt: Number,
  used: Boolean,
  attempts: Number
});

export default mongoose.models.RecruiterToken ||
  mongoose.model("RecruiterToken", RecruiterTokenSchema);
