/* Tab切换 */
(function(){
	var Tabs = $(".middle>div>div div");
	var Forms = $(".middle>div>div form");
	Tabs[0].onclick=function(){
		Tabs[0].className = "tab-on";
		Forms[0].className = "form-on";
		Tabs[1].className = "";
		Forms[1].className = "";
	};
	Tabs[1].onclick=function(){
		Tabs[0].className = "";
		Forms[0].className = "";	
		Tabs[1].className = "tab-on";
		Forms[1].className = "form-on";
	};
})();

(function(){
if( !('placeholder' in document.createElement('input')) ){/*只在不支持placeholder时执行*/
	jQuery('[placeholder]').focus(function() {
	  var input = jQuery(this);
	  if (input.val() == input.attr('placeholder')) {
	    input.val('');
	    input.removeClass('placeholder');
	  }
	}).blur(function() {
	  var input = jQuery(this);
	  if (input.val() == '' || input.val() == input.attr('placeholder')) {
	    input.addClass('placeholder');
	    input.val(input.attr('placeholder'));
	  }
	}).blur().parents('form').submit(function() {
	  jQuery(this).find('[placeholder]').each(function() {
	    var input = jQuery(this);
	    if (input.val() == input.attr('placeholder')) {
	      input.val('');
	    }
	  })
	});
}
})();


/*记住密码按钮*/
(function(){
var onff = true;
$(".remember>span").click(function(){
	if(onff){
		$(".remember>span>span").addClass("remember-on")
		onff = !onff;
	}else{
		$(".remember>span>span").removeClass("remember-on")
		onff = !onff;
	}
});	
})();

/*改变验证码*/
(function(){
	var verify = $('.verify>div>img');
	var onoff = true;
	console.log(verify)
	verify[0].onclick = function(){
		if(!onoff){
			this.src = 'img/login_verify1.png';
			onoff = !onoff;
		}else{
			this.src = 'img/login_verify2.png';
			onoff = !onoff;
		}
	}
})();



















