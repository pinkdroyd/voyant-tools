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
		Voyant.Analyze.init();
		Voyant.Help.init(); 
	},

	appendUpload = function () {
		Voyant.Upload.appendUpload(); 
	},

	appendSettings = function () {
		Voyant.Settings.appendSettings();
	},

	appendTools = function () {
		Voyant.Tools.appendTools();
	},

	appendAnalyze = function () {
		Voyant.Analyze.appendAnalyze(); 
	},

	getToolList = function () {
		var toolList = Voyant.Tools.getToolList(); 
		return toolList; 
	}; 

	that.init = init;
	that.appendUpload = appendUpload; 
	that.appendSettings = appendSettings;
	that.appendTools = appendTools;
	that.appendAnalyze = appendAnalyze; 
	that.getToolList = getToolList; 
	
	return that;
}());