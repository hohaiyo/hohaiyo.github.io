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

			$('.enter-login').click(function(){
				
				if($('.enter-user').val().length!=0 &&	 $('.enter-pwd').val().length!=0){
					
					$('.enter-user').css('border','1px solid #49a9ee')
					$('.enter-pwd').css('border','1px solid #49a9ee')
						
					
				}else if($('.enter-user').val().length!=0 &&	 $('.enter-pwd').val().length==0){
						$('.enter-pwd').css('border','1px solid red')
						$('.warn').css({'display':'block'})
				}else{
						$('.enter-user').css('border','1px solid red')
						$('.warn').css({'display':'block'})
				
				}
				
			})
			
		})