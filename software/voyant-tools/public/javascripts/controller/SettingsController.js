Voyant.SettingsController = (function() {
	var that = {},
	files = [],
	filePath = "",	

	init = function() {
		console.log("init SettingsController");		
	},

	setFileParameter = function(filpath, files){
		filePath = filepath;
		files = files
	},

	getStopWordListValue = function(){
		var stopwordValue = $('#stopword-dropdown').val();
		console.log("Stopwordlist" + stopwordValue);
	},

	getXPathExpressions = function(){
		var xPathContent 	= $("xpath-content").val();
		var xPathAuthor 	= $("xpath-author").val();
		var xPathTitle 		= $("xpath-title").val();
		var xPathDocuments 	= $("xpath-documents").val();

		
	};


	that.init = init;	

	return that;
}());