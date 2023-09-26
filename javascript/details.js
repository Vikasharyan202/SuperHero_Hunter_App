const container = document.querySelector('.my-container');
//to extract the id of superhero from link
function getId(id) {
    const url = new URLSearchParams(window.location.search);
    return url.get(id);
  }
  //to get all the details
function getDetails(id)
{ 
    // API use the facting images
const url="https://www.superheroapi.com/api.php/891370368026086";
$.get(`${url}/${id}`,function(data)
{
    $('#my-container').append(`
   
    <div id="details">
    <h1 id="more-details">More about the superhero</h1>
    <img src="${data.image.url}">
    
    <h1>${data.name}</h1>
    <h2>${data.biography['full-name']}</h2>
    <h2> Intelligence : ${data.powerstats.intelligence}</span>
    <h2> Strength : ${data.powerstats.strength}</h2>
    <h2>Speed : </span> <span> ${data.powerstats.speed}</h2>
    <h2> Durability: </span> <span> ${data.powerstats.durability}</h2>
    <h2>Power :</span> <span>${data.powerstats.power}</h2>
     <h2> Combat :</span> <span>${data.powerstats.combat}</h2>
   </div>`
        
    );

});  
}
const heroId = getId('id');
getDetails(heroId);                          
         