const express = require("express");
const bodyParser = require("body-parser");



const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

var FirstName = req.body.firstname;

var LastName = req.body.lastname;

var Email = req.body.email;

var PhoneNumber = req.body.phone;

var Gender = req.body.gender;


    res.send("<h3>____ Server Side </h3> " +"<p></p>"+"User's Name: " + FirstName +" "+ LastName + "<p></p>" + "User's Email: "+ Email + "<p></p> User's Phone number: " + PhoneNumber + " <p><p/> User's Gender: " + Gender);
    console.log(req.body);
});


app.listen(3000, function(){
    console.log("Server running on port 3000");
});