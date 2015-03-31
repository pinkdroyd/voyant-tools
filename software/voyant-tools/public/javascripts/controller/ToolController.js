Voyant.ToolController = (function() {
	var that = {},
	fileUploaded = false,
	fileNames = [],	

	init = function() {
		console.log("init ToolController");		
	},

	setFileParameter = function(filename){		
		fileNames.push(filename);		
	},

	setFileUploaded = function(uploaded){
		fileUploaded = uploaded;
	};

	that.init = init;

	return that;
}());