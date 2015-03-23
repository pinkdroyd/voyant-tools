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
	},

	setupSidebarListener = function () {	
		setupMainmenuListener(); 
		setupSubmenuListener(); 
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
		        	$("#sidebar-corpus-button").css("background-color", "#838B8B");
		        } else {
		        	$("#sidebar-upload-button").css("display", "none");
		        	$("#sidebar-settings-button").css("display", "none");
		        	$("#sidebar-corpus-button").css("background-color", "#3B3B3C");
		        	$("#sidebar-corpus-button").removeAttr('style');
		        }
		        break;

		    /*Click für Analyze-Button*/
		    case "sidebar-analyze-button":
		    	if($("#sidebar-witec-button").css("display") == "none") {
		        	$("#sidebar-witec-button").css("display", "block");
		        	$("#sidebar-kic-button").css("display", "block");
		        	$("#sidebar-analyze-button").css("background-color", "#838B8B");
		        } else {
		        	$("#sidebar-witec-button").css("display", "none");
		        	$("#sidebar-kic-button").css("display", "none");
		        	$("#sidebar-analyze-button").css("background-color", "#3B3B3C");
		        	$("#sidebar-analyze-button").removeAttr('style');
		        }
		        break; 

		    /*Click für Visualize-Button*/
		    case "sidebar-visualize-button":
		    	if($("#sidebar-cirrus-button").css("display") == "none") {
		        	$("#sidebar-cirrus-button").css("display", "block");
		        	$("#sidebar-bubblelines-button").css("display", "block");
		        	$("#sidebar-visualize-button").css("background-color", "#838B8B");
		        } else {
		        	$("#sidebar-cirrus-button").css("display", "none");
		        	$("#sidebar-bubblelines-button").css("display", "none");
		        	$("#sidebar-visualize-button").css("background-color", "#3B3B3C");
		        	$("#sidebar-visualize-button").removeAttr('style');
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
				var uploadTemplate = _.template($("#upload-tpl").html());
				$("#content").html(uploadTemplate);
				break; 

			case "sidebar-settings-button":
				unselectMenuItems();
				$("#sidebar-settings-button").css("background-color", "#B02130");
				var settingsTemplate = _.template($("#settings-tpl").html());
				$("#content").html(settingsTemplate);
				break; 

			case "sidebar-witec-button":
				unselectMenuItems();
				$("#sidebar-witec-button").css("background-color", "#B02130");
				break; 

			case "sidebar-kic-button":
				unselectMenuItems();
				$("#sidebar-kic-button").css("background-color", "#B02130");
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
		$("#sidebar-upload-button, #sidebar-settings-button, #sidebar-witec-button, #sidebar-kic-button, #sidebar-cirrus-button, #sidebar-bubblelines-button, #sidebar-custom-button, #sidebar-export-button, #sidebar-help-button").css("background-color", "#3B3B3C");
	},

	appendContent = function() {
		$("#sidebar-upload-button").css("display", "block");
		$("#sidebar-settings-button").css("display", "block");
		$("#sidebar-corpus-button").css("background-color", "#838B8B");
		$("#sidebar-upload-button").css("background-color", "#B02130");

		var uploadTemplate = _.template($("#upload-tpl").html());
		$("#content").html(uploadTemplate);
	},

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