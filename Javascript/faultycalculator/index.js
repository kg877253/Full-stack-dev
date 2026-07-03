function faultyCalculator(num1, num2, operator) {
    let random= Math.random();

    if(random<0.1){
        if(operator == '+'){
            return num1 - num2;
        }
        else if(operator == '-'){
            return num1 / num2;

        }
        else if(operator == '*'){
            return num1 + num2;
        }
        else if(operator == '/'){
            return num1 ** num2;
        }
        else{
            return "Invalid operator";
        }
    }
    else{
        if(operator == '+'){
            return num1 + num2;
        }
        else if(operator == '-'){
            return num1 - num2;
        }
        else if(operator == '*'){
            return num1 * num2;
        }
        else if(operator == '/'){
            return num1 / num2;
        }
        else{
            return "Invalid operator";
        }
    }
}
let a=prompt("Enter first number: ");
let b=prompt("Enter second number: ");
let c=prompt("Enter operator (+, -, *, /): ");
console.log(faultyCalculator(a, b, c)); 