Voyant.Navbar = (function() {
	var that = {},
	MainController = Voyant.MainController, 


	init = function() {
		console.log("init Navbar");
		$("#logo-container").height($("#upload-corpus").outerHeight());
		
		setupHover();
		setupMenuClicklistener();
		appendUpload();
	},

	setupHover = function () {
		$(".nav-element").mouseenter(function() {
			if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
				$(this).css("background-color", "#838B8B");
			}
		});

		$(".nav-element").mouseleave(function() {
			if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
				$(this).css("background-color", "#3B3B3C");
			}
		});
	},

	setupMenuClicklistener = function() {
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
	        		}
        		break;
        		case "analyze-corpus-span":
        			if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
	        			$(".nav-element").css("background-color", "#3B3B3C");
	        			$(this).css("background-color", "#B02130");
	        		}
        		break;
			}
		});
	},

	appendUpload = function () {
		MainController.appendUpload();
	}

	appendSettings = function() {
		MainController.appendSettings();
	},

	appendSelectTools = function () {
		MainController.appendTools();
	};

	that.init = init;

	return that;
}());