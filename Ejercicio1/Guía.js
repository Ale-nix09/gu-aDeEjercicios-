//Guía de ejercicios

// 1. BUCLES FOR

//1.1 Imprime los números del 1 al 10 usando for.

for (let i = 0; i < 11; i++){
    console.log(i);
} 

//1.2 Imprime los números pares entre 0 y 20 usando for y una condición if.

for (let i = 1; i < 21; i++){
    if (i % 2 === 0)
    console.log(i);
}
//1.3 (Desafío): Crea un triángulo con asteriscos usando bucles anidados:

let result = "";
for( let i = 1; i < 6; i++){
    result += "*";
    console.log(result)
}

