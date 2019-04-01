

$(function(){
//下拉菜单
$('.user-top').click(
    function () {
        $('.dropdown').toggle();
    }
)
//头像hover效果
$('#headIcon').hover(
    function () {
        $('#iconimg').css('display', 'block');
    }, function () {
        $('#iconimg').css('display', 'none');
    }
);
//验证码
$(window).mousemove(function () {
    if ($(".form-number > input").val().length > 11 && $(".send").text() == "发送验证码") {
        $(".send").removeAttr("disabled").removeClass("send-disabled")
    } else {
        $(".send").attr("disabled", "disabled").addClass("send-disabled");
    }
});

//验证码点击
$(".send").click(function () {
    var num = 60;
    send(num);
});
var timer = null;
function send(a) {
    var num = a--;
    $(".send").text("重新发送(" + a + "s)").css("color");
    $(".send").attr("disabled", "disabled").addClass("send-disabled");
    clearInterval(timer);
    timer = setInterval(function () {
        if (a == 0) {
            clearInterval(timer);
            var time = null;
            clearTimeout(time);
            time = setTimeout(function () { $(".send").text("发送验证码") }, 5000);
        } else {
            send(a)
        }
    }, 1000);
};
//修改按钮效果
$('#quxiao').click(function () {
    $('.form-content').css('display', 'none');
    $('#item-content-id').css('display', 'block');
});
$('#queding').click(function () {
    $('.form-content').css('display', 'none');
    $('#item-content-id').css('display', 'block');
});
$('.xiugai').click(function () {
    $('.form-content').css('display', 'block');
    $('#item-content-id').css('display', 'none');
});
//个人资料的消失隐藏
$('.teamxiugai').click(function () {
    $('#personform-now').css('display', 'none');
    $('#personform-set').css('display', 'block');
})
$('.team-set-btn').click(function () {
    $('#personform-now').css('display', 'block');
    $('#personform-set').css('display', 'none');
})
$('.team-set-btn-quxiao').click(function () {
    $('#personform-now').css('display', 'block');
    $('#personform-set').css('display', 'none');
})
})