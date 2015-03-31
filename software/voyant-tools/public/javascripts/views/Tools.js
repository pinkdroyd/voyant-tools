Voyant.Tools = (function() {
	var that = {},

	listOfTools = [
		{
			toolName : "Bubblelines",
			toolDescription : "Bubblelines visualizes the frequency and repetition of  a word’s use in a corpus. Each document in the corpus is represented as a horizontal line and divided into segments of equal length. Each selected word is represented as a bubble with the size of the bubble indicating the word’s frequency in the corresponding segment of text. The larger the bubble’s radius the more frequently the word occurs.",
			toolLink : "Bubblelines",
			toolSrc : "/images/bubblelines-square.png"
		},
		{
			toolName: "Bubbles",
			toolDescription: "Bubbles represents the relative frequency of words in a corpus through a cloud of bubbles. Each word is represented by a bubble, where the size of the bubble is proportionate to the frequency with which the word occurs in the corpus. The larger the bubble’s radius the more frequently the word occurs.",
			toolLink: "Bubbles",
			toolSrc : "/images/bubblelines-square.png"
		},
		{
			toolName: "Cirrus",
			toolDescription: "Cirrus is a word cloud displaying the frequency of words appearing in a corpus. Words occurring more frequently appear larger.",
			toolLink: "Cirrus",
			toolSrc : "/images/bubblelines-square.png"
		},
		{
			toolName: "Corpus Grid",
			toolDescription: "Corpus Grid provides an overview of a corpus, displaying each document’s title, total number of words (word tokens), number of unique words (word types), and lexical density (the ratio of tokens to types).",
			toolLink: "CorpusGrid",
			toolSrc : "/images/bubblelines-square.png"
		}
	],


	init = function() {
		console.log("init Tools.js");
	},

	appendTools = function () {
		var selectToolsTemplate = _.template($("#tools-tpl").html());

		//var resultingHtml = selectToolsTemplate ({tools : listOfTools});
		$("#content").html(selectToolsTemplate);

		for (var i = 0; i < listOfTools.length; i++) {
			$("#tools").append("<div class='col-md-4 tool-container' id=tool-container"+i+"></div>");
			$("#tool-container"+ i).append ("<div  class='tool-image-container' id=tool-image-container"+i+"></div>");
			$("#tool-image-container"+ i).append("<img src=" + listOfTools[i].toolSrc + " class='img-rounded tool-image' id=tool-image"+i+">");
			$("#tool-container"+ i).append ("<div id=tool-description-container"+i+ " class='tool-description-container select-tools-text'>");
			$("#tool-description-container"+ i).append("<p> "+listOfTools[i].toolDescription+ " </p>");
			$("#tool-container"+ i).append ("<button type=submit class='btn btn-default select-tool-button' id=select-tool-button"+i+" ><span class='glyphicon glyphicon-plus'></span> Add Tool </button>");
		}

		/*$("#tool-container").mouseenter(function(){
			$("#tool-image-container").css("display", "none");
			$("#tool-description-container").fadeIn(300);
		});

		$("#tool-container").mouseleave(function(){
			$("#tool-description-container").css("display", "none");
			$("#tool-image-container").fadeIn(300);
		});*/
	};

	that.init = init;
	that.appendTools = appendTools;

	return that;
}());