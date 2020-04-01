document.addEventListener("DOMContentLoaded", function(){
    console.log("Testing DOM");
    let topTenButtonClick = false;
    let luckyButtonClick = false;

    // $("#form").submit(event => {
    //     event.preventDefault();
    //     axios.post("/luckyresult").then(response => {
    //       quote = response.data;
    //       console.log(quote);
    //     });
    // });

    $("#topTenResultsButton").click(function(e) {
        event.preventDefault();
        topTenButtonClick = true;
        getQuery();
    });

    $("#luckyResultButton").click(function(e) {
        event.preventDefault();
        luckyButtonClick = true;
        getQuery();

    });


    function getQuery() {
        if (topTenButtonClick) {
            //show top ten results
            let resultsQuery = $("#searchBox").val();
            console.log("will show results for: " + resultsQuery);
            showTopTenResults(resultsQuery);
        } else if (luckyButtonClick) {
            //show lucky result
            let luckyQuery = $("#searchBox").val();
            console.log("will show one lucky result for: " + luckyQuery);
            // showLuckyResult("https://en.wikipedia.org/wiki/Dog");
            // gettingLuckyPage();
        }
        else {
            console.log('error');
        }
    }

    

    // function showLuckyResult(linkOfLucky) {
    //     // let linkOfLucky = "https://en.wikipedia.org/wiki/Dog";
    //     $("#luckyResultButton").attr("href", linkOfLucky)
        // $("#luckyLink").html("testing");       
        // $("#luckyLink").attr("href", );
        // clickLuckyLink();
    
        
        // $("#luckyLink").trigger('click');

        // axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBZSy_eMGwVqsKZzHBPvIiBz-HBFmK8Uxo&cx=006369568077011760523:re8fjbecuqp&q=${luckyQuery}`)
        //         .then(function (result){
        //             let results = [];
        //             results = result.data.items
        //             return results; 
                       
        //         });

    // }

    // function clickLuckyLink() {
        
    // }

    function showTopTenResults(resultsQuery) {
                axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBZSy_eMGwVqsKZzHBPvIiBz-HBFmK8Uxo&cx=006369568077011760523:re8fjbecuqp&q=${resultsQuery}`)
                .then(function (googleResults) {
                    let results = [];
                    results = googleResults.data.items
                    // let title1 = results[0].title;
                    // console.log(title1);    
                    // return results; 
                    // getTitleSnippetUrl(results);
                    // console.log(results);
                    // let title = results[0].title;
                    // let snippet = results[0].snippet;
                    let link = results[0].link;
                    console.log(link);
                    // displayResult(title, snippet, link);
                    displayedResults = results.map(item => {
                     console.log(item.title.charAt(0));

                        
                        let index = results.indexOf(item)
                        displayResult(index, item.title, item.snippet, item.link);
                    });
                    // resultsToHtml(displayedResults);  
                });
    }

    function displayResult(index, titleOf, snippetOf, linkOf) {
   
       let id = index.toString();
       $("#resultsDisplayed").append(`<div id=${id}></div>`);
       $(`#${id}`).append(`<a class="link" href=${linkOf}></a><br>`);
       $(`#${id} .link`).text(`${linkOf}`);
       $(`#${id}`).append(`<a class="title" href=${linkOf}></a>`);
       $(`#${id} .title`).html(`${titleOf}`);
       $(`#${id}`).append(`<p class="snippet">${snippetOf}</p>`);
        // console.log(`it works for ${titleOf}`);
        // console.log(`it works for ${snippetOf}`);
        // console.log(`it works for ${linkOf}`);
        
        // $(".link").html(titleOf);
        // $(".snippet").html(snippetOf);
        // // $(".link").html("link");
        // $(".link").attr("href", linkOf);
        
    }
    
    function getTitleSnippetUrl(argument) {
            argument.map(item => {
                console.log(item.title);
                console.log(item.snippet);
                console.log(item.link);
            });
    }

    function resultsToHtml(element) {
        $("#resultsDisplayed").html(`${element}`);
    }

    function topTenForloop(array) {
        // array_all_items = [];
        // for (i = 0; i < 10; i++) {
        //     let item_info = [];
        //     item_info.push(array.item.title);
        //     item_info.push(array.item.snippet);
        //     item_info.push(array.item.link);
        //     array_all_items.push(item_info);
            console.log(array);
        }


    

  

    
    // function gettingTopTenSearchQuery() {
    //     $("#topTenResultsButton").click(function(e) {
    //         event.preventDefault();
    //         let resultsQuery = $("#searchBox").val();
    //         console.log(resultsQuery);
        
    //     });
    // }

    // gettingTopTenSearchQuery();

    // function gettingLuckyResultSearchQuery() {
    //     $("#luckyResultButton").click(function(e) {
    //         event.preventDefault();
    //         let luckyQuery = $("#searchBox").val();
    //         console.log(luckyQuery);
        
    //     });
    // }

    // gettingLuckyResultSearchQuery();

    // $(function() {
    //     $("#topTenResultsButton").click(function(e) {
    //         event.preventDefault();
    //         let search = $("#searchBox").val();
    //         console.log(search);
        
    //         // if (($("#rsvp").val()) === "yes") {
    //         //     console.log("if works");
    //         // }
    //     });
    // });
        
});



// document.addEventListener("DOMContentLoaded", function() {
//     console.log("The dom has loaded hp");

//     let searchBox = $("#form").val();
//     let searchButton = $("#topTenResults");
   
    
// });

// searchButton.addEventListener('click', function() {
//     event.preventDefault();
//     console.log(searchBox.value);
// });

// // let searchButton = document.getElementById("topTenResults");
// // // .addEventListener("click", topTenResults);
// // let luckyButton = document.getElementById("luckyResult");
// // // .addEventListener("click", luckyResult);
// // let searchBox= document.getElementById("form").value;


// // searchButton.addEventListener('click', function() {
// //     event.preventDefault();
// //     console.log(searchBox.value);
// // });

// // function topTenResults() {
// //      console.log('top ten');
// // }
    
// // function luckyResult() {
// //     console.log('lucky');
// // }

