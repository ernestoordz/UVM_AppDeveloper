let num = parseInt(prompt("Ingrese un número:"));
let sum = 0;
while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10); 
}
console.log("La suma de los dígitos es: " + sum);

 /*si se agrega el numero 12345: 
    sum = 0 + 5 = 5
    num = 1234
    sum = 5 + 4 = 9
    num = 123
    y la funcion "num = Math.floor(num / 10)" nos ayuda a quitar el ultimo numero y que siga realizando la suma*/