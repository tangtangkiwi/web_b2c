(function(){
	var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 4,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 4,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });
})();
 
(function(){
	var choice = $('.choice-goods>ul>li');
	for(var i=0;i<choice.length;i++){
		choice[i].onclick = function(){		
			for(var i=0;i<choice.length;i++){
				choice[i].className = '';
			}		
			this.className = 'choice-goods-active';		
		}
	}	
})();

(function(){
	var choice = $('.choice-num>strong>em>input')[0];
	var add = $('.choice-num>strong>i')[0];
	var sub = $('.choice-num>strong>i')[1];
	var total = $('.choice-num>strong+span>i')[0];
	
	add.onclick = function(){
		if(parseInt(total.innerHTML)<1){
			choice.value = parseInt(choice.value);
			total.innerHTML = parseInt(total.innerHTML);
		}else{
			choice.value = parseInt(choice.value)+1;
			total.innerHTML = parseInt(total.innerHTML)-1;
		}		
	};
	
	sub.onclick = function(){
		if(parseInt(choice.value)<=1){
			choice.value = parseInt(choice.value);		
			total.innerHTML = parseInt(total.innerHTML);
		}else{
			choice.value = parseInt(choice.value)-1;		
			total.innerHTML = parseInt(total.innerHTML)+1;
		}	
	};
	
	var t = choice.value;
	var tTotal = parseInt(total.innerHTML);
	choice.onchange = function(){					
		if( isNaN(Number(choice.value))||(choice.value<1) ){
			choice.value = t;
			total.innerHTML =  tTotal;
		}else{
			total.innerHTML = tTotal - choice.value;
		}	
	};
	
})();


(function(){
	var lis = $('.content-top>ul>li');
	for(var i=0;i<lis.length;i++){
		lis[i].onclick = function(){
			for(var i=0;i<lis.length;i++){
				lis[i].className = '';
			}
			this.className = 'content-top-active';
		};
	}
})();


































