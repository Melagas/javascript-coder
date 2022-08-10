//Formulario de consulta
class Datos {
    constructor(idd, nombres, apellidos, consulta, telefono, lineas) {
        this.idd = idd,
            this.nombres = nombres,
            this.apellidos = apellidos,
            this.consulta = consulta,
            this.telefono = telefono,
            this.lineas = lineas
    }
    //Métodos
    mostrarDatos() {
        console.log(`${this.idd} El nombre es ${this.nombres} el apellido es ${this.apellidos}, la consulta ${this.consulta} el teléfono es: ${this.telefono} la linea consultada es: ${this.lineas}`)
    }
}

//Instatación
const datos1 = new Datos(1, "Gaston", "Mela", "donde se pueden ver?", 12345678, "linea flores")

const dato = [datos1]
console.log(dato)

//Función de formulario de consulta
function datosPersona() {
    let nombresInput = document.getElementById("nombresImput")
    let apellidosImput = document.getElementById("apellidosImput")
    let consultaImput = document.getElementById("consultaImput")
    let telefonoImput = document.getElementById("telefonoImput")
    let lineasImput = document.getElementById("lineasImput")
    let datosNuevos = new Datos(dato.length + 1, nombresInput.value, apellidosImput.value,
        consultaImput.value, telefonoImput.value, lineasImput.value)
    console.log(datosNuevos)
    dato.push(datosNuevos)
}

//Botón de guardar datos de consulta
const guardarDatosBtn = document.getElementById("guardarDatosBtn")
guardarDatosBtn.addEventListener("click", datosPersona)

//Stock de productos
class Productos {
    constructor(id, nombre, precio, esmalte, linea, imagen) {
        this.id = id,
            this.nombre = nombre,
            this.precio = precio,
            this.esmalte = esmalte,
            this.linea = linea,
            this.imagen = imagen
    }
    //Métodos
    mostrarProductos() {
        console.log(`${this.id} El producto es ${this.nombre} el precio en pesos es ${this.precio}, esmalte ${this.esmalte} y la linea de diseño ${this.linea} la imagen es ${this.imagen}`)
    }
}

//Instanciación
const producto1 = new Productos(1, "Mate con flores", 1000, "Duncan", "Flores", "img/mate-flores.jpg")
const producto2 = new Productos(2, "Azucarera con mariposas", 2000, "Duncan", "Mariposa", "img/azucarera-mariposas.jpg")
const producto3 = new Productos(3, "Taza naranja", 1500, "Nacional", "Lisa", "img/taza-naranja.jpg")
const producto4 = new Productos(4, "Provoletera marrón", 1100, "Duncan", "Lisa", "img/provoletera.jpg")
const producto5 = new Productos(5, "Juego de azucarera y yerbera", 3000, "Duncan", "Flores", "img/azucareras-flores.jpg")
const producto6 = new Productos(6, "Bandeja ovalada con pajaríto", 1500, "Duncan", "Animales", "img/bandeja-pajarito.jpg")
const producto7 = new Productos(7, "Saumerio con flores", 900, "Nacional", "Flores", "img/saumerio.jpg")
const producto8 = new Productos(8, "Juego de tazas trigo", 4000, "Duncan", "Flores", "img/tazas-fores.jpg")
const producto9 = new Productos(9, "Ensaladera con picaflor", 2500, "Duncan", "Animales", "img/foto-pagina-principal.jpg")

const stock = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9]
console.log(stock)

//Plantilla de Productos   
function mostrarCatalogo() {
    let divProductos = document.getElementById("productos")
    divProductos.setAttribute("class", "productosEstilos")
    divProductos.innerHTML = '';
    stock.forEach((producto) => {
        let nuevoProducto = document.createElement("div")
        nuevoProducto.innerHTML = `<article id="${producto.id}" class="cards">
        <h3 class="tituloCard">${producto.nombre}</h3>
        <img src="${producto.imagen}" alt="" class="imgCard">
        <div class="content">
            <p class="precioCard"><b>Precio:</b>  ${producto.precio}</p>
            <p class="lineaCard"><b>Linea:</b> ${producto.linea}</p>
            <p class="esmalteCard"><b>Esmalte:</b> ${producto.esmalte}</p>
            <button href="" class="botonCarrito">Agregar al carrito</button>
        </div>
    </article>`
        divProductos.appendChild(nuevoProducto)
        //stock.push (nuevoProducto)
    })

    //Botón de agregar productos
    let btnAgregar = document.getElementsByClassName("botonCarrito")
    for (let productoBoton of btnAgregar) {
        productoBoton.addEventListener("click", () => {
            console.log("Se agrego producto al carrito")
        })
    }
}

//Botón de mostrar catálogo
const verProductos = document.getElementById("botonVerCatalogo")
verProductos.addEventListener("click", mostrarCatalogo)

//Funcion de agregar un producto nuevo (proxima a modificar)
// function nuevoProducto() {
//     let productoIngresado = prompt(`Ingrese el nombre del producto`)
//     let precioIngresado = prompt(`Ingrese el precio del producto`)
//     let esmalteIngresado = prompt(`Ingrese el esmalte del producto`)
//     let lineaIngresada = prompt(`Ingrese la línea del producto`)
//     let productoCreado = new Productos(stock.length + 1, productoIngresado, precioIngresado, esmalteIngresado, lineaIngresada)
//     console.log(productoCreado)
//     stock.push(productoCreado)
// }