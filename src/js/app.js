console.log('#app.js');

// cache DOM
var $header;
var $menu;
var $li;
var $btnNext, $btnPrevious;

var itemsTotal = 0,
	itemActive = 0;
var itemWidth = 0;
var mouseStartY = 0;

var pull_step = 0;
var total_pull = 80,
release = 40,
pull_release = total_pull + release; // 120


document.addEventListener('DOMContentLoaded', function(e){

	// functions
	var init = function(){
		// cache DOM
		$btnNext = document.getElementById('next');
		$btnPrevious = document.getElementById('previous');
		$header = document.querySelector('.header');
		$menu = $header.querySelector('ul.menu');
		$li = $menu.querySelectorAll('li');

		// set global variables
		itemsTotal = $li.length;
		itemWidth = $li[0].clientWidth;
	};

	init();
	$menu.style.width = (itemWidth*$li.length) + 'px';

	var setNext = function(){
		if(itemActive < (itemsTotal - 2)) {
			itemActive++;
			setActiveItem(itemActive);
		} else {

		}
	};

	var setPrevious = function(){
		if(itemActive > 0) {
			itemActive--;
			setActiveItem(itemActive);
		} else {

		}
	};

	var setActiveItem = function(){
		$menu.style.left = (-1*itemWidth*itemActive) + 'px';
	};

	var menuMouseMove = function(e){
		var diff = Math.max(0, e.pageY - mouseStartY);
		if(diff > pull_release) { diff = pull_release + (diff-pull_release)/(diff*0.01) }
		$header.style.height = (48 + diff) + 'px';

		if(diff < pull_release){
			pull_step = Math.ceil(pull_release/itemsTotal);
		} else {
			pull_step = 0;
		}

		var index = Math.floor(diff/pull_step);

		if (index < itemsTotal) {
			itemActive = index;
		} else {
			itemActive = itemsTotal - 1;
		}
		setActiveItem();
	};

	var menuMouseUp = function(e){
		itemActive = 0;
		setActiveItem();
		classie.add($header, 'transition');
		$header.style.height = 48 + 'px';
		document.removeEventListener('mousemove', menuMouseMove, false);
		document.removeEventListener('mouseup', menuMouseUp, false);
	};

	var menuMouseDown = function(e){
		classie.remove($header, 'transition');
		mouseStartY = e.pageY;
		document.addEventListener('mousemove', menuMouseMove, false);
		document.addEventListener('mouseup', menuMouseUp, false);
	};

	// events
	$btnNext.addEventListener('click', setNext, false);
	$btnPrevious.addEventListener('click', setPrevious, false);
	$header.addEventListener('mousedown', menuMouseDown, false);
	$header.addEventListener('selectstart', function(e){
		e.preventDefault();
	},false);


}, false);
