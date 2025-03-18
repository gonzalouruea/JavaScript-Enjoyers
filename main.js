/* DATOS INICIALES ------------------------------------------------------------------------------------*/
let voluntariados = [ /* Voluntariados iniciales ------------------------------------------*/
  {
    titulo: "Limpiar casa",
    usuario: "Edu",
    fecha: "2024-03-15",
    descripcion: "Ayuda limpiando una casa.",
    tipo: "Petición"
  },
  {
    titulo: "Compra",
    usuario: "Jose",
    fecha: "2024-03-20",
    descripcion: "Ayudar a hacer la compra a una persona mayor.",
    tipo: "Oferta"
  },
  {
    titulo: "Desatasco",
    usuario: "Jose",
    fecha: "2024-03-25",
    descripcion: "Ayudar a desatascar una tubería.",
    tipo: "Oferta"
  }
];
let usuarios = [ /* Usuarios iniciales ----------------------------------------------------*/
  { nombre: "Edu", email: "edu@uoc.edu", contraseña: "1234" },
  { nombre: "Jose", email: "jose@uoc.edu", contraseña: "1234" }
];

/* GESTIÓN DE VOLUNTARIADOS --------------------------------------------------------------------------*/
function mostrarVoluntariados() { /* Mostrar los voluntariados creados --------------------*/
  const container = document.getElementById('lista-voluntariados');
  container.innerHTML = '';

  voluntariados.forEach((voluntariado, index) => {
    const fila = document.createElement('div');
    fila.className = 'row row-cols-6 border-bottom py-2';
    fila.innerHTML = `
      <div class="col">${voluntariado.titulo}</div>
      <div class="col">${voluntariado.usuario}</div>
      <div class="col">${voluntariado.fecha}</div>
      <div class="col">${voluntariado.descripcion}</div>
      <div class="col">${voluntariado.tipo}</div>
      <div class="col text-center">
        <button class="btn btn-sm btn-danger" onclick="eliminarVoluntariado(${index})">Borrar</button>
      </div>
    `;
    container.appendChild(fila);
  });
}
function eliminarVoluntariado(indice) { /* Eliminar voluntariado --------------------------*/
  voluntariados.splice(indice, 1);
  mostrarVoluntariados();
  actualizarDashboard(); /* Actualizar en el inicio */
}

/* GESTIÓN TARJETAS VOLUNTARIADOS --------------------------------------------------------------------*/
function actualizarDashboard() { /* Actualizar las tarjetas con los voluntariados ---------*/
  const container = document.querySelector('#dashboard .row.justify-content-center');
  container.innerHTML = '';

  voluntariados.forEach(voluntariado => {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'col-md-3 mb-4';
    tarjeta.innerHTML = `
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${voluntariado.titulo}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">${voluntariado.fecha}</h6>
          <p class="card-text">${voluntariado.descripcion}</p>
          <p class="card-text text-muted">Creado por: ${voluntariado.usuario}</p>
          <small class="text-primary">${voluntariado.tipo}</small>
        </div>
      </div>
    `;
    container.appendChild(tarjeta);
  });
}

/* GESTIÓN DE USUARIOS --------------------------------------------------------------------------------*/
function mostrarUsuarios() { /* Mostrar los usuarios creados ----------------------------*/
    const container = document.getElementById('lista-usuarios');
    container .innerHTML = '';

    usuarios.forEach((usuario, index) => {
      const fila = document.createElement('div');
      fila.className = 'row row-cols-4 border-bottom py-2';
      fila.innerHTML = `
        <div class="col">${usuario.nombre}</div>
        <div class="col">${usuario.email}</div>
        <div class="col">${usuario.contraseña}</div>
        <div class="col text-center">
          <button class="btn btn-sm btn-danger" onclick="eliminarUsuario(${index})">Borrar</button>
        </div>
      `;
      container .appendChild(fila);
    });
}
function eliminarUsuario(indice) { /* Eliminar usuarios ---------------------------------*/
    usuarios.splice(indice, 1);
    mostrarUsuarios();
}

/* GESTIÓN PÁGINAS DEL MENÚ ---------------------------------------------------------------------------*/
function mostrarPagina(idPagina) {
    /* Ocultar las páginas no seleccionadas -------------------------------------------------*/
    document.querySelectorAll('#paginas-dinamicas > .container-fluid').forEach(pagina => {
      pagina.classList.add('d-none');
    });
  
    /* Mostrar la página seleccionada -------------------------------------------------------*/
    const paginaActiva = document.getElementById(idPagina);
    paginaActiva.classList.remove('d-none');
  
    if (idPagina === 'usuarios') { mostrarUsuarios(); }
    if (idPagina === 'voluntariados') { mostrarVoluntariados(); }
    if (idPagina === 'dashboard') { actualizarDashboard(); }
}

/* EVENTOS -------------------------------------------------------------------------------------------*/
document.querySelector('#voluntariados form').addEventListener('submit', (e) => { /* Alta -*/
  e.preventDefault();
  
  const nuevoVoluntariado = {
    titulo: document.getElementById('alta-vol-titulo').value,
    usuario: document.getElementById('alta-vol-usuario').value,
    fecha: document.getElementById('alta-vol-fecha').value,
    descripcion: document.querySelector('#alta-vol-desc').value,
    tipo: document.getElementById('alta-vol-tipo').value
  };

  if (nuevoVoluntariado.titulo && nuevoVoluntariado.usuario && nuevoVoluntariado.fecha) {
    voluntariados.push(nuevoVoluntariado);
    mostrarVoluntariados();
    actualizarDashboard(); /* Actualizar inicio */
    e.target.reset();
  }
});
document.querySelector('#usuarios form').addEventListener('submit', (e) => { /* Alta -----*/
  e.preventDefault();
  
  const nuevoUsuario = {
    nombre: document.getElementById('alta-usr-name').value,
    email: document.getElementById('alta-usr-email').value,
    contraseña: document.getElementById('alta-usr-pswrd').value
  };
  
  if (nuevoUsuario.nombre && nuevoUsuario.email && nuevoUsuario.contraseña) {
    usuarios.push(nuevoUsuario);
    mostrarUsuarios();
    e.target.reset();
  }
});

/* INICIALIZACIÓN DATOS PÁGINAS ----------------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
  mostrarUsuarios();
  mostrarVoluntariados();
  actualizarDashboard();
  mostrarPagina('dashboard');
});

/* GESTIÓN DE LOGIN ----------------------------------------------------------------------------------*/
document.querySelector('#login form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = document.getElementById('inputEmail').value;
  const contraseña = document.getElementById('inputContraseña').value;
  const logged = document.getElementById('logged');
  const usuarioValido = usuarios.find(usuario => 
    usuario.email === email && usuario.contraseña === contraseña
  );

  if (usuarioValido) { /* Cambiar mail usuario y mensajes */
    logged.textContent = usuarioValido.email;
    logged.classList.remove('disabled');
    logged.removeAttribute('aria-disabled');
    alert('Sesión iniciada correctamente');
    e.target.reset();
  } else {
    alert('Los datos de inicio de sesión son incorrectos');
    e.target.reset();
  }
});