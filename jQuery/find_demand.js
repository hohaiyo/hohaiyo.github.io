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