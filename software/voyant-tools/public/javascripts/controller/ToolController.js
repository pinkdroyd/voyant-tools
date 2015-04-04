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
		var urlList = CorpusController.files.file_names.length;

		if(urlList.length == 0){
			var $feedback = $('<div class="alert alert-danger" role="alert">Nothing to show! Please check your settings and uploads!</div>)').hide().fadeIn(2000, function(){
					$(this).fadeOut();
				});	
			$feedback.appendTo($(".tools-feedback"));
		}
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