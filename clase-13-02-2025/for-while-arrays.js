//Combinando while y for con arreglos

//Ejemplo 1: Recorrer un arreglo con while
let frutas = ["Manzana", "Uva", "Fresa", "Cereza", "Pera"]
let index = 0
while(index < frutas.length){
    console.log("Fruta " , index, ":" , frutas[index])
    index++
}

//Ejemplo 2: Recorrer un arreglo con for
for (let index = 0; index <= frutas.length - 1; index++) {
    console.log("(FOR)Fruta " , index, ":" , frutas[index]);
}