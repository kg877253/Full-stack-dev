
const fs = require('fs');
console.log("starting")
//this is synchronous method ek hi line me execute hojayega aur agla line execute hoga
// fs.writeFileSync('kartik.txt', 'hello kartik');
//this is asynchronous method schedule hojayega aur bad me chlega (preffered method)
fs.writeFile('kartik2.txt', 'hello kartik2',()=>{
    console.log("file created")
    fs.readFile('kartik2.txt', (err, data)=>{
        console.log(err, data.toString());
    });
});

console.log("ending");


