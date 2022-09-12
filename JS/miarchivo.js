//MODO DARK Y LIGHT//
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

//PRODUCTOS//
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
const producto1 = new Productos(1, "Aceitera y vinagrera", 4000, "Duncan", "Liso", "../img/juego-aceites.jpg")
const producto2 = new Productos(2, "Azucarera con mariposas", 2000, "Duncan", "Mariposa", "../img/azucarera-mariposas.jpg")
const producto3 = new Productos(3, "Taza naranja", 1500, "Nacional", "Lisa", "../img/taza-naranja.jpg")
const producto4 = new Productos(4, "Provoletera marrón", 1100, "Duncan", "Lisa", "../img/provoletera.jpg")
const producto5 = new Productos(5, "Juego de azucarera y yerbera", 3000, "Duncan", "Flores", "../img/azucareras-flores.jpg")
const producto6 = new Productos(6, "Bandeja ovalada con pajaríto", 1500, "Duncan", "Animales", "../img/bandeja-pajarito.jpg")
const producto7 = new Productos(7, "Saumerio con flores", 900, "Nacional", "Flores", "../img/saumerio.jpg")
const producto8 = new Productos(8, "Juego de tazas trigo", 4000, "Duncan", "Flores", "../img/tazas-fores.jpg")
const producto9 = new Productos(9, "Ensaladera con picaflor", 2500, "Duncan", "Animales", "../img/foto-pagina-principal.jpg")

// //Declarar arrays
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

//Desestructurar un ARRAY
//Desestructuramos array
let [a, , b, c] = stock
a = "producto nuevo"
console.log(a)
console.log(b)
console.log(c)
console.log(stock)

//Elementos DOM 
let inputBuscar = document.getElementById("buscador")
let btnBuscar = document.getElementById("btnBuscar")
let botonCarrito = document.getElementById("botonCarrito")
let modalBody = document.getElementById("modal-body")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
let parrafoCompra = document.getElementById('precioTotal')
let acumulador
let divProductos = document.getElementById("productos")
divProductos.setAttribute("class", "productosEstilos")


//FUNCIONES Y BOTONES 
//Función mostrar catálogo
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

//Función de agregar al carrito
function agregarAlCarrito(producto) {
    console.log(`El producto ${producto.nombre} con N* de identificación ${producto.id} fue agregado al carrito`)
    let productoAgregado = productosEnCarrito.find((elem) => (elem.id == producto.id))
    console.log(productoAgregado)
    console.log(productosEnCarrito);
    if (productoAgregado == undefined) {
        productosEnCarrito.push(producto)
        console.log(productosEnCarrito)
        //Cargar al storage
        localStorage.setItem("agregarCarrito", JSON.stringify(productosEnCarrito))
        //Se agregó sweet alert en producto agregado y para avisar que el mismo ya se encuentra en el carrito
        Swal.fire({
            title: 'Agregado al carrito',
            text: `el producto ${producto.nombre} se agregó al carrito`,
            icon: 'success',
            confirmButtonText: 'Ok'
        })
    } else {
        console.log(`El producto ${producto.nombre} ya se encuentra en el carrito`)
        Swal.fire({
            title: 'Producto ya agregado',
            text: `El producto ${producto.nombre} ya se encuentra en el carrito`,
            icon: 'info',
            confirmButtonText: 'Ok'
        })
    }
}

//Función de ocultar catálogo
function ocultarCatalogo() {
    divProductos.innerHTML = ""
}

//Botón ocultar catálogo
let ocultarCatalogoBtn = document.getElementById("botonOcultarCatalogo")
ocultarCatalogoBtn.onclick = ocultarCatalogo


//Función de cargar catálogo
function cargarProdutosStock() {
    setTimeout(() => {
        mostrarCatalogo(stock)
    }, 2000)
}

//Botón mostrar catálogo
let mostrarCatalogoBtn = document.getElementById("botonVerCatalogo")
mostrarCatalogoBtn.addEventListener("click", (() => {
    Toastify({
        text: "Cargando Productos...",
        duration: 2000,
        gravity: "bottom",
        position: "right",
        style: {
            background: "#f8afc9",
            color: "#1e1e24",
        }
    }).showToast();
    cargarProdutosStock()
}))


//Función que permita al usuario agregar un producto 
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
    myForm.reset(); //Agregué un reset al boton de guardar asi se limpia luego de almacenar en el localStorage
}

//Función de limpiar formulario
function limpiarFormulario() {
    document.getElementById("myForm").reset(); //Agregué una funcion de limpiar el documento antes de ser mandado para mayor comodiad del usuario
}
const limpiarForm = document.getElementById("limpiarForm")
limpiarForm.addEventListener("click", limpiarFormulario)

