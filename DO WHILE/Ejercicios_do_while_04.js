const secretNumber = 7;
let guess;

do {
  guess = parseInt(prompt("Adivina el número entre 1 y 10:"));

  if (guess < secretNumber) {
    console.log("El número es mayor.");
  } else if (guess > secretNumber) {
    console.log("El número es menor.");
  }

} while (guess !== secretNumber);

console.log("¡Adivinaste el número!");
