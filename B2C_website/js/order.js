(function(){
	var oH3 = $(".content h3");
	var oUl = $("#list");
	console.log(oUl);
	
	for(var i=0;i<oH3.length;i++){
		oH3[i].index = i;
		oH3[i].onclick = function(){
			for(var i=0;i<oH3.length;i++){
				oH3[i].className = "";
			}
			this.className = "title-on";
			
			
			var that = this;
		    $.get("./order.txt",function(data,status){
		        //alert("数据：" + data + "\n状态：" + status);
		      
		      oUl.empty();
		      
		      console.log(that)
		      
		        if(that.index == 0){
		      		//oUl.append("OK");
		      		//console.log(that.index);
		        }else{
		        	oUl.append(data);
		        }
		    });
  
		};
	}
})();


(function(){	
	//全选按钮
	var oCheck = $(".content form>div:first-child");
	
	var oSpan = $(".content form>div>span");
	
	console.log(oSpan)
	
	//选中按钮
	var oPitch = $("#list>li>div>div>span");
	
	var onoff = true;
	
	oCheck[0].onclick = function(){
		if(onoff){
			oSpan.addClass("check-on");
			oPitch.addClass("check-on");
			onoff=!onoff;
		}else{
			oSpan.removeClass("check-on");
			oPitch.removeClass("check-on");
			onoff=!onoff;
		}
	}
	console.log(oCheck[0])
	console.log(oPitch);
})();






















