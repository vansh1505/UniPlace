import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
        index: true,
    },
    driveId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Drive',
        required: true,
    },
    sop: {
        type: String,
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

const Application = mongoose.models.Application || mongoose.model('Application', applicationSchema);

export default Application;