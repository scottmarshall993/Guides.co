$(document).ready(function(){

//Video Scroll Function
var videos = document.getElementsByTagName("video"),

fraction = 0.8;
function checkScroll() {

for(var i = 0; i < videos.length; i++) {

	var video = videos[i];

	var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
	b = y + h, //bottom
	visibleX, visibleY, visible;

	visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
	visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

	visible = visibleX * visibleY / (w * h);

	if (visible > fraction) {
		video.play();
	}
}
}
window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);

//Tooltip Function
$(function () { 
	$('[data-toggle="tooltip"]').tooltip({trigger: 'hover','placement': 'top', container: '.banner-slider'});
});

//Text Rotator Function
$("#rotator").wordsrotator({
	words: ['Marketers','Authors','Content Stratigests','Business Coaches','Celebrities','Associations','Content Marketers','Digital Marketers','Entrepreneurs','You'], // Array of words, it may contain HTML values
	randomize: false, //show random entries from the words array
	stopOnHover: false, //stop animation on hover
	changeOnClick: false, //force animation run on click
	animationIn: "fadeInDown", //css class for entrace animation
	animationOut: "fadeOut", //css class for exit animation
	speed: 3300 // delay in milliseconds between two words
});

//Royal Slider Function
$(".banner-slider").royalSlider({
	loop:true,
	keyboardNavEnabled: true,
	fadeinLoadedSlide:true,
	sliderDrag:false,
	sliderTouch:true,
	transitionSpeed:800,
	autoScaleSlider: false,
	imageScaleMode:'fit',
	autoPlay: {
	// autoplay options go gere
	enabled: true,
	pauseOnHover: true,
	delay:2800,
	}
});

});
