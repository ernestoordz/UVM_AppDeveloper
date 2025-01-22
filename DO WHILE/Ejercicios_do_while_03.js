let password;
let intentos = 0;
do {
    password = prompt("Introduce la contraseña:");
    intentos++;
} while (password !== "1234" && intentos < 3) 
    if (password === "1234") {
        console.log("Contraseña correcta.");
      } else {
        console.log("Acceso bloqueado. Demasiados intentos.");
      }

