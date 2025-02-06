const secretNumber = 7;
let guess;
let intentos=0;
while (guess !== secretNumber) {
    guess = parseInt(prompt("Adivina el número entre 1 y 10:"));
    intentos++;
}
console.log("¡Adivinaste el número! Necesitaste"  + intentos + " intentos.");