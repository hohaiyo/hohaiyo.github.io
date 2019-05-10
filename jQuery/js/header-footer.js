$(function () {
    $(window).scroll(function(){
        $(".anchor").css("top",($(window).height() - $('.anchor').outerHeight())/2 + $(document).scrollTop())
    })

    $(".anchor li").mouseover(function () {
        $(this).css({
            left:'-100px',
<<<<<<< HEAD:jQuery/js/header-footer.js
<<<<<<< HEAD
=======
            width: "150px",
>>>>>>> ykm:jQuery/header-footer.js
            backgroundColor: "rgba(0,0,0,0.7)"
=======
            backgroundColor: "rgba(0,0,0,0.7)",
>>>>>>> wcy
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
});