document.write("<nav id=\"nav\">");
document.write("	<ul>");
document.write("		<li><a href=\"index.html\">Home<\/a><\/li>");
document.write("		<li><a href=\"member\/index.html\">Members<\/a><\/li>");
document.write("		<li><a href=\"project\/mcnla\/index.html\">MCNLA<\/a><\/li>");
document.write("		<li><a href=\"project\/isvd\/index.html\">iSVD<\/a><\/li>");
document.write("		<li><a href=\"project\/pass\/index.html\">PaSS<\/a><\/li>");
document.write("	<\/ul>");
document.write("<\/nav>");
navlist = document.getElementById("nav").getElementsByTagName("a");
for ( var i = 0; i < navlist.length; i++ ) {
	if (navlist[i].href == document.URL || navlist[i].href == document.URL+'index.html') {
		navlist[i].className = 'active';
	}
}
