// 5. Try Catch Finally

// Ejercicio 5.1: Escribe una función que divida dos números. Usa `try...catch` para manejar división por cero.

function DivideNum (a,b){
    try {
        if (b === 0) {
            throw new Error ("No se puede dividir por cero");
        }

        return a/b
    } catch (error){
        console.log("Error;", error.mensage)
    }

}

// Ejercicio 5.2: Crea un bloque donde intentes acceder a una variable no definida y captura el error.

try {
    console.log(valorNoDefinido);
} catch (error) {
    console.log("Error:", error.message);
}


// Ejercicio 5.3 (Desafío): Usa try...catch...finally para asegurar que un mensaje se imprima siempre, haya error o no.

try {
    let resultado = 10 / 2;
    console.log("Resultado:", resultado);
    
    
    let x = y + 5; 
    
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Este mensaje se imprime siempre, haya error o no.");
}
