var style = '';
var first = true;

$.each(document.getElementById('main').getElementsByClassName('alumnus'), function(i, obj) {
	obj.className = 'alumnus main';
	var id = obj.id;
	$.getJSON('/alumnus/' + id + '/info.json', function(data) {
		var name  = data.name;
		var intro = data.intro;
		if ( style == 'style1' ) {
			style = 'style2';
		} else {
			style = 'style1';
		}
		var section = '';
		if ( first ) {
			first = false;
			section += '	<h1>Alumni</h1>';
		}
		section += '	<div class="spotlight ' + style + '">';
		section += '		<div class="content">';
		section += '			<header class="major">';
		section += '				<h2>' + name + '</h2>';
		section += '			</header>';
		section += '				' + intro;
		section += '			<ul class="actions">';
		section += '				<li><a href="/alumnus/' + id + '/" class="button">Know More</a></i>';
		section += '			</ul>';
		section += '		</div>';
		section += '		<span class="image"><img src="/alumnus/' + id + '/avatar.jpg" alt="" /></span>';
		section += '	</div>';
		$(section).appendTo(obj);
	});
});
