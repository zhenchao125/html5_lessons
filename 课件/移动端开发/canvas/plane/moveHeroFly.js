	document.addEventListener("touchstart", function (ele){
	//得到初始手指的宽高
	var initPoint = ele.touches[0];
	var initX = initPoint.clientX;
	var initY = initPoint.clientY;
	//得到变量(目的是获得飞机随手指点到的位置移动，而不是飞机的原始坐标)
	var variateX = initX - herofly.heroFlyX;
	var variateY = initY - herofly.heroFlyY;
	console.log(variateX);
	

	//移动
	if (initX>herofly.heroFlyX&&initX<herofly.heroFlyX+herofly.heroFlyW&&initY>herofly.heroFlyY&&initY<herofly.heroFlyY+herofly.heroFlyH){
		document.addEventListener("touchmove", function (e){
			var newPoint = e.touches[0];
			var newX = newPoint.clientX - variateX;
			var newY = newPoint.clientY - variateY;
			//飞机得到新的坐标
			herofly.heroFlyX = newX;
			herofly.heroFlyY = newY;
			
			ctx.drawImage(herofly.heroFlyImg, herofly.heroFlyImgX, 0, herofly.heroFlyW, herofly.heroFlyH, herofly.heroFlyX, herofly.heroFlyY, herofly.heroFlyW, herofly.heroFlyH);
//			e.stopPropagation();
		}, false)
//		ele.stopPropagation();
	}		
}, false)