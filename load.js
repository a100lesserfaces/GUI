function loadXMLDoc() {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp=new XMLHttpRequest();
    }
    else {// code for IE6, IE5
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
	    var text = xmlhttp.responseText;
	    var lines = text.split("\n");
            for (var i = 0; i < lines.length; i++) {
                document.getElementById("listing").innerHTML = lines[i];
            }
	}
    }
    xmlhttp.open("GET","listings.txt",true);
    xmlhttp.send();
}