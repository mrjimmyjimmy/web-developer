var express               = require('express'),
    bodyParser            = require('body-parser'),
    app                   = express(),
    methodOverride        = require('method-override'),
    expressSanitizer      = require('express-sanitizer'),
    passport              = require('passport'),
    localStrategy         = require('passport-local'),
    // passportLocalMongoose = require('passport-local-mongoose'),
    User                  = require('./models/user'),
    Blog                  = require('./models/blog'),
    mongoose              = require('mongoose');

// app config
// mongoose.connect('mongodb://localhost/restful_blog_app', { useNewUrlParser: true });
mongoose.connect('mongodb://localhost/auth_demo_app', { useNewUrlParser: true });


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride('_method'));


app.use(require('express-session')({
  secret: 'jimmy',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/', function(req, res){
  res.redirect('/blogs');
});

//INDEX ROUTES
app.get('/blogs', function(req, res){
  Blog.find({}, function(err, blogs){
    if (err) {
      console.log(err);
    } else {
      res.render('index', {blogs: blogs});
    }
  });
});

//NEW ROUTES
app.get('/blogs/new', function(req, res){
  res.render('new');
});

// CREATE ROUTE
app.post("/blogs", function(req, res){
  // create blog
  console.log(req.body);
  console.log("===========")
  console.log(req.body);
  Blog.create(req.body.blog, function(err, newBlog){
    if(err){
      res.render("new");
    } else {
      //then, redirect to the index
      res.redirect("/blogs");
    }
  });
});

//SHOW ROUTES
app.get('/blogs/:id', function(req, res){
  Blog.findById(req.params.id, function(err, foundBlog){
    if (err) {
      res.redirect('/blogs');
    } else {
      res.render('show', {blog: foundBlog});
    }
  });
});

//EDIT ROUTES
app.get('/blogs/:id/edit', function(req, res){
  Blog.findById(req.params.id, function(err, foundBlog){
    if (err) {
      res.redirect('/blogs');
    } else {
      res.render('edit',{blog: foundBlog});
    }
  });
});

// UPDATE ROUTE
app.put("/blogs/:id", function(req, res){
  req.body.blog.body = req.sanitize(req.body.blog.body)
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
    if(err){
      res.redirect("/blogs");
    }  else {
      res.redirect("/blogs/" + req.params.id);
    }
  });
});

//DELETE ROUTES
app.delete('/blogs/:id', function(req, res){
  Blog.findByIdAndRemove(req.params.id, function(err){
    if (err) {
      res.redirect('/blogs');
    } else {
      res.redirect('/blogs');
    }
  });
});

// ===================
// login funciton here
// ===================
app.get('/secret', isLoggedIn, function(req, res){
  res.render('secret');
});

//Auth routes
//show sign up form
app.get('/register', function(req, res){
  res.render('register');
});

//handling user sign up
app.post('/register', function(req,res){
  req.body.username
  req.body.password
  User.register(new User({username: req.body.username}), req.body.password, function(err, user){
    if (err) {
      console.log(err);
      return res.render('register');
      
    } else {
      passport.authenticate('local')(req, res, function(){
        res.redirect('/secret');
      });
    }
  });
});

//LOGIN ROUTES
//render login form
app.get('/login', function(req, res){
  res.render('login');
});
//login logic
//middleware
app.post('/login', passport.authenticate('local',{
  successRedirect: '/secret',
  failureRedirect: '/login'

}) ,function(req, res){
});

app.get('/logout', function(req, res){
  req.logOut();
  res.redirect('/login');
});


function isLoggedIn(req, res, next){
  // console.log(req);
  
  if(req.isAuthenticated()){
    console.log('login success');
    
    return next();
  }
  res.redirect('/login');
}


app.listen(3000, 'localhost', function(){
  console.log('Server running!');
});
