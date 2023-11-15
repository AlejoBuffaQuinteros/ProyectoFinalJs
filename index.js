import {data} from "./data/data.js"


const switchButton = document.getElementById('switch');
let darkMode = localStorage.getItem("dark-mode") === 'true';

function modoOnOff(){
    document.body.classList.toggle("dark", darkMode);
    switchButton.classList.toggle("active", darkMode);
}

modoOnOff();
 
switchButton.addEventListener("click", () => {
    darkMode = !darkMode;
    localStorage.setItem("dark-mode", darkMode);
    modoOnOff()
});





function crearTarjetas(){
    const contenido =document.querySelector(".contenido")

    if(contenido){
        for(let i = 0 ; i< data.length; i++){
            
            const personaje = data[i]
    
            let tarjetas = document.createElement("div")
            tarjetas.classList.add("items")
            tarjetas.innerHTML= `<div><img class="card" src="${personaje.image}" alt=""><p>${personaje.name}<br>${personaje.status}<br>${personaje.gender}<br>${personaje.origin.name}<br><button class="btnFav" id="btnFavorito"><span class="material-symbols-outlined" style="color: #ffd801;">
            star</span></button><p></div>`
            
            contenido.append(tarjetas)
        }
    }
}

crearTarjetas()



function limpiar (){
    const items =document.querySelectorAll(".items");
    items.forEach((item) => {
    item.remove();
    });
}    


    
const busqueda = document.querySelector('#barraBusqueda');
const buscar = document.querySelector('#btnBuscar');

busqueda.addEventListener("submit", (e) => {
    e.preventDefault();
    let bus = buscar.value;
    busqueda.reset()
    
    const contenido =document.querySelector(".contenido")
    const search = data.filter((personaje) => personaje.name.includes (bus));
    limpiar()
        
        if(search){
            for(let i = 0 ; i< search.length; i++){
            
                const personaje = search[i]
            
                let tarjetas = document.createElement("div")               
                tarjetas.classList.add("items")
                tarjetas.innerHTML= `<div><img class="card" src="${personaje.image}" alt=""><p>${personaje.name}<br>${personaje.status}<br>${personaje.gender}<br>${personaje.origin.name}<br><p></div>`
                            
                contenido.append(tarjetas)
        }
    }
});




const ordenaraZ = document.querySelector(".aZ");
ordenaraZ.addEventListener("click", ordenarElementosAz);

function ordenarElementosAz(){
    limpiar()
    data.sort((b, a) => b.name > a.name);
    const primero = data[0];
    crearTarjetas(primero)
}


const ordenarZa = document.querySelector(".Za");
ordenarZa.addEventListener("click", ordenarElementosZa);

function ordenarElementosZa(){
    limpiar()
    data.sort((a, b) => b.name > a.name);
    const primero = data[0];
    crearTarjetas(primero)
}




