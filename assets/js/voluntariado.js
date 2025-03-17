/**
* lógica del fichero voluntariado.html
*/

// importamos los arrays "users" y "cards" del fichero datos.js
import { users, cards } from "./datos.js"

// declaramos constantes para obtener el ID de diferentes elementos del DOM
const table = document.getElementById("volTableId")
const submitButton = document.getElementById("submitId")

// función para añadir una nueva fila, se pasará como parámetros email, nombre, título, descipción, tipo de voluntariado y el index del array
function addRow(email, date, title, description, volunType, index) {
    let newRow = table.insertRow()
    let delButton = `<button type="button" class="btn btn-danger delete-button">Eliminar</button>`
    let cellClass = volunType === "Oferta" ? "table-primary" : "table-success"

    let cell1 = newRow.insertCell(0)
    let cell2 = newRow.insertCell(1)
    let cell3 = newRow.insertCell(2)
    let cell4 = newRow.insertCell(3)
    let cell5 = newRow.insertCell(4)
    let cell6 = newRow.insertCell(5)

    cell1.textContent = email
    cell2.textContent = date
    cell3.textContent = title
    cell4.textContent = description
    cell5.textContent = volunType
    cell6.innerHTML = delButton

    newRow.classList.add(cellClass)

    let deleteButton = newRow.querySelector(".delete-button")
    deleteButton.addEventListener("click", function () {
        cards.splice(index, 1)
        newRow.remove()
    })
}

// bucle para iterar los arrays de tarjetas y usuarios, verificando con un condicional el usuario y el autor de la tarjeta
// se ejecutará la función de añadir fila por cada iteración donde se cumpla el condicional
for (let index = 0; index < cards.length; index++) {
    let card = cards[index]
    for (let user of users){
        if(user.name === card.autor){
            addRow(user.email, card.date, card.title, card.description, card.volunType, index)
        }
    }
}

// función para añadir una nueva tarjeta con los datos obtenidos del DOM
function addNewCard(event) {
    event.preventDefault() //función para evitar que el DOM recargue la página al realizar la acción

    let email = document.getElementById("newVolEmailId").value
    let volunType = document.getElementById("volSelectId").value
    let title = document.getElementById("newVolTitleId").value
    let volunDate = document.getElementById("volDateId").value
    let description = document.getElementById("newVolDescriptionId").value
    let volunAdd = false
    let emailExists = false
    let emailIndex = -1

    if (users.some(user => user.email === email)){
        emailExists = true
        emailIndex = users.findIndex(user => user.email === email)
    } else {
        alert("El usuario (email) no está registrado")
        return
    }


    if (emailExists && volunType !== "" && title !== "" && volunDate !== "" && description !== "") {
        cards.push({date: volunDate, title: title, description: description, autor: users[emailIndex].name})
        
        addRow(email, volunDate, title, description, volunType, cards.length -1)
        alert("Nuevo voluntariado registrado correctamente")
        volunAdd = true
    }
    
    if(!volunAdd){
        alert("Faltan datos para añadir registro")
        console.log("email:", typeof email, "volunDate", typeof volunDate)
    }
}

// listener para añadir acción al realizar "click" en el botón del DOM
submitButton.addEventListener("click", addNewCard)