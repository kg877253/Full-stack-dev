class User {

    constructor(name) {
        // invokes the setter
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short.");
            return;
        }
        this._name = value;
    }
    eats(){
        console.log(`${this.name} is eating`);
    }
}

let user = new User("John");
console.log(user.name); // John

user.name = "Har" // Name is too short.
console.log(user.name)

user.name = "kartik";
console.log(user.name) // kartik
user.eats() // kartik is eating