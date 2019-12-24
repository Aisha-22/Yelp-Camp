const express = require("express");
const app = express();
const bodyParser = require("body-parser");


let port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "My Dream iPhone", image: "https://pixabay.com/get/57e1d3404e53a514f6da8c7dda793f7f1636dfe2564c704c72287bd3904ec351_340.jpg"},
    {name: "Granite Hill", image: "https://pixabay.com/get/55e4d5454b51ab14f6da8c7dda793f7f1636dfe2564c704c72287bd3904ec351_340.jpg"},
    {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/57e6d7454e53ae14f6da8c7dda793f7f1636dfe2564c704c72287bd3904ec351_340.jpg"},
    
];

app.get("/", function(req, res) {
    res.render("landing");

});

app.get("/campgrounds", function(req, res){
  

     res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    // res.send("YOU HIT THE POSTROUTE!")
    // We are gping to type and enter a camp name from a form and add it to the array
    let name = req.body.nameTextbox;
    let image = req.body.imageTextbox;
    let newCampground = {name: name, image: image}
    campgrounds.push(newCampground);

    //navigate to the campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req,res){
    res.render("new.ejs");
});

app.listen(port, function() {
    console.log("Aisha's Servers Ready");
    
});
