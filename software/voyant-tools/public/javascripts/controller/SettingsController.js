Voyant.SettingsController = (function() {
	var that = {},
	files = [],
	filePath = "",	

	init = function() {
		console.log("init SettingsController");		
	},

	initButtons = function(){
		var buttonNext = $("#button-next");

		buttonNext.on('click', function(){
			console.log('button next clicked');
			getXPathExpressions();
		});
	},

	setFileParameter = function(filpath, files){
		filePath = filepath;
		files = files;
	},

	getStopWordListValue = function(){
		var stopwordValue = $('#stopword-dropdown').val();
		console.log("Stopwordlist: " + stopwordValue);
	},

	getXPathExpressions = function(){
		var xPathContent 	= $("#xpath-content").val();
		var xPathAuthor 	= $("#xpath-author").val();
		var xPathTitle 		= $("#xpath-title").val();
		var xPathDocuments 	= $("#xpath-documents").val();

		if(files.length > 0){

			var xPath = {
				file_name		: files[0].name,
				xpath_content	: xPathContent,
				xpath_author	: xPathAuthor,
				xpath_title		: xPathTitle,
				xpath_documents : xPathDocuments
			}		
	
			sendFileToServer(xPath);	
		} 
	},
	
	sendFileToServer = function(xPath){

		$.post('/xpath/', {data : xPath}, function (result){
			onXPathReady(result);
		});

	},

	onXPathReady = function(result){

	};


	that.init = init;	

	return that;
}());