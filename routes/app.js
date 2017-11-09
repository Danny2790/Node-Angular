var express = require('express');
var router = express.Router();
var User = require('../models/user');
router.get('/', function (req, res, next) {
    res.render('node');
});

router.post('/', function(req, res, next){
    var email = req.body.email;
    var user = new User({
        firstName : 'Akash',
        lastName : 'Danao',
        email : email,
        password : 'secret'
    }); 
    user.save(function(err, res){
        console.log(' result ' + res);
        console.log(' err ' + err);
    });
    res.redirect('/'); 
});

module.exports = router;
