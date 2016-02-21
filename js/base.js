var data=[
	{
		'name':'Drag',
		'url':'drag.html',
		'img':'u1.jpg',
		'data-cat':'拖拽(Draggable)'
	},
	{
		'name':'FrameDrag',
		'url':'frameDrag.html',
		'img':'u2.jpg',
		'data-cat':'拖拽(Draggable)'
	},
	{
		'name':'LimitDrag',
		'url':'limitDrag.html',
		'img':'u3.jpg',
		'data-cat':'拖拽(Draggable)'
	},
	{
		'name':'Datepicker',
		'url':'datepicker.html',
		'img':'u4.jpg',
		'data-cat':'日期选择器(Datepicker)'
	},
	{
		'name':'Radio',
		'url':'radio.html',
		'img':'u5.jpg',
		'data-cat':'按钮(Button)'
	},
	{
		'name':'Checkbox',
		'url':'checkbox.html',
		'img':'u6.jpg',
		'data-cat':'按钮(Button)'
	},
	{
		'name':'Select',
		'url':'select.html',
		'img':'u7.jpg',
		'data-cat':'按钮(Button)'
	},
	{
		'name':'Tab',
		'url':'tab.html',
		'img':'u8.jpg',
		'data-cat':'选项卡(Tabs)'

	},
	{
		'name':'AutoTab',
		'url':'autoTab.html',
		'img':'u9.jpg',
		'data-cat':'选项卡(Tabs)'
	}
];
var UI={};
// 公共
UI.public={};

// 有关类的函数
UI.public.getByClass=function (obj,sClass){
    if(obj.getElementsByClassName){
        return obj.getElementsByClassName(sClass);
    }else{
        var arr=[];
        //var reg=/\bsClass\b/;
        var reg=new RegExp('\\b'+sClass+'\\b');
        var aEle=obj.getElementsByTagName('*');

        for(var i=0; i<aEle.length; i++){
            if(reg.test(aEle[i].className)){
                arr.push(aEle[i]);
            }
        }
        return arr;
    }
};

UI.public.hasClass=function (obj,sClass){
    var reg=new RegExp('\\b'+sClass+'\\b');
    return reg.test(obj.className);
};

UI.public.addClass=function (obj,sClass){
    if(obj.className){
        if(!UI.public.hasClass(obj,sClass)){
            obj.className+=' '+sClass;
        }
    }else{
        obj.className=sClass;
    }
};

UI.public.removeClass=function (obj,sClass){
    var reg=new RegExp('\\b'+sClass+'\\b','g');
    if(UI.public.hasClass(obj,sClass)){
        obj.className=obj.className.replace(reg,'').replace(/^\s+|\s+$/g,'').replace(/\s+/g,' ');
    }
};


UI.public.createList=function (data){
	var oBox=document.getElementById('portfoliolist');
	// 创建portfolio
	
	for (var i=0; i<data.length; i++)
	{
		var aDiv=document.createElement('div');
		aDiv.className='portfolio';
		aDiv.setAttribute('data-cat',data[i]['data-cat']);
		aDiv.innerHTML='<div class="portfolio-wrapper">\
							<div class="fancyDemo">\
								<a rel="group" href="'+data[i].url+'" target="_blank"><img src="images/'+data[i].img+'" alt=""  class="img-responsive"/></a>\
							</div>\
							<div class="label">\
								<div class="label-text">\
									<span class="text-category">'+data[i].name+'</span>\
								</div>\
								<div class="label-bg"></div>\
							</div>\
						</div>';
		oBox.appendChild(aDiv);
	}
	var aItem=UI.public.getByClass(oBox,'portfolio');
	for (var i=0; i<aItem.length; i++)
	{
		aItem[i].onmouseover=function (){
			move(UI.public.getByClass(this,'label')[0],{'bottom':0},1000);				
		};
		aItem[i].onmouseout=function (){
			move(UI.public.getByClass(this,'label')[0],{'bottom':-40},1000);				
		};
	}	
};

UI.public.tab=function(){
	var oFilterList=document.getElementById('filters');
	var oBox=document.getElementById('portfoliolist');
	var aBtn=oFilterList.getElementsByTagName('span');
	var listChild=oBox.children;
	for (var i=0; i<aBtn.length; i++)
	{
		aBtn[i].index=i;
		addEvent(aBtn[i],'click',function(){
			for (var j=0; j<aBtn.length; j++)
			{
				UI.public.removeClass(aBtn[j],'active')
			}
			UI.public.addClass(this,'active');
			for (var k=0; k<listChild.length; k++)
			{
				listChild[k].style.display='none';
				if(listChild[k].getAttribute('data-cat')==this.innerHTML || this.innerHTML=='全部(All)')
				{	
					listChild[k].style.display='block';
				}
			}
			
		});
		addEvent(aBtn[i],'mousedown',function(){return false;});
		
	}
};

// domReady
function domReady(fn)
{
	if(document.addEventListener)
	{
		document.addEventListener('DOMContentLoaded',fn,false);
	}else{
		document.onreadystatechange=function(){
			if(document.readyState=='complete' || document.readyState=='loaded')
			{
				fn && fn();
			}
		};
	}
};

// 事件绑定
function addEvent(obj,sEv,fn){
    if(obj.addEventListener){
        obj.addEventListener(sEv,function(ev){
            var oEvent=ev || event;
            if(fn.call(obj,oEvent)==false){
                oEvent.preventDefault();
                oEvent.cancelBubble=true;
            }
        },false);
    }else{
        obj.attachEvent('on'+sEv,function(ev){
            var oEvent=ev || event;
            if(fn.call(obj,oEvent)==false){
                oEvent.cancelBubble=true;
                return false;
            }
        });
    }
}


