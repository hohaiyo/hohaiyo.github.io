$(function(){
    $('#panel-body-btn').click(function(){
        $('#panel-body-file').click();
    })
    // 使底部logo居中
    if($(window).width()<767){
        $(".footer_warp").children(".pull-left").addClass("center-block").removeClass("pull-left")
    }

})