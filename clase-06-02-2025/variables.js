/*
    Diferencias etnre var-let y const en Javascript
    -var: Se puede reasignar y redeclarar en cualquier parte del código.
    -let: Se puede reasignar, pero NO se puede redeclarar en el mismo ámbito.
    -const: No se puede reasignar ni redeclarar; es un valor constante.
*/

//VAR
var nombre = "Jonathan"  //Declaramos una variable con var
nombre = "Gilean" //Resignamos el valor de nombre
var nombre = "Luis" //Redeclaro la variable sin problema
console.log(nombre);

//LET
let apellido = "Villanueva" //Declarando una variable con let
apellido = "Corona" //Resignamos el valor de apellido
//let apellido = "Parra"  //Esto daría error porque non se puede redeclarar en el mismo ámbito

//CONST
const gravedad = "9.81 M/s2" // Declramos una constante con const
//gravedad = "10.1 M/s2" // Esto daría error porque no se pueden reasignar constantes
//const gravedad = "1.0 M/s2"//Esto daría error porque no se puede redeclarar una constatne en el mismo ámbito.