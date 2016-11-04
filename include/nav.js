document.write('<nav id="nav">');
document.write('	<ul class="navibar">');
document.write('		<li><a href="javascript:void(0);" onclick="openNav();"><i class="icon fa-bars"></i></a></li>');
document.write('		<li><a href=""><i class="icon fa-home"></i></a></li>');
document.write('		<li><a href="#footer" onclick="closeNav();setTimeout(updateNav, 0);"><i class="icon fa-share-alt"></i></a></li>');
document.write('		<li><a href="#header" onclick="closeNav();setTimeout(updateNav, 0);"><i class="icon fa-angle-double-up"></i></a></li>');
document.write('	</ul>');
document.write('	<ul>');
document.write('	</ul>');
document.write('	<ul id="navmenu" class="navmenu">');
document.write('	  <p style="line-height:0.5"><br></p>');
document.write('		<li class="desktop"><a href=""><i class="icon fa-home"></i></a></li>');
document.write('		<li><a href="member/">Members</a></li>');
document.write('		<li><a href="alumnus/">Alumni</a></li>');
document.write('		<li><a href="project/mcnla/">MCNLA</a></li>');
document.write('		<li><a href="project/isvd/">iSVD</a></li>');
document.write('		<li><a href="project/pass/">PaSS</a></li>');
document.write('		<li class="desktop"><a href="#footer" onclick="setTimeout(updateNav, 0);"><i class="icon fa-share-alt"></i></a></li>');
document.write('		<li class="desktop"><a href="#header" onclick="setTimeout(updateNav, 0);"><i class="icon fa-angle-double-up"></i></a></li>');
document.write('	</ul>');
document.write('</nav>');


function openNav() {
	var x = document.getElementById('navmenu');
	if (x.className === 'navmenu') {
		x.className = 'navmenu responsive';
	} else {
		x.className = 'navmenu';
	}
}

function closeNav() {
	var x = document.getElementById('navmenu');
	x.className = 'navmenu';
}

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
