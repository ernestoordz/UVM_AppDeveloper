let factorial = 1;
let numberFactorial = parseInt(prompt("Ingrese un número:")); // Cambiar a cualquier número
do {
    factorial *= numberFactorial;
    numberFactorial--;
} while (numberFactorial > 0);
console.log("El factorial es: " + factorial);