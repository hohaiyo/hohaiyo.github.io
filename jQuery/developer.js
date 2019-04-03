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
    $('.income>a').css('color','#424242');
    $('.ranking-title>li').click(function(){
        $(this).children().css('color','#424242').parent().siblings().children().css('color','');
        var index = $(this).index();
        $(this).parent().siblings('.nrbox').children().eq(index).css('display','block').siblings().css('display','none')
    })
})

  