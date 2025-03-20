

function mostrarCarta() {
    const contenedor = document.getElementById("tarjetas");
    contenedor.innerHTML = ""; // Limpia el contenedor antes de renderizar

    anuncios.forEach(function (anuncio) {

        let color;
        if(anuncio.tipo === "Anuncio"){
            color="bg-info"
        };
        if(anuncio.tipo === "Busqueda"){
            color="bg-warning"
        };



        const tarjeta = `
            <div class="col">
                <div id="tarjeta1" class="card " style="width: 18rem;">
                    <div class="card-body ${color}">
                        <h5 class="card-title">${anuncio.titulo}</h5>
                        <p class="card-subtitle mb-2 text-body-secondary">${anuncio.usuario}</p>
                        <p class="card-text">${anuncio.fecha}</p>
                        <p class="card-text">${anuncio.descripcion}</p>
                        <p class="card-text">${anuncio.tipo}</p>
                        
                
                    
                    </div>
                </div>
             </div>
        `;
        contenedor.innerHTML += tarjeta; // Agrega cada tarjeta al contenedor
    });
}

mostrarCarta();


