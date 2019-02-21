//require dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

//locating por
var port = process.env.PORT || 8080;

//app.use(bodyParser.urlencoded ({ extended: false}))

//app.use(bodyParser.json());

//get path to the routes
require("./app/routing/api-routing.js")(app);
require("./app/routing/html-route.js")(app);

//console logging/locating port
app.listen(port, () => console.log("Listening on port %s", port));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

app.use(express.static("app/public"));



app.listen(port, () => console.log("Listening on port %s", port));
