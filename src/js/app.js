console.log('#app.js');


var alertConsole = function() {
	console.log("pushed red");
};


var $grid = document.querySelector(".grid");
var $red  = document.querySelector(".red");

var $preview = document.querySelector('.preview');

$grid.addEventListener("click", function(e){
	if (e.target.tagName === 'IMG') {
		var howmany = this.querySelectorAll('li').length;
		if(howmany > 1) {
			var removeTarget = e.target.parentNode;
			removeTarget.parentNode.removeChild(removeTarget);
			handler(e);
			if(howmany === 2) {
				var photoTitle = e.target.alt;
				document.querySelector('.rubic .description').innerText =
					"Selected Item = " + photoTitle;
			}
		}
	}
}, false);

document.querySelector('.grid').addEventListener('mouseover', function(e){
	if(e.target.tagName === 'IMG') {
		var photoTitle = e.target.alt;
		var preview = document.createElement('p');
		preview.className = 'preview-text';
		preview.innerText = photoTitle;
		$preview.appendChild(preview);

		e.target.addEventListener('mouseout', handler, false)
	}
});

var handler = function(e){
	$preview.removeChild($preview.querySelector('.preview-text'));
	e.target.removeEventListener('mouseout', handler, false);
}
