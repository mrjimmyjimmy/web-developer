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

app.listen(3000, 'localhost', function(){
  console.log('server run');
});
