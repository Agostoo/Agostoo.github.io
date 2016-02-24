var urlData=['index','index','clock','datepicker','select','cubic','index','aGinaUI'
];
window.onload=function(){
    var oUl=document.getElementById('ul1');

    var N=urlData.length;

    for(var i=0; i<N; i++){
        var oLi=document.createElement('li');
        oLi.innerHTML='<a href="'+urlData[i]+'.html"/>';
        oLi.style.backgroundImage='url(images/p'+i+'.png)';
        oUl.appendChild(oLi);

        oLi.style.transition='1s all ease '+200*(N-i)+'ms';

        (function(oLi,i){
            setTimeout(function(){
                oLi.style.transform='rotateY('+360/N*i+'deg) translateZ(350px)';
            },0);
        })(oLi,i);
    }


    var aLi=oUl.children;
    
    var lastY=0;
    var iSpeedY=0;
    var timer=null;
    //发完牌
    aLi[0].addEventListener('transitionend',function(){
        
        change();
    });
    var y=0;
    //键盘控制
    document.onkeydown=function(ev){
        if(ev.keyCode==37){

            y-=360/N;

            change();
        }
        if(ev.keyCode==39){

            y+=360/N;

            change();
        }
    };
    function clear(){
        for(var i=0; i<aLi.length; i++){
            aLi[i].style.transition='none';
        }
    }
    // function open(){
    //     for(var i=0; i<aLi.length; i++){
    //         aLi[i].style.transition='1s all ease';
    //     }
    // }
    function change(){
        for(var i=0; i<aLi.length; i++){
            aLi[i].style.transition='1s all linear';
            aLi[i].style.transform='rotateY('+(360/N*i+y)+'deg) translateZ(350px)';

            var d=Math.abs((360/N*i+y)%360);

            d>180 && (d=360-d);

            d=(180-d)/180;

            d<0.2 && (d=0.2);

            aLi[i].style.opacity=d;

            //aLi[i].innerHTML=d;
        }
    }

    //拖拽
    document.onmousedown=function(ev){
        clearInterval(timer);
        clear();

        var disX=ev.clientX-y;

        document.onmousemove=function(ev){
            y=ev.clientX-disX;

            document.title=y;
            change();

            iSpeedY=y-lastY;

            lastY=y;
        };

        document.onmouseup=function(){
            document.onmousemove=null;
            document.onmouseup=null;

            timer=setInterval(function(){
                iSpeedY*=0.95;

                y+=iSpeedY;

                change();
            },30);
        };
        return false;
    };
};