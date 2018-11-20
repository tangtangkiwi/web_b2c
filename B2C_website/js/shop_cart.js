
(function(){
	var onoff = true;
	var totaloff = true;
	var lists = $('.list-pitch');

	//全选
	$('.content-pitch').parent().on('click',function(){
		if(totaloff){
			$('.content-pitch').addClass('pitch');
			lists.addClass('pitch');
			totaloff = false;
		}else{
			$('.content-pitch').removeClass('pitch');
			lists.removeClass('pitch');
			totaloff = true;
		}
	});
	
	//单选
	for(var i=0;i<lists.length;i++){
		lists[i].onclick=function(){
			if(onoff==true){
				this.className='list-pitch pitch';
				onoff = !onoff;
				this.onoff = true;
			}else{
				this.className='list-pitch';
				onoff = !onoff;
				this.onoff = false;
			}
			var j = 0;
			for(var i=0;i<lists.length;i++){
				if(lists[i].onoff == true){
					j++;
				}
				if(j == lists.length){
					$('.content-pitch').addClass('pitch');
					lists.addClass('pitch');
					totaloff = false;
				}
				if(j < lists.length){
					$('.content-pitch').removeClass('pitch');
					//lists.removeClass('pitch');
					totaloff = true;
				}
			}
			
		}
	}
	
	
	
	
	
	
	//删除一项商品列表
	var del = $(".del");//删除按钮
	var oLis = $('.content>ul>li'); //要删除的列表
	
	var cart = $('.shopping-car>a>span>span');
	//console.log(cart[0].innerHTML);
	cart[0].innerHTML=$('.content>ul>li').length;
	for(var i=0;i<del.length;i++){
		del[i].index = i;
		del[i].onclick = function(){
			var onoff = confirm('要删除该商品吗？');
			console.log(onoff);
			if(onoff){
				console.log(this)
				oLis[this.index].remove();
				cart[0].innerHTML=$('.content>ul>li').length;
			}else{
				
			}	
		}
	}
	
	//删除全部商品列表
	$('.dels').on('click',function(){
		$('.content>ul').remove();
		cart[0].innerHTML=0;
	});
	
	
	//商品计数器
	var num = $('.content-num');
	var prices = $('.content-num').parent().next();//获取每个商品的单价
	//console.log( parseInt(encodeURI(prices[0].innerHTML).slice(-3)));
	
	//加一
	var add = $('.add');
	for(var i=0;i<add.length;i++){
		add[i].index = i;
		add[i].onclick = function(){
			num[this.index].innerHTML =  parseInt(num[this.index].innerHTML)+1;
			var oldprice = parseInt(encodeURI(prices[this.index].innerHTML).slice(-3));
			
			var price = oldprice/(parseInt(num[this.index].innerHTML)-1);//求出商品的单价
			
			prices[this.index].innerHTML = '&#165;'+price*(parseInt(num[this.index].innerHTML));
			
			
		};
	}
	
	//减一
	var sub = $('.sub');
	for(var i=0;i<sub.length;i++){
		sub[i].index = i;
		sub[i].onclick = function(){
			if(num[this.index].innerHTML>1){
				num[this.index].innerHTML =  parseInt(num[this.index].innerHTML)-1;
				var oldprice = parseInt(encodeURI(prices[this.index].innerHTML).slice(-3));
			
				var price = oldprice/(parseInt(num[this.index].innerHTML)+1);//求出商品的单价
			
				prices[this.index].innerHTML = '&#165;'+(price*(parseInt(num[this.index].innerHTML)));
			
			}else{
				num[this.index].innerHTML = 1;
			}
			
		};
	}
})();































