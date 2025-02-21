/*
Ejemplo práctico de Programación Orientada a Objetos en JavaScript con manipulación del DOM

Este ejemplo amplía el sistema de gestión de productos para incluir una interfaz gráfica simple.
Los alumnos aprenderán a:
- Crear y manejar clases en JavaScript.
- Usar el DOM para agregar elementos dinámicamente.
- Capturar eventos de formularios y actualizar la interfaz.
*/

// Clase Producto
class Producto {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    // Método para mostrar información del producto
    mostrarInfo() {
        return `Producto: ${this.nombre} | Categoría: ${this.categoria} | Precio: $${this.precio}`;
    }
}

// Clase ProductoConDescuento que hereda de Producto
class ProductoConDescuento extends Producto {
    constructor(nombre, precio, categoria, descuento) {
        super(nombre, precio, categoria);
        this.descuento = descuento; // Descuento en porcentaje
    }

    // Método para calcular el precio con descuento
    calcularPrecioFinal() {
        return this.precio - (this.precio * this.descuento / 100);
    }

    // Sobreescribir el método mostrarInfo para incluir el descuento
    mostrarInfo() {
        return `Producto: ${this.nombre} | Categoría: ${this.categoria} | Precio Original: $${this.precio} | Precio con Descuento: $${this.calcularPrecioFinal()}`;
    }
}

// Capturar el formulario del DOM
const formulario = document.getElementById("producto-form");
const listaProductos = document.getElementById("lista-productos");

// Evento para manejar la adición de productos
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    
    // Obtener valores del formulario
    const nombre = document.getElementById("nombre").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const categoria = document.getElementById("categoria").value;
    const descuento = parseFloat(document.getElementById("descuento").value);

    // Crear un elemento de lista y agregarlo al DOM
    const item = document.createElement("li");

    let nuevoProducto;
    if (descuento > 0) {
        nuevoProducto = new ProductoConDescuento(nombre, precio, categoria, descuento);
        item.classList.add("descuento");
    } else {
        nuevoProducto = new Producto(nombre, precio, categoria);
    }

    
    
    item.textContent = nuevoProducto.mostrarInfo();
    listaProductos.appendChild(item);

    // Limpiar formulario
    formulario.reset();
});
