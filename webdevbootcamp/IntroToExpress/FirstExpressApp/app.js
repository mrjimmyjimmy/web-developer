var express = require('express');
var app = express();

// / => hi there
app.get('/', function(req, res){
  res.send('hi there');

});
// /byr => goodbye
app.get('/bye', function(req, res){
  res.send('bye');
});

app.get('/r/:sub', function(req, res){
  res.send('sub class');
});

// the order matters, it will match '*' in the end
app.get('*', function(req, res){
  res.send('PAGE NOT FOUND');
});

app.listen(3000, 'localhost', function(){
  console.log('server run');
});
