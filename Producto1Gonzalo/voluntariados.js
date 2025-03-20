
/* mostrar los anuncios que ya tenemos */


function actualizarListaAnuncios() {
    const contenedor = document.getElementById("registros");
    contenedor.innerHTML = ""; // Limpia el contenedor antes de renderizar

    anuncios.forEach(function (anuncio, index) {
        const tarjeta = `
            <div class="card my-3">
                <div class="card-body">
                    <h5 class="card-title">${anuncio.titulo}</h5>
                    <p class="card-text">ususario: ${anuncio.usuario}</p>
                    <p class="card-text">fecha: ${anuncio.fecha}</p>
                    <p class="card-text">descripcion: ${anuncio.descripcion}</p>
                    <p class="card-text">tipo: ${anuncio.tipo}</p>

                    <button class="btn btn-danger btn-sm borrar" onclick="eliminarAnuncio(${index})">Borrar</button>
                </div>
            </div>
        `;
        contenedor.innerHTML += tarjeta; // Agrega cada tarjeta al contenedor
    });
}

function eliminarAnuncio(index){
    anuncios.splice(index,1);
    actualizarListaAnuncios();
}

actualizarListaAnuncios();

/*--------------------------------------------------------------------------------------------------------------------------------------------- */

/* Validaciones e insertar usuarios */

document.getElementById("form-registro").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario recargue la página automáticamente

    // Cojemos los datos que queremos del formulario
    const titulo = document.getElementById("titulo").value;
    const usuario = document.getElementById("usuario").value;
    const fecha = document.getElementById("fecha").value;
    const descripcion=document.getElementById("descripcion").value;
    const tipo=document.getElementById("tipo").value;


    // Validación de campos vacíos
    if (titulo === "" || usuario === "" || fecha === "" || descripcion === "" || tipo === "") {
        alert("No puede haber ningún campo vacío, rellénalo.");
        return false;
    }

    

    anuncios.push({titulo: titulo, usuario: usuario, fecha: fecha, descripcion:descripcion, tipo:tipo});
    

    // Asignamos el lugar donde introduciremos los datos
    const contenedor = document.getElementById("registros");

    contenedor.innerHTML = "";//para limpiar la pantalla antes de recargar y evitar duplicados

    

    
    anuncios.forEach(function(anuncio,index) {

  
        
        const tarjeta = `
            <div class="card my-3 ">
                <div class="card-body">
                    <h5 class="card-title">${anuncio.titulo}</h5>
                    <p class="card-text">ususario: ${anuncio.usuario}</p>
                    <p class="card-text">fecha: ${anuncio.fecha}</p>
                    <p class="card-text">descripcion: ${anuncio.descripcion}</p>
                    <p class="card-text">tipo: ${anuncio.tipo}</p>

                    <button class="btn btn-danger btn-sm borrar" onclick="eliminarAnuncio(${index})">Borrar</button>
                </div>
            </div>
        `;
        contenedor.innerHTML += tarjeta;
        
    });

    

    // Se introducen los datos en contenedor
    
    alert("Registro exitoso.");
    document.getElementById("form-registro").reset();
    return true; // Todo correcto

});
