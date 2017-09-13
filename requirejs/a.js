//Êı×éÅÅĞòÄ£¿é
define(["b"], function(isArray){
    function arrSort(arr){
        if(isArray(arr)){
            return arr.sort(function(a,b){
                return a-b;
            });
        }else{
            return "fail..";
        }
    }
    return arrSort;
});