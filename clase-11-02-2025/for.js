//Ejemplo 1: Contador simple con for

for (let contador = 1; contador <= 5; contador++) {
    console.log("(FOR) El contador está en el ciclo:", contador);
}

//Ejemplo 2: Contador en reversa con for
for (let cuentaRegresiva = 10; cuentaRegresiva > 0; cuentaRegresiva--) {
    console.log("(FOR) Cuenta regresiva", cuentaRegresiva);
}

//Ejemplo 3: Saltarnos los números pares
for(let impar = 1; impar <= 10; impar += 2){
    console.log("Número impar: ", impar);
    
}

console.log("---------------Respuesta de Diego------------");

 for (let i = 1; i <= 10; i++) {
    console.log("código antes del continue y dentro del ciclo", i);
    
     if (i % 2 === 0) {
         continue;  //continue nos ayuda a saltarnos una iteración
         console.log("código dentro del if"); 
     }
    console.log(i);
    
 }

 console.log("Más código fuera de los ciclos");
 