// Lista de películas
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

let busqueda = "Toy Story"; // La película a buscar está definida desde el inicio
let peliculasFiltradas; 

do {
    // Filtrar las películas que coincidan con la búsqueda
    peliculasFiltradas = peliculas.filter(p => p.pelicula.toLowerCase().includes(busqueda.toLowerCase()));

    if (peliculasFiltradas.length === 0) {
        console.log(`No se encontraron películas con el nombre "${busqueda}".`);
    }

} while (peliculasFiltradas.length === 0); // Solo se ejecutará una vez si la película existe

console.log(`\nPelículas encontradas con la búsqueda "${busqueda}":`);
console.table(peliculasFiltradas);
