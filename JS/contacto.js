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

//DATOS PERSONALES//
//Declaración de la clase
class Datos {
    constructor(idd, nombres, consulta, telefono, lineas) {
        this.idd = idd,
            this.nombres = nombres,
            this.consulta = consulta,
            this.telefono = telefono,
            this.lineas = lineas
    }
    //Métodos
    mostrarDatos() {
        console.log(`${this.idd} El nombre es ${this.nombres}, la consulta ${this.consulta} el teléfono es: ${this.telefono} la linea consultada es: ${this.lineas}`)
    }
}

//Instatación
//const datos1 = new Datos(1, "Gaston", "donde se pueden ver?", 12345678, "linea flores")
//const dato = [datos1]

//Es la ruta relativa del HTML a JSON utilizando FETCH
let info = []
fetch("../JSON/datos.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for (let dato of data) {
            let datoNuevo = new Datos(dato.idd, dato.nombres, dato.consulta, dato.telefono, dato.lineas)
            info.push(datoNuevo)
        }

    })

//AWAIT Y ASYNC
// const cargarInfo = async () =>{
//     const response = await fetch ("datos.json")
//     const data = await response.json()
//     for(let dato of data){
//                 let datoNuevo = new Datos(dato.idd, dato.nombres, dato.consulta, dato.telefono, dato.lineas)
//                 info.push(datoNuevo)
//             }
// }
// cargarInfo()

//Función de formulario de consulta de datos personales
function datosPersona() {
    let nombresImput = document.getElementById("nombresImput")
    let consultaImput = document.getElementById("consultaImput")
    let telefonoImput = document.getElementById("telefonoImput")
    let lineasImput = document.getElementById("lineasImput")
    let datosNuevos = new Datos(info.length + 1, nombresImput.value, consultaImput.value, telefonoImput.value, lineasImput.value)
    console.log(datosNuevos)
    info.push(datosNuevos)
    localStorage.setItem("info", JSON.stringify(info))
    myForm.reset();
}

//Botón de guardar, formulario de consulta
const guardarDatosBtn = document.getElementById("guardarDatosBtn")
guardarDatosBtn.addEventListener("click", datosPersona)
//se agregó Toastify para mostrar que al tocar guardar el producto se guardó con exito
guardarDatosBtn.addEventListener('click', () => {
    Toastify({
        text: "Consulta registrada",
        duration: 4000,
        gravity: "bottom",
        position: "right",
        style: {
            background: "#f8afc9",
            color: "#1e1e24",
        }
    }).showToast();
})

//Función de Limpiar formulario
function limpiarFormulario() {
    document.getElementById("myForm").reset(); //Agregué una función de limpiar el documento antes de ser mandado para mayor comodiad del usuario
}
const limpiarForm = document.getElementById("limpiarForm")
limpiarForm.addEventListener("click", limpiarFormulario)