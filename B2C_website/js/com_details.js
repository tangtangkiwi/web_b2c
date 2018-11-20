(function(){
	var lis = $('.content-bottom>span+ul>li');
	for(var i=0;i<lis.length;i++){
		lis[i].onclick = function(){
			for(var i=0;i<lis.length;i++){
				lis[i].className = '';
			}
			this.className = 'content-bottom-active';
		};
	}
})();


(function(){
	var user = $('.content-details>li>div>div');
	//console.log(user);
	for(var i=0;i<user.length;i++){
		user[i].innerHTML = '<img src="img/user/user'+(i+1)+'.png" alt="" />';
	}
})();
