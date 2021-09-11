const { response } = require('express');
const express = require('express');
const { request } = require('http');
const router = express.Router();


router.get('/login', function(req, res, next) 
{
    res.render('login');

});

module.exports = router;