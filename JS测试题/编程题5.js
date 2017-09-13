(function(){
    var oContainer = document.getElementById('container');
    var oContent = document.getElementById('content');
    var aImg = oContent.getElementsByTagName('img');
    var oSmallPic = document.getElementById('small-pic');
    var aSmallImg = oSmallPic.getElementsByTagName('img');
    var oPrev = document.getElementById('prev');
    var oNext = document.getElementById('next');
    var oInfo = document.getElementById('info');
    var oCurrentPage = document.getElementById('current-page');

    var zIndex = 9;
    var iNow = 0;
    var timer;

    oPrev.onmouseover = oNext.onmouseover = function(){
        animate(this, {opacity: 100});
    };
    oPrev.onmouseout = oNext.onmouseout = function(){
        animate(this, {opacity: 0});
    };
    oPrev.onclick = oNext.onclick  = function(){
        if(this == oNext){
            iNow++;
            if(iNow == aImg.length){
                iNow = 0;
            }
        }else{
            iNow--;
            if(iNow == -1){
                iNow = aImg.length - 1;
            }
        }
        changeImg(iNow);
    };

    for(var i=0; i<aSmallImg.length; i++){
        aSmallImg[i].index = i;
        aSmallImg[i].onmouseover = function(){
            animate(this, {opacity: 100});
        };
        aSmallImg[i].onmouseout = function(){
            if(this != aSmallImg[iNow]){
                animate(this, {opacity: 30});
            }
        };
        aSmallImg[i].onclick = function(){
            iNow = this.index;
            changeImg(iNow);
        };
    }

    run();
    oContainer.onmouseover = function(){
        clearInterval(timer);
    };
    oContainer.onmouseout = function(){
        run();
    };

    function changeImg(idx){
        for(var i=0; i<aImg.length; i++){
            aSmallImg[i].style.opacity = '0.3';
            aSmallImg[i].style.filter = 'alpha(opacity = 30)';
        }
        aSmallImg[idx].style.opacity = '1';
        aSmallImg[idx].style.filter = 'alpha(opacity = 100)';
        aImg[idx].style.opacity = '0';
        aImg[idx].style.filter = 'alpha(opacity = 0)';
        aImg[idx].style.zIndex = ++zIndex;
        animate(aImg[idx], {opacity: 100});
        oPrev.style.zIndex = oNext.style.zIndex = oInfo.style.zIndex = zIndex++;
        oCurrentPage.innerHTML = idx + 1;

        var iLeft = 0;
        if(idx == 0 || idx == 1){
            iLeft = 0;
        }else if(idx == aSmallImg.length -1 || idx == aSmallImg.length - 2){
            iLeft = aSmallImg.length / 2;
        }else{
            iLeft = idx - 1;
        }
        animate(oSmallPic, {left: -iLeft * aSmallImg[0].offsetWidth});
        //oSmallPic.style.left = -iLeft * aSmallImg[0].offsetWidth + "px";
    }

    function run(){
        timer = setInterval(function(){
            oNext.onclick();
        }, 1000)
    }

})();