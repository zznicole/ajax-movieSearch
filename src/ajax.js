$("search__bar--button").on("click", function() {
  $.ajax("http://img.omdbapi.com/?apikey=[92bc4124]&").done(function(response) {;

    for(let movie of response) {
        let searchResult = $(".search__result");
        searchResult.append(response, movie.title)
    }
  });
});