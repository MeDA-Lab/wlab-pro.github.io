document.write('<nav id="nav">');
document.write('	<ul>');
document.write('		<li><a href=""><i class="icon fa-home"></i></a></li>');
document.write('		<li class="navicon"><a href="project"><i class="icon fa-puzzle-piece"></i><span>Projects</span></a></li>');
document.write('		<li class="navicon"><a href="member"><i class="icon fa-users"></i><span>Members</span></a></li>');
document.write('		<li class="navicon"><a href="#footer" onclick="setTimeout(updateNav, 0);"><i class="icon fa-share-alt"></i><span>Links</span></a></li>');
document.write('		<li><a href="#header" onclick="setTimeout(updateNav, 0);"><i class="icon fa-angle-double-up"></i></a></li>');
document.write('	</ul>');
document.write('</nav>');


function updateNav() {
	navlist = document.getElementById('nav').getElementsByTagName('a');
	docurl = location.pathname;
	docurl = docurl.replace('index.html', '').replace(/\/$/, '');
	for ( var i = 0; i < navlist.length; i++ ) {
		navurl = navlist[i].pathname+navlist[i].hash;
		if ( docurl == navurl.replace('index.html', '').replace(/\/$/, '') ) {
			navlist[i].className = 'active';
		} else {
			navlist[i].className = '';
		}
	}
}

updateNav();
