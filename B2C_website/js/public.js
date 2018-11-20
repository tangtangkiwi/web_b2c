/*兼容IE input标签placeholder属性*/
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

/*二级导航*/
(function(){
	$(".all-goods").mouseenter(function(){
		
		$(".all-goods ul").fadeIn(750,function(){
			$(".all-goods ul")[0].style.display = "block";
		});
		$(".all-goods").mouseleave(function(){
			$(".all-goods ul")[0].style.display = "none";
		});
	})
})();























