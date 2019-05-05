//勾选框
$(".sure-check").click(function () {
    $(".sure-check i").toggle();
    if($(".sure-check i").css("display") == "block"){
        $(".sure-check").css("border","none");
    }else{
        $(".sure-check").css("border","1px solid rgba(0,0,0,0.2)");
    }
});


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


// 企业方注册
$(".login-e").on("click", function () {
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
            var name = $('.username').val();
            var pasd = $('.form-password1>input').val();
            var code = $('.code').val();
            var email = $('.email').val();
            console.log(name)
            $.ajax({
                type:"GET",
                url:"http://47.106.220.143:8080/company/checkName",
                data:{
                    name
                },
                success:function(data){
                    console.log(data)
                    var check = data.data
                    if(check==1){
                        console.log(check,1)
                        $.ajax({
                            type:"POST",
                            url:"http://47.106.220.143:8080/company",
                            data:{
                                name:name,
                                password:pasd,
                                email:email,
                                code:code
                            },
                            success:function(data){
                                console.log(data)
                               if(data.data == 1){
                                location.href = "enter.html"
                               }
                            }
                        })
                    
                    }else{
                        $('.check').css({"display":"block"})
                        console.log(data,0)
                    }
                }
            })
            
        },400);
    }else{
        uSer();
        if(uSer()){
            eMail();
            if(eMail()){
                pAss1();
                if(pAss1()){
                    pAss2();
                }
            }
        }
    }
});


// 工作室注册
$(".login-s").on("click", function () {
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
            var time = null;
            var name = $('.username').val();
            var pasd = $('.form-password1>input').val();
            var code = $('.code').val();
            var email = $('.email').val();
            // 查重名
            $.ajax({
                type:"GET",
                url:"http://47.106.220.143:8080/worker/checkName",
                data:{
                    name:name
                },success:function(data){
                    var check = data.data
                    if(check == 1){
                        $.ajax({
                            type:"POST",
                            url:"http://47.106.220.143:8080/worker",
                            data:{
                                name:name,
                                password:pasd,
                                email:email,
                                code:code
                            },
                            success:function(data){
                                console.log(data)
                               if(data.data == 1){
                                location.href = "enter.html"
                               }
                            }
                        })
                    }else{
                        $('.check').css({"max-height":"40px","top":"80px"})
                        $(".form-username > input").focus(function(){
                            $('.check').css({"max-height":"0px","top":"60px"})
                        });
                        
                    }
                }
            })
            
        
        },400);
    }else{
        uSer();
        if(uSer()){
            eMail();
            if(eMail()){
                pAss1();
                if(pAss1()){
                    pAss2();
                }
            }
        }
    }
});



// 用户名验证
    function uSer(){
        var reg= /^[A-Za-z0-9]{4,10}$/;
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
    // $('.username').blur(function(){
    //     uSer()
    // })

    
// 邮箱验证
function eMail(){
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
// $('.email').blur(function(){
//    eMail()
// })

// 密码1验证
function pAss1(){
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
// $('.pass-1').blur(function(){
//     pAss1()
// })


// 密码2验证
function pAss2(){
    var password1 = $(".form-password1 > input");
    var password2 = $(".form-password2 > input");
    
    if(password2.val() == password1.val()){
        password2.css("border","1px solid #49a9ee");
        password2.parent().find(".warn").css("display","none");
        console.log(111)
        if($('.email').val().length > 11 && $(".send").text() == "发送验证码"){
        console.log(111)
            $(".send").removeAttr("disabled").removeClass("send-disabled");
        }else{
            $(".send").attr( "disabled","disabled" ).addClass( "send-disabled" );
        console.log(111)

        }  
        return true;
    }else{
        password2.css("border","1px solid red");
        password2.parent().find(".warn").css("display","block");
    }
}
// $('.pass-2').blur(function(){
//     pAss2()
// })
$('.pass-2').keyup(function(){
    pAss2()
})
// //验证码
$(".send").attr( "disabled","disabled" ).addClass( "send-disabled" );
//调用监听
monitor($(".send"));

$('.send')
// if(eMail){
//     $(".send").removeAttr("disabled").removeClass("send-disabled");
// }

//点击click
$(".send").on("click", function () {
    
        countDown($(this), getCode);
    
});

function getCode() {
    alert("验证码发送成功");
}
//验证码点击
//防止页面刷新倒计时失效
/**
 *
 * @param {Object} obj  获取验证码按钮
 */
function monitor(obj) {
    var LocalDelay = getLocalDelay();
    if(LocalDelay.time!=null){
        var timeLine = parseInt((new Date().getTime() - LocalDelay.time) / 1000);
        if (timeLine > LocalDelay.delay) {
        } else {
            _delay = LocalDelay.delay - timeLine;
            obj.text(_delay+"秒后重新发送");
            obj.disabled = true;
            var timer = setInterval(function() {
                if (_delay > 1) {
                    _delay--;
                    obj.text(_delay+"秒后重新发送");
                    setLocalDelay(_delay);
                } else {
                    clearInterval(timer);
                    obj.text("发送验证码");
                    obj.disabled = false;
                }
            }, 1000);
        }
    }
}
//倒计时效果
/**
 *
 * @param {Object} obj 获取验证码按钮
 * @param {Function} callback  获取验证码接口函数
 */
function countDown(obj, callback) {
    if (obj.text() == "发送验证码") {
        var _delay = 60;
        var delay = _delay;
        obj.text(_delay+"秒后重新发送");
        obj.disabled = true;
        var timer = setInterval(function() {
            if (delay > 1) {
                delay--;
                obj.html(delay+"秒后重新发送");
                setLocalDelay(delay);
            } else {
                clearInterval(timer);
                obj.text("发送验证码");
                obj.disabled = false;
            }
        }, 1000);

        // callback();
    } else {
        return false;
    }
}
//设置setLocalDelay
function setLocalDelay(delay) {
    //location.href作为页面的唯一标识，可能一个项目中会有很多页面需要获取验证码。
    localStorage.setItem("delay_" + location.href, delay);
    localStorage.setItem("time_" + location.href, new Date().getTime());
}

//getLocalDelay()
function getLocalDelay() {
    var LocalDelay = {};
    LocalDelay.delay = localStorage.getItem("delay_" + location.href);
    LocalDelay.time = localStorage.getItem("time_" + location.href);
    return LocalDelay;
}



// 需求方验证码获取
$('.send-e').click(function(){
    var email = $('.email-e').val();
    console.log(email)
    $.ajax({
        type:"POST",
        url:"http://47.106.220.143:8080/company/getMail",
        data:{
            email:email
        },
        success:function(data){
            console.log(data)
        },
        error:function(a){
            console.log(a)
        }
    })

})
// 开发方验证码获取
$('.send-s').click(function(){
    var email = $('.email-s').val();
    console.log(email)
    $.ajax({
        type:"POST",
        url:"http://47.106.220.143:8080/worker/getMail",
        data:{
            email:email
        },
        success:function(data){
            console.log(data)
        },
        error:function(a){
            console.log(a)
        }
    })

})
// $('.login-s').click(function(){
//    var user = $('.username').val()
//    var email = $('.email').val()
//    var pawd = $('pass-1').val()
//    var send = $('.send').val()
//    console.log(user,email,pawd,send)
// })