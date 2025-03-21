// Ejercicio 7.1: Usa `fetch()` para obtener datos de la API `https://jsonplaceholder.typicode.com/users` y muestra los nombres.

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then (response =>{
        if (!response.ok){
            throw Error ("No es");
        }
        return response.json();
    }) 
    .then (data => {
        const nombres = data.map(user => user.name);
        console.log("Nombres:", nombres);
    })

// Ejercicio 7.3 (Desafío): Combina async/await con fetch para obtener y mostrar datos de una API pública.

async function datos (){
    try {
        let respuesta = fetch('https://jsonplaceholder.typicode.com/users');
        let data = await respuesta.json();
        console.log(datos);

    } catch (error){
        console.log("Error", error.mensage);
    }

}  

datos();