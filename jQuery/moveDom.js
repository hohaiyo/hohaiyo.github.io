$(function(){
	
	if($(window).width()<770){
		var preDom=$(".problem_list>ul>li>div>img");
		var nextDom=$(".problem_list>ul>li>div[class='col-md-9']")
		for(var i=0;i<preDom.length;i++){
			nextDom.eq(i).insertBefore(preDom.parent().eq(i))
		}
	}

	// 增添阶段数目
	$(".changenum").click(function(){
			if($(".pash_box").length==0 && parseInt($('.num').val())<=20){
				let pNum=$(".num").val()
				for(let i=1;i<=parseInt($('.num').val());i++){
					let stateBox=`<div class="col-md-12 pash_box">
						<div class="col-md-1">
							<span class="tag tag_box">P<span class="demand_num">${parseInt(i)}</span></span>
							<p class="tag center-block">阶段</p>
						</div>
						<div class="col-md-11">
							<ul class="list">
								<li>
									<ul>
										<li>阶段名称</li>
										<li><input type="text" class="demand_name"></li>
									</ul>
								</li>
								<li>
									<ul class="data clearfix">
										<div class="row">
										<li class="col-md-4">
											<ol>
												<li>计划交付日期</li>
												<li><input type="text" class="plan_data" placeholder="年/月/日"></li>
											</ol>
										</li>
										<li class="col-md-4">
											<ol>
												<li>计划金额</li>
												<li><input type="text" class="plan_money">元</li>
											</ol>
										</li></div>
									</ul>
								</li>
								<li>
									<ul>
										<li>交付说明</li>
										<li><textarea name="" id="" class="instruct"></textarea></li>
									</ul>
								</li>
							</ul>
						</div>
					</div>`;
					$(".pash_con").append(stateBox);
				};
				$(".submit_btn").css("display","block");
			}else if(parseInt($(".num").val())<=20){
				for(let i=$(".pash_box").length+1;i<parseInt($('.num').val())+1;i++){
					let stateBox=`<div class="col-md-12 pash_box">
						<div class="col-md-1">
							<span class="tag tag_box">P<span class="demand_num">${parseInt(i)}</span></span>
							<p class="tag center-block">阶段</p>
						</div>
						<div class="col-md-11">
							<ul class="list">
								<li>
									<ul>
										<li>阶段名称</li>
										<li><input type="text" class="demand_name"></li>
									</ul>
								</li>
								<li>
									<ul class="data clearfix">
										<div class="row">
										<li class="col-md-4">
											<ol>
												<li>计划交付日期</li>
												<li><input type="text" class="plan_data" placeholder="年/月/日"></li>
											</ol>
										</li>
										<li class="col-md-4">
											<ol>
												<li>计划金额</li>
												<li><input type="text" class="plan_money">元</li>
											</ol>
										</li></div>
									</ul>
								</li>
								<li>
									<ul>
										<li>交付说明</li>
										<li><textarea name="" id="" class="instruct"></textarea></li>
									</ul>
								</li>
							</ul>
						</div>
					</div>`;
					$(".pash_con").append(stateBox);
				}
			}else if(parseInt($(".num").val())>20){
				alert("阶段数目最多20项")
			}
			
	});

	// 提交
	
	$(".confirm").click(function(){

		for(let i=0;i<$(".pash_box").length;i++){
			let name=$(".demand_name").eq(i).val();
			let date=$(".plan_data").eq(i).val();	
			let money=$(".plan_money").eq(i).val();
			let instruct=$(".instruct").eq(i).val();

			let statedetail=`<div class="col-md-12 state_detail_box">
				<div class="col-md-12 top_tag">
				<div class="pull-left">
					<p><span class="state_P">P${i+1}阶段</span> | <span class="statename">${name}</span></p>
				</div>
				<div class="pull-right">
					<p>状态 <span class="state">阶段划分</span></p>
				</div>
				</div>
				<div class="col-md-5 statename">
					<p>计划交付日期</p>
					<span class="statedate">${date}</span>
				</div>
				<div class="col-md-6 statename">
					<p>计划金额</p>
					<span>￥${money}</span>
				</div>
				<div class="col-md-2 statename">
					<p>交付说明</p>
					<span class="stateinfomation">${instruct}</span>
				</div>
			</div>`;
			$(".pash_divid").append(statedetail);
		}
		$(".pash_con").css("display","none")
		$(".submit_btn").css("display","none");
	});

})