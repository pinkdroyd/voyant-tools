Voyant.SettingsController = (function() {
	var that = {},	
	fileNames = [],
	fileUploaded = false,	

	init = function() {
		console.log("init SettingsController");
		initButtons();			
	},

	initButtons = function(){
		var buttonNext = $("#apply-xpath-button");

		$(document).on('click','#apply-xpath-button', function(event){
			event.preventDefault();	
			if(fileUploaded){
				getXPathExpressions();
			} else {
				console.log("no file has been uploaded")
				var $feedback = $('<div class="alert alert-danger" role="alert">No file has been uploaded!</div>)').hide().fadeIn(1500).next().fadeOut();				
				$feedback.appendTo($(".upload-feedback"));
			}		
			
		});
	},

	setFileParameter = function(filename){		
		fileNames.push(filename);		
	},

	setFileUploaded = function(uploaded){
		fileUploaded = uploaded;
	}

	getStopWordListValue = function(){
		var stopwordValue = $('#stopword-dropdown').val();
		console.log("Stopwordlist: " + stopwordValue);
	},

	getXPathExpressions = function(){		
		var xPathContent 	= $("#xpath-content").val();
		var xPathAuthor 	= $("#xpath-author").val();
		var xPathTitle 		= $("#xpath-title").val();
		var xPathDocuments 	= $("#xpath-documents").val();

			fileNames.forEach(function(fileName){
			
			var xPath = {
				file_name		: fileName,
				xpath_expressions: {
					xpath_content	: xPathContent,
					xpath_author	: xPathAuthor,
					xpath_title		: xPathTitle,
					xpath_documents : xPathDocuments
				}				
			}		
			
			
				sendXPathToServer(xPath);	
			});
			
			
	},
	
	sendXPathToServer = function(xPath){

		$.get('/xpath/', {data : xPath}, function (result){
			onXPathReady(result);
		});

	},

	onXPathReady = function(result){
		console.log(result);
	};

	that.setFileUploaded = setFileUploaded;
	that.setFileParameter = setFileParameter;
	that.init = init;	

	return that;
}());