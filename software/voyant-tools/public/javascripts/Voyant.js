var Voyant = {
	init: function() {
		console.log("init Voyant");
		Voyant.MainController.init();

		window.onbeforeunload = function() {
        	return "Are you sure you want to leave this page? Your data will be lost!";
    	}
	}


}