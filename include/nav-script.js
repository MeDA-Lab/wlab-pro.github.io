document.write("<script>");
document.write("for (var i = 0; i < document.links.length; i++) {");
document.write("	if (document.links[i].href == document.URL) {");
document.write("		document.links[i].className = 'active';");
document.write("	} else {document.links[0].className = 'active';}");
document.write("}");
document.write("<\/script>");
