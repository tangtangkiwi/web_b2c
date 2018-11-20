(function(){
	var mySwiper = new Swiper('.swiper-container', {
		loop : true,
		autoplay: {
		    delay: 3000,
		    stopOnLastSlide: false,
		    disableOnInteraction: false
		},
		pagination: {
    		el: '.swiper-pagination',
    		clickable :true
  		}
	})
})();
