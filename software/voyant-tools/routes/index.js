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
 	var filePath = '/public/files/';
 	var form = new formidable.IncomingForm();
    var files = [];
    var fields = [];
 	form.uploadDir = filePath;
    
    form
    .on('field', function(field, value) {
        
        fields.push(field);
      })
    .on('file', function(field, file) {
        
        var fileExtension = '';
    
            if(file.type === 'text/plain'){ 
                fileExtension = ".txt";
            } else if(file.type === 'text/xml') {
                fileExtension = ".xml";
            } else {
                console.log("filetype not supported");
            }
    
        file.name = "upload_" + Date.now() + fileExtension;
        fs.rename(file.path, filePath + file.name);
        files.push(file);
      })
    .on('end', function() {
        console.log('-> upload done');        
       	var result = {
            path : filePath,
            files: files
        };       
        res.send(result);
        res.end();
    
    });
    form.parse(req);    

});

module.exports = router;
