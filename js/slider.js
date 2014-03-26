/* Class Slider */

var Slider = function(containerId, imgList, arrowRightId, arrowLeftId) {
	this.$container = containerId; 
	if(arrowRightId) this.$arrowRight = arrowRightId;
	if(arrowLeftId) this.$arrowLeft = arrowLeftId;

	this.interval;

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

//check if the window has resized, and change the current slider dimension, it also set the slider to his initial position.
Slider.prototype.setResize = function() {
	var allImages = document.querySelectorAll('li');

	this.width = this.$container.offsetWidth;
	this.height = this.$container.offsetHeight;

	[].forEach.call(allImages,
		function (e) {	
			e.style.right = 0;
		});

};

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

	var dimension = this.getDimensions();
	var allImages = document.querySelectorAll('li');
	var active = document.querySelector('li.active');
	var previous = active.previousSibling;
	var next = active.nextSibling;

	active.classList.remove('active');

	if(!previous) {
		//first right element, last left element
		var last = allImages[allImages.length - 1];

		[].forEach.call(allImages,
		function (e) {	
			if(direction == 'right') e.style.right = dimension[0]; 
			else if(direction == 'left') e.style.right = dimension[0] * (allImages.length - 1);
		});

		if(direction == 'right') next.classList.add('active');
		else if(direction == 'left') last.classList.add('active');

	} else if(previous && next) {
		//midle elements

		[].forEach.call(allImages,
		function (e) {	
			if(direction == 'right') e.style.right = parseInt(e.style.right) + dimension[0]; 
			else if(direction == 'left') e.style.right = parseInt(e.style.right) - dimension[0]; 
		});

		if(direction == 'right') next.classList.add('active');
		else if(direction == 'left')	previous.classList.add('active');
	} 
	else if(!next){
		//last right element, first left element

		var first = allImages[0];

		[].forEach.call(allImages,
		function (e) {	
			if(direction == 'right') e.style.right = 0;
			else if(direction == 'left') e.style.right = parseInt(e.style.right) - dimension[0]; 
		});

		if(direction == 'right') first.classList.add('active');
		else if(direction == 'left') previous.classList.add('active');
	}

};

//TODO -> Slider with fade in/out parameter
Slider.prototype.fade = function(direction) {
	// body...
};