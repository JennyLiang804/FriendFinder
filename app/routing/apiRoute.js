var friends = require("../data/friends");

module.exports = function(app) {
    //return all friends found in friends.js as JSON
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        console.log(req.body.scores);

        //Receive user detatls ( name, photo, scores)
        var user = req.body;

        //parseInt for scores
        for(var i = 0;i < user.scores.length; i++){
            user.scores[i] = parseInt(user.scores[i]);
        }

        var beseFriendIndex = 0;
        var minimumDifference = 40;

        
    })
}