console.log('#app.js');


var alertConsole = function() {
	console.log("pushed red");
};

document.querySelector('.red').onclick = function(){
	console.log('red pushed');
};
