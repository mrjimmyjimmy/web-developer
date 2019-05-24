var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restful_blog_app');

// item contains:
// titile
// image
// body
// created date
