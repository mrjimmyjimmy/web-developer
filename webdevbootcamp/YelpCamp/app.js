var express     = require('express'),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require('mongoose')

mongoose.connect('mongodb://localhost:27017/yelp_camp', { useNewUrlParser: true });

// use bodyParser
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
// set view engine
app.set('view engine', 'ejs');

// Schema setup
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
});

var Campground = mongoose.model('Campground', campgroundSchema);
//
// Campground.create(
//   {
//     name: 'Grantin Hill',
//     image: 'https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg'
//   }, function(error, campground){
//     if (error){
//       console.log(error);
//     } else {
//       console.log('newly created campground: ');
//       console.log(campground);
//     }
//   }
// );


// landing page
app.get('/', function(req, res){
  res.render('landing');
});

app.get('/campgrounds', function(req, res){
  Campground.find({}, function(error, allCampgrounds){
    if (error) {
      console.log(error);
    } else {
      res.render('campgrounds', {campgrounds: allCampgrounds})
    }
  });
});


app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    //create a new campground and save it to DB
    Campground.create(newCampground, function(err, newlyCreated){
      if (err) {
        console.log(err);
      } else {
        //redirect back to campgrounds page
        res.redirect("/campgrounds");
      }
    });
});

app.get('/campgrounds/new', function(req, res){
  res.render('new');
});

app.listen(3000, 'localhost', function(){
  console.log('yelp camp is start');
});
