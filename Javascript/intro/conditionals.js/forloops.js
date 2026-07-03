let obj={
    name:"Kartik",
    role:"Full stack developer",
    age:25
}
//for in loop is used to iterate over the properties of an object
for (const key in obj) {
    
    const element = obj[key];
    console.log(key,":",element);
    
    
}
//for of loop is used to iterate over the values of an iterable object like array or string

for (const c of "KartiK") {
    // console.log(c.toLowerCase());
    console.log(c)
}