$(function(){

    //所有状态的点击
    $(".form-pulldown li").click(function () {
        $(".form-status span").text($(this).text())
    });

var _this;
var recruit;
    // 点击取消弹出窗口
    $(".btn-cancel").click(function () {
        // 存储当前取消发布按钮
        _this = $(this);
        //当前按钮所对应的 list-status
        recruit = $(this).parent().parent().parent().prev().find(".list-status");
        // 禁用所有取消发布按钮
        $(".btn-cancel").addClass("btn-disabled");
        //当前按钮的弹出窗口
        $(".cancel-alert").css("display","block").animate({ opacity: 1 },500);
        // 点击关闭的i标签
        $(".alert-close").click(function(){
            $(".cancel-alert").css("display","none");
            // 开启所有取消发布按钮
            $(".btn-cancel").removeClass("btn-disabled");
        });
        // yse按钮
        $(".alert-yes").click(function () {
            recruit.text("已取消").attr("class","list-status");
            $(".cancel-alert").css("display","none");
            // 去除当前的取消发布按钮和编辑按钮
            _this.css('display','none');
            _this.next().css('display','none');
            // 开启所有取消发布按钮
            $(".btn-cancel").removeClass("btn-disabled");
        });
        // no按钮
        $(".alert-no").click(function () {
            $(".cancel-alert").css("display","none");
            // 开启所有取消发布按钮
            $(".btn-cancel").removeClass("btn-disabled");
        });
    });
});