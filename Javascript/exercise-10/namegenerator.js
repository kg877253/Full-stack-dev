let a;
let b;
let c;
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

console.log(`Your new shop name is: ${a} ${b} ${c}`);