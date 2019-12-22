const express = require("express");
const app = express();


let port = 3000;

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");

});

app.get("/campgrounds", function(req, res){
     let campgrounds = [
         {name: "My Dream iPhone", image: "https://media.takealot.com/covers_tsins/59156825/59156825-1-full.jpeg"},
         {name: "Granite Hill", image: "https://media.takealot.com/covers_tsins/62670851/62670851-1-full.jpg"},
         {name: "Mountain Goat's Rest", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/2018_Audi_A1_S_Line_30_TFSi_S-A_1.0.jpg/800px-2018_Audi_A1_S_Line_30_TFSi_S-A_1.0.jpg"}
     ];

     res.render("campgrounds", {campgrounds: campgrounds});
});


app.listen(port, function() {
    console.log("Aisha's Servers Ready");
    
});
