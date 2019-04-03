$(function(){
    // 使底部logo居中
    if($(window).width()<767){
        $(".footer_warp").children(".pull-left").addClass("center-block").removeClass("pull-left")
    }
    //隐藏input框，并且点击头像出现上传界面
    $('#panel-body-img').click(function(){
        $('#panel-body-file-two').click();
    })
})