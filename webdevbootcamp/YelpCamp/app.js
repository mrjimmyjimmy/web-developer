var express     = require('express'),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require('mongoose'),
    Campground  = require('./models/campground');

mongoose.connect('mongodb://localhost:27017/yelp_camp', { useNewUrlParser: true });

// use bodyParser
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
// set view engine
app.set('view engine', 'ejs');

// landing page
app.get('/', function(req, res){
  res.render('landing');
});

//INDEX - show all campgrounds
app.get('/campgrounds', function(req, res){
  Campground.find({}, function(error, allCampgrounds){
    if (error) {
      console.log(error);
    } else {
      res.render('index', {campgrounds: allCampgrounds})
    }
  });
});

// CREATE - add new campgrounds to DB
app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;

    var newCampground = {name: name, image: image, description: desc}
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

// NEW - show form to create new campground
app.get('/campgrounds/new', function(req, res){
  res.render('new');
});

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            //render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
})

app.listen(3000, 'localhost', function(){
  console.log('yelp camp is start');
});
