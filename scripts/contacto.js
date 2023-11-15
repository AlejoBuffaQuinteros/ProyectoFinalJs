const enviarFormulario= document.querySelector('#miFormulario');
const envio =document.querySelector('#bntSendForm')

enviarFormulario.addEventListener("submit", (e) => {
   e.preventDefault();
   var nombre = document.getElementById('nombre').value;
   var email = document.getElementById('email').value;
   var mensaje = document.getElementById('mensaje').value;
   console.log("Nombre: " + nombre);
   console.log("Correo Electrónico: " + email);
   console.log("Mensaje: " + mensaje);
   alert('En la brevedad nos estaremos comunicando con usted ' + nombre )
   enviarFormulario.reset()
});