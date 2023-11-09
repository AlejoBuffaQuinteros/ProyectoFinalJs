import {data} from "./data/data.js"

const switchButton = document.getElementById('switch');
 
switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    switchButton.classList.toggle('active');
});

function crearTarjetas(){
    const contenido =document.querySelector(".contenido")

    if(contenido){
        for(let i = 0 ; i< data.length; i++){
            
            const personaje = data[i]
    
            let tarjetas = document.createElement("div")
            tarjetas.classList.add("items")
            tarjetas.innerHTML= `<div><a href="./pages/catalogo.html"><img class="buzo" src="${personaje.image}" alt=""><p>${personaje.name}<br>${personaje.status}<br>${personaje.gender}<br>${personaje.origin.name}<br><span class="material-symbols-outlined" style="color: #ffd801;">
            star
            </span><p></a></div>`
            
            contenido.append(tarjetas)
        }
    }
}

crearTarjetas()

const contenido =document.querySelector(".contenido")

function limpiar (){
    const items =document.querySelectorAll(".items");
    items.forEach((item) => {
    item.remove();
    });
}    
    

// if(contenido){
//     for(let i = 0 ; i< data.length; i++){
        
//         const personaje = data[i]

//         let tarjetas = document.createElement("div")
//         tarjetas.classList.add("items")
//         tarjetas.innerHTML= `<div><a href="./pages/catalogo.html"><img class="buzo" src="${personaje.image}" alt=""><p>${personaje.name}<br>${personaje.status}<br>${personaje.gender}<br>${personaje.origin.name}<br><span class="material-symbols-outlined" style="color: #ffd801;">
//         star
//         </span><p></a></div>`
        
//         contenido.append(tarjetas)
//     }
// }



const busqueda = document.querySelector('#barraBusqueda');
const buscar = document.querySelector('#btnBuscar');

busqueda.addEventListener("submit", (e) => {
    e.preventDefault();
    let bus = buscar.value;
    busqueda.reset()
    

    const search = data.filter((personaje) => personaje.name.includes (bus));
    limpiar()
        
        if(search){
            for(let i = 0 ; i< search.length; i++){
            
                const personaje = search[i]
            
                let tarjetas = document.createElement("div")               
                tarjetas.classList.add("items")
                tarjetas.innerHTML= `<div><a href="./pages/catalogo.html"><img class="buzo" src="${personaje.image}" alt=""><p>${personaje.name}<br>${personaje.status}<br>${personaje.gender}<br>${personaje.origin.name}<br><span class="material-symbols-outlined" style="color: #ffd801;">
                star
                </span><p></a></div>`
            
                
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
    //     if(primero){
    //         for(let i = 0 ; i < data.length; i++){
        
    //         const personaje = data[i]

    //         let tarjetas = document.createElement("div")
    //         tarjetas.classList.add("items")
    //         tarjetas.innerHTML= `<div><a href="./pages/catalogo.html"><img class="buzo" src="${personaje.image}" alt=""><p>${personaje.name}<br>${personaje.status}<br>${personaje.gender}<br>${personaje.origin.name}<br><span class="material-symbols-outlined" style="color: #ffd801;">
    //         star
    //         </span><p></a></div>`
        
    //         contenido.append(tarjetas)
    // }
// }
    crearTarjetas(primero)
}


const ordenarZa = document.querySelector(".Za");
ordenarZa.addEventListener("click", ordenarElementosZa);

function ordenarElementosZa(){
    limpiar()
    data.sort((a, b) => b.name > a.name);
    const primero = data[0];
//         if(primero){
//             for(let i = 0 ; i < data.length; i++){
        
//             const personaje = data[i]

//             let tarjetas = document.createElement("div")
//             tarjetas.classList.add("items")
//             tarjetas.innerHTML= `<div><a href="./pages/catalogo.html"><img class="buzo" src="${personaje.image}" alt=""><p>${personaje.name}<br>${personaje.status}<br>${personaje.gender}<br>${personaje.origin.name}<br><span class="material-symbols-outlined" style="color: #ffd801;">
//             star
//             </span><p></a></div>`
        
//             contenido.append(tarjetas)
//     }
// }
    crearTarjetas(primero)
}


