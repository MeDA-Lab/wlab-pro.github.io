var style = 0;

$.each(document.getElementById('projects').getElementsByClassName('project'), function(i, obj) {
	var id = obj.id;
	$.getJSON('/project/' + id + '/info.json', function(data) {
		var name   = data.name;
		var faicon = data.faicon;
		var intro  = data.intro;
		style%=6;
		style++;

		var section = '';
		section += '<span class="icon major style' + style + ' ' + faicon + '"></span>';
		section += '<h3><a href="/project/' + id + '/" class="button">' + name + '</a></h3>';
		section += intro;
		$(section).appendTo(obj);
	});
});
