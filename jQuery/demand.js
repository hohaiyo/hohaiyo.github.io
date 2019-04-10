	$(document).ready(function(){
		$('#click_upload').click(function(){
			$('#demand_file').click()
		});
		//上传按钮
		
		$('#security_code_input').focus(function(){
			$('#security_code_btn').css({
				'border-color': '#66afe9',
				'box-shadow': '1px 1px 1px rgba(6,106,254,.075)'
			});	
			$(this).css({
				'border-color':'#66afe9',
				'box-shadow':'1px 1px 1px rgba(6,106,254,.075)'
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
    	demand_right.style.top = scrollTop+'px';   	
    } 	
		//右侧内容随随滚动条变换位置
		
		//单项选择项目类型
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
	    else{
	    	demand_name.style.borderColor = '';
	    }
	    // 是否填写项目名称

    	//金额是否大于等于50000元
    	var demand_budget = document.getElementById('demand_budget')
    	if(isNaN(demand_budget.value)){
    		demand_budget.style.borderColor = 'red';
    		alert('个人项目金额不能为空或者低于50000元');
    		return false;
    	}
    	else{
    		demand_budget.style.borderColor = '';
    	}
    	//金额是否大于等于50000元

    	// 是否填写期望周期
	    var demand_day = document.getElementById('demand_day');
	    if(demand_day.value == ''){
	    	demand_day.style.borderColor = 'red';
	    	alert('请填写期望周期');		    		    	
	    	return false;	    	
	    }
	    else{
	    	demand_day.style.borderColor = '';
	    }
	    // 是否填写期望周期

	    //是否填写项目介绍
	    var demand_introduce = document.getElementById('demand_introduce');
	    if(demand_introduce.value == ''||demand_introduce.value.length<20){
	    	demand_introduce.style.borderColor = 'red';
	    	alert('项目介绍不能为空且字数需要超过20');		    		    	
	    	return false;	    	
	    }
	    else{
	    	demand_introduce.style.borderColor = '';
	    }
	    // 是否填写项目介绍

	    // 是否填写招标要求
	    var demand_call_for = document.getElementById('demand_call_for');
	    if(demand_call_for.value == ''){
	    	demand_call_for.style.borderColor = 'red';
	    	alert('请填写招标要求');		    		    	
	    	return false;	    	
	    }	 
	    else{
	    	demand_call_for.style.borderColor = '';
	    }   	    
	    // 是否填写招标要求

	    // 是否填写姓名
	    var demand_user_name = document.getElementById('demand_user_name');
	    if(demand_user_name.value == ''){
	    	demand_user_name.style.borderColor = 'red';
	    	alert('请填写您的姓名');		    		    	
	    	return false;	    	
	    }	
	    else{
	    	demand_user_name.style.borderColor = '';
	    }    	    
	    // 是否填写姓名    

	    // 是否填写邮箱
	    var demand_user_email = document.getElementById('demand_user_email');
	    if(demand_user_email.value == ''){
	    	demand_user_email.style.borderColor = 'red';
	    	alert('请填写您的邮箱');		    		    	
	    	return false;	    	
	    }
	    else{
	    	demand_user_email.style.borderColor = '';
	    }	    	    
	    // 是否填写邮箱	

	    // 是否填写手机号码或手机号码位数是否达到11位
	    var demand_user_tel = document.getElementById('demand_user_tel');
	    if(demand_user_tel.value == ''||demand_user_tel.value.length!==11){
	    	demand_user_tel.style.borderColor = 'red';
	    	alert('请正确填写您的手机号码');		    		    	
	    	return false;	    	
	    }
	    else{
	    	demand_user_tel.style.borderColor = '';
	    }	    	    
	    // 是否填写手机号码或手机号码位数是否达到11位
	    
	    // 是否填写验证码
	    var security_code_input = document.getElementById('security_code_input');
	    if(security_code_input.value == ''){
	    	security_code_input.style.borderColor = 'red';
	    	alert('请填写验证码')	;		    		    	
	    	return false;	    	
	    }
	    else{
	    	security_code_input.style.borderColor = '';
	    }	    	    
	    // 是否填写验证码		        	    	    

    	// 检测是否勾选了同意条款
    	if(demand_checkbox.getElementsByTagName('img')[0].style.display==''){
    		alert('请勾选同意本站条款');
	    	return false;
    	}
    	// 检测是否勾选了同意条款

		// 检测是否为数字
			if (isNaN(demand_budget.value)) {
				alert('项目预算填写必须全部为数字');
				return false;
			}			
			if (isNaN(demand_day.value)) {
				alert('期望周期填写必须全部为数字');
				return false;
			}
		// 检测是否为数字		
	
	}
		// 检测预算
			var remind_money = document.getElementById('remind_money');
			demand_budget.onblur = function(){
				if(isNaN(demand_budget.value)||demand_budget.value<50000){
					this.value = '';
					this.style.borderColor = 'red';
					remind_money.style.opacity = '1';
					remind_money.innerHTML = '预算必须填写阿拉伯数字且不得低于50000元';

				}
				else{
					this.style.borderColor = '';
					remind_money.style.opacity = '0';			
				}
			}			

		// 检测预算

		// 检测天数
			var remind_day = document.getElementById('remind_day');			
			demand_day.onblur = function(){
				if(isNaN(demand_day.value)||demand_day.value!==0){
					this.value = '';
					this.style.borderColor = 'red';
					remind_day.style.opacity = '1';
					remind_day.innerHTML = '期望周期必须填写阿拉伯数字且不能为0';

				}
				else{
					this.style.borderColor = '';
					remind_day.style.opacity = '0';			
				}
			}			
		// 检测天数

		// 检测字符数是否超过20
			var remind_introduce = document.getElementById('remind_introduce');	
			demand_introduce.onblur = function(){
				if(demand_introduce.value.length<20){
					this.style.borderColor = 'red';
					remind_introduce.style.opacity = '1';
					remind_introduce.innerHTML = '项目介绍字符数没有达到20个';

				}
				else{
					this.style.borderColor = '';
					remind_introduce.style.opacity = '0';			
				}
			}		

		// 检测字符数是否超过20


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

		// 只能输入纯中文
			var remind_name = document.getElementById('remind_name');
			demand_user_name.onblur = function(){
				if(!/^[\u4e00-\u9fa5]+$/gi.test(this.value)){
					this.value = '';
					this.style.borderColor = 'red';
					remind_name.style.opacity = '1';
					remind_name.innerHTML = '请使用中文填写姓名';

				}
				else{
					this.style.borderColor = '';
					remind_name.style.opacity = '0';			
				}
			}
		// 只能输入纯中文
		
		// 检测邮箱格式
			var remind_email = document.getElementById('remind_email');
			demand_user_email.onblur = function(){
				if(!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/gi.test(this.value)){
					this.value = '';
					this.style.borderColor = 'red';
					remind_email.style.opacity = '1';
					remind_email.innerHTML = '邮箱格式填写错误';
				}
				else{
					this.style.borderColor = '';
					remind_email.style.opacity = '0';			
				}				
			}
		// 检测邮箱格式
		
		// 检测手机输入
			var remind_tel = document.getElementById('remind_tel');
			demand_user_tel.onblur = function(){
				if(!/^[0-9]*$/gi.test(this.value)||this.value == ''||this.value.length!==11){
					this.value = '';
					this.style.borderColor = 'red';
					remind_tel.style.opacity = '1';
					remind_tel.innerHTML = '手机号码需为11位';
				}
				else{
					this.style.borderColor = '';
					remind_tel.style.opacity = '0';			
				}				
			}
		// 检测手机输入
		
		// 检测验证码输入
						
		// 检测验证码输入