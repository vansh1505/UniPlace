import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    admnno: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    collegeName: {
        type: String,
        required: true,
        trim: true
    },
    academicInfo: {
        course: {
            type: String,
        },
        branch: {
            type: String,
        },
        cgpa: {
            type: Number,
            min: 0,
            max: 10
        },
        backlogs: {
            type: Number,
            min: 0
        },
        semester: {
            type: String,
            min: 1,
        },
        yearOfPassing: {
            type: Number,
        }
    },

    resumeURL: {
        type: String,
        trim: true
    },

    profileCompleted: {
        type: Boolean,
        default: false,
    },

    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['student'],
        default: 'student'
    },
}, {
    timestamps: true
});

// Prevent re-compilation of model
const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);

export default Student;