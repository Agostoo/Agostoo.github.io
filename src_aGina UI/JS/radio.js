(function (global){
	var addLink=false;
	global.radio=function (aInp)
	{
		if (!addLink)
		{
			addLink=true;
			var oLink=document.createElement('link');
			oLink.href='../css/radio.css';
			oLink.rel='stylesheet';
			var oHead=document.getElementsByTagName('head')[0];
			oHead.appendChild(oLink);
		}
		

		var aSpan=[];
		for (var i=0; i<aInp.length; i++)
		{
			var oSpan=document.createElement('span');
			oSpan.innerHTML=aInp[i].getAttribute('data-tit');
			aSpan.push(oSpan);
			aInp[i].parentNode.insertBefore(oSpan,aInp[i]);

			if (aInp[i].checked)
			{
				aSpan[i].className='active';
			}
		}
		for (var i=0; i<aSpan.length; i++)
		{
			(function (index){
				aSpan[i].onclick=function (){
					for (var i=0; i<aSpan.length; i++)
					{
						aSpan[i].className='';
					}
					aSpan[index].className='active';
					aInp[index].checked=true;
				};
			})(i);	
		}
	}
 
})(window);

