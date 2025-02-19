/*
    POO Glosario:
    - CLASE: Es una plantilla para crear objetos. Define atributos y métodos. Se define
    con la palabra reservada class seguido del nombre empezando con mayúscula y en singular.
    - OBJETO: Es la instancia de una clase, con sus propios valores para los
    atributos definidos en la clase.
    - ATRIBUTO: Son las características o propiedades de una clase.
    - METODOS: Son las funciones dentro de una clase que definen el comportamiento de
    los objetos.
    - CONSTRUCTOR: Es un método especial de una clase que se ejecuta automáticamente al crear
    un objeto. Sirve para inicializar los atributos de la clase.

*/
let edad  = "una edad"
let nacionalidad = "una nacionalidad"
//PASO 1. Definición de una clase con sus atributos y métodos
class Persona {

    //ATRIBUTOS dentro del CONSTRUCTORa
    constructor(nombre, edad, nacionalidad) {
        this.nombre = nombre
        this.edad = edad
        this.nacionalidad = nacionalidad
    }

    //METODOS de la CLASE
    saludar(){
        console.log("Hola, mi nombre es", this.nombre, "tengo", this.edad, "años, soy", this.nacionalidad);
        
    }

    //Nota: Los métodos puedes tener inclídos parámetros para utilizarlos dentro de su  implementación
    despedir(nombreAmigo){
        console.log("Hasta luego,", nombreAmigo);
        
    }
}

//PASO 2. Creación del/los objetos a partir de la clase
let persona1 = new Persona("Pedro", 23, "Mexicano")

console.log(persona1)
//PASO 3. Llamar a los métodos de mi objeto
persona1.saludar()
persona1.despedir("Fernando")

//Ejercico: Crear un objeto a partir de la clase persona con los datos de nombre = Lucia
//edad = 30 y nacionalidad = Canadiense
//new es una palabra reservada que me ayuda a ejecutar el método CONSTRUCTOR que me ayuda a
//darle valores a los atributos de mi nuevo objeto
let persona2 = new Persona("Lucía", 30, "Canadiense")

//Ejercicio 2: Lucía se despide de Mario
persona2.despedir("Mario")