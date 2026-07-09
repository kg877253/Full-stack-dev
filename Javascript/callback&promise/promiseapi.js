const prom1 = new Promise((resolve, reject) => {

    let a = Math.random();
    //agar a ki value 0.5 se choti h to reject ho jao otherwise resolve ho jao
    if (a < 0.5) {
        reject("not done")
    }

    else {

        setTimeout(() => {
            console.log("i am inside promise")
            resolve("done")
            console.log("i am inde promise")
        }, 2000)
    }


})


const prom2=new Promise((resolve,reject)=>{

    let a= Math.random();
    //agar a ki value 0.5 se choti h to reject ho jao otherwise resolve ho jao
    if(a<0.5){
        reject("not done2")
    }
    
    else{

        setTimeout(() => {
            console.log("i am inside promise2")
            resolve("done2")
            console.log("i am inde promise2")
        },1500)
    }


})

const prom3=new Promise((resolve,reject)=>{

    let a= Math.random();
    //agar a ki value 0.5 se choti h to reject ho jao otherwise resolve ho jao
    if(a<0.5){
        reject("not done3")
    }
    
    else{

        setTimeout(() => {
            console.log("i am inside promise3")
            resolve("done3")
            console.log("i am inside promise3")
        },1000)
    }


})


//first finished promise ko return karta h chahe wo resolve ho ya reject
// let b = Promise.race([prom1,prom2,prom3]).then((value)=>{
//     console.log(value)
// }) .catch((err)=>{
//     console.error(err)
// })



// it waits for all promises to resolve and returns an array of their values. If any promise is rejected, it immediately rejects with the reason of the first rejected promise.
// let b = Promise.all([prom1,prom2,prom3]).then((value)=>{
//     console.log(value)
// }) .catch((err)=>{
//     console.error(err)
// })


// it waits for all promises to settle (either fulfilled or rejected) and returns an array of objects that describe the outcome of each promise. Each object has a status property indicating whether the promise was fulfilled or rejected, and a value or reason property containing the result or error.
// let b = Promise.allSettled([prom1,prom2,prom3]).then((value)=>{
//     console.log(value)
// }) .catch((err)=>{
//     console.error(err)
// })



//it waits for the first promise to resolve and returns the value of that promise. If all promises are rejected, it returns an aggregate error.
let b = Promise.any([prom1,prom2,prom3]).then((value)=>{
    console.log(value)
}) .catch((err)=>{
    console.error(err)
})