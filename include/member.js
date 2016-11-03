var style1 = true;
var first = true;

function addMember(id) {
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET",'/member/' + id + '/include/info.json',false);
	xmlhttp.send(null);
	var name = JSON.parse(xmlhttp.responseText).name;
	xmlhttp.open("GET",'/member/' + id + '/include/intro.html',false);
	xmlhttp.send(null);
	var intro = xmlhttp.responseText;

	document.write('<section id="' + id + '" class="main">');
	if ( first ) {
		first = false;
		document.write('	<h1>Members</h1>');
	}
	if ( style1 ) {
		style1 = false;
		document.write('	<div class="spotlight style1">');
	} else {
		style1 = true;
		document.write('	<div class="spotlight style2">');
	}
	document.write('		<div class="content">');
	document.write('			<header class="major">');
	document.write('				<h2>' + name + '</h2>');
	document.write('			</header>');
	document.write(intro)
	document.write('			<ul class="actions">');
	document.write('				<li><a href="/member/' + id + '/" class="button">Know More</a></i>');
	document.write('			</ul>');
	document.write('		</div>');
	document.write('		<span class="image"><img src="/member/' + id + '/images/avatar.jpg" alt="" /></span>');
	document.write('	</div>');
	document.write('</section>');
}
