let password = "";
let intentos = 0;
while (password !== "1234" && intentos < 3) {
    password = prompt("Introduce la contraseña:");
    intentos++;
    if (password === "1234") {
        console.log("Contraseña correcta.");
      } else {
        console.log("Acceso bloqueado. Demasiados intentos.");
      }
}



