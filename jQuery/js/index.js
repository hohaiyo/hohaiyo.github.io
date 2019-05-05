var oul = $('ul');
        var xz = $('.xz');
        var oli = $('li');
        var dian = $('span');
        var oleft = $('.left');
        var oright = $('.right');
        var box = $('.box')
        var time = null;
        var n = 0;
        var a = 0;
        var oliwidth = -oli.eq(0).width();
        xz.children().eq(a).addClass('red');
        function left(){
            n++;
            a++;
        oul.animate({left:n*oliwidth},900,function(){
            if(n>4){
                n=0;
                oul.css("left","0px")
            }
        });
        xz.children().eq(a).addClass('red').siblings().removeClass('red');
            if(a>4){
                a=0;
                xz.children().eq(a).addClass('red').siblings().removeClass('red');
            }
        };
        dian.click(function(){
            n = $(this).index();
            a = $(this).index();
            oul.css({"left":n*oliwidth})
            $(this).addClass('red').siblings().removeClass('red');
        })
        clearInterval(time)
        time = setInterval(left,1000)
        oleft.click(function(){
            n--;
            a--;
            if(n<0&&a<0){
               n=4;
               a=4;
            }
            oul.css("left",n*oliwidth)
            xz.children().eq(a).addClass('red').siblings().removeClass('red');
        })
        oright.click(function(){
            a++;
            n++;
            if(n>4&&a>4){
               n=0;
               a=0;
            }
            oul.css("left",n*oliwidth)
            xz.children().eq(a).addClass('red').siblings().removeClass('red');
        })
        box.hover(function(){
            clearInterval(time)
        },function(){
            time = setInterval(left,1000)
        })