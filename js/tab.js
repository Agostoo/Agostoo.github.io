/**
 *  Author:agosto
 *  Date: 2016/1/21
 */
function Tab(id){
    if(!id)return;
    this.oBox=document.getElementById(id);
    this.aBtn=this.oBox.getElementsByTagName('input');
    this.aDiv=this.oBox.getElementsByTagName('div');

    this.iNow=0;
    this.init();
}
Tab.prototype.init=function(){
    var _this=this;
    for(var i=0; i<this.aBtn.length; i++){
        (function(index){
            _this.aBtn[i].onclick=function(){
                _this.iNow=index;
                _this.tab();
            };
        })(i);
    }
};
Tab.prototype.tab=function(){
    this.clear();
    this.show();
};
Tab.prototype.clear=function(){
    for(var i=0; i<this.aBtn.length; i++){
        this.aBtn[i].className='';
        this.aDiv[i].style.display='none';
    }
};
Tab.prototype.show=function(){
    this.aBtn[this.iNow].className='on';
    this.aDiv[this.iNow].style.display='block';
};
function AutoTab(id){
Tab.apply(this,arguments);

var _this=this;
this.timer=null;

this.timer=setInterval(function(){
    _this.next();
},1000);

this.oBox.onmouseover=function(){
    clearInterval(_this.timer);
};

this.oBox.onmouseout=function(){
    _this.timer=setInterval(function(){
        _this.next();
    },1000);
};
}
AutoTab.prototype=new Tab();  //继承方法

AutoTab.prototype.next=function(){
this.iNow++;
if(this.iNow==this.aBtn.length)this.iNow=0;
this.tab();
};