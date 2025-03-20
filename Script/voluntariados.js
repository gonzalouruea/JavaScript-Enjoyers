'use strict';

import {listCards, listUsuario} from "./datos.js";

//lista de trabajos

let rowVolunt = document.getElementById("voluntariados-lista");
let inputTitulo = document.getElementById("input-titulo");
let inputUsuario = document.getElementById("select-user");
let inputFecha = document.getElementById("volDateId");
let inputDescripcion = document.getElementById("input-descripcion");
let inputTipo = document.getElementById("select-tipo");
let darAlta = document.getElementById("dar-alta");

function listadoTrabajos(trabajo, indice){
    let registro = `
    <div class="col-2 border p-2">
        ${trabajo.titulo}                        
    </div>
    <div class="col-3 border p-2">
        ${trabajo.usuario}                         
    </div>
    <div class="col-2 border p-2">
        ${trabajo.fecha}                         
    </div>
    <div class="col-2 border p-2">
        ${trabajo.descripcion}                          
    </div>
    <div class="col-1 border p-2">
        ${trabajo.tipo}                          
    </div>
    <div class="col-2 border p-2">
        <div class="d-flex justify-content-center mb-3">
            <button type="button" class="btn btn-danger eliminar" data-index="${indice}">Borrar</button>
        </div>
    </div>
    `
    rowVolunt.innerHTML += registro;
}

function iteracionLista(){
    rowVolunt.innerHTML = "";
    let indice = 0;
    for(let trabajo of listCards){
        listadoTrabajos(trabajo, indice);
        indice++;
    }
}


rowVolunt.addEventListener("click", function (event) {
    if (event.target.classList.contains("eliminar")) {
        let indice = parseInt(event.target.getAttribute("data-index"), 10);
        
        if (!isNaN(indice) && indice >= 0 && indice < listCards.length) {
            listCards.splice(indice, 1);
            iteracionLista();
        }
    }
});


iteracionLista();

//Selector usuario
let selectUser = document.getElementById("select-user");


selectUser.innerHTML += `<option disabled selected value> -- seleccione un usuario -- </option>`;
let contador = 1;
for(let user of listUsuario){
    let registro = `
    <option >${user.email}</option>
    `
    selectUser.innerHTML += registro
}

//añadir trabajo

function addTrabajo(event){
    event.preventDefault();
    
    if(inputTitulo.value && inputUsuario.value && inputFecha.value && inputDescripcion.value && inputTipo.value){
        let dateArray = inputFecha.value.split("-");
        let formatDate = dateArray[2] + "/" + dateArray[1] + "/" +dateArray[0];
        listCards.push({
            titulo: inputTitulo.value,
            usuario: inputUsuario.value,
            fecha: formatDate,
            descripcion: inputDescripcion.value,
            tipo: inputTipo.value
        });
        iteracionLista();
    }else{
        alert("Falta introducir datos");
    }
}

darAlta.addEventListener('click', addTrabajo);
