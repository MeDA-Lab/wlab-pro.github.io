document.write("<nav id=\"nav\">");
document.write("	<ul>");
document.write("		<li class=\"navicon\">");
document.write("			<a href=\"javascript:void(0);\" onclick=\"openNavMenu()\" class=\"icon fa-bars\"><\/a>");
document.write("		<\/li>");
document.write("		<br class=\"navicon\">");
document.write("	<\/ul>");
document.write("	<ul id=\"navmenu\">");
document.write("		<li><a href=\"index.html\">Home<\/a><\/li>");
document.write("		<li><a href=\"member\/index.html\">Members<\/a><\/li>");
document.write("		<li><a href=\"project\/mcnla\/index.html\">MCNLA<\/a><\/li>");
document.write("		<li><a href=\"project\/isvd\/index.html\">iSVD<\/a><\/li>");
document.write("		<li><a href=\"project\/pass\/index.html\">PaSS<\/a><\/li>");
document.write("	<\/ul>");
document.write("<\/nav>");

function openNavMenu() {
	var x = document.getElementById("navmenu");
	if (x.className === "responsive") {
		x.className = "";
	} else {
		x.className = "responsive";
	}
}

navlist = document.getElementById("nav").getElementsByTagName("a");
docurl = location.pathname;
for ( var i = 1; i < navlist.length; i++ ) {
	navurl = navlist[i].pathname;
	if ( navurl == docurl || navurl == docurl+'index.html' ) {
		navlist[i].className = 'active';
	}
}
