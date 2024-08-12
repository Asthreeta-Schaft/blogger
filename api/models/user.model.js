import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: 'https://imgs.search.brave.com/SL3JV4LFCh9nhP0Py8sxF9OCNG-O1Fh2AIJYwk3l7xI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvamVycnktbW91/c2UtcGljdHVyZXMt/cjIzcWV3aWpuM2Fn/cnc5OC5qcGc',
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    },
    {timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;