
function queryAPI(){
    let limit = $("#inp-limit").val();
    if(limit === "") {
        limit = 6;
    }

    //make Ajax call to google books
    $.ajax({
        url: `https://www.googleapis.com/books/v1/volumes?q=search+terms&maxResults=6`,
        method: "GET",
    })
    .then((response) => {
        console.log(response);
        console.log('over here');
    })
    .catch((error) => console.log(error));

}



//on ready
$(() => {
    console.log('ready');

    queryAPI();
   
})
