
	// 退出登录
    $('.sortir').click(function(){
		// console.log()
        $.removeCookie('user', { path: '/' })
        location.href = "index.html"
	})
	
	$(document).keydown(function(event){
		if(event.keyCode==13){
			var namework = $(".worker-seek>input").val()
			console.log(namework)
				$.ajax({
					type:"GET",
					url:"http://47.106.220.143:8080/worker/getByName",
					data:{
						name:namework
					},
					success:function(data){
						console.log(data)
					}
				})
		}
	})
	// console.log(cookie.get('user'))
	// $('.issue-project').click(function(){
	// 	$.ajax({
	// 		type:"GET",
	// 		url:"http://47.106.220.143:8080/project/getByCid",
	// 		data:{
	// 			cid:cid
	// 		}
	// 	})
	// })
	
	$(window).scroll(function(){
		$(".anchor").css("top",($(window).height() - $(	'.anchor').outerHeight())/2 + $(document).scrollTop())
	})

	$(".anchor li").mouseover(function () {
		$(this).css({
			left:'-100px',
			width: "150px",
			backgroundColor: "rgba(0,0,0,0.7)"
		});
		$(this).addClass("hover");
	});
	$(".anchor li").mouseout(function(){
		$(this).css({
			left:"0",
			width: "50px",
			backgroundColor: "rgba(0,0,0,0.3)"
		});
		$(this).removeClass("hover");
	});
	$(".navbar-nav").click(function(){
        if($(window).width()<504){
            if($(".seek").css("display") == "block"){
                $(".seek").css("display","none")
            }else{
                $(".seek").css("display","block")
            }
            $(window).click(function(){
                 $(".seek").css("display","block")
            })
        }
        
	})	

	if($.cookie("user")){
		$('.yenter').css({"display":"block"})
		$('.nenter').css({"display":"none"})
	}else{
		$('.nenter').css({"display":"block"})
		$('.yenter').css({"display":"none"})
		location.href = "index.html"
	}
	
	var people = JSON.parse(localStorage.getItem('people'))
    if(people=='company'){
		$('.company-seul').css({"display":"block"})
        $('.issue-project').css({"display":"blcok"})
        $('.join-project').css({"display":"none"})
	}else{
		$('.worker-seul').css({"display":"block"})
        $('.join-project').css({"display":"block"})
        $('.issue-project').css({"display":"none"})
	}
	
