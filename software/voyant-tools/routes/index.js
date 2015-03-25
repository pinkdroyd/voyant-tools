var express = require('express');
var router = express.Router();
var fs = require('fs');
var url = require('url');
var path = require('path');
var formidable = require('formidable');
var util = require('util');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/fileupload/', function(req, res, next) {  
  	console.log("receiving file");
 	var filePath = './public/files/';
 	var form = new formidable.IncomingForm();
 	form.uploadDir = filePath;

    form.on('file', function(name, file) {
    	var fileExtension = '';

    	if(file.type === 'text/plain'){	
    		fileExtension = ".txt";
    	} else if(file.type === 'text/xml') {
    		fileExtension = ".xml";
    	} else {
    		console.log("filetype not supported");
    	}
    	file.name  = name + fileExtension;
	});
    

/*
  	var body = '';
    var filePath = './public/files/';
    var fileName = 'document_' + Date.now();
	console.log(req.body);
    req.on('data', function(data) {    	
        body += data;
    });

    req.on('end', function (){
		 //console.log("object", req);  	
    	
    	var fileExtension = "";
    	var fileType = req.body.type; 
    	

    	if(fileType === 'text/plain;charset=UTF-8') 
    	{	
    		fileExtension = ".txt";
    	} else if(fileType === 'text/xml') {
    		fileExtension = ".xml";
    	} else {
    		console.log("filetype not supported");
    	}
    	var fullpath = filePath + fileName + fileExtension;
        fs.appendFile(fullpath, body.formData, function() {

           res.send(req.headers);
        });
    });
*/
});

module.exports = router;
