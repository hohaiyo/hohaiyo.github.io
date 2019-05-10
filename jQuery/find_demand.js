$(document).ready(function(){

	$('#item_box').children('button').click(function(){
		$('#item_box').children('button').css({
			'background-color':'',
			'color':''
		});

		//点击后禁用
		$('#item_box').children('button').attr("disabled","true");
		$('#count_page').val(1);

		$('#item_all').removeClass('item_active')

		$(this).css({
			'background-color':'dodgerblue',
			'color':'white',
			'text-decoration':'none'			
		});
	});

	$('#item_box_two').children('button').click(function(){
		$('#item_box_two').children('button').css({
			'background-color':'',
			'color':''
		});
		//点击后禁用
		$('#item_box_two').children('button').attr("disabled","true");
		$('#count_page').val(1);

		$('#item_all_two').removeClass('item_active')

		$(this).css({
			'background-color':'dodgerblue',
			'color':'white',
			'text-decoration':'none'			
		});
	});

});

		// 项目筛选
		var item_count_status = document.getElementById("item_count_status");		
		var count_name_two = document.getElementById("item_count_name_two");
		var count_li_two  = document.getElementById("item_box").children;
		var count_li_three  = document.getElementById("item_box_two").children;
		count_name_two.value = "";
		function count_two(x){
			count_li_two[x].onclick = function(){
				count_name_two.value = x;
			};
		};

		count_two(0,"");
		count_two(1,"IT/软件开发");
		count_two(2,"UI设计");
		count_two(3,"营销策划");
		count_two(4,"APP/小程序");
		count_two(5,"其他类型");	

		item_count_status.value = "";
		function count_status(y,obj){
			count_li_three[y].onclick = function(){
				item_count_status.value = obj;
			};	
		};
		count_status(0,"");
		count_status(1,0);
		count_status(2,1);
		count_status(3,-1);
		// 项目筛选
		
		function sendAjax (){
			var typeId = $('#item_count_name_two').val();
			var size = 7;
			var title = $('#title_search').val();
			var project = '';
			var page = $('#count_page').val();
			var status = $('#item_count_status').val();
			var urlStr = "http://47.106.220.143:8080/project/getPage";
			// console.log(typeId,size,title,project,page,status);

			$.ajax({
				type:"GET",
				url:urlStr,
				// dataType: 'json',
				// async:true,				
				data:{
					'page':page,
					'size':size,
					'typeId':typeId,
					'title':title,
					'status':status,
					'project':project,
					// 'timeStamp':new Date().getTime()
				},

				beforeSend:function(){
					//每次按下按钮进行筛选前先删除先前的内容
					$(".zxf_pagediv").siblings(".find_demand_content_left_box_item").remove();					
					// 添加loading
					$('#loading').html("<img src='img/loading.gif'>");
				},

				success:function(data){
					// 加载成功删除loading
					$('#loading').empty();
					// 删除设置在按钮上面的disabled
					// console.log(data.data);
					$('#item_box').children('button').removeAttr("disabled");
					$('#item_box_two').children('button').removeAttr("disabled","true");
					$('#active_title_search').removeAttr("disabled");

					// // 获取总页数
					$('#count_page_two').val(Math.ceil(data.data.count/size));
			        $(".zxf_pagediv").createPage({
						pageNum: $('#count_page_two').val(),
						current: $('#count_page').val()
					});

					var result_two = data.data.list;
					// 当内容为空时提示警告
			        if (result_two.length==0){
			        	$('#find_nothing').removeClass('count_none');
						$('#pagediv').addClass('count_none');
			        }

			        if(result_two.length!==0){
			        	$('#find_nothing').addClass('count_none');
						$('#pagediv').removeClass('count_none');
			        }

					for(var i=0;i<result_two.length;i++){
			            if(result_two[i].status==="0"){
			                result_two[i].status='招标中'

			            }
			            if(result_two[i].status==="1"){
			                result_two[i].status='开发中'
			                
			            }
			            if(result_two[i].status==="-1"){
			                result_two[i].status='已结束'
			            }
					    //转换获得的创建时间与截止时间
					    // 为了兼容ie 需要先把后台传输的时间中的"-"替换成"/",T替换成空格
					    result_two[i].creationTime = result_two[i].creationTime.replace(/-/g, '/');	
					    result_two[i].dueTime = result_two[i].dueTime.replace(/-/g, '/');

					    result_two[i].creationTime = result_two[i].creationTime.replace(/T/g, ' ');	
					    result_two[i].dueTime = result_two[i].dueTime.replace(/T/g, ' ');
				    						
					    //为了能让new Date().getTIme()识别 需要删除"."后面的
					    var oldtime = result_two[i].creationTime.split(".");	
					    var newtime = result_two[i].dueTime.split(".");	
						result_two[i].creationTime = oldtime[0];
						result_two[i].dueTime = newtime[0];

						// 转换成毫秒数
					    var oldTime = (new Date(result_two[i].creationTime)).getTime();
					    var newTime = (new Date(result_two[i].dueTime)).getTime();
					    // 补上缺少的8小时
					    oldTime = oldTime+8*60*60*1000;
					    newTime = newTime+8*60*60*1000;

					    // 通过相减获得项目周期
					    var differTime = Math.ceil((newTime - oldTime)/1000/60/60/24);

					    // 重新转换创建时间
					    var oldTime_two = new Date(oldTime);
						the_year = oldTime_two.getFullYear();//年份
						the_month = oldTime_two.getMonth()+1;//月份
						the_day = oldTime_two.getDate();//几号	  
						the_data = the_year + "/" + the_month + "/" + the_day; //把时间按照20xx/x/x的形式拼起来

						// 获取投标人数
						$.ajax({
							type:"GET",
							url:"http://47.106.220.143:8080/project/getCountByPid",
							data:{
								pid:result_two[i].id
							},

							success:function(data){
								// console.log("获取投标人数成功");
								// console.log(data);
								
							},

					        error:function(){
					            // console.log("投标人数获取失败");
					        }							
						});
						// 往html中添加内容
				        var the_obj = '<div class="find_demand_content_left_box_item">\
							<div class="find_demand_content_left_box_item_img pull-left hidden-xs">\
								<a href="project_details.html" class="img_data">\
									<img src="img/find_demand_person_test.png" class="local_img">\
								</a>\
							</div>\
							<div class="pull-left find_demand_item_div">\
								<p class="find_demand_item_p">\
									<span class="find_demand_content_left_box_item_num pull-left">'+result_two[i].title+'</span>\
									<a href="project_details.html" class="find_demand_item_status_green pull-left">'+result_two[i].status+'</a>\
									<span class="find_demand_item_price pull-right">\
										<span>¥</span><span class="get_price">'+result_two[i].price.toLocaleString()+'</span><span>元</span>\
									</span>\
								</p>\
								<p class="find_demand_item_p_two">\
									<span>\
										<span class="color_gray">项目类型:</span>\
										<span>'+result_two[i].typeName+'</span>\
									</span>\
									<span>\
										<span class="color_gray">项目周期:</span>\
										<span>'+differTime+'</span><span>天</span>\
									</span>\
								</p>\
								<p>\
									<span class="color_gray creationTime">'+the_data+'</span><span class="color_gray">丨</span><span class="color_gray">已有'+'0'+'人投标</span>\
								</p>\
							</div>\
						</div>';
						$('.zxf_pagediv').before(the_obj);//在分页器前面添加 
				
			        };	
						// 点击图片跳转后获取对应数据		
						var box_item = document.getElementsByClassName("find_demand_content_left_box_item");
						function local_data(n){
							box_item[n].onmouseenter = function(){
								// 每次进入前先删除先前的本地数据
								localStorage.clear(); 
								string_result = JSON.stringify(result_two[n]);
								localStorage.setItem("indetail",string_result);	 	
								// console.log(result_two[n]);							
							};
						};
						for(var z=0;z<box_item.length;z++){
							local_data(z)
						}
						$('.find_demand_content_left_box_item').click(function(){
							location.href="project_details.html";
						});						
													              
				},

				error:function(err){ //请求发生异常后的回调
					// console.log("传输失败");
					// 加载成功删除loading
					$('#loading').empty();	

				}
			});		
		};


		function sendAjax_two(){

			var typeId = $('#item_count_name_two').val();
			var size = 7;
			var title = $('#title_search').val();
			var project = '';
			var page = $('#count_page').val();
			var status = $('#item_count_status').val();
			var urlStr = "http://47.106.220.143:8080/project/getPage";
			// console.log(typeId,size,title,project,page,status);

			$.ajax({
				type:"GET",
				url:urlStr,
				// dataType: 'json',
				// async:true,				
				data:{
					'page':page,
					'size':size,
					'typeId':typeId,
					'title':title,
					'status':status,
					'project':project,
					// 'timeStamp':new Date().getTime()
				},

				beforeSend:function(){
					//每次按下按钮进行筛选前先删除先前的内容
					$(".zxf_pagediv").siblings(".find_demand_content_left_box_item").remove();				
					// 添加loading
					$('#loading').html("<img src='img/loading.gif'>");
				},

				success:function(data){
					// 加载成功删除loading
					$('#loading').empty();					
					// 删除设置在按钮上面的disabled
					// console.log(data.data);
					$('#item_box').children('button').removeAttr("disabled");
					$('#item_box_two').children('button').removeAttr("disabled","true");
					$('#active_title_search').removeAttr("disabled");

					var result_two = data.data.list;
					// 当内容为空时提示警告
			        if (result_two.length==0){
			        	$('#find_nothing').removeClass('count_none');
						$('#pagediv').addClass('count_none');
			        }

			        if(result_two.length!==0){
			        	$('#find_nothing').addClass('count_none');
						$('#pagediv').removeClass('count_none');
			        }

					for(var i=0;i<result_two.length;i++){
			            if(result_two[i].status==="0"){
			                result_two[i].status='招标中'

			            }
			            if(result_two[i].status==="1"){
			                result_two[i].status='开发中'
			                
			            }
			            if(result_two[i].status==="-1"){
			                result_two[i].status='已结束'
			            }
		            
					    //转换获得的创建时间与截止时间
					    // 为了兼容ie 需要先把后台传输的时间中的"-"替换成"/",T替换成空格
					    result_two[i].creationTime = result_two[i].creationTime.replace(/-/g, '/');	
					    result_two[i].dueTime = result_two[i].dueTime.replace(/-/g, '/');

					    result_two[i].creationTime = result_two[i].creationTime.replace(/T/g, ' ');	
					    result_two[i].dueTime = result_two[i].dueTime.replace(/T/g, ' ');
				    						
					    //为了能让new Date().getTIme()识别 需要删除"."后面的
					    var oldtime = result_two[i].creationTime.split(".");	
					    var newtime = result_two[i].dueTime.split(".");	
						result_two[i].creationTime = oldtime[0];
						result_two[i].dueTime = newtime[0];

						// 转换成毫秒数
					    var oldTime = (new Date(result_two[i].creationTime)).getTime();
					    var newTime = (new Date(result_two[i].dueTime)).getTime();
					    // 补上缺少的8小时
					    oldTime = oldTime+8*60*60*1000;
					    newTime = newTime+8*60*60*1000;

					    // 通过相减获得项目周期
					    var differTime = Math.ceil((newTime - oldTime)/1000/60/60/24);

					    // 重新转换创建时间
					    var oldTime_two = new Date(oldTime);
						the_year = oldTime_two.getFullYear();//年份
						the_month = oldTime_two.getMonth()+1;//月份
						the_day = oldTime_two.getDate();//几号	  
						the_data = the_year + "/" + the_month + "/" + the_day; //把时间按照20xx/x/x的形式拼起来
						
						// 获取投标人数
						$.ajax({
							type:"GET",
							url:"http://47.106.220.143:8080/project/getCountByPid",
							data:{
								pid:result_two[i].id
							},
							success:function(data){
								// console.log("获取投标人数成功");
								// console.log(data);
								
							},

					        error:function(){
					            // console.log("投标人数获取失败");
					        }							
						});

						// 往html中添加内容
				        var the_obj = '<div class="find_demand_content_left_box_item">\
							<div class="find_demand_content_left_box_item_img pull-left hidden-xs">\
								<a href="project_details.html" class="img_data">\
									<img src="img/find_demand_person_test.png" class="local_img">\
								</a>\
							</div>\
							<div class="pull-left find_demand_item_div">\
								<p class="find_demand_item_p">\
									<span class="find_demand_content_left_box_item_num pull-left">'+result_two[i].title+'</span>\
									<a href="project_details.html" class="find_demand_item_status_green pull-left result_status">'+result_two[i].status+'</a>\
									<span class="find_demand_item_price pull-right">\
										<span>¥</span><span class="get_price">'+result_two[i].price.toLocaleString()+'</span><span>元</span>\
									</span>\
								</p>\
								<p class="find_demand_item_p_two">\
									<span>\
										<span class="color_gray">项目类型:</span>\
										<span>'+result_two[i].typeName+'</span>\
									</span>\
									<span>\
										<span class="color_gray">项目周期:</span>\
										<span>'+differTime+'</span><span>天</span>\
									</span>\
								</p>\
								<p>\
									<span class="color_gray creationTime">'+the_data+'</span><span class="color_gray">丨</span><span class="color_gray">已有'+'0'+'人投标</span>\
								</p>\
							</div>\
						</div>';
						$('.zxf_pagediv').before(the_obj);//在分页器前面添加 		        
			        };

						// 点击图片跳转后获取对应数据		
						var box_item = document.getElementsByClassName("find_demand_content_left_box_item");
						function local_data(n){
							box_item[n].onmouseenter = function(){
								// 每次进入前先删除先前的本地数据
								localStorage.clear(); 
								string_result = JSON.stringify(result_two[n]);
								localStorage.setItem("indetail",string_result);	 	
								// console.log(result_two[n]);							
							};
						};
						for(var z=0;z<box_item.length;z++){
							local_data(z)
						}
						$('.find_demand_content_left_box_item').click(function(){
							location.href="project_details.html";
						});																        
				},

				error:function(){ //请求发生异常后的回调
					// console.log('传输失败');
					// 加载成功删除loading
					$('#loading').empty();	
				}
			});		
		};

		// 刚刚进入页面时的数据
		sendAjax();		

	// 页面筛选
	$('#item_box').children('button').click(function(){	
		setTimeout("sendAjax()", 1000);
		// console.log($('#count_page_two').val());

	});

	$('#item_box_two').children('button').click(function(){
		setTimeout("sendAjax()", 1000);
		// console.log($('#count_page_two').val());
	});

	$('#active_title_search').click(function(){
		$('#active_title_search').attr("disabled","true");
		$('#count_page').val(1);
		setTimeout("sendAjax()", 1000);
	});

	// 页面筛选
	