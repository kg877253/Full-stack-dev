getname();
console.log(getname);
console.log(x);
var x=9;

function getname(){
    console.log("kartik");
}


//*********hoisting- it means that the variable and function declarations are moved to the top of their containing scope during the compilation phase. This allows functions to be called before they are defined and variables to be referenced before they are assigned a value, but the variable will return undefined until it is assigned a value.**********

//this prints the function definition of getname and undefined for x because of hoisting. The function declaration is hoisted to the top, so it can be called before its definition. However, the variable x is hoisted but not initialized, so it returns undefined when logged before its assignment.

// kartik
// index.js:2 ƒ getname(){
//     console.log("kartik");
// }
// index.js:3 undefined