Voyant.CorpusController = (function() {
	var that = {};

	var fileInput = $('#files');
	var uploadButton = $('#upload');	
	
	uploadButton.on('click', function() {
		console.log("click");		
		uploadFile();
	});
	that.init = init;


	return that;
}());
