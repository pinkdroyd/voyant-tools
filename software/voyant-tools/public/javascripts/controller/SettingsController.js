Voyant.SettingsController = (function() {
	var that = {},		
	corpusObject = {},	

	init = function() {
		console.log("init SettingsController");
		initButtons();			
	},

	initButtons = function(){
		var buttonNext = $("#apply-xpath-button");

		$(document).on('click','#apply-xpath-button', function(event){
			event.preventDefault();	

			if(corpusObject.file.file_uploaded){
				getXPathExpressions();
			} else {
				
				var $feedback = $('<div class="alert alert-danger" role="alert">No files / text uploaded!</div>)').hide().fadeIn(2000, function(){
					$(this).fadeOut();
				});	
				$feedback.appendTo($(".settings-feedback"));	
			}
			
		});

		$(document).on('click','.stopword', function(event){
			event.preventDefault();
			var stopwordlist = $(event.target).text();			
			setStopWordListValue(stopwordlist);
		});

	},

	setCorpusObject = function(object){
		corpusObject = object;		
	},

	setStopWordListValue = function(stopword){
		if(stopword != "None"){
			corpusObject.stoppwordlist.stopword_applied = true;
			corpusObject.stoppwordlist.language = stopword;
			sendCorpusToControllers(corpusObject);
		} else {
			corpusObject.stoppwordlist.stopword_applied = false;
			corpusObject.stoppwordlist.language = "";
			sendCorpusToControllers(corpusObject);
		}
		
	},

	getXPathExpressions = function(){		
		var xPathContent 	= $("#xpath-content").val();
		var xPathAuthor 	= $("#xpath-author").val();
		var xPathTitle 		= $("#xpath-title").val();
		var xPathDocuments 	= $("#xpath-documents").val();
			
			corpusObject.file.file_names.forEach(function(fileName){

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
		
		var xfileName = result;
		corpusObject.xpath_applied = true;
		corpusObject.file.file_names_xpath.push(xfileName);
		sendCorpusToControllers(corpusObject);
		console.log("Corpus object after xpath: ", corpusObject);
	},

	sendCorpusToControllers = function(object){
		Voyant.CorpusController.setCorpusObject(object);
		Voyant.ToolController.setCorpusObject(object);
		Voyant.AnalyzeController.setCorpusObject(object);
	};

	that.setCorpusObject = setCorpusObject;	
	that.init = init;	

	return that;
}());