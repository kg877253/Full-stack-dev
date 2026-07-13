console.log("prototypes")

const animal={
    eat(){
       console.log("eating")
    }

}
const rabbit ={
    jump(){
       console.log("jumping")
    }
}

rabbit.__proto__=animal

// console.log(rabbit.eat()) // eating
// console.log(rabbit.jump()) // jumping

