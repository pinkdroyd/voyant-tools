console.log("cirrus.js aufgerufen");

var url = "http://voyant-tools.org/tool/Cirrus/?input=http://digitalhumanities.org:8080/dhq/vol/3/3/000067.xml";
$('#ifrm').attr('src', url);



document.getElementById('ifrm').onload= function() {
        console.log("onload");
};

$( "#change-button" ).click(function() {
	var url = "http://voyant-tools.org/tool/Bubblelines/?input=http://digitalhumanities.org:8080/dhq/vol/3/3/000067.xml"
  	$('#ifrm').attr('src', url);
  	$('#tool-heading').text("Bubblelines");
});







