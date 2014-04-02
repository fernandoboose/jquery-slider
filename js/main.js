/* Here we run the awesome */

var $container = document.getElementById('container');
var slider, imgList, $arrowRight, $arrowLeft;

var main = function() {
	var img = new Image(src='img/1.jpg', toUrl='/teste/', subtitle=null, alt='teste alt');
	var img2 = new Image('img/2.jpg');
	var img3 = new Image('img/1.jpg');
	var img4 = new Image('img/2.jpg');

	imgList = [img, img2, img3, img4];

	slider = new Slider(containerId=$container, imgList=imgList, 3000);
	$arrowRight = slider.getArrow('right');
	$arrowLeft = slider.getArrow('left');

	// The code below is pure magical <3 - don't touch it if you don't know what ur doing :)

	slider.renderElements(); //render the images and respective html elements on the screen
	slider.beginInterval(); // Auto rotate the slider. comment or remove it if you don't want an auto-rotation 

	window.onresize=function(){ slider.setResize() }; // Auto resize the slider when viewport dimensions change

	// Mouse events
	$arrowRight.onclick = function(e) {	slider.rotate('right');	}
	$arrowLeft.onclick = function(e) {	slider.rotate('left');	}
	slider.getContainer().onmouseover=function() {	clearInterval(slider.getIntervalFunction());	}
	slider.getContainer().onmouseout=function() {	slider.beginInterval();	}

};

main();