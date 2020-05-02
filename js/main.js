$(function(){

 $('.works-slider__inner').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  nextArrow: '<div class="slider-arrows sldier-arrows__right"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="115" viewBox="0 0 100 115"><defs><clipPath id="slz3a"><path fill="#fff" d="M100 86l-49.682 29.05-50-28.5L0 29 49.682-.052l50 28.5z"/></clipPath></defs><g><g><path fill="none" stroke="#fff" stroke-miterlimit="20" stroke-width="6" d="M100 86v0l-49.682 29.05v0l-50-28.5v0L0 29v0L49.682-.052v0l50 28.5v0z" clip-path="url(&quot;#slz3a&quot;)"/></g></g></svg></div>',
	  prevArrow: '<div class="slider-arrows sldier-arrows__left"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="115" viewBox="0 0 100 115"><defs><clipPath id="slz3a"><path fill="#fff" d="M100 86l-49.682 29.05-50-28.5L0 29 49.682-.052l50 28.5z"/></clipPath></defs><g><g><path fill="none" stroke="#fff" stroke-miterlimit="20" stroke-width="6" d="M100 86v0l-49.682 29.05v0l-50-28.5v0L0 29v0L49.682-.052v0l50 28.5v0z" clip-path="url(&quot;#slz3a&quot;)"/></g></g></svg></div>',
	  responsive: [
    	{
      	breakpoint: 1385,
      	settings: {
      	  arrows: false,
      	  dots: true
      	}
    	},
    	{
      	breakpoint: 1220,
      	settings: {
      	  arrows: false,
      	  dots: true,
      	  slidesToShow: 2,
	  		  slidesToScroll: 2,
      	}
    	},
    	{
      	breakpoint: 815,
      	settings: {
      	  arrows: false,
      	  dots: true,
      	  slidesToShow: 1,
	  		  slidesToScroll: 1,
      	}
    	},
    ]
	});

 $('.drop-down__menu').on('click', function(){
        $('.drop-down__menu').toggleClass('active');
    });
});