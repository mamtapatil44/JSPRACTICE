document.addEventListener("DOMContentLoaded", () => {
  function createSearchConatiner() {
    const searchContainer = document.getElementById("search-container");
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Search the movie";
    searchInput.classList.add("serach-input");
    searchInput.addEventListener("input", handleSearch);

    const button = document.createElement("button");
    button.textContent = "Search";
    button.classList.add("btn-search");
    button.addEventListener("click", handleSearch);

    searchContainer.appendChild(searchInput);
    searchContainer.appendChild(button);
  }

  function createResultConatiner() {
    const resultContainer = document.getElementById("result-conatiner");

    function renderResult(results) {
      resultContainer.innerHTML = "";
      if (results.length === 0) {
        const noResultContainer = document.createElement("p");
        noResultContainer.textContent = "No Result......";
        noResultContainer.classList.add("no-data-text");
        resultContainer.appendChild(noResultContainer);
      } else {
        results.forEach((movie) => {
          const movieCard = document.createElement("div");
          movieCard.classList.add("movie-card");

          const title = document.createElement("h2");
          title.classList.add("movie-title");
          title.textContent = movie.title;

          const releaseDate = document.createElement("p");
          releaseDate.textContent = `Release Date : ${movie.release_date}`;

          const overview = document.createElement("p");
          overview.textContent = movie.overview;

          const moviePoster = document.createElement("img");
          moviePoster.src = movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "no-poster.jpg";

          movieCard.appendChild(title);
          movieCard.appendChild(releaseDate);
          movieCard.appendChild(overview);
          movieCard.appendChild(moviePoster);

          resultContainer.appendChild(movieCard);
        });
      }
    }

    return {
      renderResult,
    };
  }

  async function fetchData(query, callback) {
    const apiKey = "5e74a0191d2d9537d78b74f012e96825"; 
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
    try{
        const res = await fetch(apiUrl);
        const data = await res.json();
         if(data){
            callback(data.results)          
        }
        else{
            callback([])
        }
    }catch(err){
        console.log("error in fetching data== ", err)
    }
  }

  function handleSearch() {
    const searchInput = document.querySelector("#search-container input");
    const inputvalue = searchInput.value.trim();
    console.log("inputvalue==== ",inputvalue)
    if(inputvalue !== " "){
     fetchData(inputvalue,resultsComponent.renderResult)
    }
  }

  // initialize component
  createSearchConatiner();
  const resultsComponent = createResultConatiner();
});
