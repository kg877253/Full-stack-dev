let arr=[90,34,3,24,33]

// let newarr=[]
// for(let i =0 ;i<arr.length;i++){
//     newarr.push(arr[i]*2)
// }
// console.log(newarr)

let newarr=arr.map((value)=>{
    return value*2
})
console.log(newarr)

const greaterthan7 =(e)=>{
    if(e>7){
        return true
    }
    return false
}
let grr7arr=arr.filter(greaterthan7)
console.log(grr7arr)


let arr2=[1,2,3,4,5]
const sum = (a,b)=>{
    return a+b
}
let sumarr2=arr2.reduce(sum)
console.log(sumarr2)
//reduce method takes first 2 values then add and then summof these 2 values and 3rd value and goes on