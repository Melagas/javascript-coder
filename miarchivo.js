// Desafío complementario 2 Objetos y arrays y primera entrega 

class Productos {
    constructor(id, producto, precio, esmalte, linea) {
        this.id = id,
            this.producto = producto,
            this.precio = precio,
            this.esmalte = esmalte,
            this.linea = linea
    }
    //Métodos
    mostrarProductos() {
        console.log(`${this.id} El producto es ${this.producto} el precio en pesos es ${this.precio}, esmalte ${this.esmalte} y la linea de diseño ${this.linea}`)
    }
}

//Instanciación
const producto1 = new Productos(1, "Mate con flores", 1000, "Duncan", "Flores")
const producto2 = new Productos(2, "Azucarera con mariposas", 2000, "Duncan", "Mariposa")
const producto3 = new Productos(3, "Bandeja corazón con pajaríto", 1500, "Nacional", "Animales")
const producto4 = new Productos(4, "Provoletera marrón", 1100, "Duncan", "Lisa")
const producto5 = new Productos(5, "Juego de azucarera y yerbera", 3000, "Duncan", "Flores")
const producto6 = new Productos(6, "Bandeja ovalada con pajaríto", 1500, "Duncan", "Animales")
const producto7 = new Productos(7, "Saumerio con flores", 900, "Nacional", "Flores")
const producto8 = new Productos(8, "Juego de tazas trigo", 4000, "Duncan", "Flores")
const producto9 = new Productos(9, "Ensaladera con picaflor", 2500, "Duncan", "Animales")

const stock = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9]
console.log(stock)

//FUNCIONES
//Funcion de agregar un producto nuevo
function nuevoProducto() {
    let productoIngresado = prompt(`Ingrese el nombre del producto`)
    let precioIngresado = prompt(`Ingrese el precio del producto`)
    let esmalteIngresado = prompt(`Ingrese el esmalte del producto`)
    let lineaIngresada = prompt(`Ingrese la línea del producto`)
    let productoCreado = new Productos(stock.length + 1, productoIngresado, precioIngresado, esmalteIngresado, lineaIngresada)
    console.log(productoCreado)
    stock.push(productoCreado)
}

//Eliminar producto
function eliminarProducto() {
    let idEliminar = prompt("Ingrese la id del producto a eliminar")
    for (let productoBuscado of stock) {
        if (productoBuscado.id == idEliminar) {
            console.log("Este es el producto " + productoBuscado.producto)
            stock.splice(idEliminar - 1, 1)
            // console.log(stock)
        }
    }
}

//Opciones para el usuario en prompt
function preguntarOpcion() {
    let opcion = parseInt(prompt(`Ingrese el número de la opción que desea realizar:
                        1 - Ver detalles de los productos.
                        2 - Agregar un producto a nuestro stock. 
                        3 - Eliminar un producto.
                        4 - Sumar en el carrito de compras
                        5 - Buscar un producto
                        0 - Para salir
                        `))
    menu(opcion)
}

//Buscador de productos por esmalte utilizado
function buscadorDeEsmaltes() {
    let buscador = prompt("Ingrese Duncan o Nacional para ver los productos con los esmaltes deseados.")
    let buscarEsmalte = stock.filter((el) => el.esmalte == buscador)
    console.log("Estos son los productos que coinciden")
    console.log(buscarEsmalte)
}

//Menu de opciones con switch
function menu(opcionSeleccionada) {
    switch (opcionSeleccionada) {
        case 0:
            salir = true
            alert(`Gracias por su visita! AVR Cerámica.`)
            break
        case 1:
            stock.forEach((producto) => producto.mostrarProductos())
            break
        case 2:
            nuevoProducto()
            break
        case 3:
            eliminarProducto()
            break
        case 4:
            let compra = [producto1, producto2, producto4]
            let totalCompra = compra.reduce((acum, elemento) => acum = acum + elemento.precio, 0)
            console.log(totalCompra)
            break
        case 5:
            buscadorDeEsmaltes()
            break
        default:
            alert(`Ingrese una opción correcta`)
    }
}

//Código
let salir
while (salir != true) {
    preguntarOpcion()
}