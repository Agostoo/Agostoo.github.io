/**
 *  Author:agosto
 *  Date: 2016/1/21
 */
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