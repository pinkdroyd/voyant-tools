Voyant.SettingsController = (function() {
	var that = {},	
	fileName = "",	

	init = function(filename) {
		console.log("init SettingsController");
		initButtons();
		setFileParameter(filename);		
	},

	initButtons = function(){
		var buttonNext = $("#apply-xpath-button");

		$(document).on('click','#apply-xpath-button', function(event){
			event.preventDefault();
			console.log('button next clicked');
			getXPathExpressions();
		});
	},

	setFileParameter = function(filename){
		fileName = filename;		
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

			var xPath = {
				file_name		: fileName,
				xpath_content	: xPathContent,
				xpath_author	: xPathAuthor,
				xpath_title		: xPathTitle,
				xpath_documents : xPathDocuments
			}		
			console.log("xPath Object to Server: ",	 xPath);
			sendXPathToServer(xPath);	
			
	},
	
	sendXPathToServer = function(xPath){

		$.post('/xpath/', {data : xPath}, function (result){
			onXPathReady(result);
		});

	},

	onXPathReady = function(result){

	};


	that.init = init;	

	return that;
}());