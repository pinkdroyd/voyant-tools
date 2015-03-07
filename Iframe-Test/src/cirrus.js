console.log("cirrus.js aufgerufen");

var url = "http://voyant-tools.org/tool/Cirrus/?input=http://digitalhumanities.org:8080/dhq/vol/3/3/000067.xml";

setIFrameVisible(false);

$ifrm = $("#ifrm");
$ifrm.load( function(event) {
    console.log("iframe is loaded");
    console.log(parent);
   
  	setIFrameVisible(true);
  
}); 

$ifrm.attr('src', url);

//sorry für inline css
function setIFrameVisible(visible)
{
	if(visible){
		$("#ifrm").css({"height":"400px", "width":"600px", "border":"none"});
	} else {
		$("#ifrm").css({"height":"0", "width":"0", "border":"none"});
	}

}

$( "#change-button" ).click(function() {
	var url = "http://voyant-tools.org/tool/Bubblelines/?input=http://digitalhumanities.org:8080/dhq/vol/3/3/000067.xml"
  	$('#ifrm').attr('src', url);
  	$('#tool-heading').text("Bubblelines");
});







