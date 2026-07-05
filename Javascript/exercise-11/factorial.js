// const factorial = (n) => {
//     if (n === 0 || n === 1) {
//         return 1;
//     }

//     return n * factorial(n - 1);
// };

// // console.log(factorial(6));
// let a=6;
// console.log(factorial(a))

// const factorial = (n) => {
//     if (n === 0 || n === 1) {
//         return 1;
//     }

//     return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, curr) => acc * curr, 1);
// };

// let a = 6;
// console.log(factorial(a));
let a=0
function factorial(number) {
    let arr= Array.from(Array(number+1).keys())
    let c=arr.slice(1,).reduce((a,b)=>a*b)
    return c
}
console.log(factorial(a))