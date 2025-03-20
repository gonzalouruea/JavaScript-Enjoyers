'use strict';

import {listUsuario} from "./datos.js";

let inputEmail = document.getElementById("input-email");
let inputPassword = document.getElementById("input-password");
let iniciarSesion = document.getElementById("iniciar-sesion");

function existeUsuario(event){
    event.preventDefault();
    let existeUsuario = false;
    let nombre;

    for (let usuario of listUsuario){
        if(usuario.email == inputEmail.value && usuario.password == inputPassword.value){
            existeUsuario = true;
            nombre = usuario.nombre;
        }
    }
    alert( existeUsuario ? "Usuario correcto" : "Usuasrio Incorrecto");
    
}

iniciarSesion.addEventListener('click', existeUsuario);