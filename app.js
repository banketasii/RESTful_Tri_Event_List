"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Setting up the app
let express = require('express');
let app = express();
//Routes
//Server Listener
app.listen(3000, () => {
    console.log("Tri Event List Server is listening on port 3000");
});
