$(function () {
	$(window).scroll(function(){
		$(".anchor").css("top",($(window).height() - $(	'.anchor').outerHeight())/2 + $(document).scrollTop())
	})

	var maodian = [$(".anchor-consult"),$(".anchor-about")];
    for(var i = 0; i < maodian.length; i++){
        maodian[i].hover(function(){
            $(this).css({
                left:'-100px',
                width: "150px",
                backgroundColor: "rgba(0,0,0,0.7)"
            });
            $(this).addClass("hover");
        },
        function(){
            $(this).css({
                left:"0",
                width: "50px",
                backgroundColor: "rgba(0,0,0,0.3)"
            });
            $(this).removeClass("hover");
        });
    }
	
});