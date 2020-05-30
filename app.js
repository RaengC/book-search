
function queryAPI(search) {

    //make Ajax call to google books (with filters for search term, maximum results and free-ebooks)
    $.ajax({
        url: `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=6&filter=ebooks`,
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
    bookList.children().remove();

    //looping through the list specifically for title, image links, categories
    for (let i = 0; i < list.length; i++) {
        // console.log(list[i].volumeInfo.title);
        // console.log(list[i].volumeInfo.imageLinks.thumbnail);
        // console.log(list[i].volumeInfo.categories[0]);
        bookList.append(`<div class="card" data-toggle="tooltip" data-placement="right" title='${list[i].volumeInfo.description}'>
                            <img src=${list[i].volumeInfo.imageLinks.thumbnail} class="card-img-top"/>
                            <div>
                                <h5>${list[i].volumeInfo.title}</h5> <br>
                               <h6>${list[i].volumeInfo.authors[0]}</h6>
                            </div>   
                        </div>`)

        //adding preview

        $(".card").draggable();

    }
}



//on ready
$(() => {
    console.log('ready');

    //queryAPI();

    // create event listener to displayResult 
    $("#searchBtn").on('click', () => {
        //console.log("btn clicked");

        const search = $("#inp-limit").val();

        queryAPI(search);
    })

    //add clear button
    $("#clearBtn").on('click', () => {
        //console.log("clear clicked");
        $('#bookSearch').empty();
    })

    //attempting to clear input on use of clearBtn
    $("#clearBtn").on('click', () => {
        $("#inp-limit").val("");
    })


    //$(".canDrag").draggable();

    $("#summaryList").droppable({
        drop: (event, ui) => {
            $("#summaryList").addClass('dropOnActive');
            ui.draggable.addClass('dropOnActive')

            ui.draggable.removeAttr('style');
            $("#summaryList").append(ui.draggable);
        }
    });

    $("#yesList").droppable({
        drop: (event, ui) => {
            $("#yesList").addClass('holdOnActive');
            ui.draggable.addClass('holdOnActive')

            ui.draggable.draggable('disable');
            ui.draggable.removeAttr('style');
            $("#yesList").append(ui.draggable);
        }
    });


})
