

function buscarNombre(nombreBuscado, passwordBuscado) {
    for (const usuario of usuarios) { // Recorremos el array "usuarios"
        if (usuario.email === nombreBuscado && usuario.password === passwordBuscado) { // Comparación
            return usuario.email; // Devolvemos el email y salimos del bucle
        }
    }
    return null; // Si no se encuentra el usuario, devolvemos null
}




document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario recargue la página automáticamente

let email = document.getElementById("email").value; // Obtén el valor del campo de email
let password = document.getElementById("password").value;

   let encontrado=buscarNombre(email,password); // se pasa a la variable lo que devuelve la funcion

   if(encontrado != null){

    alert("¡¡Bienvenido de nuevo!!")
    document.getElementById("no-login").textContent = email; // Cambia el texto de "No login"
   }else{
    alert("El usuario no esta registrado pruebe otra vez")
   }








    
});
