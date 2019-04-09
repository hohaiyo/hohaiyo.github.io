$(function(){
	//勾选框
	$(".sure-check").click(function () {
		$(".sure-check i").toggle();
		if($(".sure-check i").css("display") == "block"){
			$(".sure-check").css("border","none");
		}else{
			$(".sure-check").css("border","1px solid rgba(0,0,0,0.2)");
		}
	});
	
	
	// 登录框
	$('.enter-user').click(function(){
			
		
		// $('body').delegate(this,'propertychange input',function(){
			
			// if($('.enter-user').val().length !=0){
				$('.enter-user').css('border','1px solid #49a9ee')
				// $('.warn').css({'display':'none'})
			// }else{
				// $('.enter-user').css('border','1px solid red')	
			// }
			
		// })
			
	})
	
	$('.enter-pwd').click(function(){
			
		// $('body').delegate(this,'propertychange input',function(){
			
			// if($('.enter-pwd').val().length !=0){
				// $('.warn').css({'display':'none'})
				$('.enter-pwd').css('border','1px solid #49a9ee')
				// console.log(1)
			// }else{
				// $('.enter-pwd').css('border','1px solid red')	
			// }
			
		// })
			
	})
	
	//登陆按钮
	
	$('.enter-login').click(function(){
		
		if($('.enter-user').val().length!=0 &&	 $('.enter-pwd').val().length!=0){
			
			$('.enter-user').css('border','1px solid #49a9ee')
			$('.enter-pwd').css('border','1px solid #49a9ee')
				
			
		}else if($('.enter-user').val().length!=0 &&	 $('.enter-pwd').val().length==0){
				$('.enter-pwd').css('border','1px solid red')
				$('.warn').css({'display':'block'})
		}else{
				$('.enter-user').css('border','1px solid red')
				$('.warn').css({'display':'block'})
		
		}
		
	})
	
	//选项卡
	$('.enter_nav-ul li').click(function(){
		$(this).css({'border-bottom':'2px solid#fff','color':'#fff'}).	siblings().css({'border-bottom':'2px solid rgba(0,0,0,.5)',"color":'#000'})
		
		$('.main').hide().eq($(this).index()).show()
	})
		
			
})