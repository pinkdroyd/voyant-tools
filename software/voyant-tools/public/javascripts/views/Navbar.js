Voyant.Navbar = (function() {
	var that = {},
	MainController = Voyant.MainController,
	corpusUploaded = false, 
	toolsSelected = false, 
	toolSelected = false, 


	init = function() {
		console.log("init Navbar");
		$("#logo-container").height($("#upload-corpus").outerHeight());
		
		setupHover();
		setupMenuClicklistener();
		appendUpload();
	},

	setupHover = function () {
		if (corpusUploaded === true) {
			$("#upload-corpus, #corpus-settings, #select-tool, #help-container").mouseenter(function() {
				if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
					$(this).css("background-color", "#838B8B");
					$(this).css("cursor", "pointer");
				}
			});

			$("#upload-corpus, #corpus-settings, #select-tool, #help-container").mouseleave(function() {
				if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
					$(this).css("background-color", "#3B3B3C");
				}
			});

			if(toolSelected === true) {
				$("#analyze-corpus").mouseenter(function() {
					if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
						$(this).css("cursor", "pointer");
						$(this).css("background-color", "#838B8B");
					}
				});

				$("#analyze-corpus").mouseleave(function() {
					if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
						$(this).css("background-color", "#3B3B3C");
					}
				});
		 	} else {
		 		$("#analyze-corpus").css("cursor","not-allowed");
		 	}
		} else {
			$("#corpus-settings, #select-tool, #analyze-corpus").mouseenter(function() {
				if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
					$(this).css("cursor", "not-allowed");
				}
			});

			$("#help-container, #upload-corpus").mouseenter(function() {
				if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
					$(this).css("background-color", "#838B8B");
				}
			});

			$("#help-container, #upload-corpus").mouseleave(function() {
				if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
					$(this).css("background-color", "#3B3B3C");
				}
			});
		}
	},

	setupMenuClicklistener = function () {
		if (corpusUploaded == true) {
			$(".nav-element").click(function(e) {
			var clickedElement = e.target.id;

				switch(clickedElement) {
					case "upload-corpus":
						if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
							$(".nav-element").css("background-color", "#3B3B3C");
							if (toolSelected == false) {
								$("#analyze-corpus").css("background-color", "#C0C0C0");
							}
							$(this).css("background-color", "#B02130");
							appendUpload();
						}
		        		break;
		        	case "upload-corpus-span":
		        		if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
			        		$(".nav-element").css("background-color", "#3B3B3C");
			        		$(this).css("background-color", "#B02130");
			        		if (toolSelected == false) {
								$("#analyze-corpus").css("background-color", "#C0C0C0");
							}
			        		appendUpload();
						}
		        		break;
		        	case "corpus-settings":
		        		if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
			        		$(".nav-element").css("background-color", "#3B3B3C");
			        		$(this).css("background-color", "#B02130");
			        		if (toolSelected == false) {
								$("#analyze-corpus").css("background-color", "#C0C0C0");
							}
			        		appendSettings();
			        	}
		        		break;
		        	case "corpus-settings-span":
		        		if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
		        			$(".nav-element").css("background-color", "#3B3B3C");
		        			$(this).css("background-color", "#B02130");
		        			if (toolSelected == false) {
								$("#analyze-corpus").css("background-color", "#C0C0C0");
							}
		        			appendSettings();
		        		}
		        		break;
		        	case "select-tool":
		        		if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
			        		$(".nav-element").css("background-color", "#3B3B3C");
			        		$(this).css("background-color", "#B02130");
			        		if (toolSelected == false) {
								$("#analyze-corpus").css("background-color", "#C0C0C0");
							}
			        		appendSelectTools();
			        	}
		        		break;
		        	case "select-tool-span":
		        		if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
			        		$(".nav-element").css("background-color", "#3B3B3C");
			        		$(this).css("background-color", "#B02130");
			        		if (toolSelected == false) {
								$("#analyze-corpus").css("background-color", "#C0C0C0");
							}
			        		appendSelectTools();
			        	}
		        		break;
		        	case "analyze-corpus":
		        		if (toolSelected == true) {
		        			if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
			        			$(".nav-element").css("background-color", "#3B3B3C");
			        			$(this).css("background-color", "#B02130");
			        			appendAnalyze(); 
			        		}
			        	}
        				break;
	        		case "analyze-corpus-span":
	        			if (toolSelected == true) {
		        			if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
			        			$(".nav-element").css("background-color", "#3B3B3C");
			        			$(this).css("background-color", "#B02130");
			        			appendAnalyze(); 
			        		}
		        		}
	        			break;
		        	case "help-container":
		        		if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
		        			$(".nav-element").css("background-color", "#3B3B3C");
			        		$(this).css("background-color", "#B02130");
			        		if (toolSelected == false) {
								$("#analyze-corpus").css("background-color", "#C0C0C0");
							}
			        		appendHelp(); 
			        	}
		        		break; 
		        	case "help-span":
		        		if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
		        			$(".nav-element").css("background-color", "#3B3B3C");
			        		$(this).css("background-color", "#B02130");
			        		if (toolSelected == false) {
								$("#analyze-corpus").css("background-color", "#C0C0C0");
							}
			        		appendHelp(); 
			        	}
		        		break; 
				}
			});
		} else {
			$(".nav-element").click(function(e) {
				var clickedElement = e.target.id;
				switch(clickedElement) {
					case "help-container":
		        		if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
		        			$("#upload-corpus").css("background-color", "#3B3B3C");
			        		$(this).css("background-color", "#B02130");
			        		appendHelp(); 
			        	}
		        		break; 
		        	case "help-span":
		        		if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
							$("#upload-corpus").css("background-color", "#3B3B3C");
			        		$(this).css("background-color", "#B02130");
			        		appendHelp(); 
			        	}
		        		break; 
		        	case "upload-corpus":
						if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
							$("#help-container").css("background-color", "#3B3B3C");
							$(this).css("background-color", "#B02130");
							appendUpload();
						}
		        		break;
		        	case "upload-corpus-span":
		        		if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
		        			$("#help-container").css("background-color", "#3B3B3C");
							$(this).css("background-color", "#B02130");
							appendUpload();
						}
						break;
		        }
			}); 
		}
	}

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

	appendHelp = function () {
		Voyant.Help.appendHelp(); 
	}, 

	corpusUploaded = function () {
		corpusUploaded = true; 
		$('.nav-element').unbind('mouseenter mouseleave');
		$('.nav-element').unbind('click');
		setActiveColors(); 
		setupHover(); 
		setupMenuClicklistener();
	},

	corpusDeleted = function () {
		corpusUploaded = false; 
		toolSelected = false;
		$('.nav-element').unbind('mouseenter mouseleave');
		$('.nav-element').unbind('click');

		$("#corpus-settings, #select-tool, #analyze-corpus").css("background-color", "#C0C0C0");
		setupHover();
		setupMenuClicklistener();
	}

	setActiveColors = function () {
		$("#upload-corpus").css("background-color", "rgb(176, 33, 48)");
		$("#corpus-settings").css("background-color", "#3B3B3C");
		$("#select-tool").css("background-color", "#3B3B3C");
	}, 

	toolsSelected = function () {
		toolSelected = true; 

		$('.nav-element').unbind('mouseenter mouseleave');
		$('.nav-element').unbind('click');

		$("#analyze-corpus").css("background-color", "#3B3B3C");		

		setupHover(); 
		setupMenuClicklistener(); 
	}, 

	getIfToolSelected = function () {
		return toolSelected; 
	},

	that.init = init;
	that.corpusUploaded = corpusUploaded; 
	that.corpusDeleted = corpusDeleted; 
	that.toolsSelected = toolsSelected; 
	that.getIfToolSelected = getIfToolSelected; 

	return that;
}());