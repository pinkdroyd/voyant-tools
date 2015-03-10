console.log("cirrus.js aufgerufen");

var textUrl1 = "http://digitalhumanities.org:8080/dhq/vol/3/3/000067.xml"
var textUrlKafka = "https://dl.dropboxusercontent.com/u/90853566/kafka.txt"

var url = "http://voyant-tools.org/tool/Cirrus/?input=" + textUrl1;
var tools = ['Cirrus', 'Bubblelines'];
var urls = [["Digital Humanities", "Kafka"], ["http://digitalhumanities.org:8080/dhq/vol/3/3/000067.xml", "https://dl.dropboxusercontent.com/u/90853566/kafka.txt"]];
var currentTool = 0;

setIFrameVisible(false);
initClickListener();
initButtons();

$ifrm = $("#ifrm");
$ifrm.load( function(event) {  
  	setIFrameVisible(true);  
}); 

$ifrm.attr('src', url);

//sorry für inline css
function setIFrameVisible(visible)
{
	if(visible){

		$("#ifrm").removeClass("iframe-invisible");
		$("#ifrm").addClass("iframe-visible");

	} else {
		$("#ifrm").removeClass("iframe-visible");
		$("#ifrm").addClass("iframe-invisible");
	}
}
function initButtons(){

	$.each( tools, function( index, value ){

		var $btn = $('<button id="tool-button '+ value + '" data-tool='+index+'>'+value+'</button>');

		$btn.click(function(){
			
			var textURL = changeText(event.target);			
			$('#ifrm').attr('src', textURL);

		});	

		$('#content').append($btn);
	});
}

function initClickListener()
{
	$( "#use-tool-button" ).click(function() {
		var text = $('#text-input').val();
		//TODO: save value of textfield to server (?) and create a link 
		var x = $('#heading-container').attr('style');		
	});	
	
	$('#change-text-select').change(function() { 
		var url = changeText(null);
	  	$('#ifrm').attr('src', url);
	  	var currentText = $('#change-text-select').find(":selected").text();
	  	$('#tool-heading').text("Cirrus mit " + currentText);
	});

	$( "#change-text-button" ).click(function() {
		
	});
}

function changeText(sender)
{	
	if (sender != null){
		currentTool = $(sender).attr('data-tool');
	}

	var toolValue = tools[currentTool];
	var currentText = $('#change-text-select').find(":selected").text();	
	var textURL = "";

	if(currentText == urls[0][0]) {textURL = urls[1][0]}
	else if(currentText == urls[0][1]){textURL = urls[1][1]}	

	url = "http://voyant-tools.org/tool/" + toolValue +"/?input="+textURL;
	
 	return url;
}









