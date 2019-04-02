$(document).ready(function(){
	$('#click_upload').click(function(){
		$('#demand_file').click()
	});
	//上传按钮
	$('#security_code_input').focus(function(){
		$('#security_code_btn').css({
			'border-color': '#66afe9',
			'box-shadow': 'inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)'
		});		
	});
	//验证码按钮
	$('#security_code_input').blur(function(){
		$('#security_code_btn').css({
			'border-color': '',
			'box-shadow':''
		});	
		$(this).css({
			'border-color':'#ccc',
			'box-shadow':''
		});	
	});
	//验证码input
	$('#list-inline-demand').children('li').click(function(){
		$('#list-inline-demand').children('li').css({
			'border-color':'',
			'color':''			
		});		

		$(this).css({
			'border-color':'dodgerblue',
			'color':'dodgerblue'
		});		
	});	

	$('demand_submit').click(function(){
		$(this).css({
			'text-decoration':'none',
			'color':'white'
		});
	});
});

    window.onscroll = window.onresize= function(){
    	var demand_right = document.getElementById('demand_content_right');
    	var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
    	// var demand_content=document.getElementById('demand_content');
    	demand_right.style.top = scrollTop+'px';   	
    } 	
// 右侧内容随随滚动条变换位置
//单项选择项目类型

	// var demand_submit = document.getElementById('demand_submit');
	demand_submit.onclick = function(){
	    var demand_content = document.getElementById('demand_content');
	    var demand_input = demand_content.getElementsByTagName('input');
	    var demand_checkbox = document.getElementById('demand_checkbox');
	    var list_inline_demand = document.getElementById('list-inline-demand');
	    var demand_type = list_inline_demand.getElementsByTagName('li');
	    var demand_arr = new Array();
	    var pos = 0;


	    // 是否选择项目类型
	    for(var i=0; i<demand_type.length; i++){
	    	if(demand_type[i].style.borderColor=='dodgerblue'){
	    		demand_arr[pos] = demand_type[i];	    	
	    		// demand_arr[pos].style.borderColor = 'red';
	    		pos++;
	    	}
	    }

	    if(demand_arr.length!==1){	    	
	    	alert('请选择项目类型')	;		    		    	
	    	return false;
    	}

	    //是否选择项目类型
	    

	    // 是否填写项目名称
	    var demand_name = document.getElementById('demand_name');
	    if(demand_name.value == ''){
	    	demand_name.style.borderColor = 'red';
	    	alert('请填写项目名称')	;		    		    	
	    	return false;	    	
	    }
	    // 是否填写项目名称

    	//金额是否大于等于50000元
    	var demand_budget = document.getElementById('demand_budget')
    	if(demand_budget.value<50000){
    		demand_budget.style.borderColor = 'red';
    		alert('个人项目金额不能低于50000元');
    		return false;
    	}
    	//金额是否大于等于50000元

    	// 是否填写期望周期
	    var demand_day = document.getElementById('demand_day');
	    if(demand_day.value == ''){
	    	demand_day.style.borderColor = 'red';
	    	alert('请填写期望周期')	;		    		    	
	    	return false;	    	
	    }
	    // 是否填写期望周期

	    //是否填写项目介绍
	    var demand_introduce = document.getElementById('demand_introduce');
	    if(demand_introduce.value == ''){
	    	demand_introduce.style.borderColor = 'red';
	    	alert('请填写项目介绍')	;		    		    	
	    	return false;	    	
	    }
	    // 是否填写项目介绍

	    // 是否填写招标要求
	    var demand_call_for = document.getElementById('demand_call_for');
	    if(demand_call_for.value == ''){
	    	demand_call_for.style.borderColor = 'red';
	    	alert('请填写招标要求')	;		    		    	
	    	return false;	    	
	    }	    	    
	    // 是否填写招标要求

	    // 是否填写姓名
	    var demand_user_name = document.getElementById('demand_user_name');
	    if(demand_user_name.value == ''){
	    	demand_user_name.style.borderColor = 'red';
	    	alert('请填写您的姓名')	;		    		    	
	    	return false;	    	
	    }	    	    
	    // 是否填写姓名    

	    // 是否填写邮箱
	    var demand_user_email = document.getElementById('demand_user_email');
	    if(demand_user_email.value == ''){
	    	demand_user_email.style.borderColor = 'red';
	    	alert('请填写您的邮箱')	;		    		    	
	    	return false;	    	
	    }	    	    
	    // 是否填写邮箱	

	    // 是否填写手机号码
	    var demand_user_tel = document.getElementById('demand_user_tel');
	    if(demand_user_tel.value == ''){
	    	demand_user_tel.style.borderColor = 'red';
	    	alert('请填写您的手机号码')	;		    		    	
	    	return false;	    	
	    }	    	    
	    // 是否填写手机号码
	    
	    // 是否填写验证码
	    var security_code_input = document.getElementById('security_code_input');
	    if(security_code_input.value == ''){
	    	security_code_input.style.borderColor = 'red';
	    	alert('请填写验证码')	;		    		    	
	    	return false;	    	
	    }	    	    
	    // 是否填写验证码		        	    	    

    	// 检测是否勾选了同意条款
    	if(demand_checkbox.getElementsByTagName('img')[0].style.display==''){
    		alert('请勾选同意本站条款');
	    	return false;
    	}
    	// 检测是否勾选了同意条款

	}
		// 验证码
	var maxtime = 60;
	if(window.name == '' || window.name == '-1' || isNaN(window.name)) {
		maxtime = 1 * 60;
	} 
	else {
		maxtime = window.name;
		
	}

	var countdown=60; 
	function settime(obj) { 
	    if (countdown == 0) { 
	        obj.removeAttribute("disabled");    
	        obj.value="获取验证码"; 
	        countdown = 60; 
	        return;
	    } else { 
	        obj.setAttribute("disabled", true); 
	        obj.value="重新发送(" + countdown + ")"; 
	        countdown--; 
	    } 
	setTimeout(function() { 
	    settime(obj) }
	    ,1000) 
	}
		// 验证码