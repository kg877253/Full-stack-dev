let a=[1,2,4,5,7,8]
console.log(a)
// console.log(a.length)

// console.log(a[2])    //accessing the element of array using index
a[0]=10 //changing the value of array at index 0
// console.log(a)
// console.log(a[0])
let b=[2,4,5]
console.log(b.join(" and ")) //join method joins the elements of array with the given string and returns a string

let c=[1,2,3,4,5]
console.log(c.pop()) //pop method removes the last element of the array and returns it
console.log(c)
console.log(c.push(6)) //push method adds the given element at the end of the array and returns the new length of the array
console.log(c)
console.log(c.shift()) //shift method removes the first element of the array and returns it
console.log(c)
console.log(c.unshift(10)) //unshift method adds the given element at the start of the array and returns the new length of the array
console.log(c)

let d=[45,23,23]
console.log(d.length)
console.log(delete d[1]) //delete method removes the element at the given index and returns true if successful, false otherwise
console.log(d)
console.log(d.length) //length of the array remains the same after deleting an element

let e=[17,255,34,45,54]
let f=[45,67]
console.log(e.concat(f)) //concat method joins two or more arrays and returns a new array

let g=[3,1,6,2]
console.log(g.sort()) //sort method sorts the elements of the array in ascending order and returns the sorted array

let h=[1,2,3,4,5]
// console.log(h.splice(0,2))
console.log(h.splice(0,2,8,9))
console.log(h) //splice method removes the elements from the array starting from the given index and returns the removed elements. It also modifies the original array.

let m=[10,30,24,45]
console.log(m.slice(1,3)) //slice method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
console.log(m) //original array remains the same after using slice method

let n=[1,2,3,4,5]
console.log(n.reverse())
// console.log(n) //reverse method reverses the order of the elements of the array and returns the reversed array. The original array is modified.