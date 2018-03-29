"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Setting up the app
let express = require('express');
let app = express();
//RESTful Routes
app.route("/")
    .get((req, res) => {
    res.redirect("/events");
});
//*** Route - Index
app.route("/events")
    .get((req, res) => {
    res.send("This is the tri events list index route!");
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
