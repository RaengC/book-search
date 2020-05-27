
function queryAPI(search){
    //below not required, max result in url. 
    // let limit = $("#inp-limit").val();
    // if(limit === "") {
    //     limit = 6;
    // }

    //make Ajax call to google books
    $.ajax({
        url: `https://www.googleapis.com/books/v1/volumes?q=search+terms&maxResults=6&filter=free-ebooks`,
        method: "GET",
    })
    .then((response) => {
        //console.log(response);
        displayResult(response);
        // console.log(response.items[0].volumeInfo.title);
        // console.log(response.items[0].volumeInfo.imageLinks.thumbnail);

        // response.forEach(search => {
        //     console.log(search.description);
        // })
    })
    .catch((error) => console.log(error));
}

function displayResult(result) {
    //create list of results from 'items' in array
    const list = result.items;
    //console.log(list);
    const bookList =$("#bookSearch");

    //looping through the list specifically for title, image links, categories
    for(let i=0; i < list.length; i++) {
        console.log(list[i].volumeInfo.title);
        console.log(list[i].volumeInfo.imageLinks.thumbnail);
        console.log(list[i].volumeInfo.categories[0]);
        bookList.append(`<li>${list[i].volumeInfo.title}</li>`)
        bookList.append(`<img src="${list[i].volumeInfo.imageLinks.thumbnail}"/>"`)
        bookList.append(`<li>${list[i].volumeInfo.categories[0]}</li>`)
    }
 }


//eventListener to be created 

//display list to DOM
// function drawSearch(book) {
//     const bookList =$("#bookSearch");

//     book.forEach((book) =>{
//         bookList.append(`<li></li>`)
//     })
    

// }

// function drawSearch(book){
//     book.forEach((bookSearch) => {
//         const image = $(`<img src="${bookSearch.volumeInfo.imageLinks.thumbnail}" class="bookImage" />`)

//         image.on('click', () => {
//             console.log(bookSearch);
//         })
//     })

// }

//on ready
$(() => {
    console.log('ready');

    queryAPI();
   // drawSearch();

    $(".eventListener").on('click', (e) => {
        console.log(e);
        console.log(e.volumeInfo);
    
        const bookElement = $(e.volumeInfo);

    })
    
   
})
