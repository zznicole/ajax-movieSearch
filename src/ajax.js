$(".search__bar--button").on("click", function () {
  let userInput = $(".search__bar--input").val();
  $.ajax("http://www.omdbapi.com/?apikey=171b1b73&t=" + userInput).done(
    function (response) {
      console.log(response);
    }
  );
});
