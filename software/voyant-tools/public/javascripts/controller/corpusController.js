Voyant.CorpusController = (function() {
	var that = {},
	settingsController = null,

	init = function() {
		console.log("init CorpusController");
		initButton();
		settingsController = Voyant.SettingsController;
		
	},

	initButton = function (){	
		console.log('init Buttons'); 
		var fileInput = $('#files');		
		$(document).on('click', '#upload', function(event) {
			event.preventDefault();			
    		initFileUpload();
		});

		//TODO: implement "next" button for freetext 	
		$(document).on('click', '#next', function(event) {
			event.preventDefault();
			initFreeTextUpload();
    		
		});
	},

	initDropboxUpload = function (){
		var	client = new Dropbox.Client({ key: 'b671y7l5vwfj9l3' });
			client.authenticate(function () {
    		client.writeFile('hello.txt', 'Hello, World!', function () {
    			    alert('File written!');
    			});
			});
	},

	initFreeTextUpload = function (){
		var textInput = $('#text-input');		
		var text = $('#text-input').val();			
		var formData = new FormData();
		var fileType = 'text/plain';		
		formData.append('file_type', fileType);			
		formData.append('file_data', text);		
		sendFileToServer(formData);		
		
	},

	initFileUpload = function (){
		var fileInput = $('#files');		
		var files = $('#files').prop('files')[0];		
	
		if(files.type === 'text/plain' || files.type === 'text/xml'){

			var formData = new FormData();
			var fileType = files.type;			
			formData.append('file_type', fileType);			
			formData.append('file_data', files);
			sendFileToServer(formData);
			
		} else {
			alert('File type not supported');
		}	
		
	},

	sendFileToServer = function(formData){
		$.ajax({				
        		url: '/fileupload/', 
        		type: 'POST',
        		data:  formData,        	
        		cache: false,
        		contentType: false,
        		processData: false,
        		success: function(msg){
        			onFileReady(msg);
        		}
    		});
	},

	onFileReady = function(fileName){
		console.log(fileName);
		//TODO: set the source of the iframe
		// URL example: http://127.0.0.1:8888/tool/Cirrus/?input=http://localhost:3000/files/%fileName%
	};	
	
	that.init = init;


	return that;
}());
