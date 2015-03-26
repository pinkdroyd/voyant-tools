Voyant.View = (function() {
	var that = {},

	init = function() {
		console.log("init View");
		appendSidebar(); 
		appendContent(); 

		/*window.onbeforeunload = function(){
        return "Seite wirklich neu Laden? Alle bisherigen Daten gehen somit verloren!";
    	}*/
	},

	appendSidebar = function () {
		var sidebarTemplate = _.template($("#sidebar-tpl").html());
		$("#sidebar").html(sidebarTemplate);

		setupSidebarListener(); 
		setupHover(); 
	},

	setupSidebarListener = function () {	
		setupMainmenuListener(); 
		setupCorpusListener(); 
		setupAnalzyeListener(); 
		setupVisualizeListener(); 
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
		    		showAnalyzeSubitems(); 
		        } else {
		        	hideAnalyzeSubitems();
		        }
		        break; 

		    /*Click für Visualize-Button*/
		    case "sidebar-visualize-button":
		    	if($("#sidebar-cirrus-button").css("display") == "none") {
		        	showVisualizeSubitems();
		        } else {
		        	hideVisualizeSubitems();
		        }
		        break; 

		    /*Click für Custom-Button*/
		    case "sidebar-custom-button":
		    	unselectMenuItems();
		        $("#sidebar-custom-button").css("background-color", "#B02130");
		        appendCustom(); 
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

	//Listener für Untermenüpunkte Corpus
	setupCorpusListener = function () {
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
			}
		});
	},

	//Listener für Untermenüpunkte Analyze
	setupAnalzyeListener = function () {
		$(".sidebar-subitem").click(function(e) {
		var clickedElement = e.target.id;

		switch(clickedElement) {
			case "sidebar-corpusgrid-button":
				unselectMenuItems();
				$("#sidebar-corpusgrid-button").css("background-color", "#B02130");
				appendTool("CorpusGrid");
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

			case "sidebar-dtcfg-button":
				unselectMenuItems();
				$("#sidebar-dtcfg-button").css("background-color", "#B02130");
				appendTool("DocumentTypeCollocateFrequenciesGrid");
				break; 

			case "sidebar-dtfg-button":
				unselectMenuItems();
				$("#sidebar-dtfg-button").css("background-color", "#B02130");
				appendTool("DocumentTypeFrequenciesGrid");
				break; 

			case "sidebar-dtkg-button":
				unselectMenuItems();
				$("#sidebar-dtkg-button").css("background-color", "#B02130");
				appendTool("DocumentTypeKwicsGrid");
				break; 
			}
		});
	}, 

	//Listener für Untermenüpunkte Visualize
	setupVisualizeListener = function () {
		$(".sidebar-subitem").click(function(e) {
		var clickedElement = e.target.id;

		switch(clickedElement) {
			case "sidebar-bubblelines-button":
				unselectMenuItems();
				$("#sidebar-bubblelines-button").css("background-color", "#B02130");
				appendTool("Bubblelines"); 
				break; 

			case "sidebar-cirrus-button":
				unselectMenuItems();
				$("#sidebar-cirrus-button").css("background-color", "#B02130");
				appendTool("Cirrus"); 
				break; 

			case "sidebar-knots-button":
				unselectMenuItems();
				$("#sidebar-knots-button").css("background-color", "#B02130");
				appendTool("Knots"); 
				break; 

			case "sidebar-lava-button":
				unselectMenuItems();
				$("#sidebar-lava-button").css("background-color", "#B02130");
				appendTool("Lava"); 
				break; 

			case "sidebar-links-button":
				unselectMenuItems();
				$("#sidebar-links-button").css("background-color", "#B02130");
				appendTool("Links"); 
				break; 

			case "sidebar-mandala-button":
				unselectMenuItems();
				$("#sidebar-mandala-button").css("background-color", "#B02130");
				appendTool("Mandala"); 
				break; 

			case "sidebar-rezoviz-button":
				unselectMenuItems();
				$("#sidebar-rezoviz-button").css("background-color", "#B02130");
				appendTool("RezoViz"); 
				break; 

			case "sidebar-scatterplot-button":
				unselectMenuItems();
				$("#sidebar-scatterplot-button").css("background-color", "#B02130");
				appendTool("ScatterPlot"); 
				break; 

			case "sidebar-termometer-button":
				unselectMenuItems();
				$("#sidebar-termometer-button").css("background-color", "#B02130");
				appendTool("Termometer"); 
				break; 

			case "sidebar-termsradio-button":
				unselectMenuItems();
				$("#sidebar-termsradio-button").css("background-color", "#B02130");
				appendTool("TermsRadio"); 
				break; 	

			case "sidebar-tfc-button":
				unselectMenuItems();
				$("#sidebar-tfc-button").css("background-color", "#B02130");
				appendTool("TypeFrequenciesChart"); 
				break; 
				
			case "sidebar-wcf-button":
				unselectMenuItems();
				$("#sidebar-wcf-button").css("background-color", "#B02130");
				appendTool("WordCountFountain"); 
				break; 
			}
		});
	}, 

	showAnalyzeSubitems = function () {
		$(".analyze-subitems").css("display", "block");
	}, 

	hideAnalyzeSubitems = function () {
		$(".analyze-subitems").css("display", "none");
	},

	showVisualizeSubitems = function () {
		$(".visualize-subitem").css("display", "block");
	}

	hideVisualizeSubitems = function () {
		$(".visualize-subitem").css("display", "none");
	}

	unselectMenuItems = function () {
		//Hauptmenü-Punkte
		$("#sidebar-custom-button, #sidebar-export-button, #sidebar-help-button").css("background-color", "#3B3B3C");
		//Corpus-Punkte
		$("#sidebar-upload-button, #sidebar-settings-button").css("background-color", "#3B3B3C");
		//Analyze-Punkte, Visualize-Punkte
		$(".analyze-subitems, .visualize-subitem").css("background-color", "#3B3B3C");
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

	appendCustom = function () {
		var customTemplate = _.template($("#custom-tpl").html());
		$("#content").html(customTemplate);
 	
 		var gridster = $(".gridster ul").gridster().data('gridster');
 
	    $(".gridster ul").gridster({
	        widget_margins: [10, 10],
	        avoid_overlapped_widgets: true
	    });


 
	}

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