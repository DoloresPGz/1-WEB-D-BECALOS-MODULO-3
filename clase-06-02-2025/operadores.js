/*
    Operadores de Javascript

    Tipos:
    - Matemáticos: Para realizar cálculos.
*/

//Operadores matemáticos

let suma = 5 + 3
let resta = 6 - 2
let multiplicacion = 4 * 7
let division = 6 / 2
let modulo = 10 % 3 
let exponente = 2 ** 3

console.log(suma, resta, multiplicacion, division, modulo, exponente);

/*
    Jerarquía de operadores matemáticos
    1. Paréntesis ()
    2. Exponentes **
    3. Multiplicación * y División /
    4. Suma + y Resta -
*/

//Ejemplos de jerarquía
let operacion1 = 10 + 5 * 2 // 10 + (5 * 2) = 20 
let operacion2 = (10 + 5) * 2 // 15 * 2 = 30

console.log(operacion1, operacion2);

//Operadores de comparación
let mayor = 10 > 5 //Mayor que
let menor = 3 < 8 //Menor que
let igual = 5 == "5"// Comparación de VALOR (true)
let estrictamenteIgual = 5 === "5" //Comparación escrticta de VALOR y TIPO DE DATO (false)
let diferente = 5 != "5" //Diferente (false)
let estrictamenteDiferente = 5 !== "5" //Estrictamente diferente (true)

console.log(mayor, menor, igual, estrictamenteIgual, diferente, estrictamenteDiferente);


