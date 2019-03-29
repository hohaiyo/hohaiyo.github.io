// 导航栏2.0
$(document).ready(function(){
    $(window).scroll(function(){
        var topp = $(document).scrollTop();
        // console.log(topp);
        if($(document).scrollTop()>640){
            $("#nav-white").css({
                'display':'block',
                });
                } else {
                $("#nav-white").css('display','none');
                }
    })
    })