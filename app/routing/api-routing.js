var friends = require("../data/friends.js");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    var totalCalc = 0;
    var bestMatch = {
      name: "",
      photo: "",
      friendCalc: 1000
    };

    //setting up for parsing and turning info from string to number
    var userData = req.body;
    var userName = userData.name;
    var userScores = userData.scores;

    var scoreResult = userScores.map(function (item) {
      return parseInt(item, 10);
    });

    userData = {
      name: req.body.name,
      photo: req.body.photo,
      scores: scoreResult
    };

    //set up console.log to see if we are doing things right and get the sum calculation correct.

    console.log("Name: " + userName);
    console.log("User score: " + userScores);

    var sumTotal = scoreResult.reduce((a, b) => a + b, 0);
    console.log("The total sum of user score is " + sumTotal);
    console.log("The best match for friend is " + bestMatch.friendCalc);

    //next is a loop to run through and calculate the scores of the possible friends to go to the set after to make make a match of the best friend

    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i].name);
      totalCalc = 0;
      console.log("Total calc is: " + totalCalc);
      console.log("Best match for friend " + bestMatch.friendCalc);

      var bffScore = friends[i].scores.reduce((a, b) => a + b, 0);
      console.log("Total friends score is: " + bffScore);
      totalCalc += Math.abs(sum - bffScore);
      console.log(totalCalc);

      //this is the if statement to find the bff
      if (totalCalc <= bestMatch.friendCalc) {
        bestMatch.name = friends[i].name;
        bestMatch.photo = friends[i].photo;
        bestMatch.friendCalc = totalCalc;
      };

      console.log(totalCalc);
    };
    console.log(bestMatch);
    friends.push(userData);
    console.log(userData);
    res.json(bestMatch);

  });
};