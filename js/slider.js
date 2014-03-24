/* Class Slider */

var Slider = function(containerId, imgList, arrowRightId, arrowLeftId) {
	this.$container = containerId; 
	if(arrowRightId) this.$arrowRight = arrowRightId;
	if(arrowLeftId) this.$arrowLeft = arrowLeftId;

	this.interval;
	
	/* 
		TODO -> set arrows that r inside $container parent, set this.width and this.height correctly
		and test them with differents parent div size.
	*/

	this.width = this.$container.offsetWidth;
	this.height = this.$container.offsetHeight;

	this.imgList = imgList;

};

/* Setters */

Slider.prototype.setContainer = function(container) {
	this.$container = container;
};

Slider.prototype.setDimensions = function(width, height) {
	this.width = width;
	this.height = height;
};

//Set a array with images objects
Slider.prototype.setImgList = function(arr) {
	for(var i = 0; i < arr.length; i++) {
		this.imgList[i] = arr[i];
	}
};

/* Getters */

Slider.prototype.getContainer = function() {
	return this.$container;
}

Slider.prototype.getDimensions = function() {
	return [this.width, this.height];
};

//Returns an array with image objects
Slider.prototype.getImgList = function() {
	return this.imgList;
};

Slider.prototype.getActiveImage = function() {
	var active = document.querySelector('.active', this.$container);
	return active;
};

/* Screen */

//Render the images in imgList array inside container <ul> element.
Slider.prototype.renderElements = function() {
	var htmlCode = "";
	var link;
	var parentObject = document.createElement('ul');
	var childObject;

	for(var i = 0; i < this.imgList.length; i++){
		childObject = document.createElement('li');
		if(i == 0) childObject.className = 'active';
		parentObject.appendChild(childObject);
		htmlCode = "<a href = '" + imgList[i].getLinkUrl() + "'>" + imgList[i].getImage() + "</a>";
		childObject.innerHTML = htmlCode;
	}
	this.$container.appendChild(parentObject);
};

Slider.prototype.rotate = function(direction) {
	//TODO -> rotate(slide) image elements inside the parent container, following the correct direction

	var active = document.querySelector('.active');
	var dimension = this.getDimensions();

	// active.style.right =  active.style.right + dimension[0];

	var teste = active.nextSibling;

	if(!active.previousSibling) {
		active.style.right = dimension[0];	
		teste.style.right = dimension[0];
	} else if(!active.nextSibling) {
		return false;
	}
	else {
		// active.style.right += dimension[0] * 2;
		teste.style.right += dimension[0] * 2;
		//alert(teste.style.position);
	}

	active.classList.remove('active');
	teste.classList.add('active');

	// alert(active);

	// [].forEach.call(active,
	// 	function (e) {
	// 		if(direction == 'right') { 
	// 			e.setAttribute('class', 'right');
	// 		}
	// 		// if(dimension == 'right') e.style.right = 0;
	// 		// alert(e.getAttribute('class'));
 //        	e.style.right += dimension[0];
 //    	}
	//);
};

//TODO -> Slider with fade in/out parameter
Slider.prototype.fade = function(direction) {
	// body...
};