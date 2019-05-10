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
		
		// 项目类型选择
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
		// 项目类型选择

		$('#demand_submit').click(function(){
			$(this).css({
				'text-decoration':'none',
				'color':'white'
			});
		});
	});

	var user = JSON.parse($.cookie("user"));
	// console.log(user);
	// console.log(user.id);	

    window.onscroll = window.onresize= function(){
    	var demand_right = document.getElementById('demand_content_right');
    	var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
    	demand_right.style.top = scrollTop+'px';   	
    } 	
		//右侧内容随随滚动条变换位置
		
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

    	//金额是否大于等于1000元
    	var demand_budget = document.getElementById('demand_budget')
    	if(isNaN(demand_budget.value)){
    		demand_budget.style.borderColor = 'red';
    		alert('个人项目金额不能为空或者低于1000元');
    		return false;
    	}
    	else{
    		demand_budget.style.borderColor = '';
    	}
    	//金额是否大于等于1000元

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
	
	}

	// 项目类型选择
		var count_num = document.getElementById("item_count_num");
		var count_name = document.getElementById("item_count_name");
		var count_li = document.getElementById("list-inline-demand").children;
		 function count(n,text){
		 	count_li[n].onclick = function(){
				count_num.value = "";
				count_name.value = "";
				count_num.value = n;
				count_name.value = text;		 
			}
		 }
		 count(0,"什么都没");
		 count(1,"IT/软件开发");
		 count(2,"UI设计");
		 count(3,"营销策划");
		 count(4,"APP/小程序");
		 count(5,"其他类型");

	// 项目类型选择


		// 检测预算定金
			var remind_money = document.getElementById('remind_money');
			var deposit = document.getElementById('deposit');
			demand_budget.onblur = function(){
				if(isNaN(demand_budget.value)||demand_budget.value<1000){
					this.value = '';
					this.style.borderColor = 'red';
					remind_money.style.opacity = '1';
					remind_money.innerHTML = '预算必须填写阿拉伯数字且不得低于1000元';

				}

				if(user.money<demand_budget.value){
					this.value = '';
					this.style.borderColor = 'red';
					remind_money.style.opacity = '1';
					remind_money.innerHTML = '开发宝余额不足';					
				}

				else{
					this.style.borderColor = '';
					remind_money.style.opacity = '0';	
					
				}
			}	

			demand_budget.onkeyup = function(){
				if(!isNaN(demand_budget.value)&&demand_budget.value>=1000){
					deposit.innerHTML = Math.floor(demand_budget.value*0.3);
					deposit.style.color = 'red';
				}
			}

		// 检测预算定金

		// 检测天数
			var remind_day = document.getElementById('remind_day');			
			demand_day.onblur = function(){
				if(isNaN(demand_day.value)||demand_day.value==0){
					this.value = '';
					this.style.borderColor = 'red';
					remind_day.style.opacity = '1';
					remind_day.innerHTML = '期望周期必须填写阿拉伯数字且天数不能为0';

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

			$('#security_code_btn').click(function(){
			    var email = $('#demand_user_email').val();
			    // console.log(email);
			    $.ajax({
			        type:"POST",
			        url:"http://47.106.220.143:8080/project/getMail",
			        data:{
			            email:email
			        },
			        success:function(data){
			            // console.log(data);

			        },
			        error:function(a){
			            // console.log(a);
			        }
			    })
			})

		// 验证码
		
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
		
		$("#demand_submit").click(function(){
			var typeId = $("#item_count_num").val();
			var typeName = $("#item_count_name").val();//项目选择类型名字			
			var title = $("#demand_name").val();//项目名称
			var price = $("#demand_budget").val();//项目预算
			var deposit = $("#deposit").html();//定金
			var cycle = $("#demand_day").val();//期望周期
			var desc = $("#demand_introduce").val();//项目介绍
			var file = $("#demand_file").val();//相关文档
			var email = $("#demand_user_email").val();//你的邮箱
			var code = $("#security_code_input").val();//验证码
			var companyId = user.id;

			$.ajax({
				type:"POST",//方式
				url:"http://47.106.220.143:8080/project",//地址
				data:{//拿给后端的参数
					typeId:typeId,
					typeName:typeName,
					title:title,		
					price:price,
					deposit:deposit,
					cycle:cycle,		
					desc:desc,
					file:file,
					email:email,
					code:code,
					companyId:companyId
				},
				success:function(data){//回调函数
					// console.log(data);
					// console.log('传输成功');
					// console.log($.cookie("user").money);
				},
				error:function(){ //请求发生异常后的回调
					// console.log('传输失败')
				}
			});
		});
