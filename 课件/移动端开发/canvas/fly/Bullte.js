//子弹的构造函数
function Bullte(){

	this.w = 4;
	this.h = 10;
	this.x = herofly.x+herofly.w/2-2;
	this.y = herofly.y;
	this.color = "red";
}
//子弹移动的方法
Bullte.prototype.move = function() {
	
	this.y -= 4;
	//自毁
	//当在canvas中看不到它的时候就干掉自己
	if (this.y < -this.h){
		bulltes.splice(bulltes.indexOf(this),1);
		return true;
	}else{
		return false;
	}
};
//绘制子弹的方法
Bullte.prototype.draw = function (){

	ctx.fillStyle = this.color;
	ctx.fillRect(this.x,this.y,this.w,this.h);
}