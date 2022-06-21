miNombre = "Andres";

function nombre() {
    var miApellido = "Heo Kim";
    console.log(miNombre + " " + miApellido);
}

// Scope Global
miNombre; // Andres

// Scope local. dentro de la funcion nombre();
miApellido; // Error, no se a encontrado la variable