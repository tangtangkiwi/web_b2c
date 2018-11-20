(function(){
	var ul = $('.middle-nav>li>ul');

	for(var i=0;i<ul.length;i++){
		ul[i].onmouseenter=function(){
			tab(this)
		}
	}
		
	function tab(obj){
		var lis = obj.children;
		for(var i=1;i<lis.length;i++){
			lis[i].onclick = function(){
				for(var i=1;i<lis.length;i++){
					lis[i].className = '';
				}	
				this.className = 'middle-nav-on';
			}
		}
		//middle-nav-on
	}
})();


(function(){
	var oAs = $('.middle-title>a');
	var oIs = $('.middle-title>a>i');
	var off = true;
	for(var i=0;i<oAs.length;i++){
		oAs[i].index = i;
		oAs[i].onclick = function(){
			if(off){
				oIs[this.index].className = 'middle-title-a-i-on';
				off = false;
			}else{
				oIs[this.index].className = '';
				off = true;
			}
		};
	}
	//middle-title-a-i-on
})();

(function(){
	var xin = $('.middle-list>ul>li>strong i');
	var off = true;
	if(off){
		for(var i=0;i<xin.length;i++){
			xin[i].style.color = '#d04751';
		}
	}
	for(var i=0;i<xin.length;i++){
		xin[i].onclick = function(){
			if(off){
				this.style.color = '';
				off = !off;
			}else{
				this.style.color = '#d04751';
				off = !off;
			}
		};
	}
})();






















