/*同意*/
(function(){
var onff = true;
$("p a:first-child").click(function(){
	if(onff){
		$("p a:first-child span").addClass("choose-on");
		onff = !onff;
		$(".submit input").removeAttr("disabled");
	}else{
		$("p a:first-child span").removeClass("choose-on");
		onff = !onff;
		$(".submit input").attr("disabled","disabled");
	}
});	
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


/*下拉选项卡*/