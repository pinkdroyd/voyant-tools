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
		appendSelectedTools (); 
	},

	getSelectedTools = function () {
		selectedTools = Voyant.AnalyzeController.createURLs();
		//selectedTools = Voyant.MainController.getToolList();  
	}, 

	appendSelectedTools = function () {
		for (var i = 0 ; i < selectedTools.length; i++) {
			appendHtml(i); 
			var url = selectedTools[i];
			console.log(selectedTools);

			//var url = "http://voyant-tools.org/tool/"+selectedTools[i]+"/?input=http://digitalhumanities.org:8080/dhq/vol/3/3/000067.xml"; 
			$("#iframe"+i).attr('src', url);
		}	
	},

	appendHtml = function (i) {
		$("#analyze-container").append("<div id=analyze-tool"+i+" class='analyze-tool-container col-md-12'></div>");
		$("#analyze-tool"+i).append("<iframe id=iframe"+i+" class='iframe'></iframe>");
	}

	getIframeSrc = function () {
		var src; 
		return src; 
	}
	

	that.init = init;
	that.appendAnalyze = appendAnalyze; 

	return that;
}());