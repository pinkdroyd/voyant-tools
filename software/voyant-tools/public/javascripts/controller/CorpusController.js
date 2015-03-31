Voyant.CorpusController = (function() {
	var that = {},
	settingsController = null,
	fileUploaded = false,
	fileName = "",

	init = function() {
		console.log("init CorpusController");
		initButton();	
		
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

	initFreeTextUpload = function (){			
		var text = $('#text-input').val();			
		var formData = new FormData();
		var fileType = 'text/plain';
		
		if(text != ""){
			formData.append('file_data', text);		
			sendFileToServer(formData, '/textupload/');				
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
		console.log("Server result: ", result);
		fileUploaded = true;
		result.data.forEach( function(file){			
			
			fileName = file.name;

			Voyant.SettingsController.setFileUploaded(true);
			Voyant.SettingsController.setFileParameter(fileName);

		});

		var $feedback = $('<div class="alert alert-success" role="alert">Your file has been uploaded!</div>)').hide().fadeIn(1500);
		$feedback.appendTo($(".upload-feedback"));
		//TODO: set the source of the iframe
		// URL example: http://127.0.0.1:8888/tool/Cirrus/?input=http://localhost:3000/files/%fileName%
	};	
	
	that.init = init;


	return that;
}());
