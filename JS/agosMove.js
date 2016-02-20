function move(obj,json,time,fn)
	{
		var start={};
		var dis={};
		for (var name in json)
		{
			start[name]=parseFloat(getStyle(obj,name));
			dis[name]=json[name]-start[name];
		}

		var n=0;
		var count=Math.floor(time/30);
		clearInterval(obj.timer);//自定义属性里可以存任何东西  每个obj有一个自己的timer
		obj.timer=setInterval(function (){
			n++;
			for (var name in json)
			{
				if (name=='opacity')
				{
					obj.style[name]=start[name]+dis[name]*n/count;
				}
				else
				{
					obj.style[name]=start[name]+dis[name]*n/count+'px';
				}	
			}
					
			if (n==count)
			{
				clearInterval(obj.timer);
				fn && fn();
			}
		},30);
	}
	function getStyle(obj,sName)
	{
		return (obj.currentStyle || getComputedStyle(obj,false))[sName];
	}