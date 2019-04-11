//勾选框
$(".sure-check").click(function () {
    $(".sure-check i").toggle();
    if($(".sure-check i").css("display") == "block"){
        $(".sure-check").css("border","none");
    }else{
        $(".sure-check").css("border","1px solid rgba(0,0,0,0.2)");
    }
});

//验证码
$(".send").attr( "disabled","disabled" ).addClass( "send-disabled" );
$(".form-number > input").click(function(){
    $(this).keypress(function () {
        if($(this).val().length > 11 && $(".send").text() == "发送验证码"){
            $(".send").removeAttr("disabled").removeClass("send-disabled")
        }else{
            $(".send").attr( "disabled","disabled" ).addClass( "send-disabled" );
        }
    });
})


//验证码点击
$(".send").click(function () {
    var num = 60;
    send(num);
});
var timer = null;
function send(a){
    var num = a--;
    $(".send").text("重新发送("+a+"s)").css("color",);
    $(".send").attr( "disabled","disabled" ).addClass( "send-disabled" );
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

//点击返回
$(".form-return").click(function () {
    location.href = "login.html"
});
$(".header-name").click(function () {
    location.href = "logout-index.html"
});
$(".enter").click(function () {
    location.href = "enter.html"
});




// 点击注册按钮
$(".form-login").on("click", function () {
    var num = 0;
    $(".warn").each(function () {
        if($(this).css("display") == "none"){
            num++;
        }
    });
    var gou = $(".sure-check").css("border");
    var one = $(".form-username > input").val().length , two = $(".form-number > input").val().length , three = $(".form-password1 > input").val().length , four = $(".form-password2 > input").val().length , five = $(".form-verify > input").val().length;
    if(num == 5 && gou != "1px solid rgba(0, 0, 0, 0.2)" && one > 0 && two > 0 && three > 0 && four > 0 && five > 0){
        setTimeout(function () {
            location.href = "enter.html";
        },400);
    }else{
        userName();
        if(userName()){
            eMail();
            if(eMail()){
                passWord1();
                if(passWord1()){
                    passWord2();
                }
            }
        }
    }
});

// 用户名验证
function userName() {
    var reg= /^[\u4E00-\u9FA5A-Za-z0-9_]+$/;
    var username = $(".form-username > input");
    if(reg.test(username.val())){
        username.css("border","1px solid #49a9ee");
        username.parent().find(".warn").css("display","none");
        return true;
    }else{
        username.css("border","1px solid red");
        username.parent().find(".warn").css("display","block");
    }
}

// 邮箱验证
function eMail() {
    var reg= /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var email = $(".form-number > input");
    if(reg.test(email.val())){
        email.css("border","1px solid #49a9ee");
        email.parent().find(".warn").css("display","none");
        return true;
    }else{
        email.css("border","1px solid red");
        email.parent().find(".warn").css("display","block");
    }
}

// 密码1验证
function passWord1() {
    var reg=/^[a-zA-Z0-9]{4,10}$/;
    var password1 = $(".form-password1 > input");
    if(reg.test(password1.val())){
        password1.css("border","1px solid #49a9ee");
        password1.parent().find(".warn").css("display","none");
        return true;
    }else{
        password1.css("border","1px solid red");
        password1.parent().find(".warn").css("display","block");
    }
}

// 密码2验证
function passWord2() {
    var password1 = $(".form-password1 > input");
    var password2 = $(".form-password2 > input");
    if(password2.val() == password1.val()){
        password2.css("border","1px solid #49a9ee");
        password2.parent().find(".warn").css("display","none");
        return true;
    }else{
        password2.css("border","1px solid red");
        password2.parent().find(".warn").css("display","block");
    }
}