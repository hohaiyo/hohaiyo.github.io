$(function(){
    var data = JSON.parse(localStorage.getItem('indetail'))
    // console.log(data)
    $('.title').html(data.title)
    $('.price').html(data.price.toLocaleString())
    $('.type').html(data.typeName)
    $('.desc').html(data.desc)
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
 
     if(data.status==="0"){
         data.status='招标中'
     }
     if(data.status==="1"){
         data.status='开发中'
         
     }
     if(data.status==="-1"){
         data.status='已结束'
         
     }
     $('.recruit').html(data.status)
     //发送给后台的主要信息
     var datawork = JSON.parse(localStorage.getItem('people'))
     console.log(datawork)
     if(datawork == 'worker'){
        $('.join_in').css('display','block');
     }
     var p = JSON.parse($.cookie("user"));
         var pid = p.id;
         console.log(pid)
         var w = JSON.parse(localStorage.getItem('indetail'));
         var wid = w.id;
         console.log(wid)
     $('.primary-ok').click(function(){
         $.ajax({
            type:'GET',
            url:"http://47.106.220.143:8080/project/apply",
            data:{
                pid:wid,
                wid:pid,
            },
            success: function(data){
                console.log(data)
                if(data.data==null){
                    let data5 = '已参加'
                    
                }
              }           
        });
        var datawork = JSON.parse(localStorage.getItem('people'))
        console.log(datawork)
        if(datawork == 'worker'){
            // console.log(data.data)
            $('.join_in').attr({value:'已参与',disabled:'disabled'}).css('cursor','not-allowed');
            
        }
     }); 
     
    
 })