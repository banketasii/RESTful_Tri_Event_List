"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Setting up the app
let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let methodOverride = require("method-override");
let app = express();
//Connect to mongo db
mongoose.connect("mongodb://localhost/tri_event_list");
//Set up the app to fully qualify .ejs file extension
app.set("view engine", "ejs");
//Set up the app to serve contents of public\
app.use(express.static('public'));
//Set up the app to use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
//Set up the app to use method-override
app.use(methodOverride("_method"));
//Setting up database schema
let eventSchema = new mongoose.Schema({
    date: Date,
    type: String,
    venue: String,
    distance: Number,
    notes: String
});
//Compile schema into a model
let Event = mongoose.model("Event", eventSchema);
//Loading the database with a couple of events
//Event.create(
//  {
//    date: new Date(2017, 7, 4, 0, 45, 5),
//    type: "Run",
//    venue: "Home",
//    distance: 4.0,
//    notes: "Stretch a bit more.  Even though this was a short run, the calves started tightening up"
//  },
//  (err:monMod.Error, event:I_Event)=>{
//    if(err){
//      console.log("Error creating event")
//      console.log(err);
//    }else{
//      console.log("Event save successfull");
//      console.log(event);
//    }
//  }
//);
//Test data
let date1 = new Date(2017, 7, 4, 0, 45, 5);
let date2 = new Date(2017, 8, 23, 7, 23, 54);
let events = [
    {
        date: date1,
        type: "Sprint Tri",
        venue: "Lake Blackshear",
        distance: 13.1,
        notes: "Need to work on transitions"
    },
    {
        date: date2,
        type: "Bike",
        venue: "Cheehaw Park",
        distance: 100,
        notes: "Need work on hills"
    }
];
//RESTful Routes
app.route("/")
    .get((req, res) => {
    res.redirect("/events");
});
//*** Route - Index, Create
app.route("/events")
    .get((req, res) => {
    //Get all events from the db
    Event.find({}, (err, events) => {
        if (err) {
            console.log("There was an error finding the events");
            console.log(err);
        }
        else {
            console.log("Events have been found");
            res.render('index', { events: events });
        }
    });
})
    .post((req, res) => {
    //@TODO - Need to refactor this.  I am sure this will not be the only place this code is needed
    let date = req.body.event.date;
    let dateArray = date.split('-');
    let year = parseInt(dateArray[0]);
    let month = parseInt(dateArray[1]);
    let day = parseInt(dateArray[2]);
    let hours = parseInt(req.body.event.hours);
    let minutes = parseInt(req.body.event.minutes);
    let seconds = parseInt(req.body.event.seconds);
    let newDate = new Date(year, month, day, hours, minutes, seconds);
    let type = req.body.event.type;
    let venue = req.body.event.venue;
    let distance = parseInt(req.body.event.distance);
    let notes = req.body.event.notes;
    let newEvent = {
        date: newDate,
        type: type,
        venue: venue,
        distance: distance,
        notes: notes
    };
    Event.create(newEvent, (err, event) => {
        if (err) {
            console.log("There was an error creating/adding event");
            console.log(err);
        }
        else {
            console.log("Event successfully added");
            console.log(event);
            //#3 - redirect back to events page
            res.redirect('/events');
        }
    });
});
//*** Route - New
app.route("/events/new")
    .get((req, res) => {
    res.render("new");
});
//*** Route - Show, Update
app.route("/events/:id")
    .get((req, res) => {
    /*Find the event with provided id
      render show.ejs template with that event */
    Event.findById(req.params.id, (err, event) => {
        if (err) {
            console.log("An error occured while finding event");
            console.log(err);
        }
        else {
            res.render('show', { event: event });
        }
    });
})
    .put((req, res) => {
    //Find item by the id and update it
    Event.findByIdAndUpdate(req.params.id, req.body.event, (err, updatedEvent) => {
        if (err) {
            console.log('Error occurred during updating event');
            res.redirect('/events');
        }
        else {
            //redirect back to SHOW route to show update on specific item
            res.redirect('/events/' + req.params.id);
        }
    });
});
//*** Route - Edit
app.route("/events/:id/edit")
    .get((req, res) => {
    //Find the specific item by id
    Event.findById(req.params.id, (err, foundEvent) => {
        if (err) {
            console.log('Error occurred during finding event to edit');
            res.redirect('/events');
        }
        else {
            //render edit.ejs with form filled out using contents of found item {edit.ejs variable : app.js variable}
            res.render('edit', { event: foundEvent });
        }
    });
});
//*** Route - Catch-All
app.route("*")
    .get((req, res) => {
    res.send("This is the tri events list catch-all route!");
});
//Server Listener
app.listen(3000, () => {
    console.log("Tri Event List Server is listening on port 3000");
});
