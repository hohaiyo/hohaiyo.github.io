$(function(){
	$('.dropdown-button').click(function(){
		$('.dropdown-ul').toggle();
	})

	$('.dropdown-ul li').mouseenter(function(){
		$(this).each(function(){
			$('.dropdown-ul li').css({ "color": "#fff", "background": "blue" });
		})
	})
	$('.dropdown-ul li').mouseleave(function(){
		$(this).each(function(){
			$('.dropdown-ul li').css({ "color": "#000", "background": "#fff" });
		})
	})
	
	
	
})