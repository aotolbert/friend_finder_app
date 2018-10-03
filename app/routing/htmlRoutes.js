


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


  module.exports = (newPerson);


  