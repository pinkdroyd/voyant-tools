Voyant.CorpusController = (function() {
	var that = {};
	init = function() {
		console.log("init CorpusController");
		initButton();
	};

	function initButton(){	

	var fileInput = $('#files');
	var uploadButton = $('#upload');	
	
	uploadButton.on('click', function() { 
	var	client = new Dropbox.Client({ key: 'b671y7l5vwfj9l3' });
	client.authenticate(function () {
    client.writeFile('hello.txt', 'Hello, World!', function () {
        alert('File written!');
    });
});
           
	});
	}
	
	that.init = init;


	return that;
}());
