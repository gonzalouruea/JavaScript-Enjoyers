/**
* lógica del fichero login.html
*/

// importamos el array "users" del fichero datos.js
import { users } from "./datos.js";

// declaramos constantes para obtener el ID de diferentes elementos del DOM
const domInputEmail = document.getElementById('loginInputEmail')
const domInputPassword = document.getElementById('loginInputPassword')
const domSubmitValues = document.getElementById('submitValues')
const domUserLogged = document.getElementById('userLogged')
const domUserIsLogged = document.getElementById('userIsLogged')

// función para realizar el inicio de sesión comprobando si el usuario existe en el array "users"
function addDomValues(event) {
    event.preventDefault() //función para evitar que el DOM recargue la página al realizar la acción

    let emailValue = domInputEmail.value
    let passwordValue = domInputPassword.value
    let userExists = false

    for (let user of users) {
        if (user.email == emailValue && user.password == passwordValue) {
            alert("Se ha iniciado sesión correctamente")
            domUserLogged.textContent = user.email
            userExists = true
            domUserIsLogged.textContent = `¡Bienvenid@ ${user.name}!`
            break
        }
    }
    if (!userExists) {
        alert("Dirección de correo o contraseña incorrectos")
    }
}

// listener para añadir acción al realizar "click" en el botón del DOM
domSubmitValues.addEventListener('click', addDomValues)
