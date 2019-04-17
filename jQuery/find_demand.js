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

	  	$(".get_price").each(function () {
            var _this = $(this).text().split('').reverse();
            for (var i = 1; i < Math.floor(_this.length/3); i++) {
            	_this.splice(3*i+(i-1), 0, ",");
            }
            $(this).text(_this.reverse().join(''));
        });	

});

	$.getJSON("http://47.106.220.143:8080/project/getByTime",function(data){
		$.each(data,function(){
			console.log(data);
			console.log(data.data.length)
		});

	})
