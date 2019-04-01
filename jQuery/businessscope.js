$(function(){
    //下拉菜单
    $('.user-top').click(
        function () {
            $('.dropdown').toggle();
        }
    )
    //头像hover效果
    $('#headIcon').hover(
        function () {
            $('#iconimg').css('display', 'block');
        }, function () {
            $('#iconimg').css('display', 'none');
        }
    );
   //选项卡
   $(document).ready(function(){
    $('.ul>li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        $(this).parent().siblings().children().eq(index).addClass('active').siblings().removeClass('active');
    })
})
})