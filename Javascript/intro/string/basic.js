//template literals
let named=`kartiiik`
// console.log(named)

//we can use single quotes, double quotes and backticks to define a string in javascript

let sentence=`my name is "kartik"`
// console.log(sentence)

let b = `my name isssss ${named}`
// console.log(b)
//the above is called string interpolation


let c = 'dome\'d'
// console.log(c)
//if we want to use single quotes inside a string defined with single quotes, we need to use escape character --> \ before the single quote

//string methods-slice means 1 to 3 but not including 3--> kartik --> ar 
console.log(named.slice(1,3))
console.log(named.slice(1))//1 to end
console.log(named.slice(-3))//last 3 characters because -3 means 3rd character from the end 


let newname=named.replace("iii","i")
console.log(newname)//replace method replaces the first occurrence of the string with the new string par agr ek string me do bar iii hue to pehle vala hi replace hoga 

let a = "kartik"
console.log(a.length)
// console.log(a.toUpperCase())
// console.log(a.toLowerCase())

let concat = a.concat(named," is a good boy"," and he is a full stack developer")
console.log(concat)
// let add= a+named ---->> both same 
// console.log(add)

let nome = "   kartik  id       "
// console.log(nome.length)
console.log(nome)
let trimmed = nome.trim()//removes the white spaces from the start and end of the string
console.log(trimmed)


console.log(nome.charAt(3))//returns the character at the specified index