Voyant.AnalyzeController = (function() {
	var that = {},
	corpusObject = {},
	baseURL = 'http://127.0.0.1:8888/tool/',
	urls = [],
	serverPath = 'http://localhost:3000/files/'

	// URL example: http://127.0.0.1:8888/tool/Cirrus/?input=http://localhost:3000/files/%fileName%

	init = function() {
		console.log("init AnalyzeController");		
	},

	createURLs = function() {
		urls = [];
		var toolsChoosen = corpusObject.tools.tools_choosen;
		var fileUploaded = corpusObject.file.file_uploaded;
		var xpathApplied = corpusObject.xpath_applied;
		var stopwordApplied = corpusObject.stoppwordlist.stopword_applied;

		var countFiles = corpusObject.file.file_names.length;

		//http://voyant-tools.org/tool/Cirrus/?corpus=regensburg&archive=http://www.uni-regensburg.de/index.html.en&archive=http://en.wikipedia.org/wiki/Regensberg
		
		if(fileUploaded && fileUploaded){

			corpusObject.tools.tool_list.forEach(function(toolName){
			var url = '';
			if(!xpathApplied){
				var fileNames = corpusObject.file.file_names;
			} else {
				var fileNames = corpusObject.file.file_names_xpath;
			}			
				
			if(countFiles == 1){				
					var fileName = fileNames[0];
					var serverP = serverPath;
					if(checkValidURL(fileName)) serverP = "";	
					url = baseURL + toolName +"/?input=" + serverP + fileName;
					console.log(url);
					if(stopwordApplied){
						var stopWordList = defineStopWordList(corpusObject.stoppwordlist.language);
						url = url + "&stopList=" + stopWordList;											
					}
					urls.push(url);
					console.log("URLS: ", urls);								
		
			} else {	

					var corpusName = "archive_dh2015_" + Date.now();
					url = baseURL + toolName +"/?corpus=" + corpusName;
					console.log("Corpus Name", corpusName);

					for (var i = 0; i<countFiles;i++){
						var fileName = fileNames[i];
						var serverP = serverPath;
						if(checkValidURL(fileName)) serverP = "";		
						url = url + "&archive=" + serverP + fileName;
					
					}
					if(stopwordApplied){
						var stopWordList = defineStopWordList(corpusObject.stoppwordlist.language);
						url = url + "&stopList=" + stopWordList;
					}
					console.log(url);
					urls.push(url);		
					console.log("URLS: ", urls);			
			}		
		});	
			
		}
		console.log("URLS: ", urls);
		return urls;
		
	},

	setCorpusObject = function(object){		
		corpusObject = object;		
	},

	defineStopWordList = function(name){
		
		switch(name){
			case 'English': return "stop.en.taporware.txt";
			case 'German' : return "stop.de.german.txt";
			case 'French' : return "stop.fr.veronis.txt";
		}

	},

	checkValidURL = function(str) {
  	var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
      return regexp.test(str);
	},

	sendCorpusToControllers = function(object){
		Voyant.CorpusController.setCorpusObject(object);
		Voyant.SettingsController.setCorpusObject(object);
		Voyant.ToolController.setCorpusObject(object);
	};


	that.createURLs = createURLs;
	that.setCorpusObject = setCorpusObject;
	that.init = init;

	return that;
}());