import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
    days: Number
});

export const Todo = mongoose.model('Todo', todoSchema);