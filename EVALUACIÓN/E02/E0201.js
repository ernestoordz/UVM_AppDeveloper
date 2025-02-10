function esPrimo(numero) {
    if (numero < 2) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

for (let num = 1; num <= 20; num++) {
    if (esPrimo(num)) {
        console.log(`${num} es primo`);
    } else {
        console.log(`${num} no es primo`);
    }
}
