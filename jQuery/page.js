
(function($){
	var zp = {
		init:function(obj,pageinit){
			return (function(){
				zp.addhtml(obj,pageinit);
				zp.bindEvent(obj,pageinit);
			}());
		},
		addhtml:function(obj,pageinit){
			return (function(){
				obj.empty();
				/*上一页*/
				if (pageinit.current > 1) {
					obj.append('<a href="javascript:;" class="prebtn"><i class="iconfont icon-fanhui-left"></i></a>');
				} else{
					obj.remove('.prevPage');
					obj.append('<span class="disabled"><i class="iconfont icon-fanhui-left"></i></span>');
				}
				/*中间页*/
				// 当前页为4且总页数为5时
				if (pageinit.current==4&& pageinit.pageNum ==5) {
					obj.append('<a href="javascript:;" class="zxfPagenum">'+1+'</a>');
				}

				// 当前页为4且总页数大于5时
				if (pageinit.current==4&& pageinit.pageNum >5) {
					obj.append('<a href="javascript:;" class="zxfPagenum">'+1+'</a>');
					obj.append('<span>...</span>');
				}

				// 当前页为5且总页数为5时
				if(pageinit.current ==5&& pageinit.pageNum ==5){
					obj.append('<a href="javascript:;" class="zxfPagenum">'+1+'</a>');
				}

				// 当前页大于等于5时且总页数大于5时
				if (pageinit.current >=5 && pageinit.pageNum >5) {
					obj.append('<a href="javascript:;" class="zxfPagenum">'+1+'</a>');
					obj.append('<span>...</span>');
				}
				if (pageinit.current >3 && pageinit.current <= pageinit.pageNum-3) {
					var start  = pageinit.current - 1,end = pageinit.current + 1;
				}else if(pageinit.current >3 && pageinit.current > pageinit.pageNum-3){
					var start  = pageinit.pageNum - 3,end = pageinit.pageNum;
				}
				else{
					var start = 1,end = 4;
				}
				for (;start <= end;start++) {
					if (start <= pageinit.pageNum && start >=1) {
						if (start == pageinit.current) {
							obj.append('<span class="current">'+ start +'</span>');
						} else if(start == pageinit.current+1){
							obj.append('<a href="javascript:;" class="zxfPagenum nextpage">'+ start +'</a>');
						}else{
							obj.append('<a href="javascript:;" class="zxfPagenum">'+ start +'</a>');
						}
					}
				}

				// 当end小于总页数且总页数为5时
				if (end < pageinit.pageNum && pageinit.pageNum==5) {
					obj.append('<a href="javascript:;" class="zxfPagenum">'+pageinit.pageNum+'</a>');					
				}

				// 当end小于总页数且总页数为6时
				if (end < pageinit.pageNum && pageinit.pageNum==6) {
					obj.append('<a href="javascript:;" class="zxfPagenum">'+pageinit.pageNum+'</a>');					
				}

				// 当end小于总页数且总页数大于6时
				if (end < pageinit.pageNum && pageinit.pageNum>6) {
					obj.append('<span>...</span>');
					obj.append('<a href="javascript:;" class="zxfPagenum">'+pageinit.pageNum+'</a>');					
				}
				/*下一页*/
				if (pageinit.current >= pageinit.pageNum) {
					obj.remove('.nextbtn');
					obj.append('<span class="disabled"><i class="iconfont icon-fanhui-copy"></i></span>');
				} else{
					obj.append('<a href="javascript:;" class="nextbtn"><i class="iconfont icon-fanhui-copy"></i></a>');
				}
				/*尾部*/
				obj.append('<span>'+'到第'+'<input type="number" class="zxfinput" value=""/>'+'页'+'</span>');
				obj.append('<span class="zxfokbtn">'+'确定'+'</span>');
			}());
		},
		bindEvent:function(obj,pageinit){
			return (function(){
				obj.on("click","a.prebtn",function(){
					var cur = parseInt(obj.children("span.current").text());
					var current = $.extend(pageinit, {"current":cur-1});
					zp.addhtml(obj,current);
					//当上一页点击时input内数字-1
					$('#count_page').val($('#count_page').val()-1);
					sendAjax();
					// if (typeof(pageinit.backfun)=="function") {
					// 	pageinit.backfun(current);

					// }
				});
				obj.on("click","a.zxfPagenum",function(){
					var cur = parseInt($(this).text());
					var current = $.extend(pageinit, {"current":cur});
					zp.addhtml(obj,current);
					//当点击时input内数字为当前点击页数
					$('#count_page').val(cur);
					sendAjax();
					// if (typeof(pageinit.backfun)=="function") {
					// 	pageinit.backfun(current);
					// };
				});
				obj.on("click","a.nextbtn",function(){
					var cur = parseInt(obj.children("span.current").text());
					var current = $.extend(pageinit, {"current":cur+1});
					zp.addhtml(obj,current);
					//当下一页点击时input内数字+1
					$('#count_page').val(Number($('#count_page').val())+Number(1));
					sendAjax();
					// if (typeof(pageinit.backfun)=="function") {
					// 	pageinit.backfun(current);
					// }
				});
				obj.on("click","span.zxfokbtn",function(){
					var cur = parseInt($("input.zxfinput").val());
					var current = $.extend(pageinit, {"current":cur});
					zp.addhtml(obj,{"current":cur,"pageNum":pageinit.pageNum});
					//当使用跳转时input内数字为跳转页数
					$('#count_page').val(cur);
					sendAjax();
					// if (typeof(pageinit.backfun)=="function") {
					// 	pageinit.backfun(current);
					// }
				});
			}());
		}
	}

	$.fn.createPage = function(options){
		var pageinit = $.extend({
			pageNum : 15,
			current : 1,
			// backfun : function(){}
		},options);
		zp.init(this,pageinit);
	}
}(jQuery));


		// var Total = function(){
		// 	Math.cell(find_demand_item_div.length/20)
		// }

		$(".zxf_pagediv").createPage({
			pageNum: Number($('#count_page_two').val()),
			current: 1
		});
    		//翻页


