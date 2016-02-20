var data=[
	{
		'name':'Drag',
		'url':'dragtest.html',
		'img':'s1.jpg'
	},
	{
		'name':'FrameDrag',
		'url':'dragtest.html',
		'img':'s1.jpg'
	},
	{
		'name':'LimitDrag',
		'url':'dragtest.html',
		'img':'s1.jpg'
	},
	{
		'name':'Datepicker',
		'url':'datepicker.html',
		'img':'s1.jpg'
	},
	{
		'name':'Radio',
		'url':'radio.html',
		'img':'s1.jpg'
	},
	{
		'name':'Checkbox',
		'url':'checkbox.html',
		'img':'s1.jpg'
	},
	{
		'name':'Select',
		'url':'select.html',
		'img':'s1.jpg'
	},
	{
		'name':'Tab',
		'url':'tabtest.html',
		'img':'s1.jpg'
	},
	{
		'name':'AutoTab',
		'url':'tabtest.html',
		'img':'s1.jpg'
	}
];
function getByClass(obj,sClass){
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
}

function hasClass(obj,sClass){
    var reg=new RegExp('\\b'+sClass+'\\b');
    return reg.test(obj.className);
}

function addClass(obj,sClass){
    if(obj.className){
        if(!hasClass(obj,sClass)){
            obj.className+=' '+sClass;
        }
    }else{
        obj.className=sClass;
    }
}

function removeClass(obj,sClass){
    var reg=new RegExp('\\b'+sClass+'\\b','g');
    if(hasClass(obj,sClass)){
        obj.className=obj.className.replace(reg,'').replace(/^\s+|\s+$/g,'').replace(/\s+/g,' ');
    }
}

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
}


domReady(function(){
	var oBox=document.getElementById('portfoliolist');
	// 创建portfolio
	
	for (var i=0; i<data.length; i++)
	{
		var aDiv=document.createElement('div');
		aDiv.className='portfolio';
		aDiv.innerHTML='<div class="portfolio-wrapper">\
							<div class="fancyDemo">\
								<a rel="group" href="'+data[i].url+'"><img src="images/'+data[i].img+'" alt=""  class="img-responsive"/></a>\
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

	var oFilterList=document.getElementById('filters');
	var aBtn=oFilterList.getElementsByTagName('span');
	for (var i=0; i<aBtn.length; i++)
	{
		
		aBtn[i].onclick=function(){
			for (var j=0; j<aBtn.length; j++)
			{
				aBtn[j].className='filter';
			}
			this.className='active';
		};
	}

	var aItem=getByClass(oBox,'portfolio');
	for (var i=0; i<aItem.length; i++)
	{
		aItem[i].onmouseover=function (){
			move(getByClass(this,'label')[0],{'bottom':0},1000);				
		};
		aItem[i].onmouseout=function (){
			move(getByClass(this,'label')[0],{'bottom':-40},1000);				
		};
	}
});