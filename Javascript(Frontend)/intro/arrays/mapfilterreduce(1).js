//ek naya array create karte hai
//map method returns a new array with the results of calling a provided function on every element in the calling array.
let a =[10,20,30,40,50]
let b =a.map((value)=>{
    return value*2
})
console.log(b)

//filter method returns a new array with all elements that pass the test implemented by the provided function.
let c=[1,2,3,4,5]
let d = c.filter((value)=>{
    return value>2
})
console.log(d)


//ye naya array nhi banata hai ye sirf ek single value return karta hai
//reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
function sum(a,b){
    return a+b
}
let e=[1,2,3,4,51]
let sume=e.reduce(sum)
console.log(sume)

//we can also do like this 
// let sume2=e.reduce((a,b)=>{
//     return a+b
// })
