/* Class Image */

var Image = function(src, toUrl, subtitle, alt) {
	this.src = src;
	
	this.toUrl, this.subtitle, this.alt;

	if(toUrl) this.toUrl = toUrl;
	if(!toUrl) this.toUrl = "#";

	if(subtitle) this.subtitle = subtitle;  
	
	if(alt) this.alt = alt;
	alert(alt);

};

/* Setters */

Image.prototype.setImage = function(src, toUrl, subtitle, alt) {
	if(src) this.src = src;
	if(toUrl) this.toUrl = toUrl;
	if(subtitle) this.subtitle = subtitle;
	if(alt) this.alt = alt;
};

/* Getters */

// Returns a html element <img>.
Image.prototype.getImage = function() {
	if(!this.alt) this.alt = "";
	var img = "<img src = '" + this.src + "' alt = '" + this.alt + "'>"
	return img;
};

//Returns a html element <span> with the sub.
Image.prototype.getSubtitle = function() {
	var sub = "<span class = 'subtitle'>" + this.subtitle + "</span>";
	return sub;
};

Image.prototype.getLinkUrl = function() {
	return this.toUrl;
};