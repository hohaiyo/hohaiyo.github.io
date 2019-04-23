$(document).ready(function(){

	$('#item_box').children('button').click(function(){
		$('#item_box').children('button').css({
			'background-color':'',
			'color':''
		});

		//点击后禁用
		$('#item_box').children('button').attr("disabled","true");

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


	// 获取中间的数据
		$.getJSON("http://47.106.220.143:8080/project/getByTime",function(data){
        var result = data.data;
        for(var i=0;i<4;i++){
            if(result[i].status==="0"){
                result[i].status='招标中'

            }
            if(result[i].status==="1"){
                result[i].status='开发中'
                
            }
            if(result[i].status==="-1"){
                result[i].status='已结束'
                
            }

	    //转换获得的创建时间与截止时间,并把它们转换成毫秒数
	    var oldTime = (new Date(result[i].creationTime)).getTime()
	    var newTime = (new Date(result[i].dueTime)).getTime()

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

		the_data = the_year + "/" + the_month + "/" + the_day;  

		// 往html中添加内容
            var obj = '<div class="find_demand_content_left_box_item">\
					<div class="find_demand_content_left_box_item_img pull-left hidden-xs">\
						<a href="project_details.html">\
							<img src="img/find_demand_person_test.png">\
						</a>\
					</div>\
					<div class="pull-left find_demand_item_div">\
						<p class="find_demand_item_p">\
							<span class="find_demand_content_left_box_item_num pull-left">'+result[i].title+'</span>\
							<a href="project_details.html" class="find_demand_item_status_green pull-left">'+result[i].status+'</a>\
							<span class="find_demand_item_price pull-right">\
								<span>¥</span><span class="get_price">'+result[i].price.toLocaleString()+'</span><span>元</span>\
							</span>\
						</p>\
						<p class="find_demand_item_p_two">\
							<span>\
								<span class="color_gray">项目类型:</span>\
								<span>'+result[i].typeName+'</span>\
							</span>\
							<span>\
								<span class="color_gray">项目周期:</span>\
								<span>'+differTime+'</span><span>天</span>\
							</span>\
						</p>\
						<p>\
							<span class="color_gray creationTime">'+the_data+'</span><span class="color_gray">丨</span><span class="color_gray">已有'+'10'+'人投标</span>\
						</p>\
					</div>\
				</div>'
            $('.zxf_pagediv').before(obj);        	
        	};
        });	
        // 获取中间的数据
  
	// 页面筛选

		function sendAjax (){
			var typeId = $('#item_count_name_two').val();
			var size = 10;
			var title = $('#title_search').val();
			var project = '';
			var page = 1;
			var status = $('#item_count_status').val();
			console.log(typeId,size,title,project,page,status);

			$.ajax({
				type:"GET",
				url:"http://47.106.220.143:8080/project/getPage",
				data:{
					page:page,
					size:size,
					typeId:typeId,
					title:title,
					status:status,
					project:project
				},

				success:function(data){//回调函数
					console.log(data.data);
					console.log('传输成功');
					$('#item_box').children('button').removeAttr("disabled");
					$('#item_box_two').children('button').removeAttr("disabled","true");
					$('#active_title_search').removeAttr("disabled");
				},

				error:function(){ //请求发生异常后的回调
					console.log('传输失败');

				}
			});			
		}

		sendAjax();

	$('#item_box').children('button').click(function(){	
		setTimeout("sendAjax()", 1000);
	});

	$('#item_box_two').children('button').click(function(){
		setTimeout("sendAjax()", 1000);
	});

	$('#active_title_search').click(function(){
		$('#active_title_search').attr("disabled","true");
		setTimeout("sendAjax()", 1000);
	});
	// 页面筛选