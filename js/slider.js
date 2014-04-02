/* Class Slider */

var Slider = function(containerId, imgList, timeInterval, direction, arrowRightId, arrowLeftId) {
	this.$container = containerId;
	
	if(arrowRightId) { 
		this.$arrowRight = document.querySelector('#'+arrowRightId, $container);
	} else { 
		this.$arrowRight = document.querySelector('.arrow.right', $container);	
	}

	if(arrowLeftId) {
		this.$arrowLeft = document.querySelector('#'+arrowLeftId, $container);
	} else {
		this.$arrowLeft = document.querySelector('.arrow.left', $container);
	}

	if(timeInterval) this.timeInterval = timeInterval;
	else this.timeInterval = 10000; //10 seconds

	if(direction) this.direction = direction;
	else this.direction = 'right';

	//the function
	this.interval = null;

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

Slider.prototype.setTimeInterval = function(timeInterval) {
	this.timeInterval = timeInterval;
};

Slider.prototype.setIntervalFunction = function(interval) {
	this.interval = interval;
};

Slider.prototype.setDirection = function(direction) {
	this.direction = direction;
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

Slider.prototype.getTimeInterval = function() {
	return this.timeInterval;
};

Slider.prototype.getIntervalFunction = function() {
	return this.interval;
};

Slider.prototype.getDirection = function() {
	return this.direction;
};

Slider.prototype.getArrow = function(direction) {
	if(direction == 'right') return this.$arrowRight;
	else if(direction == 'left') return this.$arrowLeft;

	return false;
};


/* Screen */

Slider.prototype.beginInterval = function() {
	var that = this; //keeps the reference of the current object
	return this.setIntervalFunction(setInterval(function () { that.rotate(that.getDirection()) }, 
															  that.getTimeInterval()));
};

//change the current slider dimension, it also set the slider to his initial position.
Slider.prototype.setResize = function() {
	var allImages = document.querySelectorAll('li');
	var active = document.querySelector('li.active');
	var viewport = document.documentElement.clientWidth;

	if(this.$container.offsetWidth == viewport) {
		//if the slider width is 100% or the fixed width matches with the viewport size
		
		this.setDimensions(this.$container.offsetWidth, this.$container.offsetHeight);

		[].forEach.call(allImages,
			function (e) {	e.style.right = 0; });

		active.classList.remove('active');
		allImages[0].classList.add('active');
	}

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