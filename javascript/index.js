var container = $("#container");
var searchResult=[];
// API use the fetching images
const ApiUrl="https://www.superheroapi.com/api.php/891370368026086";//Api url
$("button").click(function () {
    var name=document.getElementById("searchbar").value;//name of superhero
    $("#container").html("");
    searchResult = [];
    $.get(`${ApiUrl}/search/${name}`, function (data) {
        let searchResult = data.results;
        
        for (let course of searchResult) {
          //appending the search results in the list 
            container.append(`
                  <li> 
                  <div id="search-results">
                  <div id="image"><img src="${course.image.url}"></div>
                 <div id="name"> <a href="details.html?id=${course.id}">
                   ${course.name}
                   </a>
                   <br>
                  ${
                    course.biography['full-name']
                  }</div>
                  <button id="add-to-fav" onclick="addToFav(${course.id})">add to favourites</button>
             
               
                </a></div>
               
                </div>
            </li>
            <br>
               
          `);
      }
  });

});