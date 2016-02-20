(function (global){
	var addLink=false;
	global.select=function (obj)
	{
		if (! addLink)
		{
			addLink=true;
			var oLink=document.createElement('link');
			oLink.href='../css/select.css';
			oLink.rel='stylesheet';
			var oHead=document.getElementsByTagName('head')[0];
			oHead.appendChild(oLink);
		}

		var oDiv=document.createElement('div');
		oDiv.id='j_select';
		obj.parentNode.insertBefore(oDiv,obj);

		var oSpan=document.createElement('span');
		oSpan.innerHTML=obj.options[obj.selectedIndex].text;
		oDiv.appendChild(oSpan);

		var oUl=document.createElement('ul');
		oDiv.appendChild(oUl);

		for (var i=0; i<obj.options.length; i++)
		{
			var oLi=document.createElement('li');
			oLi.innerHTML=obj.options[i].text;
			oUl.appendChild(oLi);
			
		}

		oSpan.onclick=function (ev){
			var oEvent=ev || event;
			oUl.style.display='block';
			oEvent.cancelBubble=true;
		};

		var aLi=oUl.children;
		for (var i=0; i<aLi.length; i++)
		{
			(function (index){
				aLi[i].onclick=function (){
					oSpan.innerHTML=this.innerHTML;
					obj.selectedIndex=index;
				};
			})(i);
		}
		document.onclick=function (){
			oUl.style.display='none';
		};
	}
})(window);