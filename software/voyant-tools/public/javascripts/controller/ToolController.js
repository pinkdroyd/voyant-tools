Voyant.ToolController = (function() {
	var that = {},
	corpusObject = {},

	init = function() {
		console.log("init ToolController");		
	},

	setCorpusObject = function(object){		
		corpusObject = object;		
	},

	setToolList = function(toollist){
		corpusObject.tools.tools_choosen = true;
		corpusObject.tools.tool_list = toollist;
		sendCorpusToControllers(corpusObject);
		console.log("Corpusobject after tools choosen", corpusObject);
		Voyant.AnalyzeController.createURLs();
	},

	sendCorpusToControllers = function(object){
		Voyant.CorpusController.setCorpusObject(object);
		Voyant.SettingsController.setCorpusObject(object);
		Voyant.AnalyzeController.setCorpusObject(object);
	};

	that.setCorpusObject = setCorpusObject;
	that.setToolList = setToolList;
	that.init = init;

	return that;
}());