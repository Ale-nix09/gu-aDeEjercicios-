// 2. RECORRER ARREGLOS

// 2.1: Dado el array [3, 7, 2, 9, 5], calcula su suma usando for o for...of.

const suma = [3, 7, 2, 9, 5];
let resultado = 0; 

for(const sumas of suma){
    resultado += sumas;
}
    console.log("La suma total es:", resultado);

//2.2: Encuentra el número mayor en el array [12, 45, 6, 89, 23].

const numMayor = [12, 45, 6, 89, 23]
const mayor = Math.max(...numMayor);
    console.log("El número mayor es:", mayor);



//2.3: Filtra los números menores a 10 del array [15, 3, 8, 12, 1] y crea un nuevo array.

const numeros = [15, 3, 8, 12, 1]
const num = numeros.filter(n => n < 10);
    console.log("Los números menores que 10 son:", num);


