$(function(){
	
	if($(window).width()<770){
		var preDom=$(".problem_list>ul>li>div>img");
		var nextDom=$(".problem_list>ul>li>div[class='col-md-9']")
		for(var i=0;i<preDom.length;i++){
			nextDom.eq(i).insertBefore(preDom.parent().eq(i))
		}
	}
	
})