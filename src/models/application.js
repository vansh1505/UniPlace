import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
        index: true,
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true,
    },
    status: {
        type: String,
        enum: ['applied', 'interviewing', 'offered', 'rejected'],
        default: 'applied',
    },
    appliedAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true
});