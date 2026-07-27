let a = [1,2,4,5,12,22];

// // for loop
// for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     console.log(element);
// }

// //forEach loop
// a.forEach((value, index, array) => {
//     console.log(value);
// });

// for of loop
// for (const value of a) {
//     console.log(value);
// }
object={
    1: "abhi",
    2: "kabhi",
    3: "jabhi"
}
//for in loop
for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
    console.log(key, element);
    
}