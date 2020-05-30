Project plan

Summary
Using https://developers.google.com/books/ API to retrieve book information on top books by search terms. 6 books displayed below, with image and onclick summary appears. 
*   Search areas displayed in search box:
    -   Author
    -   Genre
    -   Random word (will have to check we can search randomly)
    -

Drag and drop function into two boxes below, maybe and yes (Personal Library) where they are held for user. Ability to move maybe to yes or delete. 
Maybe and yes areas hold 20 books (decrease sizing). 

**  FUTURE WORK -> add capacity to local storage personal library when DOM refreshes. Use log in details, links to purchase areas/access to content. 

Presentation 
*   First upload clean lines, simple and obvious search function

HTML
*   script jquery, Bootscrap, jquery ui

JS & JQ

*	Link API - https://www.googleapis.com/books/v1/volumes?q=search+terms

*   Functon to query API
    -   Jquery/ ajax
    -   Activate jquery with an event listener
    -   Limit search to 6 items
    -   Only return ebooks   
*   DOM manipulation, 
    -   loop to search for selected:
        -   Book tile
        -   image
        -   description
        -   author
    -   Bootscrap to display on DOM
        -   card
        -   toggle to display description
    -   Draggable capacity added to card. 
    -   Remove children on new search. 

*   On ready
    -   Event listener linked to search button. 
    -   Clear button, 
    -   Drag and drop function
        -   Add class for zones, clear function void when cards added. 
        -   Add drop off zones x 2 
            *   Summary List
            *   Personal Library   

CSS
