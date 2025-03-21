// 6. Async Await

// Ejercicio 6.1: Crea una función `esperarSegundos(segundos)` que use `setTimeout` con `async/await`.

function esperarSegundos (segundos){
    return new Promise(resolve => {
        setTimeout(resolve, segundos * 5000);
    });
}

async function ejecutar() {
    console.log("Esperando...");
    await esperarSegundos(3);
    console.log("Listo");
}

ejecutar();