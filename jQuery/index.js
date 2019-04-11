// 导航栏2.0

$(document).ready(function(){
    $(window).scroll(function(){
        var topp = $(document).scrollTop();
        // console.log(topp);
        if($(document).scrollTop()>640){
            $("#nav-white").fadeIn();
            $("#anchor").fadeIn();
        } else {
            $("#nav-white").fadeOut();
            $("#anchor").fadeOut();
            }
    })
    })

// 交易与服务流程
$(document).ready(function(){
    $(window).scroll(function(){
        var topp = $(document).scrollTop();
        if($("#lunbo").width()==375){
            topp = topp + 450
        }
        // console.log(topp)
        if(topp>1600){
            $("#xuqiu").fadeIn(1000);
            $("#xuqiu-img").fadeIn(3000);
        }
        if(topp>2000){
            $("#jingbiao").fadeIn(1000);
            $("#jingbiao1").fadeIn(1000);
            $("#jingbiao-img").fadeIn(3000);
        }
        if(topp>2400){
            $("#hezuo").fadeIn(1000);
            $("#hezuo-img").fadeIn(3000);
        }
        if(topp>2800){
            $("#zhifu").fadeIn(1000);
            $("#zhifu1").fadeIn(1000);
            $("#zhifu-img").fadeIn(3000);
        }
        if(topp>3200){
            $("#pingjia").fadeIn(1000);
            $("#pingjia-img").fadeIn(3000);
        }
    })
    })

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop:true,
    mode:"vertical",
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    });

$(document).ready(function(){
    $(window).scroll(function(){
        var topp = $(document).scrollTop();
        // console.log(topp);
        
        if($("#lunbo").width()==375){
            if($(document).scrollTop()>0){
                $("#it").css("display","block");
                $("#it").animate({left:'2%'},'slow');
                $("#UI").css("display","block");
                $("#UI").animate({left:'22%'},'slow');
                $("#yingxiao").fadeIn('slow');
                $("#app").css("display","block");
                $("#app").animate({left:'62%'},'slow');
                $("#other").css("display","block");
                $("#other").animate({left:'82%'},'slow');
            }
        }else{
            if($(document).scrollTop()>300){
                $("#it").css("display","block");
                $("#it").animate({left:'2%'},'slow');
                $("#UI").css("display","block");
                $("#UI").animate({left:'22%'},'slow');
                $("#yingxiao").fadeIn('slow');
                $("#app").css("display","block");
                $("#app").animate({left:'62%'},'slow');
                $("#other").css("display","block");
                $("#other").animate({left:'82%'},'slow');
            }
        }
    })
    })