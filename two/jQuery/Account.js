$(function(){
	
	// 下拉按钮
	var user = JSON.parse($.cookie("user"))
	if(user.money==null){
		user.money = 0
	}
	var money = user.money.toLocaleString()
	console.log(money)
	$('.money').html(money)
	
	
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
		// $(".left-ul li ").eq($(this).index()).addClass(".left-a").siblings().removeClass('.left-a');
         $(".Account-right ").hide().eq($(this).index()).show();
		 
		$('.left-ul a').css('background','#f0f2f5').eq($(this).index()).css('background','#fff');
		
		if($(this).index() == 2){
			$("footer").css("position","initial")
		}else{
			$("footer").css("position","fixed")
		}
	})
	
	//勾选框

		$('.pull-left').click(function(){
			$(this).children().children().toggle();

		})
		
		
		
		$('.more').click(function(){
			$('#one').css('display','none')
			$('#two').css("display",'block')
		})
		
		$('.information').click(function(){
			$('#three').css('display','none')
			$('#one').css("display",'block')
		})
		
		
	   if($(window).width()<767){
        $(".footer_warp").children(".pull-left").addClass("center-block").removeClass("pull-left")
    }

		

	
	
		
})