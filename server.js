var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var people = [
    {
        name: "Mick Jagger",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/66/Mick-Jagger-1965b.jpg",
        scores: [5, 1, 3, 1, 4, 1, 2, 4, 2, 1]
    },
    {
        name: "Paul McCartney",
        image: "https://e.snmc.io/i/300/s/684f84f7fb8ecebe866b2f9496d4350f/1188523",
        scores: [5, 1, 3, 1, 4, 1, 2, 4, 2, 1]
    },
    {
        name: "Carlos Santana",
        image: "http://forguitarplayersonly.com/wp-content/uploads/Santana.jpg",
        scores: [5, 3, 1, 4, 5, 1, 4, 5, 1, 4]
    },
    {
        name: "Kendrick Lamar",
        image: "http://www.godisinthetvzine.co.uk/wp-content/uploads/2017/10/tde-holiday-collection-2016-kendrick-lamar.jpg",
        scores: [1, 1, 4, 2, 3, 5, 5, 2, 5, 5]
    }
];


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
  });


app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.get("/survey/people", function(req, res) {
    return res.json(people);
  });

app.post("/survey/add", function(req, res) {

    var userInput = req.body;

    var num1 = parseInt(userInput.scores[0])
    var num2 = parseInt(userInput.scores[1])
    var num3 = parseInt(userInput.scores[2])
    var num4 = parseInt(userInput.scores[3])
    var num5 = parseInt(userInput.scores[4])
    var num6 = parseInt(userInput.scores[5])
    var num7 = parseInt(userInput.scores[6])
    var num8 = parseInt(userInput.scores[7])
    var num9 = parseInt(userInput.scores[8])
    var num10 = parseInt(userInput.scores[9])
  
    var newPerson = 
    {
        name: `${userInput.name}`,
        image: `${userInput.image}`,
        scores:[num1, num2, num3, num4, num5, num6, num7, num8, num9, num10],
    }

    console.log(newPerson);

    people.push(newPerson);
  
    res.json(newPerson);
  });
  

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
    