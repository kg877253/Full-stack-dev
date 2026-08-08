const express = require('express');
const mongoose = require("mongoose");
const { get } = require('node:http');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

mongoose.connect("mongodb://localhost:27017/company")
    .then(() => {
        console.log("databse connected");
    })

let name = ["Kumar", "Ravi", "Suresh", "Ramesh"];
let languages = ["JavaScript", "Python", "Java", "C++"];
let city = ["New York", "Los Angeles", "Chicago", "Houston"];
function getRandomBoolean() {
    let a = Math.random(0, 1);
    if (a < 0.3) {
        return true;
    }
    else {
        return false;
    }
}
const userschema = new mongoose.Schema({
    name: String,
    language: String,
    city: String,
    ismanager: Boolean,
    salary: Number
})

const Employee = mongoose.model("Employee", userschema, "employees");

async function getRandomData() {
    await Employee.deleteMany({});
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push({
            name: name[Math.floor(Math.random() * name.length)],
            language: languages[Math.floor(Math.random() * languages.length)],
            city: city[Math.floor(Math.random() * city.length)],
            ismanager: getRandomBoolean(),
            salary: Math.floor(Math.random() * 800000)
        });
    }
    await Employee.insertMany(arr);
}

app.get('/generator', async (req, res) => {
    await getRandomData();
    console.log("data generated function called");
    res.json({ message: "10 records generated" });
});

app.get('/', (req, res) => {
    console.log("datafile requested");
    res.render('button');

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});