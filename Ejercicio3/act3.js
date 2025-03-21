// 3. Arrow Functions

/* Ejercicio 3.1: Convierte esta función a arrow function: 
 function sumar(a, b) {
  return a + b;
} */

const sumar = (a,b) =>  a + b;
    console.log(sumar(1,8));

// Ejercicio 3.2: Crea una arrow function que reciba un número y devuelva su cuadrado.

const cuadrado = (a) => a**2
    console.log(cuadrado(2))

// Ejercicio 3.3 (Desafío): Usa una arrow function con map() para duplicar los valores del array [2, 4, 6]

const a = [2, 4, 6]
const duplicar = (array) => array.map(num => num*2)
    console.log(duplicar(a));
