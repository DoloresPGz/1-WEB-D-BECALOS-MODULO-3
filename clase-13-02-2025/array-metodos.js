let frutas = ["Manzana"]//Creamos el arreglo
let otrasFrutas = ["Uva", "Aguacate"]

//Métodos comunes en arreglos

//.push(<nuevoElemento>) -> Agrega un elemento al FINAL del arreglo
frutas.push("Pera")
frutas.push("Guayaba")
frutas.push(otrasFrutas) //-> length = 4 porque agrega todo el arreglo completo en la última posición
console.log("Después de push", frutas);

//.pop() -> Elimina el ÚLTIMO elemento del arreglo
console.log(frutas.pop()); //Obtengo el último elemento y lo saco de la estructura
console.log("Después de pop", frutas);

//.unshift(<nuevoElemento>) -> Agregamos un elemento al INICIO del arreglo
frutas.unshift("Melón")
console.log("Después de unshift", frutas);

//.shift() -> Elimina el PRIMER elemento
console.log(frutas.shift());
console.log("Depues de shift", frutas);


// .map() -> CREA un nuevo arreglo tranformando cada elemento de mi arreglo
/*
    .map() recorre cada elemento del arreglo original y devuelve un nuevo arreglo con los
    elemetos tranformados. El arreglo original NO se modifica
*/

//Ejemplo 1: Multiplicamos cada elemento (item) del arreglo por dos
let numeros = [1,2,3]

let numerosPorDos = numeros.map( (numero) => numero * 2)

console.log("Números multiplicados por dos", numerosPorDos);

//Ejemplo 2: Convertir cada fruta en mayúsculas
let frutasEnMayusculas = frutas.map((fruta) => fruta.toUpperCase()) //toUpperCase() convierte caracteres en mayúsculas
console.log("Fruas en mayúscula", frutasEnMayusculas);


//Ejercicio 1: Convertir cada fruta en minúscula
"CADENA".toLowerCase() //convierte caracteres en minúsculas

//let frutasEnMiniscula = frutasEnMayusculas.map((fruta) => frutasEnMayusculas.toLowerCase()) //Me devuelve error porque trato de convertir en minúsculas un arreglo
//console.log("Ejercicio 1.1",frutasEnMiniscula);


let frutasEnMinusculas = frutas.map((fruta) => fruta.toLowerCase())
console.log("Ejercicio 1.2", frutasEnMinusculas);


//.sort() -> Ordena los elementos del arreglo en orden alfabético
/*
    .sort() cambiaa el orden de los elementos del arreglo original de manera alfabética
    o numérica si se proporciona una FUNCIÓN de comparación. Este método MODIFICA el arreglo ORIGINAL.
*/

let verduras = ["Espinaca",  "Zanahoria", "Calabaza"]

console.log("Verduras ordenadas A-Z",verduras.sort()); //Ordena el arreglo de manera alfabética si no colocamos ningún argumento
console.log("Verduras ordenadas Z-A",verduras.reverse());//Revertimos los elementos del arreglo


//.sort() con números -> IMPORTANTE que si usamos sort directamente con números, los ordenará como texto
let numerosOrdenadosIncorrecamente = [11,2,9,98,21,6,55]
console.log("Números ordenados incorrectamente", numerosOrdenadosIncorrecamente.sort());


//Para ordenar correctamente números, debemos proporcionar una FUNCION de comparación
let numerosOrdenadosCorrectamente = [11,2,9,98,21,6,55]
console.log("Números ordenados correctamente", numerosOrdenadosCorrectamente.sort((num1, num2)=>num1-num2));

/*
La función de comparación toma dos números (num1 y num2)
-Si num1 es MENOR que num2, la resta da un número NEGATIVO, entonces num1 va antes que num2
-Si num1 es MAYOR que num2, la resta da un número POSITIVO, entoces num1 va después que num2
-Si num1 y num2 son iguales, la resta da 0 y su orden no cambia
Nota-Estas opcionenes se van a repetir en cada iteración hasta que los números estén ordenados
*/

let numerosOrdenadosMayorMenor = [11,2,9,98,21,6,55]

console.log("Números ordenados mayor a menor", numerosOrdenadosCorrectamente.sort((num1, num2)=>num2-num1))
