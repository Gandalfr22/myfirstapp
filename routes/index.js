const { response } = require('express');
var express = require('express');
const { request } = require('http');
var router = express.Router();
const postInfo = require('../models/posts')
var posts = []



router.get('/', function(req, res, next) {
 return res.redirect('/home')
});


router.get('/home', function(req, res, next) {
     const findPost = postInfo.find({}).then((data)=>
     {
     posts = [...data]
     posts.reverse();
     res.render('index' , {posts: posts});

     });
          });



module.exports = router;
