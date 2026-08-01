const express = require('express');
const app = express();
const port = 3000;
const fs= require('fs');
const birds = require('./routes/blog');

app.use(express.static('public'));

app.use('/blog', birds);

//MIDDLEWARE-1  
app.use((req, res, next) => {
    console.log("m1")
    fs.appendFileSync('logs.txt' , `${Date.now()} is a request ${req.method}\n`);
    req.header="i am KARTIK"
    console.log(`${Date.now()} is a request ${req.method}`);
    next();
});

//MIDDLEWARE-2  
app.use((req, res, next) => {
    console.log("m2");
    req.header="i am KARTIK22222222"
    next();

});

app.get('/', (req, res) => {
  res.send('Hello KARTIK!');
  console.log(req.header);
});

app.get('/about', (req, res) => {
  res.send('Hello about!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});