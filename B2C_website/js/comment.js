(function(){
	var oLi = $(".order ul li");
	
	//打星级
	for(var i=0;i<oLi.length;i++){
		oLi[i].index = i;
		oLi[i].onmouseover = function(){
			console.log(this);
			var oA = this.getElementsByTagName('a');
			for(var j=0;j<oA.length;j++){
				oA[j].index = j;
				oA[j].onclick= function(){
					console.log(this.index,this);
					for(var k=0;k<oA.length;k++){
						oA[k].className="iconfont icon-xing";
					}
					for(var cout=0;cout<=this.index;cout++){
						oA[cout].className="iconfont icon-xingxing";
					}
				};
			}
		};
	}
})();
