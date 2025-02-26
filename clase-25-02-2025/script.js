class Producto {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre
        this.precio = precio
        this.categoria =  categoria
    }

    mostrarInfo(){
       // Las comillas invertidas (``) me ayudan a implentar la sintaxis de template string
       // Este tipo de cadenas de texto me permite envever cadenas de caracteres con variables
       // Para agregar una variable a la cadena de texto usamos la sintaxis ${nombre_variable}
        return `Producto: ${this.nombre} | Categoría: ${this.categoria} | Precio: $${this.precio}`
    }
}

class ProductoConDescuento extends Producto{
    constructor(nombre, precio, categoria, descuento){
        super(nombre, precio, categoria)
        this.descuento = descuento
    }

    calcularPrecioFinal(){
        return this.precio - (this.precio * this.descuento / 100)
    }

    //Podemos sobreescribir el método mostrarInfo de la clase padre para ajustar la acción del método
    //a lo que la clase hija necesita
    mostrarInfo(){
        return `Producto: ${this.nombre} | Categoría: ${this.categoria} | Precio original: $${this.precio} | Precio con descuento (${this.descuento}%): $${this.calcularPrecioFinal()}`
    }
}



let refri = new Producto("Refrigerador", 12000, "Electrónica")

console.log(refri.mostrarInfo());

let termo = new ProductoConDescuento("Termo 13oz", 700, "Cocina", 20)

console.log(termo.mostrarInfo());


//------------------------------ Capturamos el formulario del DOM ------------------------------

const formulario = document.getElementById("producto-form")
const listaProductos = document.getElementById("lista-productos")



//.addEventListener es un método que me ayuda a "escuchar" cuando se dispara un evento en particular
//(onClick, onSubmit, etc.). 
//Este método recibe como parámentros dos valores:
//Primer atributo: Nombre del evento que tiene que escuchar (click, sumbit, etc.)
//Segundo atributo: Función que se va a ejecutar cuando se escuche el evento.

formulario.addEventListener("submit", function(event){
    event.preventDefault()//Prevenir el envío del formulario, que se refresque la pantalla
    console.log(event);
    
    //Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value
    const precio = parseFloat(document.getElementById("precio").value)
    const categoria = document.getElementById("categoria").value
    const descuento = parseFloat(document.getElementById("descuento").value)

    //Crear un elemento de lista y agregarlo al DOM
    const item = document.createElement("li")

    let nuevoProducto;
    if(descuento > 0){
        nuevoProducto = new ProductoConDescuento(nombre, precio, categoria, descuento)
        //Le asigno una clase al elemento lista que acabo de crear con el valor de "descuento"
        item.classList.add("descuento")
    }else{
        nuevoProducto = new Producto(nombre, precio, categoria)
    }


    //Despliego la información del producto en el html
    //Agrego el elemento de lista que cree en el contenedor ul que es la lista de los productos
    item.textContent = nuevoProducto.mostrarInfo()
    listaProductos.appendChild(item)

    formulario.reset()
})