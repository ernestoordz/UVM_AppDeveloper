let edades = [3, 10, 15, 20, 35, 65, 80];
for (let edad of edades) {
    if (edad < 12) {
        console.log(`${edad} años: Niño`);
    } else if (edad >= 12 && edad < 18) {
        console.log(`${edad} años: Adolescente`);
    } else if (edad >= 18 && edad < 60) {
        console.log(`${edad} años: Adulto`);
    } else {
        console.log(`${edad} años: Anciano`);
    }
}
