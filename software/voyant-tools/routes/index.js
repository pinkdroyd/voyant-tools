var express = require('express');
var router = express.Router();
var fs = require('fs');
var url = require('url');
var path = require('path');
var formidable = require('formidable');
var util = require('util');
var xpath = require('../models/xpath.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/xpath/', function(req, res, next) {

     var val = req.query.data;     
     xpath.init(val, function(newFileName){
        res.send("new file with applied xpath: " + newFileName);     
     });
     
});

router.post('/textupload/', function(req, res, next) {
    var filePath = './public/files/';
    var fileName =  '';
    var form = new formidable.IncomingForm();
    form
    .on('field', function(field, value) {
        var fileExtension = ".txt";
        fileName = "upload_" + Date.now() + fileExtension;
        fs.writeFile(filePath + fileName, value, function(err) {
            if(err) {
                return console.log(err);
            }    
            console.log("The file was saved!");
        });

      })
    .on('end', function() {

        console.log('-> upload done');
        var result = {};
        result.data = {
            path : filePath,
            name: fileName
        };

        res.send(result);
        res.end();
    
    });
    form.parse(req);    
    
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

        fields.push(field);

      })
    .on('file', function(field, file) { 

        var fileExtension = createFileExtension(file);    
        file.name = "upload_" + Date.now() + fileExtension;
        fs.rename(file.path, filePath + file.name);
        files.push(file);

      })
    .on('end', function() {

        console.log('-> upload done');
        var result = {};
        files.forEach(function(file) {
            result.data = {
                path : filePath,
                name: file.name
            };      
        });    
       	 
        res.send(result);
        res.end();
    
    });
    form.parse(req);    

});

function createFileExtension(file){
    if(file.type === 'text/plain'){ 
        return ".txt";
    } else if(file.type === 'text/xml') {
        return ".xml";
    } else {
        console.log("filetype not supported");
    }
}

module.exports = router;
