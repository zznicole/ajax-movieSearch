let userInput = $('.search__bar--input');
// $("search__bar--button").on('click', function() {
//   $.ajax('http://www.omdbapi.com/?apikey=171b1b73&t=userInput"').done(function (movieData) {
//     console.log(movieData);
//   });
// });

fetch("htttp://omdbapi.com/?apikey=92bc4124&t=userInput")
  .then(function (response) {
    return response = response.json();
    console.log (response);
  })


