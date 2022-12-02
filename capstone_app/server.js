// Get dependencies
var express = require("express");
var path = require("path");
var http = require("http");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
// ROUTES
const index = require("./server/routes/app");

var app = express(); // create an instance of express

// Tell express to use the following parsers for POST data
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());

app.use(logger("dev")); // Tell express to use the Morgan logger

// Add support for CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

//#region "MONGO"
// establish a connection to the mongo database
mongoose.connect(
    process.env.MONGO_URL,
    {
      useNewUrlParser: true,
    },
    (err, res) => {
      if (err) console.error("CONNECTION FAILED: " + err);
      else console.log("Connected to database!");
    }
  );
  
  //#endregion "MONGO"
  
  // Define the port address and tell express to use this port
  const port = process.env.PORT || "3000";
  app.set("port", port);
  
  // Create HTTP server.
  const server = http.createServer(app);
  
  // Tell the server to start listening on the provided port
  server.listen(port, function () {
    console.log("API running on localhost: " + port);
  });