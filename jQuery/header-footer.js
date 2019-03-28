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
});