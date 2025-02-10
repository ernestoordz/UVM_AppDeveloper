let diasLaborales = 0;
let diasNoLaborales = 0;
for (let dia = 1; dia <= 30; dia++) {
    let tipoDia;
    switch (dia % 7) {
        case 6: // Sábado
        case 0: // Domingo
            tipoDia = 'No laboral';
            diasNoLaborales++;
            break;
        default:
            tipoDia = 'Laboral';
            diasLaborales++;
    }
    console.log(`Día ${dia}: ${tipoDia}`);
}
console.log(`Total de días laborales: ${diasLaborales}`);
console.log(`Total de días no laborales: ${diasNoLaborales}`);
