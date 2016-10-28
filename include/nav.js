document.write("<nav id=\"nav\">");
document.write("	<ul>");
document.write("		<li class=\"navicon\">");
document.write("			<a href=\"javascript:void(0);\" onclick=\"openNav()\" class=\"icon fa-bars\"><\/a>");
document.write("		<\/li>");
document.write("		<br class=\"navicon\">");
document.write("	<\/ul>");
document.write("	<ul id=\"navmenu\">");
document.write("		<li><a href=\"\/\">Home<\/a><\/li>");
document.write("		<li><a href=\"\/member\/\">Members<\/a><\/li>");
document.write("		<li><a href=\"\/project\/mcnla\/\">MCNLA<\/a><\/li>");
document.write("		<li><a href=\"\/project\/isvd\/\">iSVD<\/a><\/li>");
document.write("		<li><a href=\"\/project\/pass\/\">PaSS<\/a><\/li>");
document.write("		<li><a href=\"#footer\" onclick=\"setTimeout(updateNav, 0)\">Get In Touch<\/a><\/li>");
document.write("	<\/ul>");
document.write("<\/nav>");


function openNav() {
	var x = document.getElementById("navmenu");
	if (x.className === "responsive") {
		x.className = "";
	} else {
		x.className = "responsive";
	}
}

function updateNav() {
	navlist = document.getElementById("nav").getElementsByTagName("a");
	docurl = location.pathname;
	for ( var i = 1; i < navlist.length; i++ ) {
		navurl = navlist[i].pathname+navlist[i].hash;
		if ( navurl == docurl || navurl == docurl+'index.html' ) {
			navlist[i].className = 'active';
		} else {
			navlist[i].className = '';
		}
	}
}

updateNav();
