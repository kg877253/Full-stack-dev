let a = 6;

function factorial(number) {
    if (number < 0) {
        return "Factorial is not defined for negative numbers";
    }

    let result = 1;

    for (let i = 2; i <= number; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(a));
