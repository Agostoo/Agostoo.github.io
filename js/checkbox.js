/**
 *  Author:agosto
 *  Date: 2015/12/18
 */
(function (global){
	var addLink=false;
	global.checkbox=function (aInp){
		if (!addLink)
		{ 
			addLink=true;
			var oLink=document.createElement('link');
			oLink.href='css/checkbox.css';
			oLink.rel='stylesheet';
			var oHead=document.getElementsByTagName('head')[0];
			oHead.appendChild(oLink);
		}
		var aSpan=[];
		for (var i=0; i<aInp.length; i++)
		{
			var oSpan=document.createElement('span');
			oSpan.innerHTML=aInp[i].getAttribute('data-tit');
			aInp[i].parentNode.insertBefore(oSpan,aInp[i]);
			aSpan.push(oSpan);
		}
		for (var i=0; i<aSpan.length; i++)
		{
			(function(index){
				aSpan[i].onclick=function (){
					if (this.className=='active')
					{
						this.className='';
						aInp[index].checked=false;
					}
					else
					{
						aSpan[index].className='active';
						aInp[index].checked=true;
					}
				};
			})(i);		
		}
	};
})(window);