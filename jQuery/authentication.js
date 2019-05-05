$(function(){
    $(window).mousemove(function () {
        if($("#sfzname").val().length >= 2){
            $("#ty").removeAttr("disabled").removeClass("send-disabled");
        }else{
            $("#ty").attr( "disabled","disabled" ).addClass( "send-disabled" );
        }
    });
    $(window).mousemove(function () {
        if($("#sfzsz").val().length == 18){
            $("#ty").removeAttr("disabled").removeClass("send-disabled");
        }else{
            $("#ty").attr( "disabled","disabled" ).addClass( "send-disabled" );
        }
    });
})