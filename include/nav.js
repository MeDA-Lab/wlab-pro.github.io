document.write("<nav id=\"nav\">");
document.write("	<ul>");
document.write("		<li class=\"navicon\">");
document.write("			<a href=\"javascript:void(0);\" onclick=\"openNav();\"><i class=\"icon fa-bars\"><\/i><\/a>");
document.write("		<\/li>");
document.write("		<br class=\"navicon\">");
document.write("	<\/ul>");
document.write("	<ul id=\"navmenu\">");
document.write("		<li><a href=\"\/\"><i class=\"icon fa-home\"><\/i><\/a><\/li>");
document.write("		<li><a href=\"\/member\/\">Members<\/a><\/li>");
document.write("		<li><a href=\"\/project\/mcnla\/\">MCNLA<\/a><\/li>");
document.write("		<li><a href=\"\/project\/isvd\/\">iSVD<\/a><\/li>");
document.write("		<li><a href=\"\/project\/pass\/\">PaSS<\/a><\/li>");
document.write("		<li><a href=\"#footer\" onclick=\"openNav();setTimeout(updateNav, 0);\"><i class=\"icon fa-globe\"><\/i><\/a><\/li>");
document.write("		<li><a href=\"#header\" onclick=\"openNav();setTimeout(updateNav, 0);\"><i class=\"icon fa-angle-double-up\"><\/i><\/a><\/li>");
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
		if ( docurl.replace('index.html', '') == navurl.replace('index.html', '') ) {
			navlist[i].className = 'active';
		} else {
			navlist[i].className = '';
		}
	}
}

updateNav();
