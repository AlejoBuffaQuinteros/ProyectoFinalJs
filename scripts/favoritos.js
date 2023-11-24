const favoritos = document.querySelectorAll('.items');
const botonFav = document.querySelectorAll('.btnFav');
const datosFavoritos = [];

botonFav.forEach((boton, index) => {
   boton.addEventListener("click", () => {
      const elementoFav = favoritos[index];
      if (elementoFav) {
         const infoTexto = elementoFav.querySelector('p').innerText.split('\n');
         const imagenURL = elementoFav.querySelector('.card').src;
         const infoFavorito = {
            nombre: infoTexto[0],
            estado: infoTexto[1],
            genero: infoTexto[2], 
            origen: infoTexto[3],
            imagen: imagenURL,
         };
         datosFavoritos.push(infoFavorito);

         localStorage.setItem('datosFavoritos', JSON.stringify(datosFavoritos));

      }
   });
});


document.addEventListener('DOMContentLoaded', function () {
   const resultadoContainer = document.querySelector('.contenedorFavoritos');
   const datosFavoritosS = localStorage.getItem('datosFavoritos');

   if (datosFavoritosS) {
      const datosFavoritos = JSON.parse(datosFavoritosS);
      datosFavoritos.forEach(favorito => {
         const nuevoElemento = document.createElement('div');
         nuevoElemento.classList.add("items")
         nuevoElemento.innerHTML = `<div id="eliminar"><img src="${favorito.imagen}" alt="Imagen del favorito"><p>${favorito.nombre}<br>${favorito.estado}<br>${favorito.genero}<br>${favorito.origen}<br><button class="btnEliminarFav"><span class="material-symbols-outlined"style="color: #fc0000";>close</span></button></p></div>`;
         resultadoContainer.append(nuevoElemento);
      });

      const botonesEliminar = document.querySelectorAll('.btnEliminarFav');
      botonesEliminar.forEach(boton => {
         boton.addEventListener('click', function() {
            const elimItem = this.getAttribute('data-items');
            datosFavoritos.splice(elimItem, 1);
            localStorage.setItem('datosFavoritos', JSON.stringify(datosFavoritos));
            this.closest('.items').remove();
            alert('Se elimino favorito')
         });
      });
   }
});

