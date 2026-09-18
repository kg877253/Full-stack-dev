import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
        name: {
            type: String,},
        email: {
            type: String,
            required: true,
            unique: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        profilepic: {
            type: String,
        },
        coverpic: {
            type: String,
        },
        createdat: {
            type: Date,
            default: Date.now
        },
        updatedat: {
            type: Date,
            default: Date.now
        }
    }
)

export default mongoose.model("User", UserSchema) 