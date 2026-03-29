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
    collegeName: {
        type: String,
        required: true,
    },
    studentName: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    admnno: {
        type: String,
        required: true,
    },
    resumeURL: {
        type: String,
        default: "",
    },
    sop: {
        type: String,
    },
    status: {
        type: String,
        enum: ['applied', 'in_progress', 'offered', 'rejected'],
        default: 'applied',
    },
    attendance: {
        type: Boolean,
        default: false,
    },
    rounds: [
    {
        roundIndex: {
            type: Number,
            required: true
        },
        attendance: {
            type: Boolean,
            default: false
        },
        status: {
            type: String,
            enum: ['pending', 'selected', 'rejected'],
            default: 'pending'
        }
    }
    ],
    appliedAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true
});

const Application = mongoose.models.Application || mongoose.model('Application', applicationSchema);

export default Application;