// Funciones Desclarativas

function miFuncion(x) {
    return x * 2;
}

miFuncion();

// Funciones Expresivas o Funciones anonimas

var miFuncion = function (a, b) {
    return a + b;
}

miFuncion();


function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`);
}

function sumar(a, b) {
    var resultado = a + b;
    return resultado;
}