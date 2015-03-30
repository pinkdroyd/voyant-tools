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
		var textInput = $('#text-input');		
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
		var files = fileInput.prop('files')[0];		
		
		if(files.type === 'text/plain' || files.type === 'text/xml'){

			var formData = new FormData();
			var fileType = files.type;			
			formData.append('file_type', fileType);			
			formData.append('file_data', files);
			sendFileToServer(formData, '/fileupload/');
			
		} else {
			alert('File type not supported');
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
		
		fileName = result.data.name;
		fileUploaded = true;
		console.log("Server result: ", result);
		Voyant.SettingsController.init(fileName);
		var $feedback = $('<div class="alert alert-success" role="alert">Your file has been uploaded!</div>)').hide().fadeIn(1500);
		$feedback.appendTo($(".upload-feedback"));
		//TODO: set the source of the iframe
		// URL example: http://127.0.0.1:8888/tool/Cirrus/?input=http://localhost:3000/files/%fileName%
	};	
	
	that.init = init;


	return that;
}());
