//requiring dependencies

var path = require("path");

//exporting the function below
//with param of "app"

module.exports = function(app) {

//grabbing the information/data called "friends" from home html


app.get("/friends", function(req,res){
  res.sendFile(path.join(__dirname + "/../public/home.html"));

});
app.use(function(req,res) {
  res.sendFile(path.join(__dirname + "/../public/home.html"));
});

//"survey" survey html
  app.get("/survey", function(req,res){
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
      
    });
    app.use(function(req,res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });

  // and all from survey html
  app.get("*", function(req,res){
    res.sendFile(path.join(__dirname,"../survey.html"));
  });
  
};