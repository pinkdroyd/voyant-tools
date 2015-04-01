Voyant.MainController = (function() {
	var that = {},


	init = function() {
		console.log("init MainController");
		Voyant.Navbar.init();
		Voyant.CorpusController.init();
		Voyant.SettingsController.init();
		Voyant.ToolController.init();
		Voyant.AnalyzeController.init();		
		Voyant.Upload.init();
		Voyant.Settings.init();	
		Voyant.Tools.init();
	},

	appendUpload = function () {
		Voyant.Upload.appendUpload(); 
	},

	appendSettings = function () {
		Voyant.Settings.appendSettings();
	},

	appendTools = function () {
		Voyant.Tools.appendTools();
	};

	that.init = init;
	that.appendUpload = appendUpload; 
	that.appendSettings = appendSettings;
	that.appendTools = appendTools;
	return that;
}());