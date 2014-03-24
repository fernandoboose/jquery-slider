/* Here we run the awesome */

var $container = document.getElementById(container='container');
var slider;
var imgList;

var main = function() {
	var img = new Image(src='img/1.jpg', toUrl='/teste/', subtitle=null, alt='teste alt');
	var img2 = new Image('img/2.jpg');
	var img3 = new Image('img/1.jpg')

	imgList = [img, img2, img3];

	slider = new Slider($container, imgList);

	//The code below is pure magical <3

	slider.renderElements(); //render the images and respective html elements on the screen

	var arrowRight = document.querySelector('.arrow.right');
	var arrowLeft = document.querySelector('.arrow.left');
	arrowRight.onclick = function(e){
		slider.rotate('right');
	}
};

main();