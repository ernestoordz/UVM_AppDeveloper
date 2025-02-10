let calificaciones = [95, 82, 76, 60, 45, 88, 91];
for (let calificacion of calificaciones) {
    let letra;
    switch (true) {
        case (calificacion >= 90):
            letra = 'A';
            break;
        case (calificacion >= 80):
            letra = 'B';
            break;
        case (calificacion >= 70):
            letra = 'C';
            break;
        case (calificacion >= 60):
            letra = 'D';
            break;
        default:
            letra = 'F';
    }
    console.log(`Calificación: ${calificacion}, Letra: ${letra}`);
}
