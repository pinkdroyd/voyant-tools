Voyant.Tools = (function() {
	var that = {},

	listOfTools = [
		{
			toolName : "Bubblelines",
			toolDescription : "Bubblelines visualizes the frequency and repetition of  a word’s use in a corpus. Each document in the corpus is represented as a horizontal line and divided into segments of equal length. Each selected word is represented as a bubble with the size of the bubble indicating the word’s frequency in the corresponding segment of text. The larger the bubble’s radius the more frequently the word occurs.",
			toolLink : "Bubblelines",
			toolSrc : "/images/bubblelines.png"
		},
		{
			toolName: "Bubbles",
			toolDescription: "Bubbles represents the relative frequency of words in a corpus through a cloud of bubbles. Each word is represented by a bubble, where the size of the bubble is proportionate to the frequency with which the word occurs in the corpus. The larger the bubble’s radius the more frequently the word occurs.",
			toolLink: "Bubbles",
			toolSrc : "/images/bubbles.png"
		},
		{
			toolName: "Cirrus",
			toolDescription: "Cirrus is a word cloud displaying the frequency of words appearing in a corpus. Words occurring more frequently appear larger.",
			toolLink: "Cirrus",
			toolSrc : "/images/cirrus.png"
		},
		{
			toolName: "Corpus Grid",
			toolDescription: "Corpus Grid provides an overview of a corpus, displaying each document’s title, total number of words (word tokens), number of unique words (word types), and lexical density (the ratio of tokens to types).",
			toolLink: "CorpusGrid",
			toolSrc : "/images/corpusgrid.png"
		},
		{
			toolName: "Corpus Summary",
			toolDescription: "Corpus Summary is a tool that provides a simple, textual overview of the current corpus. This includes number of words, number of unique words, longest and shortest documents, highest and lowest vocabulary density, most frequent words, notable peaks in frequency, and distinctive words.",
			toolLink: "CorpusSummary",
			toolSrc : "/images/corpussummary.png"
		},
		{
			toolName: "Corpus Type Frequencies Grid ",
			toolDescription: "Corpus Type Frequencies Grid provides an ordered list for all the words’ frequencies appearing in a corpus. As well additional columns can be toggled to show other statistical information, including a small line graph for term frequency across the corpus.",
			toolLink: "CorpusTypeFrequenciesGrid",
			toolSrc : "/images/corpustermfrequencies.png"
		},
		{
			toolName: "Document Type Collocate Frequencies Grid",
			toolDescription: "Document Type Collocate Frequencies Grid provides and ordered list of word collocation for a specified word and document.",
			toolLink: "DocumentTypeCollocateFrequenciesGrid",
			toolSrc : "/images/documenttypecollocatefrequenciesgrid.png"
		},
		{
			toolName: "Document Type Frequencies Grid",
			toolDescription: "Document Type Frequencies Grid provides an ordered list of word frequencies along with other  statistical data for each document in a corpus.",
			toolLink: "DocumentTypeFrequenciesGrid",
			toolSrc : "/images/documenttermfrequencies.png"
		},
		{
			toolName: "Document Type KWICs Grid",
			toolDescription: "Document Type KWICs Grid displays a table contextualizing a selected word with the phrases or paragraphs of text that directly precede and follow each instances of the word throughout the corpus.",
			toolLink: "DocumentTypeKwicsGrid",
			toolSrc : "/images/documentkwics.png"
		},
		{
			toolName: "Knots",
			toolDescription: "Knots represents a corpus as a series of twisted lines. Each line depicts a selected term over the length of the corpus. The extent to which lines overlap indicates the level of correspondence or linkage between the terms.",
			toolLink: "Knots",
			toolSrc : "/images/knots.png"
		},
		{
			toolName: "Lava",
			toolDescription: "Lava displays multiple levels of a corpus in a three-dimensional environment. Clicking on a document within the corpus expands the Lava visualization in a ring to further explore terms within their context.",
			toolLink: "Lava",
			toolSrc : "/images/lava.png"
		},
		{
			toolName: "Links",
			toolDescription: "Links represents the collocation of terms in a corpus by depicting them in a network through the use of a force directed graph. In this graph the frequency of the word is indicate by relative size of the term.",
			toolLink: "Links",
			toolSrc : "/images/links.png"
		},
		{
			toolName: "Mandala",
			toolDescription: "Mandala allows the importing of “textual” files to perform analysis on the frequency and linkage of terms. For example, importing a play would allow the user to find the linkage and frequency between a term and its speaker.",
			toolLink: "Mandala",
			toolSrc : "/images/mandala.png"
		},
		{
			toolName: "Reader",
			toolDescription: "Reader provides a viewing window to allow the user to read the full text of the corpus that they have imported into Voyant Tools.",
			toolLink: "Reader",
			toolSrc : "/images/reader.png"
		},
		{
			toolName: "RezoViz",
			toolDescription: "RezoViz visualizes the relationships between people, locations and organizations in a collection of documents. Links are created between every pair of people, locations and organizations that occur in the same document.",
			toolLink: "RezoViz",
			toolSrc : "/images/rezoviz.png"
		},
		{
			toolName: "ScatterPlot",
			toolDescription: "ScatterPlot displays the correspondance of word use in a corpus. This visualization relies on a statistical analysis that takes the word’s correspondance from each document (where each document represents a dimension) and reduces it to a three dimensional space to easily visualize the data through a scatterplot.",
			toolLink: "ScatterPlot",
			toolSrc : "/images/scatterplot.png"
		},
		{
			toolName: "Termometer",
			toolDescription: "Termometer depicts the change of the frequency of word across a corpus spread over time. It provides a more compact version of the tool TermsRadio. Unlike TermsRadio the temporal dimension of the tool is not expanded across the x-axis. Instead the change in frequency of the word is captured in through movement in the y-axis. ",
			toolLink: "Termometer",
			toolSrc : "/images/termometer.png"
		},
		{
			toolName: "TermsRadio",
			toolDescription: "TermsRadio provides a scrolling line graph that can depict the change of the frequency of word across a corpus spread over time.",
			toolLink: "TermsRadio",
			toolSrc : "/images/termsradio.png"
		},
		{
			toolName: "Type Frequencies Chart",
			toolDescription: "Type Frequencies Chart shows a line graph depicting the distribution of a word’s occurrence across a corpus. ",
			toolLink: "TypeFrequenciesChart",
			toolSrc : "/images/typefrequencieschart.png"
		},
		{
			toolName: "Word Count Fountain",
			toolDescription: "Word Count Fountain visualizes word frequencies as a fountain. Each stream represents a unique word, where its height represents frequency the term occurred in the corpus.",
			toolLink: "WordCountFountain",
			toolSrc : "/images/termfountain.png"
		}
	],

	selectedItems, 
	toolList, 


	init = function() {
		console.log("init Tools.js");
		selectedItems = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		toolList = [];
	},

	appendTools = function () {
		var selectToolsTemplate = _.template($("#tools-tpl").html());

		//var resultingHtml = selectToolsTemplate ({tools : listOfTools});
		$("#content").html(selectToolsTemplate);

		/*for (var i = 0; i < listOfTools.length; i++) {
			$("#tools").append("<div class='col-md-4 tool-container' id=tool-container"+i+"></div>");
			$("#tool-container"+ i).append ("<div  class='tool-image-container' id=tool-image-container"+i+"></div>");
			$("#tool-container"+ i).append ("<div id=tool-heading-container"+i+" class=tool-heading-container>"+listOfTools[i].toolName+"</div>");
			//$("#tool-heading-container"+ i).append ("<p class=tool-heading> " + listOfTools[i].toolName + " </p>");
			$("#tool-image-container"+ i).append("<img src=" + listOfTools[i].toolSrc + " class='img-rounded tool-image' id=tool-image"+i+">");
			$("#tool-container"+ i).append ("<div id=tool-description-container"+i+ " class='tool-description-container select-tools-text'>");
			$("#tool-description-container"+ i).append("<p> "+listOfTools[i].toolDescription+ " </p>");
			$("#tool-container"+ i).append ("<button type=submit class='btn btn-default select-tool-button' id=select-tool-button"+i+" ><span class='glyphicon glyphicon-plus'></span> Add Tool </button>");
		}*/

		for (var i = 0; i < listOfTools.length; i++) {
			$("#tools").append("<div class='col-md-6 tool-container' id=tool-container"+i+"></div>");
			$("#tool-container"+ i).append ("<div  class='col-md-6 tool-image-container' id=tool-image-container"+i+"></div>");
			$("#tool-image-container"+ i).append("<img src=" + listOfTools[i].toolSrc + " class='img-rounded tool-image' id=tool-image"+i+">");
			$("#tool-container"+ i).append ("<div  class='col-md-6 tool-text-container' id=tool-text-container"+i+"></div>");
			$("#tool-text-container"+ i).append ("<div id=tool-heading-container"+i+" class='tool-heading-container'>"+listOfTools[i].toolName+"</div>");
			$("#tool-text-container"+ i).append ("<div id=tool-description-container"+i+ " class='tool-description-container select-tools-text'>");
			$("#tool-description-container"+ i).append("<p id=tool-description"+i+"> "+listOfTools[i].toolDescription+ " </p>");
			//$("#tool-heading-container"+ i).append ("<p class=tool-heading> " + listOfTools[i].toolName + " </p>");
			//$("#tool-container"+ i).append ("<button type=submit class='btn btn-default select-tool-button' id=select-tool-button"+i+" ><span class='glyphicon glyphicon-plus'></span> Add Tool </button>");
		}
		setupHover();
		setupClickListener();
	},

	setupHover = function() {
		$(".tool-container").mouseenter(function() {
			if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
				$(this).css("background-color", "#838B8B");
			}
		});

		$(".tool-container").mouseleave(function() {
			if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
				$(this).css("background-color", "#3B3B3C");
			}
		});

		$('.tool-container').css('cursor', 'pointer');
	},

	setupClickListener = function () {
		$(".tool-container").click(function(e) {
			var clickedElement = e.target.id;
			var index = convertIdToIndex(clickedElement);

			if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
				$(this).css("background-color", "#B02130");
				selectedItems[index] = 1;
			} else {
				$(this).css("background-color", "#3B3B3C");
				selectedItems[index] = 0;			}
		});

		$("#apply-tools-button").click(function(e) {
			convertSelectedItemsToList();
			if (toolList.length == 0) {
				var $feedback = $('<div class="alert alert-danger" role="alert">Select Tools First!</div>)').hide().fadeIn(2000, function(){
					$(this).fadeOut();
				});				
				$feedback.appendTo($("#file-tools-feedback"));
			} else {
				Voyant.ToolController.setToolList(toolList); 
				Voyant.Navbar.toolsSelected(); 
				var $feedback = $('<div class="alert alert-success" role="alert">Selected Tools Saved!</div>)').hide().fadeIn(2000);
				$feedback.appendTo($("#file-tools-feedback"));
				$("#to-analyze-button").removeClass("disabled");
			}
		});

		$("#to-analyze-button").click(function(e) {
			$(".nav-element").css("background-color", "#3B3B3C");
			$("#analyze-corpus").css("background-color", "#B02130");
			Voyant.MainController.appendAnalyze(); 
		});
	},

	convertIdToIndex = function(clickedElement) {
		var index = "";
		for (var i = 0; i < clickedElement.length; i++) {
			if ((clickedElement.charCodeAt(i) >= 48) && (clickedElement.charCodeAt(i) <= 57)){
				index += clickedElement.charAt(i);
			}
		}
		return index; 
	},

	convertSelectedItemsToList = function () {
		toolList = [];
		for (var i = 0; i < listOfTools.length; i++) {
			if (selectedItems[i] === 1) {
				toolList.push(listOfTools[i].toolLink); 
			}
		}
	},

	getToolList = function () {
		return toolList;
	}

	that.init = init;
	that.appendTools = appendTools;
	that.getToolList = getToolList; 

	return that;
}());