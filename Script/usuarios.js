'use strict';

import {listUsuario} from "./datos.js";

//lista de usuarios

let rowUser = document.getElementById("usuarios-lista");
let inputNombre = document.getElementById("input-nombre");
let inputEmail = document.getElementById("input-email");
let inputPassword = document.getElementById("input-password");
let darAlta = document.getElementById("dar-alta");


function listadoUsuarios(usuario, indice){
    let registro = `
    <div class="col-3 border p-2 nombre">
        ${usuario.nombre}
    </div>
    <div class="col-4 border p-2 ">
        ${usuario.email}
    </div>
    <div class="col-3 border p-2">
        ${usuario.password}    
    </div>
    <div class="col-2 border p-2">
        <div class="d-flex justify-content-center mb-3">
            <button type="button" class="btn btn-danger eliminar" data-index="${indice}">Borrar</button>
        </div>
    </div>
    `
    rowUser.innerHTML += registro;
    
}

function iteracionLista(){
    rowUser.innerHTML = "";
    let indice = 0;
    for(let usuario of listUsuario){
        listadoUsuarios(usuario, indice);
        indice++;
    }
}

//eliminar usuario
rowUser.addEventListener("click", function (event) {
    if (event.target.classList.contains("eliminar")) {
        let indice = parseInt(event.target.getAttribute("data-index"), 10);
        
        if (!isNaN(indice) && indice >= 0 && indice < listUsuario.length) {
            listUsuario.splice(indice, 1);
            iteracionLista();
        }
    }
});


iteracionLista();

//añadir usuario

function addUsuario(event){
    event.preventDefault();

    if(inputNombre.value && inputEmail.value && inputPassword.value){
        let existe = false;

        for(let user of listUsuario){
            if(user.email === inputEmail.value){
                existe = true;
            }
        }

        if(!existe){
            listUsuario.push({
                nombre: inputNombre.value,
                email: inputEmail.value,
                password: inputPassword.value
            });
            iteracionLista();
        }else{
            alert("Este usuario ya existe");
        }

        console.log(existe);
    }else{
        alert("No se han introducido todos los datos");
    }
}

darAlta.addEventListener('click', addUsuario);
