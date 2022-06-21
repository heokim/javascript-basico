// Coercion Implicita, cuando el lenguaje cambia el tipo de variable
var a = 4 + "7" // "47"
typeof a; // string

var b = 4 * "7"; // 28
typeof b; // number

// Coercion Explicita, cuando nosotros hacemos que un tipo de variable cambie
var a = 20;         // a es del tipo "number"
var b = a + "";     // b es del tipo "string"

// hacemos coercion explicita
var c = String(a);  // c es del tipo "string"
var d = Number(c);  // d es del tipo "number"