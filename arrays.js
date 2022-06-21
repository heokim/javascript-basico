var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas);        // imprimir el vector
console.log(frutas.length); // longitud del vector
console.log(frutas[0]);     // traer el elemento en la posicion N = 0

var masFrutas = frutas.push("Uvas"); // agrega elementos al final

console.log(frutas);

var ultima = frutas.pop(); // quitar el ultimo elemento
console.log(ultima);
console.log(frutas);

// Agregar un elemento al inicio
frutas.unshift("Arandanos");

// eliminar el elemento que esta al inicio
var primero = frutas.shift();

// obtener posicion de un elemento en particular
var posicion = frutas.indexOf("Cereza");