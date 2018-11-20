//banner轮播效果
var $bannerlist=$(".banner-list li");
var $focus=$(".focus li");
var i=0;
function next(){
	i++;
	if(i>=$bannerlist.length){
		i=0;
	}
	setBanner();
}

function setBanner(){
	$bannerlist.eq(i).addClass("on").siblings().removeClass("on");
	$focus.eq(i).addClass("on").siblings().removeClass("on");
}

$focus.mouseover(function(){
	i=$(this).index();
	setBanner();
})

var timer=setInterval(next,2000);

$(".banner").mouseover(function(){
	clearInterval(timer);
});
$(".banner").mouseout(function(){
	timer=setInterval(next,2000);
});
//banner轮播效果结束



//下拉选项开始
$(".top").click(function(){
	$(".sidebar").css("display","block");
//	event.stopPropagation();
})


//下拉选项结束



//倒计时开始
var day=$(".day");
var hour=$(".hour");
var min=$(".min");
var sec=$(".sec");
var $lasttime=new Date("2018.11.11 00:00:00").getTime();


function settime(){
	var $nowtime=new Date().getTime();
	var $redustime=$lasttime-$nowtime;
	if($lasttime>0){
		day.html(Math.floor($redustime/1000/60/60/24));
		hour.html(Math.floor($redustime/1000/60/60%24));
		min.html(Math.floor($redustime/1000/60%60));
		sec.html(Math.floor($redustime/1000%60));
	}else{
		clearInterval($time);
	}
}

var $time=setInterval(settime,1000);
//倒计时结束

