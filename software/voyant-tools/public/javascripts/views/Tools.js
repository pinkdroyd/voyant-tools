Voyant.Tools = (function() {
	var that = {},

	listOfTools = [
		{
			toolName : "Bubblelines",
			toolDescription : "Bubblelines visualizes the frequency and repetition of  a word’s use in a corpus. Each document in the corpus is represented as a horizontal line and divided into segments of equal length. Each selected word is represented as a bubble with the size of the bubble indicating the word’s frequency in the corresponding segment of text. The larger the bubble’s radius the more frequently the word occurs.",
			toolLink : "Bubblelines"
		},
		{
			toolName: "Bubbles",
			toolDescription: "Bubbles represents the relative frequency of words in a corpus through a cloud of bubbles. Each word is represented by a bubble, where the size of the bubble is proportionate to the frequency with which the word occurs in the corpus. The larger the bubble’s radius the more frequently the word occurs.",
			toolLink: "Bubbles"
		},
		{
			toolName: "Cirrus",
			toolDescription: "Cirrus is a word cloud displaying the frequency of words appearing in a corpus. Words occurring more frequently appear larger.",
			toolLink: "Cirrus"
		},
		{
			toolName: "Corpus Grid",
			toolDescription: "Corpus Grid provides an overview of a corpus, displaying each document’s title, total number of words (word tokens), number of unique words (word types), and lexical density (the ratio of tokens to types).",
			toolLink: "CorpusGrid"
		}
	],


	init = function() {
		console.log("init Tools.js");
	},


	getToolList = function () {
		console.log("getToolList");
	};

	that.init = init;
	that.getToolList = getToolList;

	return that;
}());