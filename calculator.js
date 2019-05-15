// jshint esversion:6

const express = require ("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function (req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

var name = (req.body.name);
var num1 = Number(req.body.n1);
var num2 = Number(req.body.n2);
var result = num1 + num2;

res.send(name + ", The result is " + result);
});

// This is for the form
app.get("/application", function(req, res){
  res.sendFile(__dirname + "/application.html");
});

app.post("/application", function(req, res){
  var firstname = (req.body.firstname);
  var surname = (req.body.surname);
  var email= (req.body.email);
  var reply = "Thank you for your application " + firstname + " " + surname;
  var reply2 = "We get back @ " + email;
  res.send(reply + "<br>"+ reply2);
});


app.listen(5000, function(){
  console.log("Server is running at port 5000");
});
