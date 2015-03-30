Voyant.Upload = (function() {
	var that = {},

	init = function() {
		console.log("init Upload.js");
	},

	appendUpload = function () {
		appendFreetext();
	};

	appendFreetext = function() {
		var freetextTemplate = _.template($("#freetext-tpl").html());
		$("#content").html(freetextTemplate);

		$("#upload-corpus").css("background-color", "#B02130");
		$("#freetext-button").css("background-color", "#B02130");
		setupHover();

		$("#upload-button").click(function(e) {
			appendFileupload();
		});
	},

	appendFileupload = function() {
		var fileuploadTemplate = _.template($("#fileupload-tpl").html());
		$("#content").html(fileuploadTemplate);

		$("#upload-button").css("background-color", "#B02130");
		setupHover();

		$("#freetext-button").click(function(e) {
			appendFreetext();
		});	
		$.getScript("/javascripts/libs/fileinput.js");
	},

	setupHover = function () {
		$(".upload-nav-element").mouseenter(function() {
			if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
				$(this).css("background-color", "#838B8B");
			}
		});

		$(".upload-nav-element").mouseleave(function() {
			if ($(this).css('background-color')!=="rgb(176, 33, 48)"){
				$(this).css("background-color", "#3B3B3C");
			}
		});
	};

	that.init = init;
	that.appendUpload = appendUpload;
	that.appendFreetext = appendFreetext;
	that.appendFileupload = appendFileupload; 

	return that;
}());