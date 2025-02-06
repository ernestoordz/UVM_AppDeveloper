let input;

do {
  input = prompt("Escribe algo (escribe 'salir' para terminar):");
  // Convertimos tanto la entrada como "salir" a minúsculas para una comparación insensible a mayúsculas/minúsculas
  input = input.toLowerCase();

  console.log("Escribiste: " + input);
} while (input !== "salir");

console.log("Fin del programa.");