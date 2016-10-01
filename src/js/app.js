console.log('#app.js');


var alertConsole = function() {
	console.log("pushed red");
};


var $grid = document.querySelector(".grid");
var $red  = document.querySelector(".red");

$grid.addEventListener("click", function(e){
	console.log("grid");
	e.preventDefault();
	

}, false);
