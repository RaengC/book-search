
function queryAPI(search){

    //make Ajax call to google books (with filters for search term, maximum results and free-ebooks)
    $.ajax({
        url: `https://www.googleapis.com/books/v1/volumes?q=search+terms&maxResults=6&filter=free-ebooks`,
        method: "GET",
    })
    .then((response) => {
        //console.log(response);
        
        displayResult(response); //displays result on the DOM
        // console.log(response.items[0].volumeInfo.title);
        // console.log(response.items[0].volumeInfo.imageLinks.thumbnail);

        // response.forEach(search => {
        //     console.log(search.description);
        // })
    })
    .catch((error) => console.log(error));
}

//manipulation on the DOM
function displayResult(result) {
    //create list of results from 'items' in array to display on DOM
    const list = result.items; 

    //console.log(list);
    const bookList = $("#bookSearch");


    //looping through the list specifically for title, image links, categories
    for(let i=0; i < list.length; i++) {
        // console.log(list[i].volumeInfo.title);
        // console.log(list[i].volumeInfo.imageLinks.thumbnail);
        // console.log(list[i].volumeInfo.categories[0]);
        bookList.append(`<li>${list[i].volumeInfo.title}</li>`)
        bookList.append(`<img src="${list[i].volumeInfo.imageLinks.thumbnail}"/>"`)
        bookList.append(`<li>${list[i].volumeInfo.categories[0]}</li>`)

    }
 }

//on ready
$(() => {
    console.log('ready');

    //queryAPI();
   
    // create event listener to displayResult 
    $("#searchBtn").on('click', () => {
        console.log("btn clicked");
        
        const search = $("#searchBtn").val();
        queryAPI(search);
    })

    //add clear button
    $("#clearBtn").on('click', () => {
        console.log("clear clicked");
        $('#selectedItems').empty();
    })
    
})
