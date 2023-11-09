function enviarFormulario(event) {
   event.preventDefault();
   var nombre = document.getElementById('nombre').value;
   var email = document.getElementById('email').value;
   var mensaje = document.getElementById('mensaje').value;
   console.log("Nombre: " + nombre);
   console.log("Correo Electrónico: " + email);
   console.log("Mensaje: " + mensaje);
}
