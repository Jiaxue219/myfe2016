$(function(){
    //������
    var $searchInput = $('#search-input');
    $('#search span').on('click', function(){
        alert($searchInput.val());
    });
    $searchInput.on('keypress', function(e){
        if(e.which == 13){//��ʾ���µļ��ǻس�
            alert($searchInput.val());
        }
    });

    //�ֲ�ͼ

});