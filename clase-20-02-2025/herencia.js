//HERENCIA


//Paso 1. Creación de la clase principal (clase padre, superclase)
class Persona {
    constructor(nombre, edad) {
        //En el constructor inicializamos atributos de la clase
        this.nombre = nombre
        this.edad = edad
    }

    //Metodos de la clase
    saludar(nombrePersona){
        console.log("Hola,", nombrePersona);
        
    }
}

let persona1 = new Persona("Pepe", 30, ["Educacion Fisica", "Cálculo"])
console.log(persona1);
//console.log(persona1.obtenerMaterias()); Me devuelve error porque la superclase NO hereda los métodos y atributos de su clase hijo




//Paso 2. Crear una subclase (Estudiante)
class Estudiante extends Persona{
    constructor(nombre, edad, materias){
        //Para poder heredar los atributos de la clase padre, tengo que llamar primero al
        //super constructor
        super(nombre, edad)
        //el método super() es equivalente a si yo copiara y pegar los atributos y métodos de la super clase en mi clase hijo
        //this.nombre = nombre
        //this.edad = edad
        this.materias = materias
    }

    // saludar()

    obtenerMaterias(){
        return this.materias
    }

}

let estudiante1 = new Estudiante("Maria", 23, ["Español", "Matemáticas"])
console.log(estudiante1);
console.log(estudiante1.obtenerMaterias());


let estudiante2 = new Estudiante("Luis", 28, ["Inglés", "Letras"])
console.log(estudiante2);



class EstudianteMusica extends Estudiante{
    constructor(nombre, edad, materias, instrumento){
        //Llamo a al constructor de la clase padre de EstudianteMusica, que en este caso es Estudiante
        super(nombre, edad, materias)
        this.instrumento = instrumento
    }

    //Métodos
}

let estudianteMusica = new EstudianteMusica("Juan", 20, ["Musica", "Letras"], "Guitarra")
console.log("Estudiante música", estudianteMusica);
estudianteMusica.saludar("Felipe");


