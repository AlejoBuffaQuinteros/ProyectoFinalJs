const localizacionPersonajes =document.querySelector("#listaLocal");

fetch("https://rickandmortyapi.com/api/location")
   .then(response => response.json())
   .then(data =>{
     console.log(data.results);
     const localitations = data.results;

     localitations.forEach(location => {
         const li = document.createElement("li");
         li.innerText = `Localizacion:${location.name}->Dimension: ${location.dimension}`;
         localizacionPersonajes.append(li);
     });
   
   
   
   })
