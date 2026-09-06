import mongoose from "mongoose";

import express from "express";

import { Todo } from "./modules/todo.js";

await mongoose.connect("mongodb://localhost:27017/todo");
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
    const todo1 = new Todo({
        title: "Buy groceries",
        description: "Milk, Bread",
        completed: false,
        days: 3
    });

    await todo1.save();
    res.send("Todo added!");
});

app.get("/a", async (req, res) => {
    const todos = await Todo.find({ completed: false });

    res.json(todos);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
