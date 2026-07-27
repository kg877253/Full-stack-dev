class animal{

    constructor(name){
        this.name=name;
        console.log("animal is created")
    }

    eats(){
        console.log(`${this.name} is eating`)
    }
    jumps(){
        console.log(`${this.name} is jumping`)
    }
}

class lion extends animal{
    constructor(name){
        super(name)
        console.log(`name of lion is ${this.name}`)
    }
    roar(){
        console.log(`${this.name} is roaring`)
    }
}

let a = new animal("dogie");
console.log(a.eats());
let b = new lion("simba");
console.log(b.jumps());