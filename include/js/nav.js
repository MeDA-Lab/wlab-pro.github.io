document.write(
  '<nav id="nav">\n'
+ '	<ul>\n'
+ '		<li class="desktop"><a href="#header" onclick="setTimeout(updateNav, 0);"><i class="icon fa-angle-double-up"></i></a></li>\n'
+ '		<li><a href=""><i class="icon fa-home"></i></a></li>\n'
+ '		<li class="navicon"><a href="project"><i class="icon fa-puzzle-piece"></i><span>Highlights</span></a></li>\n'
+ '		<li class="navicon"><a href="member"><i class="icon fa-users"></i><span>About Us</span></a></li>\n'
+ '		<li><a href="#footer" onclick="setTimeout(updateNav, 0);"><i class="icon fa-share-alt"></i></a></li>\n'
+ '		<li><a href="#header" onclick="setTimeout(updateNav, 0);"><i class="icon fa-angle-double-up"></i></a></li>\n'
+ '	</ul>\n'
+ '</nav>\n'
);


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
