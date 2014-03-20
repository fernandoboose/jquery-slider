/* Class Slider */

var Slider = function(containerId, imgList, arrowRightId, arrowLeftId) {
	this.$container = containerId; //document.getElementById("container");
	if(arrowRightId) this.$arrowRight = arrowRightId;
	if(arrowLeftId) this.$arrowLeft = arrowLeftId;
	
	//TODO -> set arrows that r inside $container parent.

	this.width = this.$container.offsetWidth;
	this.height = this.$container.offsetHeight;

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

/* Getters */

Slider.prototype.getContainer = function() {
	return this.$container;
}

Slider.prototype.getDimensions = function() {
	return [this.width, this.height];
};

/* Animations */

Slider.prototype.rotate = function(direction) {
	// body...
};
