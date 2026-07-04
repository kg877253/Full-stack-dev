let obj1={
    1:"Crazy",
    2:"Amazing",
    3:"Fire"
}
let obj2={
    1:"Engine",
    2:"Foods",
    3:"Garments"
}
let obj3={
    1:"Bros",
    2:"Limited",
    3:"Hub"
}

let a=Math.floor(Math.random() * 3) + 1;
let b=Math.floor(Math.random() * 3) + 1;
let c=Math.floor(Math.random() * 3) + 1;

console.log(obj1[a] , obj2[b] , obj3[c] );

//WE CAN ALSO DO IT LIKE THIS FOR BETTER UNDERSTANDING OF OUR'S AND EASY
/*
let a,b,c;
let adrandom = Math.floor(Math.random() * 3) + 1;
if (adrandom === 1) {
    a="Crazy";
}
else if (adrandom === 2) {
    a="Amazing";
}
else {
    a="Fire";
}

let shoprandom = Math.floor(Math.random() * 3) + 1;
if (shoprandom === 1) {
    b="Engine";
}
else if (shoprandom === 2) {
    b="Foods";
}
else {
    b="Garments";
}

let anotherrandom = Math.floor(Math.random() * 3) + 1;
if (anotherrandom === 1) {
    c="Bros";
}
else if (anotherrandom === 2) {
    c="Limited";
}
else {
    c="Hub";
}

console.log(`Your new shop name is: ${a} ${b} ${c}`);*/




