import mongoose from "mongoose";
import express from "express";
import { Todo } from "./modules/todo.js";

let conn= await mongoose.connect("mongodb://localhost:27017/todo");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const todo1 = new Todo({
        title: "Buy groceries",
        description: "Milk, Bread",
        completed: false,
        days: 3
    });
    todo1.save();
    res.send("Todo added!");
});

app.get("/a", async(req, res) => {
    let todo= await Todo.findMany({completed: false});
    res.json({title: todo.title, description: todo.description, completed: todo.completed, days: todo.days});
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});