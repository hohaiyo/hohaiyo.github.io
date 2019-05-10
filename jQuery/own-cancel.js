$(function(){
   var data = JSON.parse(localStorage.getItem('local-data'))
   // console.log(data)
   $('.title_h3').html(data.title)
   $('.sum').html(data.price.toLocaleString())
   $('#item_style').html(data.typeName)
   $('#item_particular').html(data.desc)

   var oldTime = (new Date(data.creationTime)).getTime()
   var newTime = (new Date(data.dueTime)).getTime()

   // 补上缺少的8小时
   oldTime = oldTime+8*60*60*1000;
   newTime = newTime+8*60*60*1000;

   // 通过相减获得项目周期
   var differTime = Math.ceil((newTime - oldTime)/1000/60/60/24);

   // 重新转换创建时间
   var oldTime_two = new Date(oldTime);
   the_year = oldTime_two.getFullYear();//年份
   the_month = oldTime_two.getMonth()+1;//月份
   the_day = oldTime_two.getDate();//几号	  

   the_data = the_year + "/" + the_month + "/" + the_day;  
    // console.log(differTime)
    $('.period').html(differTime)
})