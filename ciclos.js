var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

// Ciclos "FOR"

for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}

for (var e of estudiantes) {
    saludarEstudiantes(e);
}

// Ciclos "WHILE"

while (estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}