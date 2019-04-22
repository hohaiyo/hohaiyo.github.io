$(document).ready(function(){

	$('#item_box').children('a').click(function(){
		$('#item_box').children('a').css({
			'background-color':'',
			'color':''
		});

		$('#item_all').removeClass('item_active')

		$(this).css({
			'background-color':'dodgerblue',
			'color':'white',
			'text-decoration':'none'			
		});
	});

	$('#item_box_two').children('a').click(function(){
		$('#item_box_two').children('a').css({
			'background-color':'',
			'color':''
		});

		$('#item_all_two').removeClass('item_active')

		$(this).css({
			'background-color':'dodgerblue',
			'color':'white',
			'text-decoration':'none'			
		});
	});

	$('#item_box_three').children('a').click(function(){
		$('#item_box_three').children('a').css({
			'background-color':'',
			'color':''
		});

		$('#item_all_three').removeClass('item_active')

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
		function count_two(x,obj){
			count_li_two[x].onclick = function(){
				// count_name_two.value = "";
				count_name_two.value = obj;
			};
		};

		count_two(0,"");
		count_two(1,"IT/软件开发");
		count_two(2,"UI设计");
		count_two(3,"营销策划");
		count_two(4,"APP/小程序");
		count_two(5,"其他类型");	

		item_count_status.value = "";
		function count_status (y,obj){
			count_li_three[y].onclick = function(){
				// count_name_two.value = "";
				item_count_status.value = obj;
			};
		};							
		count_status(0,"");
		count_status(1,"招标中");
		count_status(2,"开发中");
		count_status(3,"已结束");
		// 项目筛选
        
	// 页面筛选
	
		let typeId = $('#item_count_name_two').val();
		let size = 10;
		let title = $('#title_search').val();
		let project = '';
		let page = 1;
		let status = $('#item_count_status').val();

		$('#item_box').children('a').click(function(){

		});		
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
			},
			error:function(){ //请求发生异常后的回调
				console.log('传输失败')
			}
		});


	// 页面筛选
	
		// 获取中间的数据
		$.getJSON("http://47.106.220.143:8080/project/getByTime",function(data){
        var result = data.data;
        for(var i=0;i<4;i++){
            if(result[i].status==="0"){
                console.log(i)
                result[i].status='招标中'

            }
            if(result[i].status==="1"){
                console.log(i)
                result[i].status='开发中'
                
            }
            if(result[i].status==="-1"){
                console.log(i)
                result[i].status='已结束'
                
            }


        //转换格林尼治时间    
		function  addZero(num) {
	    	return num < 10 ? '0' + num : num;
		} 

		function myTime(date){
	     	var arr=date.split("T");
	    	var d=arr[0];
	        var darr = d.split('-');
	        var dd = parseInt(darr[0])+"/"+addZero(parseInt(darr[1]))+"/"+addZero(parseInt(darr[2]));
	        return dd;
	    }

	    result[i].creationTime=myTime(result[i].creationTime);    
	    //转换格林尼治时间

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
								<span>'+'10'+'</span><span>天</span>\
							</span>\
						</p>\
						<p>\
							<span class="color_gray creationTime">'+result[i].creationTime+'</span><span class="color_gray">丨</span><span class="color_gray">已有'+'10'+'人投标</span>\
						</p>\
					</div>\
				</div>'
            $('.zxf_pagediv').before(obj);        	
        	};
        });	
        // 获取中间的数据