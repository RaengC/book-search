
function queryAPI(search) {

    $.ajax({
        url: `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=6&filter=ebooks`,
        method: "GET",
    })
        .then((response) => {
            displayResult(response);
        })
        .catch((error) => console.log(error));
}


function displayResult(result) {
    const list = result.items;

    const bookList = $("#bookSearch");
    bookList.children().remove();

    for (let i = 0; i < list.length; i++) {);
        bookList.append(`<div class="card shadow" data-toggle="tooltip" data-placement="right" title='${list[i].volumeInfo.description}'>
                            <img src=${list[i].volumeInfo.imageLinks.thumbnail} class="card-img-top shadow-sm"/>
                            <div>
                                <h5>${list[i].volumeInfo.title}</h5> <br>
                               <h6>${list[i].volumeInfo.authors[0]}</h6>
                            </div>   
                        </div>`)

        $(".card").draggable();
    }
}


$(() => {
    console.log('ready');

    $("#searchBtn").on('click', () => {
        const search = $("#inp-limit").val();
        queryAPI(search);
    })


    $("#clearBtn").on('click', () => {
        $('#bookSearch').empty();
    })

    $("#clearBtn").on('click', () => {
        $("#inp-limit").val("");
    })

    $("#summaryBtn").on('click', () => {
        $("#summaryList .card").remove();
    })
    

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
