if (true) {
    console.log("Hola entro en la condicion");
} else {
    console.log("Hola no entro en la condicion");
}

if (false)
    console.log("doSomething1();");
else
    console.log("doSomething2();");

var edad = 18;
if (edad > 18) {
    console.log("Puedes Votar, será tu primera votacion!")
} else if (edad > 18) {
    console.log("Puedes Votar");
} else {
    console.log("Aun NO puedes votar");
}

// Operacion ternario
var numero = 1;
var resultado = numero === 1 ? "Si soy un Uno" : "No, no soy un Uno";