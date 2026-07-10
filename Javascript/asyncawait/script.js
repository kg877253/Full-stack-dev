function getdata() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("data loaded");
    }, 3000);   
})
}


console.log("starting script...");

console.log("reading script...");

console.log("loading data...");

let data = getdata();
console.log(data);

console.log("stage 2")