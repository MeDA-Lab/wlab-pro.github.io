document.write('<nav id="nav">');
document.write('	<a href="javascript:void(0);" style="display:none"></a>');
document.write('	<ul class="desktop">');
document.write('		<li><a href="#header" onclick="setTimeout(updateNav, 0);" title="Top"><i class="icon fa-angle-double-up"></i></a></li>');
document.write('		<li><a href="" title="Home"><i class="icon fa-home"></i></a></li>');
document.write('		<li><a href="project/">Projects</a></li>');
document.write('		<li><a href="member/">Members</a></li>');
document.write('		<li><a href="#footer" onclick="setTimeout(updateNav, 0);" title="Links"><i class="icon fa-share-alt"></i></a></li>');
document.write('		<li><a href="#header" onclick="setTimeout(updateNav, 0);" title="Top"><i class="icon fa-angle-double-up"></i></a></li>');
document.write('	</ul>');
document.write('	<ul class="mobile">');
document.write('		<li><a href="" title="Home"><i class="icon fa-home"></i></a></li>');
document.write('		<li><a href="project/" title="Projects"><i class="icon fa-puzzle-piece"></i></a></li>');
document.write('		<li><a href="member/" title="Members"><i class="icon fa-users"></i></a></li>');
document.write('		<li><a href="#footer" onclick="setTimeout(updateNav, 0);" title="Links"><i class="icon fa-share-alt"></i></a></li>');
document.write('		<li><a href="#header" onclick="setTimeout(updateNav, 0);" title="Top"><i class="icon fa-angle-double-up"></i></a></li>');
document.write('	</ul>');
document.write('</nav>');


function updateNav() {
	navlist = document.getElementById('nav').getElementsByTagName('a');
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
