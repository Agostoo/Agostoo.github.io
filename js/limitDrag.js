/**
 *  Author:agosto
 *  Date: 2016/1/10
 */
function LimitDrag(id){
    Drag.apply(this,arguments);
}
LimitDrag.prototype=new Drag();
LimitDrag.prototype.constructor=LimitDrag;

var oldMove=LimitDrag.prototype.fnMove;

LimitDrag.prototype.fnMove=function(oEvent){
    oldMove.apply(this,arguments);
    var nMaxLeft=document.documentElement.clientWidth-this.oDiv.offsetWidth;
    var nMaxTop=document.documentElement.clientHeight-this.oDiv.offsetHeight;
    var left=this.oDiv.offsetLeft;
    var top=this.oDiv.offsetTop;
    if (left <= 0)
    {
        left=0;
    }
    else if (left > nMaxLeft)
    {
        left=nMaxLeft;
    }

    if (top < 0)
    {
        top=0;
    }
    else if (top > nMaxTop)
    {
        top=nMaxTop;
    }
    this.oDiv.style.left=left+'px';
    this.oDiv.style.top=top+'px';
};















