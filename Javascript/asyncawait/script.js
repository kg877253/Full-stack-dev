async function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("data loaded");
        }, 3000);
    })
}


//data load hone tk wait krne k liye async await ka use krte h 
async function main() {
    console.log("starting script...");

    console.log("reading script...");

    console.log("loading data...");
    
//DATA ka wait hoga jab tk data load na ho jaye tab tk ye line execute nahi hogi uske bad execute hojayegi age ki lines bhi 
    let data = await getdata();
    console.log(data);

    console.log("data loaded successfully");
    console.log("stage 2");

}

main();

//this is callback approach to handle the promise returned by getdata function
// data.then((data) => {
// console.log(data);

// console.log("stage 2")
// })