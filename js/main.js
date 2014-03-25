/* Here we run the awesome */

var $container = document.getElementById(container='container');
var $arrowRight = document.querySelector('.arrow.right', $container);
var $arrowLeft = document.querySelector('.arrow.left', $container);
var slider;
var imgList;

var main = function() {
	var img = new Image(src='img/1.jpg', toUrl='/teste/', subtitle=null, alt='teste alt');
	var img2 = new Image('img/2.jpg');
	var img3 = new Image('img/1.jpg');
	var img4 = new Image('img/2.jpg');

	imgList = [img, img2, img3, img4];

	slider = new Slider($container, imgList);

	//The code below is pure magical <3

	slider.renderElements(); //render the images and respective html elements on the screen

	$arrowRight.onclick = function(e){
		slider.rotate('right');
	}

	$arrowLeft.onclick = function(e){
		slider.rotate('left');
	}
};

main();