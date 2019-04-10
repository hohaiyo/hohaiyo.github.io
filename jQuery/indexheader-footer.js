$(function () {
	$(window).scroll(function(){
		$(".anchor").css("top",($(window).height() - $(	'.anchor').outerHeight())/2 + $(document).scrollTop())
	})

	$(".anchor li").mouseover(function () {
		$(this).css({
			left:'-100px',
			width: "150px",
			backgroundColor: "rgba(0,0,0,0.7)"
		});
		$(this).addClass("hover");
	});
	$(".anchor li").mouseout(function(){
		$(this).css({
			left:"0",
			width: "50px",
			backgroundColor: "rgba(0,0,0,0.3)"
		});
		$(this).removeClass("hover");
	});
	$(".navbar-nav").click(function(){
        if($(window).width()<504){
            if($(".seek").css("display") == "block"){
                $(".seek").css("display","none")
            }else{
                $(".seek").css("display","block")
            }
            $(window).click(function(){
                 $(".seek").css("display","block")
            })
        }
        
    })
});