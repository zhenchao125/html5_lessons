var herofly = {
	w:40,
	h:40,
	x:windowWidth/2-20,
	y:windowHeight-60,
	color:"green"
}
//绘制herofly方法
herofly.draw = function (){
	ctx.fillStyle = this.color;
	ctx.fillRect(this.x,this.y,this.w,this.h);
}