"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Setting up the app
let express = require('express');
let app = express();
//Set up the app to fully qualify .ejs file extension
app.set("view engine", "ejs");
let events = [
    {
        date: "08/03/13",
        type: "Sprint Tri",
        venue: "Lake Blackshear",
        distance: 13.1,
        time: "00:45:12",
        description: "Need to work on transitions"
    },
    {
        date: "08/03/14",
        type: "Run",
        venue: "Lake Blackshear",
        distance: 13.1,
        time: "00:40:03",
        description: "Better"
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
    res.send("This is the tri events list new route!");
});
//*** Route - Show
app.route("/events/:id")
    .get((req, res) => {
    res.send("This is the tri events list show route!");
});
//*** Route - Edit
app.route("/events/:id/edit")
    .get((req, res) => {
    res.send("This is the tri events list edit route!");
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
