/**
 *  Author:agosto
 *  Date: 2016/1/21
 */
function LimitDrag(id){
    Drag.apply(this,arguments);
}
LimitDrag.prototype=new Drag();
LimitDrag.prototype.constructor=LimitDrag;

var oldMove=LimitDrag.prototype.fnMove;

LimitDrag.prototype.fnMove=function(oEvent){
    oldMove.apply(this,arguments);

    if(this.oDiv.offsetLeft<=0){
        this.oDiv.style.left=0;
    }
};















