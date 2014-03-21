/* Here we run the awesome */

var container = document.getElementById('container');
var slider;
var imgList;

var main = function() {
	var img = new Image('img/1.jpg', '/teste/', subtitle=null, 'teste alt', active=true);
	var img2 = new Image('img/1.jpg');
	imgList = [img, img2];

	slider = new Slider(container, imgList);

	//The code below is pure magical <3

	slider.renderElements(); //render the images and respective html elements on the screen

};

main();



















// ;( function ( $ ) {

// 	var $container;
// 	var $arrow_right;
// 	var $arrow_left;
	
// 	var $slider; //you can have more then one slider per page

// 	var img = []; //an array containing all slider imgs


// 	function init() {
// 		$container = $( '#container' );
// 		$arrow_right = $( '.arrow.right' );
// 		$arrow_left = $( '.arrow.left' );
		
// 		slider = $( '.slider' );

// 		setupImages();
// 		//setupDimensions();
// 		//setupControl()
// 		//renderImages();
// 	}

// 	function setupImages() {
// 		$('ul li', $container).each(function(i){
// 			img[i] = $(this).html();
// 		});
// 	}

// 	function setupDimensions(){

// 	}

// 	function setupControl(){

// 	}

// 	function renderImages() {

// 	}

// 	function rotate(direction) {
		
// 	}

// 	$('.arrow').click(function(){
// 		if($(this).hasClass('right')) {
// 			rotate('right');
// 			return true;
// 		} else if($(this).hasClass('left')) {
// 			rotate('left');
// 			return true;
// 		} else {
// 			return;
// 		}
// 	});

// 	init();

// })( $ );