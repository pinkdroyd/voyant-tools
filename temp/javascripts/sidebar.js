//Clicklistener für Haupt-Menüpunkte
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
	        $("#sidebar-custom-button").css("background-color", "#B02130");
	        break; 
	    /*Click für Export-Button*/
	    case "sidebar-export-button":
	        $("#sidebar-export-button").css("background-color", "#B02130");
	        break; 
	    /*Click für Help-Button*/
	    case "sidebar-help-button":
	        $("#sidebar-help-button").css("background-color", "#B02130");
	        break;       
	}
});

//Clicklistener für Submenü-Items
$(".sidebar-subitem").click(function(e) {
	var clickedElement = e.target.id;

	switch(clickedElement) {
		case "sidebar-upload-button":
			$("#sidebar-upload-button").css("background-color", "#B02130");
			break; 
		case "sidebar-settings-button":
			$("#sidebar-settings-button").css("background-color", "#B02130");
			break; 
		case "sidebar-witec-button":
			$("#sidebar-witec-button").css("background-color", "#B02130");
			break; 
		case "sidebar-kic-button":
			$("#sidebar-kic-button").css("background-color", "#B02130");
			break; 
		case "sidebar-cirrus-button":
			$("#sidebar-cirrus-button").css("background-color", "#B02130");
			break; 
		case "sidebar-bubbles-button":
			$("#sidebar-bubbles-button").css("background-color", "#B02130");
			break; 
	}
});


