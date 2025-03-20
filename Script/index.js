'use strict';

import {listCards} from "./datos.js";

//Lista de tarjetas

let rowCard = document.getElementById("rowCard");

for (let card of listCards){
    let anuncio = `
    <div class="col-md-6 col-xl-3 mb-5">
        <div class="card pb-3 ${card.tipo}" style="width: 18rem; ">
            <div class="card-body">
                <h5 class="card-title text-center mb-3">${card.titulo}</h5>
                <h6 class="card-subtitle mb-2">${card.fecha}</h6>
                <p class="card-text">${card.descripcion}</p>
                <h6 class="card-user">${card.usuario}</h6>
            </div>
        </div>
    </div>`;
    rowCard.innerHTML += anuncio;
}




