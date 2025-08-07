import mongoose from "mongoose";

const driveSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    logoLink: {
        type: String,
        required: true,
        trim: true,
    },
    collegeName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    website: {
        type: String,
        required: true,
        trim: true,
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    position: {
        type: String,
        required: true,
        trim: true,
    },
    salary: {
        min: {
            type: Number,
            required: true,
        },
        max: {
            type: Number,
            required: true,
        },
    },
    skills: {
        type: [String],
    },
    minCGPA: {
        type: Number,
        required: true,
    },
    minBacklogs: {
        type: Number,
        required: true,
    },
    courses: {
        type: [String],
        required: true,
    },
    branches: {
        type: [String],
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    recurimentType: {
        type: String,
        enum: ["Full-time", "Part-time", "Internship"],
        required: true,
    },
    examLocation: {
        type: String,
        required: true,
        trim: true,
    }
}, {
    timestamps: true,
});

const Drive = mongoose.models.Drive || mongoose.model("Drive", driveSchema);
export default Drive;