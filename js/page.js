var button = document.getElementById('submit');
var lang = document.querySelectorAll("input[name=language]:checked")[0];
var codearea = document.getElementById('code');

var beautify = ace.require("ace/ext/beautify");
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/html");

var radio_group = document.querySelectorAll("input[name=language]");

for (var i = 0; i < radio_group.length; i++) {
	radio_group[i].addEventListener('change', function(){
		lang = this.value;
		editor.getSession().setMode("ace/mode/"+lang);
		//beautify.beautify(editor.session);
	});
}


button.addEventListener('click', function(){
	var lang = document.querySelectorAll("input[name=language]:checked")[0];
 	editor.session.setMode("ace/mode/" + lang.value);
	beautify.beautify(editor.session);
});

