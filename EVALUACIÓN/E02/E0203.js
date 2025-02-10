let sumaPares = 0;
let productoImpares = 1;
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
    } else {
        productoImpares *= i;
    }
}
console.log(`Suma de pares: ${sumaPares}`);
console.log(`Producto de impares: ${productoImpares}`);