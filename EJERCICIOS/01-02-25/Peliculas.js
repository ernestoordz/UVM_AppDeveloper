// Listar las peliculas y su categoria
// Salida esperada:
/*
    🎭 Drama: El Padrino
    🔥 Acción: Avengers: Endgame
    🎨 Animación: Buscando a Nemo
    🎭 Drama: Pulp Fiction
    🔥 Acción: Gladiador
    🎨 Animación: Toy Story
*/
// Ejercicio 2: Filtrar la pelicula por busqueda
// Tip: let busqueda = "Toy Story";
// Ejercicio 3: Cuantas peliculas hay por genero./
 // 1. Crear y mostrar el arreglo de películas
 
const peliculas = [
    { emoji: "🎭", genero: "Drama", pelicula: "El Padrino" },
    { emoji: "🔥", genero: "Acción", pelicula: "Avengers: Endgame" },
    { emoji: "🎨", genero: "Animación", pelicula: "Buscando a Nemo" },
    { emoji: "🎭", genero: "Drama", pelicula: "Pulp Fiction" },
    { emoji: "🔥", genero: "Acción", pelicula: "Gladiador" },
    { emoji: "🎨", genero: "Animación", pelicula: "Toy Story" },
];

console.log("Lista de películas:");
console.table(peliculas);

// 2. Filtrar las películas por búsqueda
let busqueda = "Toy Story";
const peliculasFiltradas = peliculas.filter(p => p.pelicula.toLowerCase().includes(busqueda.toLowerCase()));

console.log(`\nPelículas encontradas con la búsqueda "${busqueda}":`);
console.table(peliculasFiltradas);

// 3. Contar cuántas películas hay en cada género
const conteoGeneros = peliculas.reduce((contador, p) => {
    contador[p.genero] = (contador[p.genero] || 0) + 1;
    return contador;
}, {});

console.log("\nConteo de películas por género:");
console.table(conteoGeneros);