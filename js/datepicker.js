/**
 *  Author:agosto
 *  Date: 2015/12/20
 */
(function (global){
    var addLink=false;

    global.datepicker=function (obj){
        // 引入CSS
        if ( ! addLink)
        {
            addLink=true;
            var oLink=document.createElement('link');
            oLink.href='css/datepicker.css';
            oLink.rel='stylesheet';
            var oHead=document.getElementsByTagName('head')[0];
            oHead.appendChild(oLink);


        }


        // 文本框获取到焦点时让日历box显示
        obj.onfocus=function (){
            oBox.style.display='block';
        };

        // 日历
        var oBox=document.createElement('div');
        oBox.className='box';
        oBox.style.left=obj.offsetLeft+'px';
        oBox.style.top=obj.offsetTop+obj.offsetHeight+'px';
        obj.parentNode.insertBefore(oBox, obj);

        oBox.innerHTML='<a href="javascript:;" id="pre">←</a>\
        <a href="javascript:;" id="next">→</a>\
        <p class="tit">xxxx年xxx月</p>\
        <ol class="day clearfix">\
            <li>一</li>\
            <li>二</li>\
            <li>三</li>\
            <li>四</li>\
            <li>五</li>\
            <li class="week">六</li>\
            <li class="week">日</li>\
        </ol>\
        <ul class="date clearfix"></ul>';

        var oP=oBox.getElementsByTagName('p')[0];
        var oUl=oBox.getElementsByTagName('ul')[0];
        var oInp=document.getElementById('txt');
        var oPre=document.getElementById('pre');
        var oNext=document.getElementById('next');

        var now=0;
        creatTime();
        //前一个月
        oPre.onclick=function (){
            now--;
            creatTime();
        };
        //后一个月
        oNext.onclick=function (){
            now++;
            creatTime();
        };

        function toDub(n)
        {
            return n<10? '0'+n :''+n;
        }
        function creatTime()
        {
            //xxx年xxx月
            var date=new Date();
            date.setMonth(date.getMonth()+now);
            var year=date.getFullYear();
            var month=date.getMonth();
            oP.innerHTML=year+'年'+(month+1)+'月';

            //每次只显示一个月
            oUl.innerHTML='';

            //创建空格
            var date=new Date();
            date.setMonth(date.getMonth()+now);
            date.setDate(1);
            var day=date.getDay();
            (day==0)&&(day=7)
            for (var i=0; i<day-1; i++)
            {
                var oLi=document.createElement('li');
                oUl.appendChild(oLi);
            }

            //创建日期
            var date=new Date();
            date.setMonth(date.getMonth()+now);
            date.setMonth(date.getMonth()+1,1);
            date.setDate(0);
            var date=date.getDate();

            for (var i=0; i<date; i++)
            {
                var oLi=document.createElement('li');
                oUl.appendChild(oLi);
                oLi.innerHTML=i+1;
            }

            //设置周末
            var aLi=oUl.children;
            for (var i=0; i<aLi.length; i++)
            {
                if (i%7==5 || i%7==6)
                {
                    aLi[i].className='week';
                }
            }

            if (now == 0)//本月
            {
                var oDate=new Date();
                var today=oDate.getDate();

                for (var i=0; i<aLi.length; i++)
                {
                    if (aLi[i].innerHTML < today)//设置以前日子
                    {
                        aLi[i].className='past';
                    }
                    else if (aLi[i].innerHTML == today)//设置今天
                    {
                        aLi[i].innerHTML='今天';
                        aLi[i].className='today';
                    }
                }
            }
            else if (now < 0)//本月之前都为past
            {
                for (var i=0; i<aLi.length; i++)
                {
                    aLi[i].className='past';
                }
            }

            //给今天及以后的日期加点击事件并且变inp框里的内容 xxx年xxx月xx日
            if (now==0)//本月
            {   
                var oDate=new Date();
                var today=oDate.getDate();

                for (var i=0; i<aLi.length; i++)
                {
                    if (aLi[i].innerHTML > today) //
                    {
                        aLi[i].onclick=function (){
                            obj.value=oP.innerHTML+toDub(this.innerHTML)+'日';
                            oBox.style.display='none';
                        };
                    }
                    else if (aLi[i].innerHTML == '今天')
                    {
                        aLi[i].onclick=function (){
                            obj.value=oP.innerHTML+toDub(today)+'日';
                            oBox.style.display='none';
                        };
                    }
                }
            }
            else if (now > 0)// 下个月
            {           
                for (var i=0; i<aLi.length; i++)
                {
                    aLi[i].onclick=function (){
                        obj.value=oP.innerHTML+toDub(this.innerHTML)+'日';
                        oBox.style.display='none';
                    };
                }
            }



        }
    };

})(window);