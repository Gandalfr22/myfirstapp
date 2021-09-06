const { response } = require('express');
const express = require('express');
const { request } = require('http');
const router = express.Router();
const postInfo = require('../models/posts')
var posts = []

router.get('/', function(req, res, next) 
{
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
