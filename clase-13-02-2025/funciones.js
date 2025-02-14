//FUNCIONES CON JAVASCRIPT

/*
    Una función es un bloque de código REUTILIZABLE que realiza una tarea en específico
    Nos permite escribir código más organizado y evitar repetir instrucciones
*/

//Sintaxis básica de una función
//Paso 1. La definición de la función
function saludar() {
    console.log("Hola mundo!");   
}

//Paso 2. LLamar a la función, o la estamos ejecutando
saludar()
saludar()
saludar()//Puedo llamarla cuantas veces quiera


//Creo una función parámetros y argumentos
//Los parámetros son variables que una función recibe al ser llamada
function saludarPersona(nombre) {
    console.log("Hola ", nombre, "!");
}

//Aquí "nombre" es un parámetro y "Pedro" es el argumento
saludarPersona("Pedro")
saludarPersona("Guadalupe")
saludarPersona("Lucía")

//Si no especificamos un return, la función nos devuelve undefined
console.log("Ejecuto saludar()", saludar());
console.log("Ejecuto saludarPersona()",saludarPersona("Laura"));


//Una función puede devolver un valor con "return"
function suma(num1, num2) {
     return num1 + num2
}

console.log(suma(1,2));
console.log(suma(4,10));
console.log(suma(7,3));
console.log(suma("Hola"," a todos"));



function resta(num1, num2) {
    let resta = num1 - num2
    return resta
}

console.log(resta(10,5));
let resultado = resta(4,9)//Guardamos el resultado en una variable
console.log(resultado);

//Podemos anidar funciones para controlar el alcance de una función (nested functions)
function saludoMayuscula(nombre) {
    function mayuscula(string) {
        return string.toUpperCase()
    }
    return mayuscula(nombre)
}

console.log(saludoMayuscula("Pepe"));
//console.log(mayuscula("Hola")); //Devuelve error porque mayusculas sólo vive dentro de saludoMayuscula



