$(function () {
    
    // 头部
    $(".navbar-toggle").on("click", function () {
        $(".navbar-nav").css("display","block")
    });

    //隐藏搜索框
    $(".nav-oneself").on("click",function(){
        if($(window).width() < 768 && $(".dropdown-menu").css("display") == "none"){
            $(".seek").css("display","none");
        }else if($(window).width() < 768 && $(".dropdown-menu").css("display") == "block"){
            $(".seek").css("display","block");
        }
    })

    
    // 滚动条
    $(window).scroll(function(){
        $(".anchor").css("top",($(window).height() - $('.anchor').outerHeight())/2 + $(document).scrollTop())
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

    // 使底部logo居中
    if($(window).width()<767){
        $(".footer_warp").children(".pull-left").addClass("center-block").removeClass("pull-left")
    }

});