/* Class Slider */

var Slider = function(containerId, imgList, arrowRightId, arrowLeftId) {
	this.$container = containerId; //document.getElementById("container");
	if(arrowRightId) this.$arrowRight = arrowRightId;
	if(arrowLeftId) this.$arrowLeft = arrowLeftId;
	
	//TODO -> set arrows that r inside $container parent.

	// this.width = this.$container.offsetWidth;
	// this.height = this.$container.offsetHeight;

	this.imgList = imgList;

}

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
	return imgList;
};

/* Animations */

//Render the images in imgList array inside container <ul> element.
Slider.prototype.renderElements = function() {
	//TODO -> render image elements inside the parent container
	var htmlCode = "";
	var link;
	var parentObject = document.createElement('ul');

	for(i = 0; i < this.imgList.length; i++){
		htmlCode += "<li><a href = '" + imgList[i].getLinkUrl() + "'>" + imgList[i].getImage() + "</a></li>";
	}
	parentObject.innerHTML = htmlCode; 
	this.$container.appendChild(parentObject);
};

Slider.prototype.rotate = function(direction) {
	//TODO -> rotate(slide) image elements inside the parent container, following the correct direction
};