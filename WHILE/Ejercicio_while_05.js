let count = 0;
let diceRoll;
while (diceRoll !== 5) {
    diceRoll = Math.floor(Math.random() * 6) + 1;
    count++;
}
console.log("Se ha sacado un 5 después de " + count + " tiradas.");
