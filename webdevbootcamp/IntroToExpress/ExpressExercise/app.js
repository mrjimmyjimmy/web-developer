var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hi there, welcome');
});

app.get('/speak/pig', function(req, res){
  res.send('pig');
});

app.get('*', function(req, res){
  res.send('page not found');
})

app.listen(3000, 'localhost');
