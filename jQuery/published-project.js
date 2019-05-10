$(document).ready(function(){
    // 发布新的项目
    $('.btn-default').click(function(){
        location.href = "demand.html";
    });
    var user = JSON.parse($.cookie('user'));
    var cid = user.id;
    // console.log(user);

    function get_data_all(){
        $.ajax({
            type:"GET",
            url:"http://47.106.220.143:8080/project/getByCid",
            data:{
                cid:cid
            },

            beforeSend:function(){
                //每次按下按钮进行筛选前先删除先前的内容
                $("#join-project").empty();                  
            },   

            success:function(data){
                // console.log(data);
                if(data.data == ''){
                    var notyet = '<div class="notyet">目前尚未发布项目，快去发布项目吧。</div>';
                    $("#join-project").append(notyet);
                }
                else{
                    $.each(data.data, function (i) {
                        var result_data = data.data;
                        if(result_data[i].status==="0"){
                            result_data[i].status='招标中';

                        };
                        if(result_data[i].status==="1"){
                            result_data[i].status='开发中';
                                
                        };
                        if(result_data[i].status==="-1"){
                            result_data[i].status='已结束';
                        };

                        //转换获得的创建时间与截止时间
                        // 为了兼容ie 需要先把后台传输的时间中的"-"替换成"/",T替换成空格
                        result_data[i].creationTime = result_data[i].creationTime.replace(/-/g, '/'); 
                        result_data[i].dueTime = result_data[i].dueTime.replace(/-/g, '/');
                        result_data[i].creationTime = result_data[i].creationTime.replace(/T/g, ' '); 
                        result_data[i].dueTime = result_data[i].dueTime.replace(/T/g, ' ');
                                                
                        //为了能让new Date().getTIme()识别 需要删除"."后面的
                        var oldtime = result_data[i].creationTime.split(".");    
                        var newtime = result_data[i].dueTime.split("."); 
                        result_data[i].creationTime = oldtime[0];
                        result_data[i].dueTime = newtime[0];

                        // 转换成毫秒数
                        var oldTime = (new Date(result_data[i].creationTime)).getTime();
                        var newTime = (new Date(result_data[i].dueTime)).getTime();
                        // 补上缺少的8小时
                        oldTime = oldTime+8*60*60*1000;
                        newTime = newTime+8*60*60*1000;

                        // 通过相减获得项目周期
                        var differTime = Math.ceil((newTime - oldTime)/1000/60/60/24);

                        var stx = '<div class="project-list row">\
                        <div class="list-top row">\
                            <p class="pull-left">'+result_data[i].title+'</p>\
                            <div class="pull-right">\
                                <div class="list-info row">\
                                    <p>\
                                        <i class="iconfont icon-yueduliang"></i>\
                                        浏览量 0\
                                    </p>\
                                    <p class="list-apply">\
                                        <i class="iconfont icon-shou"></i>\
                                        报名数 0\
                                    </p>\
                                    <p class="list-status list-recruit">'+result_data[i].status+'</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="list-bottom row">\
                            <img class="pull-left col-md-3 col-sm-5 col-xs-12" src="./img/project-logo.png">\
                            <div class="bottom-info col-md-9 pull-left">\
                                <p>\
                                    <i class="i-computer iconfont icon-diannao1"></i>\
                                    <span>'+result_data[i].typeName+'</span>\
                                    <span class="bottom-gray"></span>\
                                </p>\
                                <p class="bottom-money">\
                                    <span>金额</span>\
                                    <span class="bottom-gray bottom-price">￥'+result_data[i].price+'</span>\
                                    <span>周期</span>\
                                    <span class="bottom-gray">'+differTime+'天</span>\
                                </p>\
                                <div class="bottom-btn form-inline pull-right">\
                                    <button class="btn-cancel form-control">取消发布</button>\
                                    <button class="btn-examine form-control">项目状态</button>\
                                </div>\
                            </div>\
                        </div>\
                        </div>';
                        $("#join-project").append(stx);

                        // 点击项目状态后跳转网页
                        $(".btn-examine").on("click", function () {
                            location.href = "own-cancel.html";
                        });

                        // 点击图片跳转后获取对应数据        
                        var box_item = document.getElementsByClassName("btn-examine");

                        function local_data_two(n){
                            box_item[n].onmouseenter = function(){
                                // 每次进入前先删除先前的本地数据
                                localStorage.clear(); 
                                string_result = JSON.stringify(result_data[n]);
                                localStorage.setItem("local-data",string_result);                              
                            };
                        };
                            
                        for(var x=0;x<box_item.length;x++){
                            local_data_two(x);
                        };

                            var tip = '是否取消该项目?';
                        // console.log(result_data[i].id);
                        // console.log(result_data[i].companyId);
                            $(".btn-cancel").off("click").on("click", function(){
                               if(window.confirm(tip)){
                                    $.ajax({
                                        type:"GET",
                                        url:"http://47.106.220.143:8080/project/apply",
                                        data:{
                                            pid:39,
                                            wid:9
                                        },  
                                        success:function(data){
                                            // console.log(data)
                                        }
                                    });                               
                                }                            
                            });
                        if($(".project-list").length==0){
                            var stx_two = '<div class="project-list row">不好意思,没有符合要求的项目</div>'
                            $("#join-project").append(stx_two); 
                        };                            
                        
                    });
                }        
            }
        })          
    };

    function get_data_call(){
        $.ajax({
            type:"GET",
            url:"http://47.106.220.143:8080/project/getByCid",
            data:{
                cid:cid
            },

            beforeSend:function(){
                //每次按下按钮进行筛选前先删除先前的内容
                $("#join-project").empty();
            }, 

            success:function(data){
                // console.log(data);
                if(data.data == ''){
                    var notyet = '<div class="notyet">目前尚未发布项目，快去发布项目吧。</div>';
                    $("#join-project").append(notyet);
                }
                else{
                    $.each(data.data, function (i) {
                        var result_data = data.data;
                        if(result_data[i].status==="0"){
                            result_data[i].status='招标中';
                            //转换获得的创建时间与截止时间
                            // 为了兼容ie 需要先把后台传输的时间中的"-"替换成"/",T替换成空格
                            result_data[i].creationTime = result_data[i].creationTime.replace(/-/g, '/'); 
                            result_data[i].dueTime = result_data[i].dueTime.replace(/-/g, '/');
                            result_data[i].creationTime = result_data[i].creationTime.replace(/T/g, ' '); 
                            result_data[i].dueTime = result_data[i].dueTime.replace(/T/g, ' ');
                                                    
                            //为了能让new Date().getTIme()识别 需要删除"."后面的
                            var oldtime = result_data[i].creationTime.split(".");    
                            var newtime = result_data[i].dueTime.split("."); 
                            result_data[i].creationTime = oldtime[0];
                            result_data[i].dueTime = newtime[0];

                            // 转换成毫秒数
                            var oldTime = (new Date(result_data[i].creationTime)).getTime();
                            var newTime = (new Date(result_data[i].dueTime)).getTime();
                            // 补上缺少的8小时
                            oldTime = oldTime+8*60*60*1000;
                            newTime = newTime+8*60*60*1000;

                            // 通过相减获得项目周期
                            var differTime = Math.ceil((newTime - oldTime)/1000/60/60/24);
                            var stx = '<div class="project-list row">\
                            <div class="list-top row">\
                                <p class="pull-left">'+result_data[i].title+'</p>\
                                <div class="pull-right">\
                                    <div class="list-info row">\
                                        <p>\
                                            <i class="iconfont icon-yueduliang"></i>\
                                            浏览量 0\
                                        </p>\
                                        <p class="list-apply">\
                                            <i class="iconfont icon-shou"></i>\
                                            报名数 0\
                                        </p>\
                                        <p class="list-status list-recruit">'+result_data[i].status+'</p>\
                                    </div>\
                                </div>\
                            </div>\
                            <div class="list-bottom row">\
                                <img class="pull-left col-md-3 col-sm-5 col-xs-12" src="./img/project-logo.png">\
                                <div class="bottom-info col-md-9 pull-left">\
                                    <p>\
                                        <i class="i-computer iconfont icon-diannao1"></i>\
                                        <span>'+result_data[i].typeName+'</span>\
                                        <span class="bottom-gray"></span>\
                                    </p>\
                                    <p class="bottom-money">\
                                        <span>金额</span>\
                                        <span class="bottom-gray bottom-price">￥'+result_data[i].price+'</span>\
                                        <span>周期</span>\
                                        <span class="bottom-gray">'+differTime+'天</span>\
                                    </p>\
                                    <div class="bottom-btn form-inline pull-right">\
                                        <button class="btn-cancel form-control">取消发布</button>\
                                        <button class="btn-examine form-control">项目状态</button>\
                                    </div>\
                                </div>\
                            </div>\
                            </div>';
                            $("#join-project").append(stx);  
                            // 点击项目状态后跳转网页
                            $(".btn-examine").on("click", function(){
                                location.href = "own-cancel.html";
                            }); 
                            // 点击图片跳转后获取对应数据        
                            var box_item = document.getElementsByClassName("btn-examine");

                            function local_data_two(n){
                                box_item[n].onmouseenter = function(){
                                    // 每次进入前先删除先前的本地数据
                                    localStorage.clear(); 
                                    string_result = JSON.stringify(result_data[n]);
                                    localStorage.setItem("local-data",string_result);                              
                                };
                            };
                                
                            for(var x=0;x<box_item.length;x++){
                                local_data_two(x);
                            };

                            var tip = '是否取消该项目?';
                            // console.log(result_data[i].id);
                            // console.log(result_data[i].companyId);
                            $(".btn-cancel").off("click").on("click",function(){
                                if(window.confirm(tip)){
                                    $.ajax({
                                        type:"GET",
                                        url:"http://47.106.220.143:8080/project/apply",
                                        data:{
                                            pid:39,
                                            wid:9
                                        },  
                                        success:function(data){
                                            // console.log(data)
                                        }
                                    });                               
                                }                            
                            }); 
                        if($(".project-list").length==0){
                            var stx_two = '<div class="project-list row">不好意思,没有符合要求的项目</div>'
                            $("#join-project").append(stx_two); 
                        };                                                                                                            
                        };
                    });
                }        
            }
        })          
    };

    function get_data_develop(){
        $.ajax({
            type:"GET",
            url:"http://47.106.220.143:8080/project/getByCid",
            data:{
                cid:cid
            },

            beforeSend:function(){
                //每次按下按钮进行筛选前先删除先前的内容
                $("#join-project").empty();                   
            }, 
                        
            success:function(data){
                // console.log(data);
                if(data.data == ''){
                    var notyet = '<div class="notyet">目前尚未发布项目，快去发布项目吧。</div>';
                    $("#join-project").append(notyet);
                }
                else{
                    $.each(data.data, function (i) {
                        var result_data = data.data;
                        if(result_data[i].status==="1"){
                            result_data[i].status='开发中';
                            //转换获得的创建时间与截止时间
                            // 为了兼容ie 需要先把后台传输的时间中的"-"替换成"/",T替换成空格
                            result_data[i].creationTime = result_data[i].creationTime.replace(/-/g, '/'); 
                            result_data[i].dueTime = result_data[i].dueTime.replace(/-/g, '/');
                            result_data[i].creationTime = result_data[i].creationTime.replace(/T/g, ' '); 
                            result_data[i].dueTime = result_data[i].dueTime.replace(/T/g, ' ');
                                                    
                            //为了能让new Date().getTIme()识别 需要删除"."后面的
                            var oldtime = result_data[i].creationTime.split(".");    
                            var newtime = result_data[i].dueTime.split("."); 
                            result_data[i].creationTime = oldtime[0];
                            result_data[i].dueTime = newtime[0];

                            // 转换成毫秒数
                            var oldTime = (new Date(result_data[i].creationTime)).getTime();
                            var newTime = (new Date(result_data[i].dueTime)).getTime();
                            // 补上缺少的8小时
                            oldTime = oldTime+8*60*60*1000;
                            newTime = newTime+8*60*60*1000;

                            // 通过相减获得项目周期
                            var differTime = Math.ceil((newTime - oldTime)/1000/60/60/24);
                            var stx = '<div class="project-list row">\
                            <div class="list-top row">\
                                <p class="pull-left">'+result_data[i].title+'</p>\
                                <div class="pull-right">\
                                    <div class="list-info row">\
                                        <p>\
                                            <i class="iconfont icon-yueduliang"></i>\
                                            浏览量 0\
                                        </p>\
                                        <p class="list-apply">\
                                            <i class="iconfont icon-shou"></i>\
                                            报名数 0\
                                        </p>\
                                        <p class="list-status list-recruit">'+result_data[i].status+'</p>\
                                    </div>\
                                </div>\
                            </div>\
                            <div class="list-bottom row">\
                                <img class="pull-left col-md-3 col-sm-5 col-xs-12" src="./img/project-logo.png">\
                                <div class="bottom-info col-md-9 pull-left">\
                                    <p>\
                                        <i class="i-computer iconfont icon-diannao1"></i>\
                                        <span>'+result_data[i].typeName+'</span>\
                                        <span class="bottom-gray"></span>\
                                    </p>\
                                    <p class="bottom-money">\
                                        <span>金额</span>\
                                        <span class="bottom-gray bottom-price">￥'+result_data[i].price+'</span>\
                                        <span>周期</span>\
                                        <span class="bottom-gray">'+differTime+'天</span>\
                                    </p>\
                                    <div class="bottom-btn form-inline pull-right">\
                                        <button class="btn-cancel form-control">取消发布</button>\
                                        <button class="btn-examine form-control">项目状态</button>\
                                    </div>\
                                </div>\
                            </div>\
                            </div>';
                            $("#join-project").append(stx);  
                            // 点击项目状态后跳转网页
                            $(".btn-examine").on("click", function(){
                                location.href = "own-cancel.html";
                            }); 
                            // 点击图片跳转后获取对应数据        
                            var box_item = document.getElementsByClassName("btn-examine");

                            function local_data_two(n){
                                box_item[n].onmouseenter = function(){
                                    // 每次进入前先删除先前的本地数据
                                    localStorage.clear(); 
                                    string_result = JSON.stringify(result_data[n]);
                                    localStorage.setItem("local-data",string_result);                              
                                };
                            };
                                
                            for(var x=0;x<box_item.length;x++){
                                local_data_two(x);
                            };

                            var tip = '是否取消该项目?';
                            // console.log(result_data[i].id);
                            // console.log(result_data[i].companyId);
                            $(".btn-cancel").off("click").on("click",function(){
                                if(window.confirm(tip)){
                                    $.ajax({
                                        type:"GET",
                                        url:"http://47.106.220.143:8080/project/apply",
                                        data:{
                                            pid:39,
                                            wid:9
                                        },  
                                        success:function(data){
                                            // console.log(data)；
                                        }
                                    });                               
                                }                            
                            });                                                                                                             
                        };
                        if($(".project-list").length==0){
                            var stx_two = '<div class="project-list row">不好意思,没有符合要求的项目</div>'
                            $("#join-project").append(stx_two); 
                        };                        
                    });
                }        
            }
        })          
    };

    function get_data_end(){
        $.ajax({
            type:"GET",
            url:"http://47.106.220.143:8080/project/getByCid",
            data:{
                cid:cid
            },

            beforeSend:function(){
                // //每次按下按钮进行筛选前先删除先前的内容
                $("#join-project").empty();                 
            }, 
                        
            success:function(data){
                // console.log(data);
                if(data.data == ''){
                    var notyet = '<div class="notyet">目前尚未发布项目，快去发布项目吧。</div>';
                    $("#join-project").append(notyet);
                }
                else{
                    $.each(data.data, function (i) {
                        var result_data = data.data;
                        if(result_data[i].status==="-1"){
                            result_data[i].status='已结束';
                            //转换获得的创建时间与截止时间
                            // 为了兼容ie 需要先把后台传输的时间中的"-"替换成"/",T替换成空格
                            result_data[i].creationTime = result_data[i].creationTime.replace(/-/g, '/'); 
                            result_data[i].dueTime = result_data[i].dueTime.replace(/-/g, '/');
                            result_data[i].creationTime = result_data[i].creationTime.replace(/T/g, ' '); 
                            result_data[i].dueTime = result_data[i].dueTime.replace(/T/g, ' ');
                                                    
                            //为了能让new Date().getTIme()识别 需要删除"."后面的
                            var oldtime = result_data[i].creationTime.split(".");    
                            var newtime = result_data[i].dueTime.split("."); 
                            result_data[i].creationTime = oldtime[0];
                            result_data[i].dueTime = newtime[0];

                            // 转换成毫秒数
                            var oldTime = (new Date(result_data[i].creationTime)).getTime();
                            var newTime = (new Date(result_data[i].dueTime)).getTime();
                            // 补上缺少的8小时
                            oldTime = oldTime+8*60*60*1000;
                            newTime = newTime+8*60*60*1000;

                            // 通过相减获得项目周期
                            var differTime = Math.ceil((newTime - oldTime)/1000/60/60/24);
                            var stx = '<div class="project-list row">\
                            <div class="list-top row">\
                                <p class="pull-left">'+result_data[i].title+'</p>\
                                <div class="pull-right">\
                                    <div class="list-info row">\
                                        <p>\
                                            <i class="iconfont icon-yueduliang"></i>\
                                            浏览量 0\
                                        </p>\
                                        <p class="list-apply">\
                                            <i class="iconfont icon-shou"></i>\
                                            报名数 0\
                                        </p>\
                                        <p class="list-status list-recruit">'+result_data[i].status+'</p>\
                                    </div>\
                                </div>\
                            </div>\
                            <div class="list-bottom row">\
                                <img class="pull-left col-md-3 col-sm-5 col-xs-12" src="./img/project-logo.png">\
                                <div class="bottom-info col-md-9 pull-left">\
                                    <p>\
                                        <i class="i-computer iconfont icon-diannao1"></i>\
                                        <span>'+result_data[i].typeName+'</span>\
                                        <span class="bottom-gray"></span>\
                                    </p>\
                                    <p class="bottom-money">\
                                        <span>金额</span>\
                                        <span class="bottom-gray bottom-price">￥'+result_data[i].price+'</span>\
                                        <span>周期</span>\
                                        <span class="bottom-gray">'+differTime+'天</span>\
                                    </p>\
                                    <div class="bottom-btn form-inline pull-right">\
                                        <button class="btn-cancel form-control">取消发布</button>\
                                        <button class="btn-examine form-control">项目状态</button>\
                                    </div>\
                                </div>\
                            </div>\
                            </div>';
                            $("#join-project").append(stx);  
                            // 点击项目状态后跳转网页
                            $(".btn-examine").on("click", function(){
                                location.href = "own-cancel.html";
                            }); 
                            // 点击图片跳转后获取对应数据        
                            var box_item = document.getElementsByClassName("btn-examine");

                            function local_data_two(n){
                                box_item[n].onmouseenter = function(){
                                    // 每次进入前先删除先前的本地数据
                                    localStorage.clear(); 
                                    string_result = JSON.stringify(result_data[n]);
                                    localStorage.setItem("local-data",string_result);                              
                                };
                            };
                                
                            for(var x=0;x<box_item.length;x++){
                                local_data_two(x);
                            };

                            var tip = '是否取消该项目?';
                            // console.log(result_data[i].id);
                            // console.log(result_data[i].companyId);
                            $(".btn-cancel").off("click").on("click",function(){
                                if(window.confirm(tip)){
                                    $.ajax({
                                        type:"GET",
                                        url:"http://47.106.220.143:8080/project/apply",
                                        data:{
                                            pid:39,
                                            wid:9
                                        },  
                                        success:function(data){
                                            // console.log(data)
                                        }
                                    });                               
                                }                            
                            });                                                                                 
                        };
                        if($(".project-list").length==0){
                            var stx_two = '<div class="project-list row">不好意思,没有符合要求的项目</div>'
                            $("#join-project").append(stx_two); 
                        };
                    });
                }        
            }
        })          
    };



    $('#data_all').on("click",function(){
        get_data_all();
    });

    $('#data_call').on("click",function(){
        get_data_call();
    });

    $('#data_develop').on("click",function(){
        get_data_develop();
    });

    $('#data_end').on("click",function(){
        get_data_end();
    });        

    get_data_all();
     
});
    


