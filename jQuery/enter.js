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
				$('.enter-user').css('border','1px solid #49a9ee')
		$('.error').css({"max-height":"0"})
	})	
	$('.enter-user').blur(function(){
		$('.enter-user').css('border','1px solid #fff')
		$('.error').css({"max-height":"0"})
	})
	
	$('.enter-pwd').focus(function(){
				$('.enter-pwd').css('border','1px solid #49a9ee')
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
	$(document).keydown(function(event){
		if(event.keyCode==13){
			$('.need-login').click()
		}
	})
	$('.need-login').click(function(){
		// console.log($('#need-login .enter-user').val())
		$.ajax({
			type:"POST",//方式
			url:"http://47.106.220.143:8080/company/login",//地址
			data:{//拿给后端的参数
				name:$('#need-login .enter-user').val(),//自己页面拿到的值
				password:$('#need-login .enter-pwd').val()//自己页面拿到的值
			},
			success:function(data){//回调函数
				if(data.name != "" & data.data != -1){	//判断
					var companys = JSON.stringify(data.data.company)
					var people = JSON.stringify(data.data.role)
					var day = cookie.setCookieDate(7)
					cookie.set("user",companys,day,"/")
					location.href = "index.html"
					localStorage.setItem("people",people)
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
	$(document).keydown(function(event){
		if(event.keyCode==13){
			$('.exploit-login').click()
		}
	})
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
					var workers = JSON.stringify(data.data.worker)
					var people = JSON.stringify(data.data.role)
					var day = cookie.setCookieDate(7)
					cookie.set("user",workers,day,"/")
					location.href = "index.html"
					localStorage.setItem("people",people)
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
	
})
