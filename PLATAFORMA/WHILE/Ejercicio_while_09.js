let count = 0;
let input;
while (input !== 0) {
    input = parseInt(prompt("Introduce un número (0 para terminar):"));
    if (input > 100 && input !== 0) {
        count++;
    }
}
console.log("Has introducido " + count + " números meayores a 100.");   