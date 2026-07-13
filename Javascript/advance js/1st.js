async function waiting(time){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(100)
        },time);
    })

}
function sum(a,b,c){
    return a+b+c
}

(async function main (){

    // let a = await waiting(2000)
    // console.log(a)
    // let b = await waiting(4000)
    // console.log(b)

    //destructuring 
    // let [x , y , ...rest]=[1,5,4,5,7,9,23]
    // console.log(x , y , rest)

    let obj1={
        a:1,
        b:2,
        c:3
    }
    let {a,b}=obj1
    console.log(a,b)
    //this used when we have to extract the values from the object and assign them to the variables with the same name as the keys of the object.


    let arr=[1,2,3,4,5,6]
    console.log(sum(arr[0],arr[1],arr[2]))
    console.log(sum(...arr)) // array pass karo, spread nahi
    
})();
