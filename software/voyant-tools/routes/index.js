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
    var files = [];
    var fields = [];
 	form.uploadDir = filePath;
    
    form
    .on('field', function(field, value) {
        console.log(field, value);
        fields.push([field, value]);
      })
    .on('file', function(field, file) {
        console.log(field, file);
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
        files.push([field, file]);
      })
    .on('end', function() {
        console.log('-> upload done');
        	
        res.write('received fields:\n\n '+util.inspect(fields));
        res.write('\n\n');
        res.end('received files:\n\n '+util.inspect(files));
    
    });
    form.parse(req);    

});

module.exports = router;
