Voyant.CorpusController = (function() {
	var that = {};
	var client = null;
	init = function() {
		console.log("init CorpusController");
			
			client = new Dropbox.Client({ key: 'b671y7l5vwfj9l3' });
 		// Try to complete OAuth flow.
        client.authenticate({ interactive: false }, function (error, client) {
            if (error) {
                alert('Error: ' + error);
            } else {
            	
            }
        });
		initButton();
	};

	function initButton(){

	var fileInput = $('#files');
	var uploadButton = $('#upload');	
	
	uploadButton.on('click', function() { 
        
            doHelloWorld();
        
	});
}
	function doHelloWorld() {
            client.writeFile('hello.txt', 'Hello, World!', function (error) {
                if (error) {
                    alert('Error: ' + error);
                } else {
                    alert('File written successfully!');
                }
            });
        }
 
	that.init = init;


	return that;
}());
