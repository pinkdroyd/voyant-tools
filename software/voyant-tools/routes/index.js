var express = require('express');
var router = express.Router();
var fs = require('fs');
var url = require('url');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/files/:filename', function(req, res, next) {
	console.log(__dirname + './public/files/');
  var options = {
    root: './public/files/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  var fileName = "data.txt";
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });
});

router.post('/fileupload/', function(req, res, next) {  
  	console.log("receiving file");
  	var body = '';
    var filePath = './public/files/';
    var fileName = 'data' + Date.now() + '.txt';

    req.on('data', function(data) {    	
        body += data;
    });

    req.on('end', function (){
        fs.appendFile(filePath + fileName, body, function() { 	
           res.send(fileName);
        });
    });

});

module.exports = router;
