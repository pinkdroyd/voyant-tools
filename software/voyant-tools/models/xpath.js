var fs = require('fs'),
    xml2js = require('xml2js'),
    xpath = require('xpath'),
    dom = require('xmldom').DOMParser,
    filePath = './public/files/'
    expressions = {};
    

init = function(object){
	initObject(object);
}

initObject = function(object){
	parseFile(object.file_name);	
	expressions = xpathExpressions;
}

parseFile = function(fileName){
	var parser = new xml2js.Parser();
	fs.readFile(filePath + fileName, function(err, data) {

	    parser.parseString(data, function (err, xml) {
	        console.dir(xml);
	        console.log('Done parsing...');

	        applyXPath(xml);

	    });

	});
}

applyXPath = function(xml){
	for(var expression in expressions) {

  		console.log(k, expressions[k]);
  		
    	var doc = new dom().parseFromString(xml);
    	var title = xpath.select(expression, doc).toString();
    	console.log(title)

	}
}

exports.init = init;


