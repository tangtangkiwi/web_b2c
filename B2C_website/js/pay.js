(function(){
	var pass = $('.password>form>div>input');
	console.log(pass);
	
	for(var i=0;i<pass.length;i++){
		pass[i].index = i;
		pass[i].oninput = function(){	
			if(this.value.length == 1){
				if(this.index < pass.length-1){
					pass[this.index].blur();
					pass[this.index+1].focus();
				}else if(this.index == pass.length-1){
					pass[this.index].blur();
				}
			
			}
		}
	}
	
	
	
	
	
	
	
})();


/*密码*/

