Voyant.Analyze = (function() {
	var that = {},
	selectedTools,


	init = function() {
		console.log("init Analyze");		
	};

	appendAnalyze = function () {
		var analyzeTemplate = _.template($("#analyze-tpl").html());
		$("#content").html(analyzeTemplate);
		getSelectedTools(); 
	},

	getSelectedTools = function () {
		selectedTools = Voyant.MainController.getToolList(); 
		console.log(selectedTools);
	}, 
	

	that.init = init;
	that.appendAnalyze = appendAnalyze; 

	return that;
}());