/**
* lógica del fichero registro.html 
*/

// importamos el array "users" del fichero datos.js
import { users } from "./datos.js"

// declaramos constantes para obtener el ID de diferentes elementos del DOM
const table = document.getElementById("userTableId")
const submitButton = document.getElementById("submitId")

// función para añadir una nueva fila, se pasará como parámetros nombre, email, contraseña y el index del array
function addRow(name, email, password, index) {
    let newRow = table.insertRow()

    let cell1 = newRow.insertCell(0)
    let cell2 = newRow.insertCell(1)
    let cell3 = newRow.insertCell(2)
    let cell4 = newRow.insertCell(3)

    cell1.textContent = name
    cell2.textContent = email
    cell3.textContent = password
    cell4.innerHTML = `<button type="button" class="btn btn-danger delete-button">Eliminar</button>`

    let deleteButton = newRow.querySelector(".delete-button")
    deleteButton.addEventListener("click", function () {
        users.splice(index, 1)
        newRow.remove();
    })
}

// bucle para iterar el array "users" y ejecutar la función "addRow" por cada iteración
for (let index = 0; index < users.length; index++) {
    let user = users[index]
    addRow(user.name, user.email, user.password, index)
}

// función para añadir un nuevo usuario con los datos obtenidos del DOM
function addNewUser(event) {
    event.preventDefault() //función para evitar que el DOM recargue la página al realizar la acción

    let userName = document.getElementById("userNameId").value
    let userEmail = document.getElementById("userEmailId").value
    let userPassword = document.getElementById("userPasswordId").value
    let userAdd = false

    if (userName && userEmail && userPassword) {
        users.push({ name: userName, email: userEmail, password: userPassword })

        addRow(userName, userEmail, userPassword, users.length - 1)
        alert("Nuevo usuario registrado correctamente")
        userAdd = true
    }
    if (!userAdd) {
        alert("Faltan datos para añadir registro")
    }
}

// listener para añadir acción al realizar "click" en el botón del DOM
submitButton.addEventListener("click", addNewUser)
