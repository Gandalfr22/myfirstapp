const { response } = require('express');
var express = require('express');
const { request } = require('http');
var router = express.Router();
const postInfo = require('../models/posts')
var searchForPost;
var post = [];

router.get('/:postIds', function(req, res, next) {
    searchForPost = req.params.postIds
    const findPost = postInfo.findOne({postId: searchForPost})
    .then((data)=>{   
      post = data
    
  res.render('detailPost',{data: post});
 
})

   


})

module.exports = router;
