$(function(){    
   var workname =  JSON.parse(sessionStorage.getItem('data1'))
   console.log(workname)
   $('.workusername').html(workname.workerNickName);
   $('.work-email').html(workname.email);
   $('.work-phone').html(workname.phone);
   console.log(workname.workerNickName)
})