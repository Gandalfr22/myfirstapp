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

// GÖNDERİ EKLEME EKRANINA GEL
router.get('/new-post', function(req, res, next) {
  res.render('addpost');
});


// FORMDAN GELEN VERİLERİ KAYDET
router.post('/save-post', function(req, res, next) {
  
  const {title, content} = req.body
  delete req.body._id
  const infos = new postInfo({
  postId:slugify(title),
  title: title,
  content: content
 });

 infos.save((err,data) => {
  if (err){
    res.json(err);
  }
  else {
    return res.redirect('/home')}
 });
    });



module.exports = router;

