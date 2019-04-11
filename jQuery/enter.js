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
	$('.enter-user').focus(function(){
			
		
		// $('body').delegate(this,'propertychange input',function(){
			
			// if($('.enter-user').val().length !=0){
				$('.enter-user').css('border','1px solid #49a9ee')
				// $('.warn').css({'display':'none'})
			// }else{
				// $('.enter-user').css('border','1px solid red')	
			// }
			
		// })
		$('.error').css({"max-height":"0"})
	})
	$('.enter-user').blur(function(){
		$('.enter-user').css('border','1px solid #fff')
		$('.error').css({"max-height":"0"})
	})
	
	$('.enter-pwd').focus(function(){
			
		// $('body').delegate(this,'propertychange input',function(){
			
			// if($('.enter-pwd').val().length !=0){
				// $('.warn').css({'display':'none'})
				$('.enter-pwd').css('border','1px solid #49a9ee')
				// console.log(1)
			// }else{
				// $('.enter-pwd').css('border','1px solid red')	
			// }
			
		// })
		$('.error').css({"max-height":"0"})
	})
	$('.enter-pwd').blur(function(){
		$('.enter-pwd').css('border','1px solid #fff')
		$('.error').css({"max-height":"0"})
	})

	//选项卡
	$('.enter_nav-ul li').click(function(){
		$(this).css({'border-bottom':'2px solid#000','color':'#000'}).	siblings().css({'border-bottom':'2px solid #ccc',"color":'#ccc'})
		
		$('.main').hide().eq($(this).index()).show()
	})
	// 企业登录
	$('.need-login').click(function(){
		$.ajax({
			type:"POST",//方式
			url:"http://47.106.220.143:8080/company/login",//地址
			data:{//拿给后端的参数
				name:$('#need-login .enter-user').val(),//自己页面拿到的值
				password:$('#need-login .enter-pwd').val()//自己页面拿到的值
			},
			success:function(data){//回调函数
				if(data.name != "" & data.data != -1){	//判断
					location.href = "index.html"
				}
				if(data.data == -1){

					
						$('.error').css({"max-height":"40px","top":"100px"})
					
				}
			},
			error:function(a){
				alert("登录失败")
			}
		})
		

	})
	// 工作室登录
	$('.exploit-login').click(function(){
		$.ajax({
			type:"POST",//方式
			url:"http://47.106.220.143:8080/worker/login",//地址
			data:{//拿给后端的参数
				name:$('#exploit-login .enter-user').val(),//自己页面拿到的值
				password:$('#exploit-login .enter-pwd').val()//自己页面拿到的值
			},
			success:function(data){//回调函数
				if(data.name != "" & data.data != -1){	//判断
					location.href = "developer.html"
				}
				if(data.data == -1){
					console.log(data)
					$('.error').css({"max-height":"40px","top":"100px"})
				}
			},
			error:function(a){
				alert("登录失败")
			}
		})

	})
	
	
})