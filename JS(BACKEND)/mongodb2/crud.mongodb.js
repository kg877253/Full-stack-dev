//CRUD OPERATIONS IN MONGODB-CREATE,READ,UPDATE,DELETE

//1. Create a database and collection in MongoDB
use("cruddb");

db.createCollection("coursesdb");

// db.coursesdb.insertOne({
//     name: "Introduction to MongoDB",
//     price:2000,
//     assignments: 12,
//     projects: 2
// })

// db.coursesdb.insertMany([ 
//     {
//         name: "Introduction to MongoDB",
//         price:2000,
//         assignments: 12,
//         projects: 2
//     },
//     {
//         name: "Introduction to NodeJS",
//         price:3000,
//         assignments: 15,
//         projects: 3
//     },
//     {
//         name: "Introduction to ReactJS",
//         price:4000,
//         assignments: 18,
//         projects: 4
//     },
//     {
//         name: "Introduction to AngularJS",
//         price:5000,
//         assignments: 20,
//         projects: 5
//     },
//     {
//         name: "Introduction to VueJS",
//         price:6000,
//         assignments: 22,
//         projects: 6
//     },
//     {
//         name: "Introduction to ExpressJS",
//         price:7000,
//         assignments: 25,
//         projects: 7
//     }
// ])

//2. READ 
// let a = db.coursesdb.find({price:3000});
// console.log(a.toArray());


let b = db.coursesdb.findOne({ price: 5000 });
// console.log(b);

//3. UPDATE 
db.coursesdb.updateOne({ price: 2000 }, { $set: { price: 20000 } });

db.coursesdb.updateMany({ price: 100000 }, { $set: { price: 3460600 } });

//4. DELETE 
db.coursesdb.deleteOne({ price: 3000 });

db.coursesdb.deleteMany({ price: 20000 });