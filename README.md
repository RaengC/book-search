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

Presentation 
*   First upload clean lines, simple and obvious search function

JS & JQ
*	Activate $
*	Link API - https://www.googleapis.com/books/v1/volumes?q=search+terms
*   use async await?
    -   Activate search term on click
    -   Limit each search to 6 items
*   Add function to display search terms
    -   Jquery object to do this within the function. 
    -   Activate the jquery with an event listener
*   Click and open picture to show book summary
*   Drag and drop function
    -   Add drop off zones
    -   Minimise the image sizes in drop off zones. 
