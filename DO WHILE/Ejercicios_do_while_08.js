let total = 0;
let numInput;
do {
    numInput = parseInt(prompt("Introduce un número:"));
    total += numInput;
} while (total <= 50);
console.log("La suma total es: " + total);