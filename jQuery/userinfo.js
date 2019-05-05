$(function () {
    // 使底部logo居中
    var user = JSON.parse(cookie.get("user"))
    console.log(user)
    $('#username').html(user.name)
    $('#name').html(user.companyNickName)
    if ($(window).width() < 767) {
        $(".footer_warp").children(".pull-left").addClass("center-block").removeClass("pull-left")
    }
    //隐藏input框，并且点击头像出现上传界面
    $('#panel-body-img').click(function () {
        $('#panel-body-file-two').click();
    })
    //个人信息修改的信息上传
    
	$(document).keydown(function(event){
		if(event.keyCode==13){
			$('.xiugaisub').click()
		}
	})
    $('.xiugaisub').click(function () {
        var name = $("#nicheng").val();
        var phone = $('#phone').val();
        var bank = $('#bank').val();
        var bankname = $('#bankname').val()
        var nameC =  function () {
            if (name == '') {
                console.log("格式不正确");
                // alert('名字格式不正确')
                $("#nicheng").css('borderColor', 'red').attr('placeholder', '名字不能为空'); //添加css样式
                $('.erro-name').removeClass('dispaly-yes').addClass('dispaly-no');
                return false;
            }
            else {
                $("#nicheng").css('borderColor', ''); //取消css样式
                $('.erro-name').addClass('dispaly-yes').removeClass('dispaly-no');
                console.log('123')
                return true;
            }
        };
        var phoneC =  function () {
            if (phone.length != 11) {
                console.log("格式不正确");
                // alert('电话号码格式不正确')
                $("#phone").css('borderColor', 'red').attr('placeholder', '号码格式不正确'); //添加css样式
                $('.erro-phone').removeClass('dispaly-yes').addClass('dispaly-no');
                return false;

            }
            else {
                $("#phone").css('borderColor', ''); //取消css样式
                $('.erro-phone').removeClass('dispaly-no').addClass('dispaly-yes');
                return true;
            }
        };
        var bankC =  function () {
            if (bank.length != 15) {
                console.log("格式不正确");
                // alert('银行卡号码格式不正确')
                $("#bank").css('borderColor', 'red').attr('placeholder', '号码格式不正确'); //添加css样式
                $('.erro-bank').removeClass('dispaly-yes').addClass('dispaly-no');
                return false;

            }
            else {
                $("#bank").css('borderColor', ''); //取消css样式
                $('.erro-bank').removeClass('dispaly-no').addClass('dispaly-yes');
                return true;
            }
        };
        var banknameC =  function () {
            if (bankname == '') {
                console.log("格式不正确");
                // alert('银行名字格式不正确')
                $("#bankname").css('borderColor', 'red').attr('placeholder', '名字不能为空'); //添加css样式
                $('.erro-bankname').removeClass('dispaly-yes').addClass('dispaly-no');
                return false;

            }
            else {
                $("#bankname").css('borderColor', ''); //取消css样式
                $('.erro-bankname').removeClass('dispaly-no').addClass('dispaly-yes');
                return true;
            }
        };
        if (name != '' && phone.length == 11 && bank.length !=""  && bankname != '') {
            $.ajax({
                url: 'http://47.106.220.143:8080/worker/completion',
                data: {
                    workerNickName: $('#nicheng').val(),
                    id: user.id,
                    phone: $('#phone').val(),
                    bankAccount: $('#bank').val(),
                    bankName: $('#bankname').val(),
                },
                type: 'POST',
                success: function (str) {
                    console.log(str)
                    alert('保存成功')
                },
                error: function (err) {
                    alert(err);
                }
            });
        }else{
            // nameC()
            if(nameC()){
                // phoneC()
                if(phoneC()){
                    // bankC()
                    if(bankC()){
                        banknameC()
                    }
                }
            }
        }

    });
    //id获取

    //表单验证

})