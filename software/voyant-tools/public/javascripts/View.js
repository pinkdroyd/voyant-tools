Voyant.View = (function() {
	var that = {},

	init = function() {
		console.log("init View");
		appendSidebar(); 
		appendContent(); 
		//appendTool("Cirrus");
	},

	appendSidebar = function () {
		var sidebarTemplate = _.template($("#sidebar-tpl").html());
		$("#sidebar").html(sidebarTemplate);

		setupSidebarListener(); 
		setupHover(); 
	},

	setupSidebarListener = function () {	
		setupMainmenuListener(); 
		setupSubmenuListener(); 
	},

	setupHover = function () {
		$( ".sidebar-item, .sidebar-subitem" ).mouseenter(function() {
			if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
				$(this).css("background-color", "#838B8B");
			}
		});

		$( ".sidebar-item, .sidebar-subitem" ).mouseleave(function() {
			if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
				$(this).css("background-color", "#3B3B3C");
			}
		});
	}, 

	setupMainmenuListener = function(){
		$(".sidebar-item").click(function(e) {
			var clickedElement = e.target.id;

			switch(clickedElement) {
			/*Click für Corpus-Button*/
		    case "sidebar-corpus-button":
		        if($("#sidebar-upload-button").css("display") == "none") {
		        	$("#sidebar-upload-button").css("display", "block");
		        	$("#sidebar-settings-button").css("display", "block");
		        } else {
		        	$("#sidebar-upload-button").css("display", "none");
		        	$("#sidebar-settings-button").css("display", "none");
		        }
		        break;

		    /*Click für Analyze-Button*/
		    case "sidebar-analyze-button":
		    	if($("#sidebar-ctfg-button").css("display") == "none") {
		    		$("#sidebar-summary-button").css("display", "block");
		        	$("#sidebar-ctfg-button").css("display", "block");
		        } else {
		        	$("#sidebar-summary-button").css("display", "none");
		        	$("#sidebar-ctfg-button").css("display", "none");
		        }
		        break; 

		    /*Click für Visualize-Button*/
		    case "sidebar-visualize-button":
		    	if($("#sidebar-cirrus-button").css("display") == "none") {
		        	$("#sidebar-cirrus-button").css("display", "block");
		        	$("#sidebar-bubblelines-button").css("display", "block");
		        } else {
		        	$("#sidebar-cirrus-button").css("display", "none");
		        	$("#sidebar-bubblelines-button").css("display", "none");
		        }
		        break; 

		    /*Click für Custom-Button*/
		    case "sidebar-custom-button":
		    	unselectMenuItems();
		        $("#sidebar-custom-button").css("background-color", "#B02130");
		        break; 

		    /*Click für Export-Button*/
		    case "sidebar-export-button":
		    	unselectMenuItems();
		        $("#sidebar-export-button").css("background-color", "#B02130");
		        break; 

		    /*Click für Help-Button*/
		    case "sidebar-help-button":
		    	unselectMenuItems();
		        $("#sidebar-help-button").css("background-color", "#B02130");
		        appendHelp(); 
		        break;       
			}
		});
	},

	setupSubmenuListener = function () {
		$(".sidebar-subitem").click(function(e) {
		var clickedElement = e.target.id;

		switch(clickedElement) {
			case "sidebar-upload-button":
				unselectMenuItems(); 
				$("#sidebar-upload-button").css("background-color", "#B02130");
				appendFreetext(); 
				break; 

			case "sidebar-settings-button":
				unselectMenuItems();
				$("#sidebar-settings-button").css("background-color", "#B02130");
				appendSettings(); 
				break; 

			case "sidebar-summary-button":
				unselectMenuItems();
				$("#sidebar-summary-button").css("background-color", "#B02130");
				appendTool("CorpusSummary");
				break;

			case "sidebar-ctfg-button":
				unselectMenuItems();
				$("#sidebar-ctfg-button").css("background-color", "#B02130");
				appendTool("CorpusTypeFrequenciesGrid");
				break; 

			case "sidebar-cirrus-button":
				unselectMenuItems();
				$("#sidebar-cirrus-button").css("background-color", "#B02130");
				appendTool("Cirrus"); 
				break; 

			case "sidebar-bubblelines-button":
				unselectMenuItems();
				$("#sidebar-bubblelines-button").css("background-color", "#B02130");
				appendTool("Bubblelines"); 
				break; 
			}
		});
	},

	unselectMenuItems = function () {
		$("#sidebar-upload-button, #sidebar-settings-button, #sidebar-ctfg-button, #sidebar-summary-button, #sidebar-cirrus-button, #sidebar-bubblelines-button, #sidebar-custom-button, #sidebar-export-button, #sidebar-help-button").css("background-color", "#3B3B3C");
	},

	appendContent = function() {
		$("#sidebar-upload-button").css("display", "block");
		$("#sidebar-settings-button").css("display", "block");
		$("#sidebar-upload-button").css("background-color", "#B02130");
		appendFreetext(); 
	},

	appendFreetext = function () {
		var freetextTemplate = _.template($("#freetext-tpl").html());
		$("#content").html(freetextTemplate);

		$("#selectFreetext").css("background-color", "#B02130");

		$("#selectFileupload").click(function(e) {
			appendFileupload(); 
		}); 

		$( "#selectFileupload" ).mouseenter(function() {
			if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
				$(this).css("background-color", "#838B8B");
			}
		});

		$( "#selectFileupload" ).mouseleave(function() {
			if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
				$(this).css("background-color", "#3B3B3C");
			}
		});
	},

	appendFileupload = function() {
		var fileuploadTemplate = _.template($("#fileupload-tpl").html());
		$("#content").html(fileuploadTemplate);

		$("#selectFileupload").css("background-color", "#B02130");

		$("#selectFreetext").click(function(e) {
			appendFreetext(); 
		}); 

		$( "#selectFreetext" ).mouseenter(function() {
			if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
				$(this).css("background-color", "#838B8B");
			}
		});

		$( "#selectFreetext" ).mouseleave(function() {
			if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
				$(this).css("background-color", "#3B3B3C");
			}
		});
	},

	appendSettings = function () {
		var settingsTemplate = _.template($("#settings-tpl").html());
		$("#content").html(settingsTemplate);
	}

	appendTool = function (tool) {
		var toolTemplate = _.template($("#tool-tpl").html());
		$("#content").html(toolTemplate);

		var textUrl1 = "http://digitalhumanities.org:8080/dhq/vol/3/3/000067.xml"
		var url = "http://voyant-tools.org/tool/" + tool +"/?input=" + textUrl1;

		setIFrameVisible(false);

		$ifrm = $("#ifrm");
		$ifrm.load( function(event) { 
  			setIFrameVisible(true);  
		}); 
		$ifrm.attr('src', url);
	},

	appendHelp = function () {
		var helpTemplate = _.template($("#help-tpl").html());
		$("#content").html(helpTemplate);
	},

	setIFrameVisible = function (visible) {
		if(visible){
			$("#ifrm").removeClass("iframe-invisible");
			$("#ifrm").addClass("iframe-visible");
		} else {
			$("#ifrm").removeClass("iframe-visible");
			$("#ifrm").addClass("iframe-invisible");
		}
	};

	that.init = init;

	return that;
}());