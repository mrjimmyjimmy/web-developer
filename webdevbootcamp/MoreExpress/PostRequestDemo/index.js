var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
var friends = [1,2,3,4,5];

app.post('/addfriend', function(req, res){
  var newFriend = req.body.newfriend;
  friends.push(newFriend);
  res.redirect('/');
});

app.get('/', function(req, res){
  res.render('home', {friends: friends});
});

app.listen(3000, 'localhost', function(){
  console.log('server start');
});
