var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('home');
})

app.get('/fallinlovewith/:thing', function(req, res){
  var thing = req.params.thing;
  res.render('love', {thingVar: thing});
});

app.get('/posts', function(req, res){
  var posts = [
    {title: 1, author: 'Jimmy1'},
    {title: 2, author: 'Jimmy2'},
    {title: 3, author: 'Jimmy3'},
  ];

  res.render('posts', {posts: posts});

});


app.listen(3000, 'localhost', function(){
  console.log('the server start');
});
