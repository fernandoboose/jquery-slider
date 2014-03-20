/* Here we load the awesome */

var container = document.getElementById('container');
var imgs = ['img1', 'img2'];

slider = new Slider(container, imgs);
alert(slider.getDimensions());






















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