// let b=100;
// var a=1000;
// console.log(a);
// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(b);
// console.log(a);//shadowing 

let a =100;
function c(){
    var a=10;
    console.log(a);
}
c();