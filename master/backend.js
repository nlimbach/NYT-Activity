//https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=e8a6420e30b54ced9255ef63486505be&q=Trump



// Here we construct our URL
console.log("Test");



    $("#search-key").on("click", function(event) {

        event.preventDefault()
        var searchKeyword = $("#keyword-input").val();
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=e8a6420e30b54ced9255ef63486505be&q=" + searchKeyword;

        console.log(queryURL);

            $.ajax({
                url: queryURL,
                method: "GET"

            }).done(function(response) {

                console.log(response);

                var results = response.data;
                // ========================

                for (var i = 0; i < results.length; i++) {

                    var articleDiv = $("<div>");

                    p.text("Rating: " + results[i].rating);


                    var animalImage = $("<img>");

                    animalImage.attr("src", results[i].images.fixed_height.url);

                    animalDiv.append(p);
                    animalDiv.append(animalImage);
                    $("#gifs-appear-here").prepend(animalDiv);


                }

            });

            })

});