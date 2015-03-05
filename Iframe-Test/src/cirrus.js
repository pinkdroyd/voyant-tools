console.log("cirrus.js aufgerufen");

/*document.getElementById('ifrm').onload = function() {
	setTimeout(10000);
	console.log("hi");
	console.log(document.getElementById('footer'));
}*/

var url = "http://voyant-tools.org/tool/Cirrus/?input=http://digitalhumanities.org:8080/dhq/vol/3/3/000067.xml"
$('#ifrm').attr('src', url);

$('#ifrm').load(function(){
    console.log("loaded");
});