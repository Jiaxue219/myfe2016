$(function(){
    //ËÑË÷¿ò
    var $searchInput = $('.search-input');
    $('.search-submit').on('click', function(){
       alert($searchInput.val());
    });
    $searchInput.on('keypress', function(e){
        if(e.which == 13){
            alert($searchInput.val());
        }
    });

    //nav
    var $li =$('.menu li');
    $li.mouseover(function(){
        $(this).addClass('selected').siblings().removeClass();
    });
    $li.mouseout(function(){
        $(this).removeClass();
        $li.eq(0).addClass('selected');
    });
});