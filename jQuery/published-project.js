$(function(){

    $.getJSON("http://47.106.220.143:8080/project/getByTime", function(data){
        console.log(data.data);
        $.each(data.data, function (i) {
            var stx = `
            <div class="project-list row">
                <div class="list-top row">
                    <p class="pull-left">${(data.data)[i].title}</p>
                    <div class="pull-right">
                        <div class="list-info row">
                            <p>
                                <i class="iconfont icon-yueduliang"></i>
                                浏览量 0
                            </p>
                            <p class="list-apply">
                                <i class="iconfont icon-shou"></i>
                                报名数 0
                            </p>
                            <p class="list-status list-recruit">${(data.data)[i].status}</p>
                        </div>
                    </div>
                </div>
                <div class="list-bottom row">
                    <img class="pull-left col-md-3 col-sm-5 col-xs-12" src="./img/project-logo.png">
                    <div class="bottom-info col-md-9 pull-left">
                        <p>
                            <i class="i-computer iconfont icon-diannao1"></i>
                            <span>Web 网站</span>
                            <span class="bottom-gray">前端开发</span>
                        </p>
                        <p class="bottom-money">
                            <span>金额</span>
                            <span class="bottom-gray">￥1,111</span>
                            <span>周期</span>
                            <span class="bottom-gray">11天</span>
                        </p>
                        <div class="bottom-btn form-inline pull-right">
                            <button class="btn-cancel form-control">取消发布</button>
                            <button class="btn-examine form-control">项目状态</button>
                        </div>
                    </div>
                </div>
            </div>`;
            $(".container").append(stx)
        });
        //转换状态
        $(".list-status").each(function () {
            if($(this).text() == "1"){
                $(".list-status").text("招标中");
            };
        });
    });






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

    // 发布新的项目
    $(".btn-publish").on("click", function () {
        location.href = "demand.html";
    });
    // 项目状态
    $(".btn-examine").on("click", function () {
        var _this = $(this).parent().parent().parent().parent().find(".list-status").text();
        if(_this === "开发中"){
            location.href = "project-status.html";
        }else if(_this === "已取消"){
            location.href = "own-cancel.html";
        }
    });
    // 项目详情
    $(".list-bottom > img").on("click", function () {
        var _this = $(this).parent().parent().find(".list-status").text();
        if(_this === "招标中"){
            location.href = "project_details.html";
        }else if(_this === "已取消"){
            location.href = "cancel-condition.html";
        }
    });
});