let movies = [];
let movieContainer = document.getElementById("movie-container");
let inputSearch = document.getElementById("search-input");
async function fetchmovies() {
  const query = inputSearch.value;
  movies = [];
  movieContainer.innerHTML = '';
  console.log("query==== ", query);
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=5e74a0191d2d9537d78b74f012e96825&query=${query}`
  );
  const json = await data.json();
  movies = json.results;
  if (movies) {
    movies.forEach((movie) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.overview}</p>`;

      movieContainer.appendChild(card);
    });
  } else{
    const div = document.createElement("div");
    div.innerHTML = `<span> No Data Found......</span>`
  }
}
