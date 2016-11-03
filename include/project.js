var style = 0;

function addProject(id) {
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", '/project/' + id + '/include/info.json', false);
	xmlhttp.send(null);
	var json = JSON.parse(xmlhttp.responseText);
	var name = json.name;
	var faicon = json.faicon;
	var intro = json.intro;

	style%=6;
	style++;

	document.write('<span class="icon major style' + style + ' ' + faicon + '"></span>');
	document.write('<h3><a href="/project/' + id + '/" class="button">' + name + '</a></h3>');
	document.write(intro);
}
