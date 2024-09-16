let inpSearchMovie = document.querySelector(".inpSearchMovie");
const btnSearch = document.querySelector(".btn");
let showMovie = document.querySelector(".showMovie");

const getData = function () {
  fetch(`https://www.omdbapi.com/?t=${inpSearchMovie.value}&apikey=2fb8868a`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (inpSearchMovie.value == "") {
      } else {
        let html = `
      <div class='box'>
      <div class = 'detailsBox'>
      <h2 class='titleYear'>${data.Title}</h2>
      <h4 class='titleYear' id='year'>(${data.Year})</h4>
      <div>
      <h6 class='runGenRel'>${data.Runtime}</h6>
      <p class='titleYear'>⃘</p>
      <h6 class='runGenRel'>${data.Genre}</h6>
      <p class='titleYear'>⃘</p>
      <h6 class='runGenRel'>${data.Released}</h6>
      <div>
      <div class='ratingBox'>
      <h6>IMDb RATING</h6>
      <img src="images/star.png" class='starImg rating' />
      <h5 class='rating'>${data.imdbRating}</h5>
      </div>
      <div class='ratingBox'>
      <h6>IMDb VOTES</h6>
      <h5>${data.imdbVotes}</h5></div>
      </div>
      </div>
        <div class='plotBox'>
       <h5>Summary</h5>
       <p>${data.Plot}</p>
       </div>
       <p class ="directorDis">Director:</p>
       <h6 class="actorCol directorDis">${data.Director}</h6>
       <div>
       <p  class="writerDis">Writers: </p>
       <h6 class="actorCol writerDis">${data.Writer}</h6>
       </div>
       <div>
       <p class="actorDis">Stars: </p>
      <h6 class="actorCol actorDis">${data.Actors}</h6>
      </div>
      </div>
      <div class = 'posterBox'>
      <img src="${data.Poster}" id='posterMovie'/></div>
      </div>
      `;
        document.querySelector(".showMovie").innerHTML = html;
      }
    });
};

getData();

btnSearch.addEventListener("click", getData);
