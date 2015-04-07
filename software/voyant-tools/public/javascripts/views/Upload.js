Voyant.Upload = (function() {
	var that = {},
	uploadFirstload = true, 

	init = function() {
		console.log("init Upload.js");
	},

	appendUpload = function () {
		appendFreetext();
		if (uploadFirstload != true) {
			fillCurrentCorpus();
		} else {
			uploadFirstload = false; 
		}
	};

	appendFreetext = function() {
		var freetextTemplate = _.template($("#freetext-tpl").html());
		$("#content").html(freetextTemplate);

		$("#upload-corpus").css("background-color", "#B02130");
		$("#freetext-button").css("background-color", "#B02130");
		setupHover();

		$("#upload-button").click(function(e) {
			appendFileupload();
			fillCurrentCorpus(); 
		});
		
		$("#freetext-clear-corpus").click(function(e) {
			clearCorpurs();
			appendFreetext(); 
			Voyant.Navbar.corpusDeleted(); 
		});
	},

	appendFileupload = function() {		
		var fileuploadTemplate = _.template($("#fileupload-tpl").html());
		$("#content").html(fileuploadTemplate);

		$("#upload-button").css("background-color", "#B02130");
		setupHover();

		$("#freetext-button").click(function(e) {
			appendFreetext();
			fillCurrentCorpus(); 
		});	
		$.getScript("/javascripts/libs/fileinput.js");

		$("#fileupload-clear-corpus").click(function(e) {
			clearCorpurs();
			appendFileupload(); 
			Voyant.Navbar.corpusDeleted();
			MainController.appendUpload(); 
		});

		//TODO: adapt file input	

   		var corpusObject = Voyant.CorpusController.getCorpusObject();
   		var fileUploaded = corpusObject.file.file_uploaded;

   		var footer_value = setOriginalFooter();
   		var caption_value = setOriginalCaption();  		

   		if(fileUploaded){
   			var initalPreviewEntries =[];
   			var i = 0;
   			corpusObject.file.file_names_original.forEach(function (file){
   			i++;
   			 var preview = 
   			 			   '   <div class="file-preview-other" title="'+ file +'" ' + 'style="width:160px;height:160px;" data-fileindex="'+ i +'"' + '>\n' + 
        				   '       <i class="glyphicon glyphicon-file"></i>\n' +
        				   '   </div>\n' +
        				   setFooterSnippet(file);
        				   
        	  initalPreviewEntries.push(preview);
   			});
   			$("#input").fileinput({
    			allowedFileExtensions: ["txt", "xml", "text", "html"],		
				multiple: true,
				initialPreview: initalPreviewEntries,
				overwriteInitial: false,			
    			previewFileType: "object",
    			previewTemplates: {
    				 text: '<div class="file-preview-frame" id="{previewId}" data-fileindex="{fileindex}">\n' +
        				   '   <div class="file-preview-other" title="{caption}" ' + 'style="width:{width};height:{height};"' + '>\n' + 
        				   '       <i class="glyphicon glyphicon-file"></i>\n' +
        				   '   </div>\n' +         			   
        				   '   {footer}\n' +
        				   '</div>\n',
        		 	 html: '<div class="file-preview-frame" id="{previewId}" data-fileindex="{fileindex}">\n' +
        				   '<div class="file-preview-other" style="width:{width};height:{height};">\n' +
    					   '       <i class="glyphicon glyphicon-file"></i>\n' +
   						   '   </div>' +
        				   '   {footer}\n' +
        				   '</div>',
    			},
    			previewSettings: {
    				html: {width: "160px", height: "160px"},
    				text: {width: "160px", height: "160px"}
    			}   			
    			
			});
   			
   		} else {
   			var footer_value = setOriginalFooter();
   			var caption_value = setOriginalCaption();  		

			$("#input").fileinput({
    			allowedFileExtensions: ["txt", "xml", "text", "html"],		
				multiple: true,
				overwriteInitial: false,			
    			previewFileType: "object",
    			previewTemplates: {
    				 text: '<div class="file-preview-frame" id="{previewId}" data-fileindex="{fileindex}">\n' +
        				   '   <div class="file-preview-other" title="{caption}" ' + 'style="width:{width};height:{height};"' + '>\n' + 
        				   '       <i class="glyphicon glyphicon-file"></i>\n' +
        				   '   </div>\n' +         			   
        				   '   {footer}\n' +
        				   '</div>\n',
        		 	 html: '<div class="file-preview-frame" id="{previewId}" data-fileindex="{fileindex}">\n' +
        				   '<div class="file-preview-other" style="width:{width};height:{height};">\n' +
    					   '       <i class="glyphicon glyphicon-file"></i>\n' +
   						   '   </div>' +
        				   '   {footer}\n' +
        				   '</div>',
    			},
    			previewSettings: {
    				html: {width: "160px", height: "160px"},
    				text: {width: "160px", height: "160px"}
    			},
    			layoutTemplates: {
    				caption: caption_value,
    				footer: footer_value
    			}
    			
			});
		}
		$('#input').on('filecleared', function(event) {
			
			corpusObject.file.file_uploaded = false;
			corpusObject.file.file_names = [];
			corpusObject.file.file_names_xpath = [];
			corpusObject.file.file_names_xpath = [];
			corpusObject.file.file_names_original = [];
			corpusObject.xpath_applied = false;
			sendCorpusToControllers(corpusObject);
			appendFileupload();

		});

	},	

	setOriginalFooter = function(){
		var footer = '<div class="file-thumbnail-footer">\n' +
        				'    <div class="file-caption-name" style="width:{width}">{caption}</div>\n' +
        				'    {actions}\n' +
        				'</div>';
        return footer;
	},

	setOriginalCaption = function(){
		var caption = '<div tabindex="-1" class="form-control file-caption {class}">\n' +
       			         '   <span class="file-caption-ellipsis">&hellip;</span>\n' +
       			         '   <div class="file-caption-name"></div>\n' +
       			         '</div>';
        return caption;
	},

	setFooterSnippet = function(file_name){
		var fileName = file_name;
		var footer = '<div class="file-thumbnail-footer">\n' +
        				'    <div class="file-caption-name" style="width:160px">'+ fileName +'</div>\n' +        				
        				'</div>';
        return footer;
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
	},

	sendCorpusToControllers = function(object){
		Voyant.CorpusController.setCorpusObject(object);
		Voyant.SettingsController.setCorpusObject(object);
		Voyant.ToolController.setCorpusObject(object);
		Voyant.AnalyzeController.setCorpusObject(object);
	},

	clearCorpurs = function(){
		var corpusObject = Voyant.CorpusController.getCorpusObject();
		corpusObject.file.file_uploaded = false;
		corpusObject.file.file_names = [];
		corpusObject.file.file_names_xpath = [];
		corpusObject.file.file_names_original = [];
		corpusObject.xpath_applied = false;
		sendCorpusToControllers(corpusObject);
	},


	fillCurrentCorpus = function () {
		var corpusObject = Voyant.CorpusController.getCorpusObject();
		var filesLength = corpusObject.file.file_names_original.length;
		var allFilesLength = corpusObject.file.file_names.length;
		var files = corpusObject.file.file_names_original;
		
		if (allFilesLength > filesLength){
			files.push("Freetext");
		}

		$("#fileupload-corpus-list").empty(); 
		$("#freetext-corpus-list").empty(); 

		files.forEach(function (file){
			//Hier mit dem filenamen anstelle was du willst :D
			var fileName = file;
			$("#fileupload-corpus-list").append("<li class=list-group-item>"+fileName+"</li>"); 
			$("#freetext-corpus-list").append("<li class=list-group-item>"+fileName+"</li>");
		});
	},

	that.init = init;
	that.appendUpload = appendUpload;
	that.appendFreetext = appendFreetext;
	that.appendFileupload = appendFileupload; 
	that.fillCurrentCorpus = fillCurrentCorpus; 

	return that;
}());