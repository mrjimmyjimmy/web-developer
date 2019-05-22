// import express, body-parser
var express = require('express');
var app = express();
// var bodyParser = require('body-parser');
var bodyParser = require("body-parser");

// use bodyParser
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
// set view engine
app.set('view engine', 'ejs');

var campgrounds = [
  // all images come from https://www.photosforclass.com
  {name: 'Salmon Creek', image: 'https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg'},
  {name: 'Grantin Hill', image: 'https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg'},
  {name: 'Box Hill', image: 'https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg'},
  {name: 'Salmon Creek', image: 'https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg'},
  {name: 'Grantin Hill', image: 'https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg'},
  {name: 'Box Hill', image: 'https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg'},
  {name: 'Salmon Creek', image: 'https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg'},
  {name: 'Grantin Hill', image: 'https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg'},
  {name: 'Box Hill', image: 'https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg'},
  {name: 'Salmon Creek', image: 'https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg'},
  {name: 'Grantin Hill', image: 'https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg'},
  {name: 'Box Hill', image: 'https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg'}
];

// landing page
app.get('/', function(req, res){
  res.render('landing');
});

app.get('/campgrounds', function(req, res){
// passing data in render: {/name: /data}
  res.render('campgrounds', {campgrounds: campgrounds});

});


app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get('/campgrounds/new', function(req, res){
  res.render('new');
});

app.listen(3000, 'localhost', function(){
  console.log('yelp camp is start');
});
