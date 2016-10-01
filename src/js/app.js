console.log('#app.js');


var alertConsole = function() {
	console.log("pushed red");
};


var $red = document.querySelector(".red");

$red.addEventListener("click", function(){
	console.log('pushed red');
}, false);
