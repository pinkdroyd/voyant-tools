Voyant.MainController = (function() {
	var that = {},


	init = function() {
		console.log("init MainController");
		Voyant.NavbarView.init();
		Voyant.CorpusController.init();		
	};

	that.init = init;


	return that;
}());