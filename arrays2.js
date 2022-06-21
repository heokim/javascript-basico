var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Television", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 }
]

// Filtrar, articulos igual o menores a 500 pesos
var articulosFiltrados = articulos.filter(function (articulo) {
    return articulo.costo <= 500;
});

// Mepeado, retorna solo los campos que presisas, en este caso seria una lista de nombres
var nombreArticulos = articulos.map(function (articulo) {
    return articulo.nombre;
});

// Find
var encuentraArticulo = articulos.find(function (articulo) {
    return articulo.nombre === "Laptop";
});

// For Each, metodo para iterar
articulos.forEach(function (articulo) {
    console.log(articulo.nombre);
});

// Some, pregunta si existe articulos que cumplan cierta condicion
var articulosBaratos = articulos.some(function (articulo) {
    return articulo.costo <= 700;
});