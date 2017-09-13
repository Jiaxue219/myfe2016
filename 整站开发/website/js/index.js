$(function(){
    //搜索框
    var $searchInput = $('#search-input');
    $('#search span').on('click', function(){
        alert($searchInput.val());
    });
    $searchInput.on('keypress', function(e){
        if(e.which == 13){//表示按下的键是回车
            alert($searchInput.val());
        }
    });

    //轮播图

});