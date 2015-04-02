var fs = require('fs'),    
    xpath = require('xpath'),
    dom = require('xmldom').DOMParser,
    filePath = './public/files/',
    util = require('util'),
	  xml = require("node-xml"),
	  path = require('path'),
    async = require('async'),

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
          async.parallel([
           function(onRdy){
           applyXPathDocument(xml, fileName, function(newFileName){
            onRdy(null,newFileName);
          })
         },
           function(onRdy){
            applyXPathContent(xml, fileName, function(newFileName){
             onRdy(null,newFileName);
          });
          }
         ], function(err, results){
          // the results array will equal ['one','two'] 
         
          var resultDocument = results[0];
          var resultContent = results[1]; 
          var array = [];
          array.push(resultContent);
          for (var i = 0; i<resultDocument.length;i++){
           array.push(resultDocument[i]);
          }
          console.log("Result XPATH: ",array);
          callback(array);
         });
         
    });
}

applyXPathDocument = function(xml, fileName, callback){

  var attrValue = expressions.xpath_documents;
  if(attrValue != ""){
        var doc = new dom().parseFromString(xml);
        var nodes = xpath.select(attrValue, doc);
        var fileNames = [];
        var tempFileNames = [];
        for (var i = 0; i<nodes.length;i++){

             tempFileNames[i] = filePath + "_" + i + fileName ;
  
            fs.writeFile(tempFileNames[i], nodes[i], function(err) {
                  if(err) {
                      return console.log(err);
                  }                 
                  
            });
        }   
            async.times(nodes.length, function(n, next){
              modFileName(filePath, fileName, tempFileNames[n], "document", n, function(newFileName) {
               
                fileNames.push(newFileName);                
                next();        
                
              });
            }, function(err) {
                
                callback(fileNames);
            });
          
         
      } else {
        callback([]);
      }
      
}

applyXPathContent = function(xml, fileName, callback){	
	
			var attrValue = expressions.xpath_content;
     
  		if(attrValue != ""){
  			var doc = new dom().parseFromString(xml);  		
    		var data = xpath.select(attrValue, doc).toString();    		
    		var tempFileName = filePath + "_" + fileName;

    		fs.writeFile(tempFileName, data, function(err) {
            	if(err) {
            	    return console.log(err);
            	}                	
            	
        	});
         
        	modFileName(filePath, fileName, tempFileName, "content", 1, function(newFileName) {
            
        		callback(newFileName);
        	});
  		} else {
        callback([]);
      }
	
}

modFileName = function(file_path, file_name, temp_filename, temp_type, file_number, callback){

	var fileName = file_path + file_name;
	var ext = path.extname(fileName);
	var removedExtensionString = fileName.slice(0, fileName.length - ext.length);	
	var newFileName = removedExtensionString + "_mod_" + temp_type + file_number  + ext;	
 
	fs.rename(temp_filename, newFileName, function(err){
		if(err) {
            return console.log(err);
        }  
	});
	callback(newFileName);
}

exports.init = init;


