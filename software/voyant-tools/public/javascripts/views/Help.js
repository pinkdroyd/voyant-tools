Voyant.Help = (function() {
	var that = {},

	init = function() {
		console.log("init Help.js");
	},

	appendHelp = function () {
		var helpTemplate = _.template($("#help-tpl").html());
		$("#content").html(helpTemplate);
	};

	that.init = init;
	that.appendHelp = appendHelp; 

	return that;
}());