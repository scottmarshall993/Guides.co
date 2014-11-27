$(function () {
	  $("#rotator").wordsrotator({
	  words: ['Marketers','Authors','Business Coaches','Celebrities','Associations','Brands','Entrepreneurs','You'], // Array of words, it may contain HTML values
	  randomize: false, //show random entries from the words array
	  stopOnHover: false, //stop animation on hover
	  changeOnClick: false, //force animation run on click
	  animationIn: "fadeInDown", //css class for entrace animation
	  animationOut: "fadeOut", //css class for exit animation
	  speed: 3300 // delay in milliseconds between two words
	  });
	
		//Animate the marketplace menu
		$(".browse").click(function(e){
			e.preventDefault()
			$( ".inner-menu" ).slideToggle( "fast", function() {
	  });
		});

		//When the login button is clicked
		$(".create").click(function(){
			$(".overlay").fadeIn(300);
			$(".create-guide").fadeIn(300);
		});

		//When the login overlay is clicked
		$(".overlay").click(function(){
			$(".overlay").fadeOut(300);
			$(".create-guide").fadeOut(300);
		});
	});

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
	

	  $(".business-slider").royalSlider({
	    arrowsNav: false,
	    loop: true,
	    keyboardNavEnabled: true,
	    controlsInside: false,
	    imageScaleMode: 'fit',
	    arrowsNavAutoHide: false,
	    autoScaleSlider: true, 
	    autoScaleSliderWidth: 490,     
	    autoScaleSliderHeight: 330,
	    thumbsFitInViewport: false,
	    navigateByClick: true,
	    startSlideId: 0,
	    autoPlay: {
		  // autoplay options go gere
		  enabled: true,
		  pauseOnHover: true,
		  delay:1400,
		  },
	    globalCaption: false,
	    imgWidth: 552,
	    imgHeight: 355
	  });

		$(".royalSlider").royalSlider({
		keyboardNavEnabled: true,
		startSlideId:2,
		addActiveClass:true,
		fadeinLoadedSlide:true,	
		slidesSpacing:60,
		transitionType:'move',
		sliderTouch:true,
		visibleNearby: {
		enabled: true,
		centerArea:0.15,
		center: true,
		breakpoint: 1200,
		breakpointCenterArea: 0.40,
		navigateByCenterClick: true
		},			
		});  





	$(function () { 
	    $('[data-toggle="tooltip"]').tooltip({trigger: 'hover','placement': 'top', container: '.banner-slider'});
	});
	

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

	