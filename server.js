const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.listen(3000,function() {
  console.log("Server has started on port 3000");
});

app.get("/", function(req, res)
{
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res)
{
  var x = Number(req.body.Num1);
  var y = Number(req.body.Num2);
  var ans = x/(y*y);
  var fin = ans.toFixed(2)
  res.send("The answer is " +fin);

});

app.get("/Dark", function(req, res)
{
  res.send("<p>What you know is a drop.What you dont know is an ocean.your world and my world are connected to each other...</p>");

});
