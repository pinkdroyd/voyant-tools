Voyant.Navbar = (function() {
	var that = {},
	MainController = Voyant.MainController,
	corpusUploaded = false,  


	init = function() {
		console.log("init Navbar");
		$("#logo-container").height($("#upload-corpus").outerHeight());
		
		setupHover();
		setupMenuClicklistener();
		appendUpload();
	},

	setupHover = function () {
		if (corpusUploaded === true) {
			$("#upload-corpus, #corpus-settings, #select-tool").mouseenter(function() {
				if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
					$(this).css("background-color", "#838B8B");
					$(this).css("cursor", "pointer");
				}
			});
			$("#upload-corpus, #corpus-settings, #select-tool").mouseleave(function() {
				if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
					$(this).css("background-color", "#3B3B3C");
				}
			});
		} else  {
			$("#corpus-settings, #select-tool, #analyze-corpus").mouseenter(function() {
				if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
					$(this).css("cursor", "not-allowed");
				}
			});

			$("#help-container").mouseenter(function() {
				$("#help-container").css("background-color", "#838B8B");
			});

			$("#help-container").mouseleave(function() {
				$("#help-container").css("background-color", "#3B3B3C");
			});
		}
	},

	setupMenuClicklistener = function () {

		if (corpusUploaded === true) {
			$(".nav-element").click(function(e) {
			var clickedElement = e.target.id;

				switch(clickedElement) {
					case "upload-corpus":
						if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
							$(".nav-element").css("background-color", "#3B3B3C");
							$(this).css("background-color", "#B02130");
							$("#analyze-corpus").css("background-color", "#C0C0C0");
							appendUpload();
						}
		        		break;
		        	case "upload-corpus-span":
		        		if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
							$(".nav-element").css("background-color", "#3B3B3C");
							$(this).css("background-color", "#B02130");
							$("#analyze-corpus").css("background-color", "#C0C0C0");
							appendUpload();
						}
		        		break;
		        	case "corpus-settings":
		        		if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
			        		$(".nav-element").css("background-color", "#3B3B3C");
			        		$(this).css("background-color", "#B02130");
			        		$("#analyze-corpus").css("background-color", "#C0C0C0");
			        		appendSettings();
			        	}
		        		break;
		        	case "corpus-settings-span":
		        		if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
		        			$(".nav-element").css("background-color", "#3B3B3C");
		        			$(this).css("background-color", "#B02130");
		        			$("#analyze-corpus").css("background-color", "#C0C0C0");
		        			appendSettings();
		        		}
		        		break;
		        	case "select-tool":
		        		if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
			        		$(".nav-element").css("background-color", "#3B3B3C");
			        		$(this).css("background-color", "#B02130");
			        		$("#analyze-corpus").css("background-color", "#C0C0C0");
			        		appendSelectTools();
			        	}
		        		break;
		        	case "select-tool-span":
		        		if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
			        		$(".nav-element").css("background-color", "#3B3B3C");
			        		$(this).css("background-color", "#B02130");
			        		$("#analyze-corpus").css("background-color", "#C0C0C0");
			        		appendSelectTools();
			        	}
		        		break;
				}
			});
		}
	}

	/*setupMenuClicklistener = function() {
		$(".nav-element").click(function(e) {
			var clickedElement = e.target.id;

			switch(clickedElement) {
				case "upload-corpus":
					if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
						$(".nav-element").css("background-color", "#3B3B3C");
						$(this).css("background-color", "#B02130");
						appendUpload();
					}
	        		break;
	        	case "upload-corpus-span":
	        		if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
						$(".nav-element").css("background-color", "#3B3B3C");
						$(this).css("background-color", "#B02130");
						appendUpload();
					}
	        		break;
	        	case "corpus-settings":
	        		if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
		        		$(".nav-element").css("background-color", "#3B3B3C");
		        		$(this).css("background-color", "#B02130");
		        		appendSettings();
		        	}
	        		break;
	        	case "corpus-settings-span":
	        		if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
	        			$(".nav-element").css("background-color", "#3B3B3C");
	        			$(this).css("background-color", "#B02130");
	        			appendSettings();
	        		}
	        		break;
	        	case "select-tool":
	        		if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
		        		$(".nav-element").css("background-color", "#3B3B3C");
		        		$(this).css("background-color", "#B02130");
		        		appendSelectTools();
		        	}
	        		break;
	        	case "select-tool-span":
	        		if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
		        		$(".nav-element").css("background-color", "#3B3B3C");
		        		$(this).css("background-color", "#B02130");
		        		appendSelectTools();
		        	}
	        		break;
        		case "analyze-corpus":
        			if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
	        			$(".nav-element").css("background-color", "#3B3B3C");
	        			$(this).css("background-color", "#B02130");
	        			appendAnalyze(); 
	        		}
        		break;
        		case "analyze-corpus-span":
        			if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
	        			$(".nav-element").css("background-color", "#3B3B3C");
	        			$(this).css("background-color", "#B02130");
	        			appendAnalyze(); 
	        		}
        		break;
			}
		});
	},*/

	appendUpload = function () {
		MainController.appendUpload();
	}

	appendSettings = function() {
		MainController.appendSettings();
	},

	appendSelectTools = function () {
		MainController.appendTools();
	},

	appendAnalyze = function () {
		MainController.appendAnalyze();
	},

	corpusUploaded = function () {
		corpusUploaded = true; 
		setActiveColors(); 
		setupHover(); 
		setupMenuClicklistener();
	},

	corpusDeleted = function () {
		corpusUploaded = false; 
		$('.nav-element').unbind('mouseenter mouseleave');
		$('.nav-element').unbind('click');

		$("#corpus-settings, #select-tool").css("background-color", "#C0C0C0");
		setupHover();
	}

	setActiveColors = function () {
		$("#upload-corpus").css("background-color", "rgb(176, 33, 48)");
		$("#corpus-settings").css("background-color", "#3B3B3C");
		$("#select-tool").css("background-color", "#3B3B3C");
	}, 

	that.init = init;
	that.corpusUploaded = corpusUploaded; 
	that.corpusDeleted = corpusDeleted; 

	return that;
}());