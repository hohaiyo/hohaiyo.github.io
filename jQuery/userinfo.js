$(function(){
    // 使底部logo居中
    if($(window).width()<767){
        $(".footer_warp").children(".pull-left").addClass("center-block").removeClass("pull-left")
    }
    //隐藏input框，并且点击头像出现上传界面
    $('#panel-body-img').click(function(){
        $('#panel-body-file-two').click();
    })
    //邮箱验证码
    $(window).mousemove(function () {
        var Ema = $("#email").val();
        var Email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if(Email.test(Ema)){
            $(".send").removeAttr("disabled").removeClass("send-disabled");
        }else{
            $(".send").attr( "disabled","disabled" ).addClass( "send-disabled" );
        }
    });
    //手机验证码
    $(window).mousemove(function () {
        if($(".phone").val().length == 11){
            $("#send2").removeAttr("disabled").removeClass("send-disabled");
        }else{
            $("#send2").attr( "disabled","disabled" ).addClass( "send-disabled" );
        }
    });
    //邮箱验证码点击
    $(".send").click(function () {
        var num = 60;
        send(num);
    });
    var timer = null;
    function send(a){
        var num = a--;
        $(".send").text("重新发送("+a+"s)").css("color",)
        clearInterval(timer);
        timer = setInterval(function(){
            if(a == 0){
                clearInterval(timer);
                var time = null;
                clearTimeout(time);
                time = setTimeout(function(){ $(".send").text("发送验证码") },5000);
            }else{
                send(a)
            }
        },1000);
    };
    //手机验证码点击
    $("#send2").click(function () {
        var num = 60;
        send(num);
    });
    var timer = null;
    function send(a){
        var num = a--;
        $("#send2").text("重新发送("+a+"s)").css("color",)
        clearInterval(timer);
        timer = setInterval(function(){
            if(a == 0){
                clearInterval(timer);
                var time = null;
                clearTimeout(time);
                time = setTimeout(function(){ $("#send2").text("发送验证码") },5000);
            }else{
                send(a)
            }
        },1000);
    };
    //点击修改出现和隐藏--邮箱
    $('#xiugai').click(function(){
        $('#you').addClass('none-w').removeClass('block-y');
        $('#wu').addClass('block-y').removeClass('none-w');
    })
    $('#quxiao').click(function(){
        $('#wu').addClass('none-w').removeClass('block-y');
        $('#you').addClass('block-y').removeClass('none-w');
    })
    $('#queding').click(function(){
        $('#wu').addClass('none-w').removeClass('block-y');
        $('#you').addClass('block-y').removeClass('none-w');
    })
    //点击修改出现和隐藏--手机号
    $('#xiugai2').click(function(){
        $('#you2').addClass('none-w').removeClass('block-y');
        $('#wu2').addClass('block-y').removeClass('none-w');
    })
    $('#quxiao2').click(function(){
        $('#wu2').addClass('none-w').removeClass('block-y');
        $('#you2').addClass('block-y').removeClass('none-w');
    })
    $('#queding2').click(function(){
        $('#wu2').addClass('none-w').removeClass('block-y');
        $('#you2').addClass('block-y').removeClass('none-w');
    })
    //个人资料的隐藏出现效果
    $('.xiugai3').click(function(){
        $('#you3').addClass('none-w').removeClass('block-y');
        $('#wu3').addClass('block-y').removeClass('none-w');
    })
    $('.team-set-btn-quxiao').click(function(){
        $('#wu3').addClass('none-w').removeClass('block-y');
        $('#you3').addClass('block-y').removeClass('none-w');
    })
    $('.team-set-btn').click(function(){
        $('#wu3').addClass('none-w').removeClass('block-y');
        $('#you3').addClass('block-y').removeClass('none-w');
    })
})