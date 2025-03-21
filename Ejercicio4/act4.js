// 4. Formato JSON

// Ejercicio 4.1: Crea un objeto JavaScript que represente un libro (con título, autor y año) y conviértelo a JSON.

const object = {"Titulo" : "Rapunzel", "Autor" : "Johanita", "Año" : 2009}
    console.log(object);

const objectToJSON = JSON.stringify(object);
    console.log(objectToJSON)

// Ejercicio 4.2: Dado el JSON '{"nombre": "Ana", "edad": 30, "ciudad": "Madrid"}', conviértelo a objeto y muestra la edad.

const object2 = '{"nombre": "Ana", "edad": 30, "ciudad": "Madrid"}'
    console.log(object2);

const JSONToObject = JSON.parse (object2);
    console.log(JSONToObject)

console.log("Edad", JSONToObject.edad)

// Ejercicio 4.3: Parsea el JSON '[{"id": 1, "producto": "Lápiz"}, {"id": 2, "producto": "Borrador"}]' y lista los productos.