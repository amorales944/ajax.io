
$("button").on("click", function() {
    var animal = $(this).attr("data-animal");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=qNcbxHYi6nJONESTb1In5a9IFcrgNqlL&limit=8";

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){
          console.log(queryURL);

          console.log(response);
          var results = response.data;
          for (var i = 0; i < results.length; i++) {
            var imageDiv = $("<div class='image'>");
            
            var ratingIMG = $("<p>").text("Rating:" + results[i].rating);
            var titleIMG = $("<p>").text("Title:" + results[i].title);
            var animalImage = $("<img>").attr('src', results[i].images.fixed_height.url);

            imageDiv.append(ratingIMG);
            imageDiv.append(titleIMG);

            $("#sectionDisplay").prepend(animalDiv);
          }
        });
    });
    $("#clearButton").on("click", function(){
            window.location.reload();
    });






// const queries = ["Dog", "Cat", "Snake", "Horse", "Gorilla", "Lion"];

// $("#searchButton").on("click", function() {
//     event.preventDefault();
//     var searchTerm = $("#searchTermID").val().trim();


//         imageDiv.prepend(ratingIMG, titleIMG);

//         $("#sectionDisplay").prepend(imageDiv);
//     });
    


// 
// });