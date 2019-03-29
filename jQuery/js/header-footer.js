$(function () {
    $(".anchor li").mouseover(function () {
        $(this).css({
            left:'-100px',
<<<<<<< HEAD
            backgroundColor: "rgba(0,0,0,0.7)"
=======
            backgroundColor: "rgba(0,0,0,0.7)",
>>>>>>> wcy
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