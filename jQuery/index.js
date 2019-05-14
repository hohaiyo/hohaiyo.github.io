// 导航栏2.0

$(document).ready(function () {

    //serch
    $(document).keydown(function (event) {
        if (event.keyCode == 13) {
            var namework = $(".worker-seek>input").val()
            // console.log(namework)
            $.ajax({
                type: "GET",
                url: "http://47.106.220.143:8080/worker/getByName",
                data: {
                    name: namework
                },
                success: function (data) {
                    // window.location.href = 'room.html';
                    // console.log(data.data)
                    if (data.data != null) {
                        var data1 = data;
                        console.log(data1)
                        var data2 = data.data;
                        console.log(data2)
                        sessionStorage.setItem("data1", JSON.stringify(data2));
                        window.location.href = 'room.html';
                        // var workname =  JSON.parse(sessionStorage.getItem('data1'));
                        // console.log(workname.id)
                    } else {
                        alert('没有搜到该工作室')
                        // var obj2 = '<div class="alert alert-warning">\
                        //     <a href="#" class="close" data-dismiss="alert">\
                        //         &times;\
                        //     </a>\
                        //     <strong>警告！</strong>没有该工作室。\
                        // </div>'
                        // console.log(obj2)
                    }
                }
            })
        }
    })

    var people = JSON.parse(localStorage.getItem('people'))
    if ($.cookie("user")) {
        $('.yenter').css({ "display": "block" })
        $('.nenter').css({ "display": "none" })
        console.log(1)
    } else {
        $('.nenter').css({ "display": "block" })
        $('.yenter').css({ "display": "none" })
        console.log(2)
    }
    if (people == 'company') {
        $('.issue-project').css({ "display": "blcok" })
        $('.join-project').css({ "display": "none" })
    } else {
        $('.join-project').css({ "display": "block" })
        $('.issue-project').css({ "display": "none" })
    }


    // 退出登录
    $('.sortir').click(function () {
        console.log(3)
        // $.removeCookie("user","/")
        $.removeCookie('user', { path: '/' })
        location.href = "index.html"
    })
    $(window).scroll(function () {
        $(".anchor").css("top", ($(window).height() - $('.anchor').outerHeight()) / 2 + $(document).scrollTop())
    })

    $(".anchor li").mouseover(function () {
        $(this).css({
            left: '-100px',
            width: "150px",
            backgroundColor: "rgba(0,0,0,0.7)"
        });
        $(this).addClass("hover");
    });
    $(".anchor li").mouseout(function () {
        $(this).css({
            left: "0",
            width: "50px",
            backgroundColor: "rgba(0,0,0,0.3)"
        });
        $(this).removeClass("hover");
    });
    $(".navbar-nav").click(function () {
        if ($(window).width() < 504) {
            if ($(".seek").css("display") == "block") {
                $(".seek").css("display", "none")
            } else {
                $(".seek").css("display", "block")
            }
            $(window).click(function () {
                $(".seek").css("display", "block")
            })
        }

    })


    $(window).scroll(function () {
        var topp = $(document).scrollTop();
        // console.log(topp);
        if ($(document).scrollTop() > 640) {
            $("#nav-white").fadeIn();
            $("#anchor").fadeIn();
        } else {
            $("#nav-white").fadeOut();
            $("#anchor").fadeOut();
        }
        // 交易与服务流程
        var topp = $(document).scrollTop();
        if ($(document).width() == 375) {
            if (topp > 1000) {
                $("#xuqiu").fadeIn(1000);
                $("#xuqiu-img").fadeIn(3000);
            }
            if (topp > 1400) {
                $("#jingbiao").fadeIn(1000);
                $("#jingbiao1").fadeIn(1000);
                $("#jingbiao-img").fadeIn(3000);
            }
            if (topp > 1800) {
                $("#hezuo").fadeIn(1000);
                $("#hezuo-img").fadeIn(3000);
            }
            if (topp > 2200) {
                $("#zhifu").fadeIn(1000);
                $("#zhifu1").fadeIn(1000);
                $("#zhifu-img").fadeIn(3000);
            }
            if (topp > 2600) {
                $("#pingjia").fadeIn(1000);
                $("#pingjia-img").fadeIn(3000);
            }
        }
        if (topp > 1600) {
            $("#xuqiu").fadeIn(1000);
            $("#xuqiu-img").fadeIn(3000);
        }
        if (topp > 2000) {
            $("#jingbiao").fadeIn(1000);
            $("#jingbiao1").fadeIn(1000);
            $("#jingbiao-img").fadeIn(3000);
        }
        if (topp > 2400) {
            $("#hezuo").fadeIn(1000);
            $("#hezuo-img").fadeIn(3000);
        }
        if (topp > 2800) {
            $("#zhifu").fadeIn(1000);
            $("#zhifu1").fadeIn(1000);
            $("#zhifu-img").fadeIn(3000);
        }
        if (topp > 3200) {
            $("#pingjia").fadeIn(1000);
            $("#pingjia-img").fadeIn(3000);
        }
    })
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        mode: "vertical",
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });


    $.get("http://47.106.220.143:8080/project/totalMoney", function (data) {

        data.data = data.data.toLocaleString();
        $("#totalmoney").html(data.data)
    })
    $.getJSON("http://47.106.220.143:8080/project/number", function (data) {
        data.data = data.data.toLocaleString();
        $("#pnum").html(data.data)
    })
    $.getJSON("http://47.106.220.143:8080/worker/number", function (data) {
        data.data = data.data.toLocaleString();
        $("#wnum").html(data.data)
    })

    $.getJSON("http://47.106.220.143:8080/project/getByTime", function (data) {
        let result = data.data
        for (let i = 0; i <= 3; i++) {

            let title = result[i].title;
            let pid = data.data[i].id;
            let status = result[i].status;
            let price = result[i].price.toLocaleString()
            let desc = result[i].desc
            $.ajax({
                type: 'GET',
                url: "http://47.106.220.143:8080/project/getCountByPid",
                data: {
                    pid: pid
                },
                success: function (data) {
                    let bid = data.data
                    //    console.log(bid)
                    let obj = '<div class="list-contant">\
            <div class="list-contant-img fl">\
                <div class="list-contant-img1">\
                    <a class="router"><img src="img/logo_blue.png" alt=""></a>\
                </div>\
            </div>\
            <div class="list-contant-character fr">\
                <div class="demand clearfix">\
                    <p class="fl thick"><a>'+ title + '</a>\
                    <div class="recommend fl">'+ status + '</div>\
                    </p>\
                    <p class="zhouqi fl">项目周期: <span class="demand-3">'+ differTime + '</span> 天</p>\
                    <p class="hidden-xs fr">项目预算: <span class="demand-s">￥'+ price + '</span></p>\
                </div>\
                <div class="demand clearfix">\
                    <p class="p-demand fl">项目类型:IT/软件开发 <span class="demand-s1">已投标人数:'+ bid + ' </span></p>\
                    <p class="p-time hidden-xs fr">发布时间:'+ the_data + '</p>\
                </div>\
                <div class="visible-xs clearfix">\
                    <span class="demand-s visible-xs fr">￥'+ price + '</span>\
                </div>\
                <p class="p-jieshao xiangqin">项目详情：'+ desc + '</p>\
            </div>\
        </div>'
                    $('.list').append(obj);
                    $('.list-contant').click(function (event) {
                        let index = $(this).index();
                        let newobj = JSON.stringify(result[index - 1])
                        localStorage.setItem('indetail', newobj)
                        location.href = "project_details.html"
                    })
                }
            })
            // //转换获得的创建时间与截止时间,并把它们转换成毫秒数
            // var oldTime = (new Date(result[i].creationTime)).getTime()
            // var newTime = (new Date(result[i].dueTime)).getTime()

            // // 补上缺少的8小时
            // oldTime = oldTime+8*60*60*1000;
            // newTime = newTime+8*60*60*1000;

            // // 通过相减获得项目周期
            // var differTime = Math.ceil((newTime - oldTime)/1000/60/60/24);

            //  转换获得的创建时间与截止时间
            // 为了兼容ie 需要先把后台传输的时间中的"-"替换成"/",T替换成空格
            result[i].creationTime = result[i].creationTime.replace(/-/g, '/');
            result[i].dueTime = result[i].dueTime.replace(/-/g, '/');

            result[i].creationTime = result[i].creationTime.replace(/T/g, ' ');
            result[i].dueTime = result[i].dueTime.replace(/T/g, ' ');

            //为了能让new Date().getTIme()识别 需要删除"."后面的
            var oldtime = result[i].creationTime.split(".");
            var newtime = result[i].dueTime.split(".");
            result[i].creationTime = oldtime[0];
            result[i].dueTime = newtime[0];

            // 转换成毫秒数
            var oldTime = (new Date(result[i].creationTime)).getTime();
            var newTime = (new Date(result[i].dueTime)).getTime();
            // 补上缺少的8小时
            oldTime = oldTime + 8 * 60 * 60 * 1000;
            newTime = newTime + 8 * 60 * 60 * 1000;

            // 通过相减获得项目周期
            let differTime = Math.ceil((newTime - oldTime) / 1000 / 60 / 60 / 24);

            // 重新转换创建时间
            var oldTime_two = new Date(oldTime);
            the_year = oldTime_two.getFullYear();//年份
            the_month = oldTime_two.getMonth() + 1;//月份
            the_day = oldTime_two.getDate();//几号	  

            the_data = the_year + "/" + the_month + "/" + the_day;
            // console.log(the_data)

            console.log(result)
            if (status === "0") {
                status = '招标中'
                console.log(status);
            }
            if (status === "1") {
                status = '开发中'

            }
            if (status === "-1") {
                status = '已结束'

            }

        }
    })
    // var name = $('.worker-seek')
    // $.ajax({
    //     type:"POST",
    //     url:"http://47.106.220.143:8080/worker/getByName",
    //     data:{
    //         name:name,
    //     },
    //     success:function(data){
    //         console.log(data)
    //     //    if(data.data == null){
    //     //     location.href = "enter.html"
    //     //    }
    //     }
    // })
    $.getJSON("http://47.106.220.143:8080/worker/getByAssess", function (data) {
        for (var a = 0; a < 6; a++) {
            //   var workername = data.data[a].name

            var workername = '<div class="userdynamic clearfix">\
                    <div class="ranking fl">\
                        <div class="ranking1">\
                            <h2>'+ (a + 1) + '</h2>\
                        </div>\
                    </div>\
                    <div class="portrait fl">\
                        <div class="portrait1">\
                            <img src="img/touxiang.png"  alt="">\
                        </div>\
                    </div>\
                    <div class="resume fl">\
                        <div class="resume1">\
                            <p class="worker-name">'+ data.data[a].name + '</p>\
                            <p><span>参与项目: </span><span>20</span></p>\
                        </div>\
                    </div>\
                </div>'
            $('.ranking-worker').append(workername)
        }
    })

})