//Capturo guardarProducto botón y asignamos evento
const guardarBtn = document.getElementById("guardarDatosBtn")
guardarBtn.addEventListener("click", guardarProducto)
//se agregó Toastify para mostrar que al tocar guardar el producto se guardó con exito
guardarBtn.addEventListener('click', () => {
    Toastify({
        text: "Producto guardado",
        duration: 4000,
        gravity: "bottom",
        position: "right",
        style: {
            background: "#f8afc9",
            color: "#1e1e24",
        }
    }).showToast();
})

//Stringify para subir y parse para traer (este último evita texto plano)
let arrayJSON = JSON.stringify(stock)
localStorage.setItem("arrayJSON", arrayJSON)
let arrayParse = JSON.parse(localStorage.getItem("arrayJSON"))
console.log(arrayParse)

//Función de cargar y mostrar productos en carrito
function cargarProductosCarrito(productosDelStorage) {
    modalBody.innerHTML = " "
    productosDelStorage.forEach((productoCarrito) => {
        modalBody.innerHTML += `
            <div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 500px">
                <img class="card-img-top" src="${productoCarrito.imagen}" alt="${productoCarrito.nombre}">
                <div class="card-body" id="color-modal">
                        <h4 style="font-family: Nunito;" class="card-title">${productoCarrito.nombre}</h4>
                        <p style="font-family: Nunito;" class="card-text">$${productoCarrito.precio}</p> 
                        <button class= "btn btn-danger" id="btnEliminar${productoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
                </div>    
            </div>
    `
    })
    productosDelStorage.forEach((productoCarrito, agregados) => {
        //capturamos el boton sin usar variable y adjuntamos evento
        document.getElementById(`btnEliminar${productoCarrito.id}`).addEventListener('click', () => {
            //Dentro del evento:
            console.log(`Producto ${productoCarrito.nombre} eliminado`)
            //Eliminamos del DOM
            let cardProducto = document.getElementById(`productoCarrito${productoCarrito.id}`)
            console.log(cardProducto);
            cardProducto.remove()
            //Eliminamos del array compras
            productosEnCarrito.splice(agregados, 1)
            console.log(productosEnCarrito)
            localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
            cargarProductosCarrito(productosEnCarrito)
        })

    })
    //Función del total
    //productosEnCarrito
    compraTotal(...productosDelStorage)
}

//Evento botonCarrito
botonCarrito.addEventListener('click', () => {
    cargarProductosCarrito(productosEnCarrito)
})

//Sumar productos en carrito + Spread y reduce
function compraTotal(...productosTotal) {
    acumulador = 0;
    //recorrer productosTotal
    acumulador = productosTotal.reduce((acumulador, productoCarrito) => {
        return acumulador + (Number(productoCarrito.precio)) //se agregó number para que no concatene
    }, 0)
    console.log(acumulador)
    //Operador Ternario
    acumulador > 0 ? parrafoCompra.innerHTML = `<p id="styleImporte" style="font-family: Nunito;">Total: ${acumulador} $</p>` :
        parrafoCompra.innerHTML = `<p id="styleMensajeCarrito">El carrito esta vacio</p>`
}

//Función finalizar compra  y botones de confirmación
function finalizarCompra() {
    Swal.fire({
        title: 'Está seguro de realizar la compra',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
        confirmButtonColor: '#006c67',
        cancelButtonColor: '#8f2d56',
    }).then((result) => {
        let DateTime = luxon.DateTime
        const dt = DateTime.now()
        let fecha = `Siendo las ${dt.toLocaleString(DateTime.TIME_SIMPLE)} del ${dt.toLocaleString(DateTime.DATE_FULL)}`
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Compra exitosa',
                icon: 'success',
                confirmButtonColor: '#006c67',
                text: `Muchas gracias por su compra`,
                footer: `<p>${fecha} pronto nos comunicaremos con usted</p>`
            })
            //Ahora pusimos el código dentro del THEN para que se ejecute en caso de que result sea confirmado. 
            productosEnCarrito = []
            localStorage.removeItem('carrito')
            //Mostramos total
            console.log(`El total de su compra es ${acumulador}`)
            //Volvemos a cargar el modal con el array vacío por lo que quedará sin nada
            cargarProductosCarrito(productosEnCarrito)
        } else {
            Swal.fire({
                title: 'Compra no realizada',
                icon: 'info',
                text: `La compra no ha sido realizada! Atención sus productos siguen en el carrito :D`,
                confirmButtonColor: '#006c67',
                timer: 3500
            })
        }
    })
}

botonFinalizarCompra.addEventListener('click', () => {
    finalizarCompra()
})

//Boton de busqueda
btnBuscar.addEventListener('click', () => {
    //función de buscado
    event.preventDefault()
    console.log("click");
    console.log(inputBuscar.value.toLowerCase());
    let productoBuscado = stock.filter(producto => (producto.nombre.toLowerCase() == inputBuscar.value.toLowerCase()))
    console.log(productoBuscado);
    if (productoBuscado.length == 0) {
        console.log(`No hay coincidencia`);
        mostrarCatalogo(stock)
    } else {
        mostrarCatalogo(productoBuscado)

    }
})