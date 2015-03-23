Voyant.View = (function() {
	var that = {},

	init = function() {
		console.log("init View");
		appendSidebar(); 
		appendContent(); 
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
		        	$("#sidebar-bubbles-button").css("display", "block");
		        	$("#sidebar-visualize-button").css("background-color", "#838B8B");
		        } else {
		        	$("#sidebar-cirrus-button").css("display", "none");
		        	$("#sidebar-bubbles-button").css("display", "none");
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
				break; 
			case "sidebar-bubbles-button":
				unselectMenuItems();
				$("#sidebar-bubbles-button").css("background-color", "#B02130");
				break; 
			}
		});
	},

	unselectMenuItems = function () {
		$("#sidebar-upload-button, #sidebar-settings-button, #sidebar-witec-button, #sidebar-kic-button, #sidebar-cirrus-button, #sidebar-bubbles-button, #sidebar-custom-button, #sidebar-export-button, #sidebar-help-button").css("background-color", "#3B3B3C");
	},

	appendContent = function() {
		$("#sidebar-upload-button").css("display", "block");
		$("#sidebar-settings-button").css("display", "block");
		$("#sidebar-corpus-button").css("background-color", "#838B8B");
		$("#sidebar-upload-button").css("background-color", "#B02130");

		var uploadTemplate = _.template($("#upload-tpl").html());
		$("#content").html(uploadTemplate);
	};

	that.init = init;

	return that;
}());