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


            })

});