"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Setting up the app
let express = require('express');
let app = express();
//Set up the app to fully qualify .ejs file extension
app.set("view engine", "ejs");
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
//*** Route - Index
app.route("/events")
    .get((req, res) => {
    //  res.send("This is the tri events list index route!");
    res.render("index", { events: events });
});
//*** Route - New
app.route("/events/new")
    .get((req, res) => {
    res.render("new");
});
//*** Route - Show
app.route("/events/:id")
    .get((req, res) => {
    res.render("show", { event: events[0] });
});
//*** Route - Edit
app.route("/events/:id/edit")
    .get((req, res) => {
    res.render("edit", { event: events[0] });
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
