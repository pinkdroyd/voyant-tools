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
			var $feedback = $('<div class="alert alert-success" role="alert">Settings Saved!</div>)').hide().fadeIn(2000,function(){
				$(this).fadeOut();
			}); 
				$feedback.appendTo($("#file-settings-feedback"));
		}); 

		$("#to-tools-button").click(function(e) {
			$(".nav-element").css("background-color", "#3B3B3C");
    		$("#select-tool").css("background-color", "#B02130");
    		selectedStopwordlist = $("#select-stopwordlist").text(); 
			contentText = $("#xpath-content").val(); 
			documentsText = $("#xpath-documents").val(); 
    		if (Voyant.Navbar.getIfToolSelected() == false) {
				$("#analyze-corpus").css("background-color", "#C0C0C0");
				$("#analyze-corpus").css("cursor","not-allowed");
			}
    		Voyant.MainController.appendTools();
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