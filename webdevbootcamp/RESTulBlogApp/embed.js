var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog_demo', { useNewUrlParser: true });

// Post -title content
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});

var Post = mongoose.model('Post', postSchema);

//User - email, name
var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  posts: [postSchema]
});

var User = mongoose.model('User', userSchema);

// var newUser = new User({
//   name: 'molly',
//   email: 'molly@gmail.com'
// });

// newUser.posts.push({
//   title: 'molly test',
//   content: 'this is post inside user'
// });

// newUser.save(function(err, user){
//   if (err) {
//     console.log(err);
    
//   } else {
//     console.log(user);
    
//   }
// });

// var newPost = new Post({
//   title: 'test1 post',
//   content: 'this is the test one post'
// });

// newPost.save(function(err, post){
//   if (err) {
//     console.log(err);
    
//   } else {
//     console.log(post);
    
//   }
// });

User.findOne({name: 'molly'}, function(err, user){
  if (err) {
    console.log(err);
    
  } else {
    user.posts.push({
        title: 'test3 post',
        content: 'this is the test 3 post'
    });
    user.save(function(err, user){
      if (err) {
        console.log(err);
        
      } else {
        console.log(user);
        
      }
    });
    
  }
});

