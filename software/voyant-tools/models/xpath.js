var fs = require('fs'),    
    xpath = require('xpath'),
    dom = require('xmldom').DOMParser,
    filePath = './public/files/',
    util = require('util'),
	xml = require("node-xml"),
    expressions = {};
    

init = function(object){
	initObject(object);
}

initObject = function(object){
	console.log("xpath file name: " + object.file_name);
	expressions = object.xpath_expressions;
	parseFile(object.file_name);	
}

parseFile = function(fileName){	
	//TODO: parse xml-File to string
	var parser = new xml.SaxParser();	
		parser.parseFile(filePath + fileName);
		parser.onEndDocument(function() {
			console.log("RESULT: ");
		})

		 //applyXPath(xml);
	fs.readFile(filePath + fileName, function(err, data) {	    

	       

	});

	
}

applyXPath = function(xml){
	
	console.log("Expressions: " + expressions);
	for(var key in expressions) {

		var attrValue = expressions[key];  		

  		if(attrValue != ""){
  			var doc = new dom().parseFromString(xml);  		
    		var title = xpath.select(attrValue, doc).toString();
    		console.log(title)
  		}
  		
    

	}
}

exports.init = init;


