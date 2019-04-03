$(function () {
    $(".anchor li").mouseover(function () {
        $(this).css({
            left:'-100px',
            backgroundColor: "rgba(0,0,0,0.7)"
        });
        $(this).addClass("hover");
    })
    $(".anchor li").mouseout(function(){
        $(this).css({
            left:"0",
            backgroundColor: "rgba(0,0,0,0.3)"
        });
        $(this).removeClass("hover");
    });

    // 使底部logo居中
    if($(window).width()<767){
        $(".footer_warp").children(".pull-left").addClass("center-block").removeClass("pull-left")
    }
});