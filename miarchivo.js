let nombreApellido = prompt("Ingresar su Nombre y Apellido ");
console.log(`El nombre ingresado es ${nombreApellido}`)
let pregunta = prompt("Le gustaria recibir novedades y promociones en su mail?")

while (pregunta.toLowerCase() != "no") {
    let mail = prompt("Ingrese su mail para recibir novedades")
    console.log("el mail ingresado es " + mail);
    pregunta = prompt("Desea ingresar otro mail? escriba *NO para salir")
    console.log(`Muchas gracias por su tiempo!`)
}

