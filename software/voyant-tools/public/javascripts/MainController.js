Voyant.MainController = (function() {
	var that = {},


	init = function() {
		console.log("init MainController");
		Voyant.View.init(); 
		Voyant.Model.init(); 
	};

	that.init = init;


	return that;
}());