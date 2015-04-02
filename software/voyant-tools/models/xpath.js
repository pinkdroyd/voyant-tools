var fs = require('fs'),    
    xpath = require('xpath'),
    dom = require('xmldom').DOMParser,
    filePath = './public/files/',
    util = require('util'),
	  xml = require("node-xml"),
	  path = require('path'),

    expressions = {};
    

init = function(object, callback){
	initObject(object, function(newFileName){
		callback(newFileName);
	});
}

initObject = function(object, callback){

	expressions = object.xpath_expressions;
	parseFile(object.file_name, function(newFileName){
		callback(newFileName);
	});	
}

parseFile = function(fileName, callback){		
	
	fs.readFile(filePath + fileName, 'utf8', function(err, xml) {
       	if(err){
           	return console.log(err);
       	}
       	 applyXPath(xml, fileName, function(newFileName){
       	 	callback(newFileName);
       	 });
    });
}

applyXPath = function(xml, fileName, callback){	
	
	for(var key in expressions) {

		var attrValue = expressions[key];  		

  		if(attrValue != ""){
  			var doc = new dom().parseFromString(xml);  		
    		var data = xpath.select(attrValue, doc).toString();    		
    		var tempFileName = filePath + "_" + fileName;

    		fs.writeFile(tempFileName, data, function(err) {
            	if(err) {
            	    return console.log(err);
            	}                	
            	
        	});
        	modFileName(filePath, fileName, tempFileName, function(newFileName) {
        		callback(newFileName);
        	});
  		}
	}
}

modFileName = function(file_path, file_name, temp_filename, callback){

	var fileName = file_path + file_name;
	var ext = path.extname(fileName);
	var removedExtensionString = fileName.slice(0, fileName.length - ext.length);	
	var newFileName = removedExtensionString + "_mod" + ext;	

	fs.rename(temp_filename, newFileName, function(err){
		if(err) {
            return console.log(err);
        }  
	});
	callback(newFileName);
}

exports.init = init;


