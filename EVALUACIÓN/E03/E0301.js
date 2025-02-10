function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function fizzBuzzPrimo() {
    for (let i = 1; i <= 30; i++) {
        let output = "";
        
        if (i % 3 === 0) output += "Fizz";
        if (i % 5 === 0) output += "Buzz";
        if (esPrimo(i)) output = "Primo";
        
        console.log(output || i);
    }
}

fizzBuzzPrimo();
