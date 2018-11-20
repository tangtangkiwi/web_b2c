(function(){
	//获取地址列表
	var lists = $('.address>ul>li');

	lists[0].onclick=function(){
		lists[0].className='list-on';
		lists[1].className='';
		$('.list-pitch')[0].innerHTML='<span class="list-pitch-span"></span>';
		$('.list-pitch')[1].innerHTML='';
		
		//$('.address-a')[0].innerHTML = '';
		$('.address-a').remove();
		
		var oA = document.createElement('a');
		oA.href = 'address.html';
		oA.innerHTML = '修改本地址';
		oA.className = 'address-a';	
		this.appendChild(oA);
	}
	lists[1].onclick=function(){
		lists[0].className='';
		lists[1].className='list-on';
		$('.list-pitch')[1].innerHTML='<span class="list-pitch-span"></span>';
		$('.list-pitch')[0].innerHTML='';
		
		$('.address-a').remove();
		//$('.address-a')[1].innerHTML = '';
		
		var oA = document.createElement('a');
		oA.href = 'address.html';
		oA.innerHTML = '修改本地址';
		oA.className = 'address-a';	
		this.appendChild(oA);
		
	}
	
	//删除列表的某一项
	var del = $('.del');
	var lis = $('.cart-list>ul>li');
	
	//获取总价格
	var total = $('.total-right>div:first-child+div p>span');
	var totals = 0;
	//console.log(total);
	
	for(var i=0;i<del.length;i++){
		del[i].index = i;
		del[i].onclick = function(){
			//console.log(this);
			lis[this.index].remove();	
			var price = $('.price span');//每样商品单价
			//console.log(price);
			totals = 0;
			for(var i=0;i<price.length;i++){
				totals += parseInt(price[i].innerHTML)
			}
			//console.log(totals);
			total[0].innerHTML = totals+'.00';
			total[3].innerHTML = totals+'.00';
		}
	}
	
})();


/*下拉菜单*/
(function(){
	var express = $('.total-left>div>span');
	console.log(express);
	express[0].onmouseover = function(ev){
		
	}
})();




















