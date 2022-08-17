//Dark - Light mode
let btnDarkMode = document.getElementById("botonDarkMode")
let btnLightMode = document.getElementById("botonLightMode")
let darkMode
console.log(localStorage.getItem("darkMode"))
if (localStorage.getItem("darkMode")) {
    darkMode = localStorage.getItem("darkMode")
} else {
    console.log("entra primera vez")
    localStorage.setItem("darkMode", "light")
}
if (darkMode == "dark") {
    document.body.classList.add("darkMode")
}

btnDarkMode.addEventListener("click", () => {
    document.body.classList.add("darkMode")
    localStorage.setItem("darkMode", "dark")

})
btnLightMode.addEventListener("click", () => {
    document.body.classList.remove("darkMode")
    localStorage.setItem("darkMode", "light")
})

let eliminarModo = document.getElementById("eliminarMode")
eliminarModo.addEventListener("click", () => {
    localStorage.removeItem("darkMode")
})

//Declaración de la clase
class Productos {
    constructor(id, nombre, precio, esmalte, linea, imagen) {
        this.id = id,
            this.nombre = nombre,
            this.precio = precio,
            this.esmalte = esmalte,
            this.linea = linea,
            this.imagen = imagen
    }
    //Métodos de la clase
    mostrarProductos() {
        console.log(`${this.id} El producto es ${this.nombre} el precio en pesos es ${this.precio}, esmalte ${this.esmalte} y la linea de diseño ${this.linea} la imagen es ${this.imagen}`)
    }
}

//Instanciación de objetos
const producto1 = new Productos(1, "Mate con flores", 1000, "Duncan", "Flores", "img/mate-flores.jpg")
const producto2 = new Productos(2, "Azucarera con mariposas", 2000, "Duncan", "Mariposa", "img/azucarera-mariposas.jpg")
const producto3 = new Productos(3, "Taza naranja", 1500, "Nacional", "Lisa", "img/taza-naranja.jpg")
const producto4 = new Productos(4, "Provoletera marrón", 1100, "Duncan", "Lisa", "img/provoletera.jpg")
const producto5 = new Productos(5, "Juego de azucarera y yerbera", 3000, "Duncan", "Flores", "img/azucareras-flores.jpg")
const producto6 = new Productos(6, "Bandeja ovalada con pajaríto", 1500, "Duncan", "Animales", "img/bandeja-pajarito.jpg")
const producto7 = new Productos(7, "Saumerio con flores", 900, "Nacional", "Flores", "img/saumerio.jpg")
const producto8 = new Productos(8, "Juego de tazas trigo", 4000, "Duncan", "Flores", "img/tazas-fores.jpg")
const producto9 = new Productos(9, "Ensaladera con picaflor", 2500, "Duncan", "Animales", "img/foto-pagina-principal.jpg")

//Declarar arrays
let stock = []
// Optimización OR
let productosEnCarrito = JSON.parse(localStorage.getItem("agregarCarrito")) || []

//Array stock
if (localStorage.getItem("stock")) {
    //array que declaramos vacio
    stock = JSON.parse(localStorage.getItem("stock"))
    console.log(stock)
} else {
    console.log(`primera vez  que carga`)
    stock.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9)
    localStorage.setItem("stock", JSON.stringify(stock))
}
console.log(stock)

//Elementos DOM 
let botonCarrito = document.getElementById("botonCarrito")
let modalBody = document.getElementById("modal-body")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
let parrafoCompra = document.getElementById('precioTotal')
let acumulador
let divProductos = document.getElementById("productos")
divProductos.setAttribute("class", "productosEstilos")

