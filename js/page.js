var button = document.getElementById('submit');
var lang = document.querySelectorAll("input[name=language]:checked")[0];
var codearea = document.getElementById('code');

var editor = ace.edit("editor");
/*editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");*/

button.addEventListener('click', function(){
	switch (lang.value){
		case 'HTML':
		console.log(codearea.value);
		console.log(vkbeautify.xml(codearea.value));
	}
});
