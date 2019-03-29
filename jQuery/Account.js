$(function(){
	
	// 下拉按钮
	
	$('.dropdown input').click(function(){
		$('.dropdown-ul').toggle();
	
		 
	})

	$(".dropdown-ul li").click(function() {
        $(".dropdown input").val($(this).text()); 
        $(this).parent().toggle(); 
		$(this).css({'background':'#108ee9','color':"#fff"});
		
    });
	$('.dropdown-ul li').mouseenter(function(){
		$(this).css({'background':'#108ee9','color':"#fff"})
	})
	$('.dropdown-ul li').mouseleave(function(){
		$(this).css({'background':'#fff','color':"#000"})
	})
	
	
	// 选项卡
	
	$('.left-ul li ').click(function(){
		$(".left-ul li ").eq($(this).index()).addClass(".left-a").siblings().removeClass('.left-a');
         $(".Account-right ").hide().eq($(this).index()).show();
		 
		$('.left-ul a').css('background','#f0f2f5').eq($(this).index()).css('background','#fff');	
		
	})
		
})