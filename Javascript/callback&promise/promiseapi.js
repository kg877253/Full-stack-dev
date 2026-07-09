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
        reject("not done")
    }
    
    else{

        setTimeout(() => {
            console.log("i am inside promise")
            resolve("done")
            console.log("i am inde promise")
        },2000)
    }


})

const prom3=new Promise((resolve,reject)=>{

    let a= Math.random();
    //agar a ki value 0.5 se choti h to reject ho jao otherwise resolve ho jao
    if(a<0.5){
        reject("not done")
    }
    
    else{

        setTimeout(() => {
            console.log("i am inside promise")
            resolve("done")
            console.log("i am inde promise")
        },2000)
    }


})

let b = Promise.allSettled([prom1,prom2,prom3]).then((value)=>{
    console.log(value)
}) .catch((err)=>{
    console.error(err)
})