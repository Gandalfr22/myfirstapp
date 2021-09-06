const express = require('express');
const router = express.Router();
const postInfo = require('../models/posts')

function slugify(string) {
  return string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}


router.get('/new-post', function(req, res, next) {
  res.render('addpost');
});

router.post('/save-post', function(req, res, next) {
  
  const {title, content} = req.body
  delete req.body._id
  const infos = new postInfo({
  postId:slugify(title),
  title: title,
  content: content
 });

 infos.save((err,data) => {
  
    res.render('addpost');
 });
    });

router.get('/posts', function(req, res, next) {
 const findPosts = postInfo.find({});
 findPosts.then((data)=>{
 res.json(data);
 });
});


module.exports = router;

