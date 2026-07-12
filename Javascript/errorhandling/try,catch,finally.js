let a = prompt("Enter a number: ");
let b = prompt("Enter another number: ");

let sum = parseInt(a) + parseInt(b);
if(isNaN(a) || isNaN(b)) {
    throw SyntaxError("Invalid input: Please enter valid numbers.");
}

function main(){
    let x=3;

    try {
        console.log("The sum is: " + sum*x);
        return true;
    } catch (error) {
        console.error("An error occurred:");
        return false;
    }
    //finally block will always execute, regardless of whether an error occurred or not
    //nhi lgayenge to return hone k bad function ka execution ruk jaayega aur finally block execute nahi hoga
    finally{
        console.log("Execution completed.");
    }
}
let man=main();
