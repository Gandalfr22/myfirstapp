const { response } = require('express');
const express = require('express');
const { request } = require('http');
const router = express.Router();
const postInfo = require('../models/posts')
var searchForPost;
var post = [];

router.get('/:postIds', function(req, res, next) {
    searchForPost = req.params.postIds
    const findPost = postInfo.findOne({postId: searchForPost})
    .then((data)=>{   
      post = data
      if(post != undefined) {
      res.render('detailPost',{data: post}); 
} else {
      res.render('error',{data: post}); 
}
});
      });

module.exports = router;
