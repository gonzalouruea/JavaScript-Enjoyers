/* funciones de validacion*/

function validarNombre(nombre){
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if (regex.test(nombre)) {
        return true; // El nombre es válido
    } else {
        return false; // El nombre no es válido
    }

}

function validarEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (regex.test(email)) {
    return true; // El email es válido
} else {
    return false; // El email no es válido
}

}

function validarPassword(password){
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

if (regex.test(password)) {
    return true; // La contraseña es válida
} else {
    return false; // La contraseña no es válida
}

}

/*------------------------------------------------------------------------------------------------------------------------------------------*/ 

/* mostrar los usuarios que ya tenemos */


function actualizarListaUsuarios() {
    const contenedor = document.getElementById("registros");
    contenedor.innerHTML = ""; // Limpia el contenedor antes de renderizar

    usuarios.forEach(function (usuario, index) {
        const tarjeta = `
            
            <div class="card my-3">
                <div class="card-body">
                    <h5 class="card-title">${usuario.nombre}</h5>
                    <p class="card-text">Email: ${usuario.email}</p>
                    <p class="card-text">Password: ${usuario.password}</p>
                    <button class="btn btn-danger btn-sm borrar" onclick="eliminarUsuario(${index})">Borrar</button>
                </div>
            </div>
        `;
        contenedor.innerHTML += tarjeta; // Agrega cada tarjeta al contenedor
    });
}

function eliminarUsuario(index){
    usuarios.splice(index,1);
    actualizarListaUsuarios();
}

actualizarListaUsuarios();

/*--------------------------------------------------------------------------------------------------------------------------------------------- */

/* Validaciones e insertar usuarios */

document.getElementById("form-registro").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario recargue la página automáticamente

    // Cojemos los datos que queremos del formulario
    const email = document.getElementById("email").value;
    const nombre = document.getElementById("nombre").value;
    const password = document.getElementById("password").value;

    // Validación de campos vacíos
    if (nombre === "" || email === "" || password === "") {
        alert("No puede haber ningún campo vacío, rellénalo.");
        return false;
    }

    // Validaciones de datos
    if (!validarNombre(nombre)) {
        alert("Los datos no son correctos, solo puede contener letras.");
        document.getElementById("nombre").value = ""; // Limpia el campo
        return false;
    }

    if (!validarEmail(email)) {
        alert("Los datos no son correctos, ej: example@example.es.");
        document.getElementById("email").value = ""; // Limpia el campo
        return false;
    }

    if (!validarPassword(password)) {
        alert("Los datos no son correctos, debe contener mínimo 8 caracteres con letras y números.");
        document.getElementById("password").value = ""; // Limpia el campo
        return false;
    }


    usuarios.push({nombre: nombre, email: email, password: password});
    

    // Asignamos el lugar donde introduciremos los datos
    const contenedor = document.getElementById("registros");

    contenedor.innerHTML = "";//para limpiar la pantalla antes de recargar y evitar duplicados

    usuarios.forEach(function(usuario,index) {
        
        const tarjeta = `
            <div class="card my-3">
                <div class="card-body">
                    <h5 class="card-title">${usuario.nombre}</h5>
                    <p class="card-text">Email: ${usuario.email}</p>
                    <p class="card-text">Password: ${usuario.password}</p>
                    <button class="btn btn-danger btn-sm borrar" onclick="eliminarUsuario(${index})">Borrar</button>

                    
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
