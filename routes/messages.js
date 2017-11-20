var express = require("express");
var router = express.Router();
var Message = require("../models/message");

// As messages route already on /message
router.post('/', function(req, res, next){
    var message = new Message({
        content : req.body.content
    });
    message.save(function(err,result){
        if(err){
            return res.status(500).json({
                title : "An error occured",
                error : err
            });
        }
        res.status(201).json({
            message : 'success',
            obj : result
        });
    });
});

module.exports = router;