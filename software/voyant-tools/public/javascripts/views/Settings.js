Voyant.Settings = (function() {
	var that = {},
	settingsFirstload = true, 
	selectedStopwordlist, 
	contentText, 
	documentsText, 

	init = function() {
		console.log("init settings.js");
	},

	appendSettings = function() {
		var settingsTemplate = _.template($("#settings-tpl").html());
		$("#content").html(settingsTemplate);

		setInputTexts();

		$("#apply-xpath-button").click(function(e) {
			selectedStopwordlist = $("#select-stopwordlist").text(); 
			contentText = $("#xpath-content").val(); 
			documentsText = $("#xpath-documents").val(); 
		}); 
	},

	setInputTexts = function () {
		if (settingsFirstload != true) {
			$("#select-stopwordlist").text(selectedStopwordlist);
			$("#xpath-content").val(contentText);
			$("#xpath-documents").val(documentsText);
		} else  {
			settingsFirstload = false; 
		}
	};

	that.init = init; 
	that.appendSettings = appendSettings;  

	return that;
}());