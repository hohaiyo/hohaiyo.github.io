$(function(){
			//勾选框
			$(".sure-check").click(function () {
				$(".sure-check i").toggle();
				if($(".sure-check i").css("display") == "block"){
					$(".sure-check").css("border","none");
				}else{
					$(".sure-check").css("border","1px solid rgba(0,0,0,0.2)");
				}
			});

			
		})