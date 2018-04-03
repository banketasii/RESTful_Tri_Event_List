# RESTful Tri Event List
---------------------------------------------------------------
* RESTful Tri Event List
  - App uses 
    - RESTful routing
    - HTML5
    - Bootstrap V4 css framework    
    - Css3
    - Mongo database
    - Mongoose database framework
    - Node server framework
    - Express web framework
    
  - User enters
    - Date in mm/dd/yy format
    - Event type ex. swim, jog, etc...
    - Event venue
    - Distance in miles
    - Total time in hh:mm:ss
    - Description about event
  
  - App Displays
    - Landing Page
      - Date , event type and distance
      - ???Search option by date and or event type???
    - Event Show Page
      - Date, event type, event venue, distance, time and description
  
  - User can
    - Create event
    - Edit event
    - Remove event
  
---------------------------------------------------------------
* 7 RESTful routes
  - Index - Lists all items 
    - route => /items
    - verb => GET
    - reference files => app.js , index.ejs
  
  - New - Shows the new item form 
    - route => /items/new
    - verb => GET
    - reference files => app.js , new.ejs
    
  - Create - Creates the new item, store it in db, then redirect 
    - route => /items
    - verb => POST
    - reference files => app.js
    
  - Show - Shows info about specific item 
    - route => /items/:id
    - verb => GET
    - reference files => app.js , show.ejs
    
  - Edit - Shows edit form for specific item 
    - route => /items/:id/edit
    - verb => GET
    - reference files => app.js , edit.ejs
    
  - Update - Update specific item in db, then redirect
    - route => /items/:id
    - verb => PUT
    - reference files => app.js    
    
  - Destroy - Delete specific item, then redirect
    - route => /items/:id
    - verb => DELETE
    - reference files => app.js
    
---------------------------------------------------------------
* Files
  
  - app.js - Holds all the setup data and routes

  - index.ejs - Holds the template to show all items

  - new.ejs - Holds the form to enter new item

  - show.ejs - Holds template to show an item

  - edit.ejs - Holds the form to update an item

---------------------------------------------------------------
* Application File Structure
- root\
  + app.js
  + projectTODOlist.txt
  + README.md  
  - public\
    - css\
      + app.css
    - fonts\
      + .ttf => for font used
    - js\
      + eventlist.js
    - images\
      + .svg => for icons in the list
      + .png => for images at bottom
  - views\
    + edit.ejs
    + index.ejs
    + new.ejs
    + show.ejs
    - partials\
      + header.ejs
      + footer.ejs
    