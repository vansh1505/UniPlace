import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("MongoDB connected successfully");
    }).catch((error) => {
        console.error("MongoDB connection failed:", error);
    });
};

export default connectDB;