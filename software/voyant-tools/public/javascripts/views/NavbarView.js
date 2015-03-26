Voyant.NavbarView = (function() {
	var that = {},


	init = function() {
		console.log("init NavbarView");

		setupHover();
		setupMenuClicklistener();
		appendFreetext();
	},

	setupHover = function () {
		$(".nav-element , .upload-nav-element").mouseenter(function() {
			if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
				$(this).css("background-color", "#838B8B");
			}
		});

		$(".nav-element, .upload-nav-element").mouseleave(function() {
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
						appendFreetext();
					}
	        		break;
	        	case "upload-corpus-span":
	        		if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
						$(".nav-element").css("background-color", "#3B3B3C");
						$(this).css("background-color", "#B02130");
						appendFreetext();
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
		        	}
	        		break;
	        	case "select-tool-span":
	        		if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
		        		$(".nav-element").css("background-color", "#3B3B3C");
		        		$(this).css("background-color", "#B02130");
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

	appendFreetext = function() {
		var freetextTemplate = _.template($("#freetext-tpl").html());
		$("#content").html(freetextTemplate);

		$("#upload-corpus").css("background-color", "#B02130");
		$("#freetext-button").css("background-color", "#B02130");
		setupHover();

		$("#upload-button").click(function(e) {
			appendFileupload();
		});

	},

	appendFileupload = function() {
		var fileuploadTemplate = _.template($("#fileupload-tpl").html());
		$("#content").html(fileuploadTemplate);

		$("#upload-button").css("background-color", "#B02130");
		setupHover();

		$("#freetext-button").click(function(e) {
			appendFreetext();
		});
	},

	appendSettings = function() {
		var settingsTemplate = _.template($("#settings-tpl").html());
		$("#content").html(settingsTemplate);

		setupHover();
	};

	that.init = init;

	return that;
}());