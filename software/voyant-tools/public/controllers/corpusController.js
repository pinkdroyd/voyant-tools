Voyant.CorpusController = (function() {
	var that = {},
	init = function() {
		console.log("init CorpusController");
		initButton();
	},

	initButton = function (){	
		console.log('init Buttons'); 
		var fileInput = $('#files');		
		$(document).on('click', '#upload', function(event) {
			event.preventDefault();
			console.log('click upload'); 			
    		initExpressUpload();
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

	initExpressUpload = function (file){
		var fileInput = $('#files');
		var uploadButton = $('#upload');
		var files = $('#files').prop('files')[0];
		console.log("Files", files);
	
		if(files.type === 'text/plain' || files.type === 'text/xml'){

			var formData = new FormData();			
			formData.append('upload_files', files);

			var fileType = files.type;			
			
			$.ajax({				
        		url: '/fileupload/',  //Server script to process data
        		type: 'POST',
        		data:  formData,        	
        		cache: false,
        		contentType: false,
        		processData: false,
        		success: function(msg){
        			onFileReady(msg);
        		}
    		});
		} else {
			alert('File type not supported');
		}	
		
	},

	onFileReady = function(fileName){
		console.log(fileName);
		//TODO: set the source of the iframe
		// URL example: http://127.0.0.1:8888/tool/Cirrus/?input=http://localhost:3000/files/%fileName%
	},

	readFile = function() {
		
		var fileInput = $('#files');
        if (!window.FileReader) {
            alert('Your browser is not supported')
        }
        var input = fileInput.get(0);
        console.log("Input", input);
        
        // Create a reader object
        var reader = new FileReader();
        if (input.files.length) {
            var textFile = input.files[0];
            reader.readAsText(textFile);
            $(reader).on('load', processFile);
        } else {
            alert('Please upload a file before continuing')
        } 
    },
    
    processFile = function(e) {
        var file = e.target.result,
            results;
        if (file && file.length) {  
            results = file.split("\n");           
            $('#text-input').text(results);           
        }
    };
	
	that.init = init;


	return that;
}());
