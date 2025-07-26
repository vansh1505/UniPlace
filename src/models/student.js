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
        enum: ['Galgotias University'],
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    role: {
        type: String,
        enum: 'student',
    },
}, {
    timestamps: true
});

// Prevent re-compilation of model
const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);

export default Student;