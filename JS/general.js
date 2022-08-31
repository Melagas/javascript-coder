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
