console.log("im")

const promis=new Promise((resolve,reject)=>{

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

promis.then((value)=>{//then  resolve k andr ki value ko le aata h
    console.log(value);
})
// .catch((error)=>{//catch reject k andr ki value ko le aata h
//     console.log(error);
// })