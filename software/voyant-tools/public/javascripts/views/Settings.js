Voyant.Settings = (function() {
	var that = {},

	init = function() {
		console.log("init settings.js");
	},


	appendSettings = function() {
		var settingsTemplate = _.template($("#settings-tpl").html());
		$("#content").html(settingsTemplate);
	};

	that.init = init; 
	that.appendSettings = appendSettings;  

	return that;
}());