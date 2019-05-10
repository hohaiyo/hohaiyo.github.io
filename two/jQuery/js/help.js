$(function(){
	$("html").eq(0).css("font-size",$("html")[0].clientWidth/7.5+'px');
	$(window).scroll(function(){
		var topp = $(document).scrollTop();
		if(topp > 10){
			$(".white_header").slideDown();
		}else{
			$(".white_header").slideUp();
		}
	});
})