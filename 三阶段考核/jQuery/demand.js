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
			'border-color': ''
		});	
		$(this).css({
			'border-color':'#ccc',
			'box-shadow':''
		});	
	});
	//验证码input
var demand_li = $('#list-inline-demand').children('li')
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
});
//单项选择项目类型