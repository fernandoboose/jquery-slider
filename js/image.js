
/* Class Image */

var Image = function() {
	this.url = "";
	this.subtitle;
	this.alt;
}

/* Setters */

Slider.prototype.setImages = function(arr) {
	for(var i = 0; i < arr.length; i++) {
		this.imgList[i] = arr[i];
	}
	
};

/* Getters */

Slider.prototype.getImages = function() {
	return this.imgList;
}