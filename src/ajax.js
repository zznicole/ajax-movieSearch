$(".search__bar--button").on("click", function () {
  let userInput = $(".search__bar--input").val();
  $.ajax("http://www.omdbapi.com/?apikey=171b1b73&t=" + userInput).done(
    function (response) {

      let result = $("#search__result");
      result.empty(); 
      if (response.Response === "False"){
        alert(response.Error);
      } else {
        for (let key in response) {
        if (key === "Poster") {
          result.append(`<div><img src="${response[key]}"></div>`);
        }
        if (key === "Title" || key === "Actors" || key === "Awards") {
          result.append(`<div>${key} ${response[key]}</div>`);
        }
      }
    }     
  });  
});
     
          

 