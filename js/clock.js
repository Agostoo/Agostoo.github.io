window.onload=function(){
    var oDiv=document.querySelector('.box');
    var oH=document.querySelector('.hour');
    var oM=document.querySelector('.min');
    var oS=document.querySelector('.sec');

    function tick(){
        var oDate=new Date();
        var h=oDate.getHours();
        var m=oDate.getMinutes();
        var s=oDate.getSeconds();

        oH.style.transform='rotate('+(h*30+m/60*30)+'deg)';
        oM.style.transform='rotate('+(6*m+s/60*6)+'deg)';
         oS.style.transform='rotate('+6*s+'deg)';//秒针连续走 不断则改为这句oS.style.transform='rotate('+(6*s+ms/1000*6)+'deg)';
    }
    tick();
    setInterval(tick,1000);
};