//FUNCIONES Y BOTONES 
//Funcion mostrar catálogo
function mostrarCatalogo() {
    divProductos.innerHTML = ""
    stock.forEach((producto) => {
        let nuevoProducto = document.createElement("div")
        nuevoProducto.innerHTML = `<article id="${producto.id}" class="cards">
        <h3 class="tituloCard">${producto.nombre}</h3>
        <img src="${producto.imagen}" alt="" class="imgCard">
        <div class="content" id="colorP">
            <p class="precioCard"><b>Precio:</b>  ${producto.precio}</p>
            <p class="lineaCard"><b>Linea:</b> ${producto.linea}</p>
            <p class="esmalteCard"><b>Esmalte:</b> ${producto.esmalte}</p>
            <button id="btnAgregarCarrito${producto.id}" class="botonCarrito">Agregar al carrito</button>
        </div>
        </article>`
        divProductos.appendChild(nuevoProducto)

        //Botón de agregar al carrito
        let botonAgregar = document.getElementById(`btnAgregarCarrito${producto.id}`)
        console.log(botonAgregar);
        //Invocar agregar al carrito
        botonAgregar.addEventListener("click", () => {
            agregarAlCarrito(producto)
        })
    })
}

//Funcion de agregar al carrito
function agregarAlCarrito(producto) {
    console.log(`El producto ${producto.nombre} con N* de identificación ${producto.id} fue agregado al carrito`)
    productosEnCarrito.push(producto)
    console.log(productosEnCarrito)
    //Cargar al storage
    localStorage.setItem("agregarCarrito", JSON.stringify(productosEnCarrito))
}

//Función de ocultar catálogo
function ocultarCatalogo() {
    divProductos.innerHTML = ""
}

//Botón mostar catálogo
let mostrarCatalogoBtn = document.getElementById("botonVerCatalogo")
mostrarCatalogoBtn.addEventListener("click", mostrarCatalogo)

//Botón ocultar catálogo
let ocultarCatalogoBtn = document.getElementById("botonOcultarCatalogo")
ocultarCatalogoBtn.onclick = ocultarCatalogo

//Función que permita al usuario agregar un libro 
function guardarProducto() {
    let nombreInput = document.getElementById("nombreInput")
    let precioInput = document.getElementById("precioInput")
    let esmalteInput = document.getElementById("esmalteInput")
    let lineaInput = document.getElementById("lineaInput")
    // let imagenInput = document.getElementById ("imagenInput")
    let productoCreado = new Productos(stock.length + 1, nombreInput.value, precioInput.value, esmalteInput.value, lineaInput.value, "img/juego-mate-bandeja.jpg")
    console.log(productoCreado)
    //Push de libroCreado al array
    stock.push(productoCreado)
    //Local Storage (setItem para guardar y getItem para recuperar)
    localStorage.setItem("stock", JSON.stringify(stock))
}

//Capturo guardarLibro botón y asignamos evento
const guardarBtn = document.getElementById("guardarDatosBtn")
guardarBtn.addEventListener("click", guardarProducto)

//Stringify para subir y parse para traer (este último evita texto plano)
let arrayJSON = JSON.stringify(stock)
localStorage.setItem("arrayJSON", arrayJSON)
let arrayParse = JSON.parse(localStorage.getItem("arrayJSON"))
console.log(arrayParse)



//Evento botonCarrito
botonCarrito.addEventListener('click', () => {
    cargarProductosCarrito(productosEnCarrito)
})

//Función de cargar y mostrar productos en carrito
function cargarProductosCarrito(productosDelStorage) {
    modalBody.innerHTML = " "
    productosDelStorage.forEach((productoCarrito) => {
        modalBody.innerHTML += `
            <div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
                <img class="card-img-top" src="${productoCarrito.imagen}" alt="${productoCarrito.nombre}">
                <div class="card-body" id="color-modal">
                        <h4 class="card-title">${productoCarrito.nombre}</h4>
                        <p class="card-text">$${productoCarrito.precio}</p> 
                        <button class= "btn btn-danger" id="botonEliminar"><i class="fas fa-trash-alt"></i></button>
                </div>    
            </div>
    `
    })
    //Función del total
    //productosEnCarrito
    compraTotal(productosDelStorage)
}

//Sumar productos en carrito
function compraTotal(productosTotal) {
    acumulador = 0;
    //recorrer productosTotal
    productosTotal.forEach((productoCarrito) => {
        acumulador += productoCarrito.precio
    })
    console.log(acumulador)
    if (acumulador == 0) {
        parrafoCompra.innerHTML = `<p>El carrito esta vacio</p>`
    } else {
        parrafoCompra.innerHTML = `<p id="styleImporte">Total: ${acumulador} $</p>`
    }
}