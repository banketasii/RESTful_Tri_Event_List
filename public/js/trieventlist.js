"use strict";
/* RESTful Tri Event List JS */
console.log("Testing from trieventlist.js file");
let ul = document.getElementById("eventlist");
let lis = document.getElementsByTagName("li");
let liClass = "a-listItem";
let liHref = "/events/<%= events[i]['_id'] %>";
let liText = "View Event";
for (let i = 0; i < lis.length; i++) {
    let htmlAddon = "";
    let htmlAddonBeg = "<img class='event-icon img-fluid' id='";
    let htmlAddonEnd = "'>";
    if (lis[i].innerText.toLocaleLowerCase().includes("run") || lis[i].innerText.toLocaleLowerCase().includes("jog")) {
        htmlAddon = htmlAddonBeg + "runIcon" + htmlAddonEnd;
    }
    else if (lis[i].innerText.toLocaleLowerCase().includes("bike") || lis[i].innerText.toLocaleLowerCase().includes("cycle")) {
        htmlAddon = htmlAddonBeg + "bikeIcon" + htmlAddonEnd;
    }
    else if (lis[i].innerText.toLocaleLowerCase().includes("swim")) {
        htmlAddon = htmlAddonBeg + "swimIcon" + htmlAddonEnd;
    }
    else {
        htmlAddonBeg + "finishIcon" + htmlAddonEnd;
    }
    lis[i].innerHTML = lis[i].innerHTML + htmlAddon;
}
