Voyant.CorpusController = (function() {
	var that = {},
	settingsController = null,	
	corpusObject = {},

	init = function() {
		console.log("init CorpusController");
		initButton();
		initCorpusObject();	
		
	},

	initButton = function (){
		 
		var fileInput = $('#files');		
		$(document).on('click', '#apply-upload-button', function(event) {
			event.preventDefault();			
    		initFileUpload();
		});
			
		$(document).on('click', '#apply-freetext-button', function(event) {
			event.preventDefault();
			initFreeTextUpload();    		
		});
	},

	initCorpusObject = function(){
		corpusObject = {
			file: {
				file_uploaded 	: false,
				file_names		: [],
				file_names_xpath : []
			     },
			tools: {
				tools_choosen : false,
				tool_list : []
				},
			xpath_applied : false,
			stoppwordlist : ''
			
		}
	},

	setCorpusObject = function(object){
		corpusObject = object;		
	},

	initFreeTextUpload = function (){			
		var text = $('#text-input').val();			
		var formData = new FormData();		
		
		if(text != ""){
			formData.append('file_data', text);		
			sendFileToServer(formData, '/textupload/');				
		} else {
			var $feedback = $('<div class="alert alert-danger" role="alert">No files / text to upload!</div>)').hide().fadeIn(2000, function(){
				$(this).fadeOut();
			});				
			$feedback.appendTo($(".upload-feedback"));
		}
		
	},

	initFileUpload = function (){
		var fileInput = $('[name=uploadFile]');			
		var files = fileInput.prop('files');
		var length = files.length;		
		var formData = new FormData();
		
		if(length > 0){

			for(var i = 0;i<length;i++){

				var file = files[i];
				
				if(file.type === 'text/plain' || file.type === 'text/xml'){	
					
					var fileType = file.type;			
					formData.append('file_type', fileType);			
					formData.append('file_data', file);
				
						
				} else {					
					var $feedback = $('<div class="alert alert-danger" role="alert">File type of' + file.name+ ' not supported!</div>)').hide().fadeIn(2000, function(){
					$(this).fadeOut();
				});				
					$feedback.appendTo($(".upload-feedback"));
				}	
			}
		
		sendFileToServer(formData, '/fileupload/');

		} else {
			var $feedback = $('<div class="alert alert-danger" role="alert">No files have been chosen!</div>)').hide().fadeIn(2000, function(){
				$(this).fadeOut();
			});		
				$feedback.appendTo($(".upload-feedback"));
		}
		
		
		
	},

	sendFileToServer = function(formData, url){

		$.ajax({				
        		url: url, 
        		type: 'POST',
        		data:  formData,        	
        		cache: false,
        		contentType: false,
        		processData: false,
        		success: function(result){
        			onFileReady(result);
        		}
    		});
	},

	onFileReady = function(result){
		
		result.data.forEach( function(file){

			corpusObject.file.file_names.push(file.name);
			corpusObject.file.file_uploaded = true;
			fileName = file.name;

			console.log("Corpus object: ", corpusObject);
			sendCorpusToControllers(corpusObject);
			

		});

		var $feedback = $('<div class="alert alert-success" role="alert">Your file has been uploaded!</div>)').hide().fadeIn(1500);
		$feedback.appendTo($(".upload-feedback"));
		//TODO: set the source of the iframe
		// URL example: http://127.0.0.1:8888/tool/Cirrus/?input=http://localhost:3000/files/%fileName%
	},

	sendCorpusToControllers = function(object){
		Voyant.SettingsController.setCorpusObject(corpusObject);
		Voyant.ToolController.setCorpusObject(corpusObject);
	};	
	
	that.setCorpusObject = setCorpusObject;
	that.init = init;


	return that;
}());
