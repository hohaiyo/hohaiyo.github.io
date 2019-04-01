$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>640){
            $("#nav-white").fadeIn();
            $("#anchor").fadeIn();
        }else{
            $("#nav-white").fadeOut();
            $("#anchor").fadeOut();
        }
    })
})
     