/**
 *  Author:agosto
 *  Date: 2016/1/21
 */
function FrameDrag(id){
    Drag.apply(this,arguments);

    this.borderWidth=7;
}
FrameDrag.prototype=new Drag();
FrameDrag.prototype.constructor=FrameDrag;

var parent={};
for(var name in FrameDrag.prototype){
    parent[name]=FrameDrag.prototype[name];
}

//parent.fnDown  parent.fnMove parent.fnUp
FrameDrag.prototype.fnDown=function(){
    parent.fnDown.apply(this,arguments);

    //创建一个框
    this.oNewDiv=document.createElement('div');
    this.oNewDiv.style.width=this.oDiv.offsetWidth-2*this.borderWidth+'px';
    this.oNewDiv.style.height=this.oDiv.offsetHeight-2*this.borderWidth+'px';
    this.oNewDiv.style.left=this.oDiv.offsetLeft+'px';
    this.oNewDiv.style.top=this.oDiv.offsetTop+'px';
    this.oNewDiv.style.position='absolute';
    this.oNewDiv.style.border=this.borderWidth+'px dashed #FF7253'

    this.oDiv.parentNode.appendChild(this.oNewDiv);

    //换
    this.oldDiv=this.oDiv;

    this.oDiv=this.oNewDiv;
};
FrameDrag.prototype.fnUp=function(){
    parent.fnUp.apply(this,arguments);

    this.oldDiv.style.left=this.oDiv.style.left;
    this.oldDiv.style.top=this.oDiv.style.top;

    this.oldDiv.parentNode.removeChild(this.oDiv);

    this.oDiv=this.oldDiv;
};















