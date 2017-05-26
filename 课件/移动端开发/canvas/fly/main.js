document.addEventListener("touchstart", function (e){

	var touches = event.touches[0];
	var x = touches.clientX;
	var y = touches.clientY;

	var disX = x - herofly.x;
	var disY = y - herofly.y;

	if (x>herofly.x&&x<herofly.x+herofly.w&&y>herofly.y&&y<herofly.y+herofly.h){
		document.addEventListener("touchmove", function (e){

			var touches = event.touches[0];
			var endX = touches.clientX-disX;
			var endY = touches.clientY-disY;
			herofly.x = endX;
			herofly.y = endY;

			e.stopPropagation();
		}, false)
	}
	e.stopPropagation();
}, false)


function animate(){

	ctx.clearRect(0,0,windowWidth,windowHeight);

	frame++;
	//每隔10帧创建一个子弹
	if (frame % 10 == 0){
		var bullteObj = new Bullte();
		bulltes.push(bullteObj);
	}

	//绘制子弹并移动
	for (var i=0; i<bulltes.length; i++){

		bulltes[i].draw();
		var bol = bulltes[i].move();
		if (bol){
			i--;
		}
	}

	document.title = bulltes.length;

	//绘制herofly
	herofly.draw();

	if (frame>10000){
		frame = 0;
	}
	window.requestAnimationFrame(animate);
}
animate();