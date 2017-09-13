$(function(){
    //header
    $('#menu a').on('click', function(){
        $('this').css('color', '#ff0a45');
    });


    //banner
    var $iNow = 0;
    var $timer;

    $('#banner .nav li').mouseover(function(){
        $iNow = $('#banner .nav li').index(this);
        changeImg($iNow);
    });
    $('#prev').on('click', function(){
        $iNow--;
        if($iNow == -1){
            $iNow = $('.images img').length - 1;
        }
        changeImg($iNow);
    });
    $('#next').on('click', function(){
        $iNow++;
        if($iNow == $('.images img').length){
            $iNow = 0;
        }
        changeImg($iNow);
    });

    function changeImg(idx){
        $('#banner .nav li').eq(idx).addClass('selected').siblings().removeClass();
        $('.images img').eq(idx).show().siblings().hide();
    }

    function run(){
        $timer = setInterval(function(){
            $('#next').trigger('click');
        }, 1000);
    }
    run();
    $('#banner').hover(function(){
        clearInterval($timer);
    }, function(){
        run();
    });
});