# canvas

## canvas是什么

•是HTML5中重要的元素,和audio、video元素类似完全不需要任何外部插件就能够运行.

•Canvas中文翻译就是”画布”.它提供了强大的图形的处理功能(绘制,变换,像素处理…)

## canvas能干什么

•基础图形的绘制

•文字的绘制

•图形的变形和图片的合成

•图片和视频的处理

•动画的实现

•小游戏的制作

## 支持情况

•大多数现代浏览器都是支持Canvas的,比如 Firefox, safari, chrome, opera的最近版本以及IE9都支持.

• IE8及以下不支持HTML5,但是我们可以进行提示用户更新到最新的版本

```html
<canvas id="myCanvas" width="500" height="400">
			<p>您的浏览器太垃圾了，连canvas都不支持，赶紧下载最新浏览器或者谷歌</p>
		</canvas>
```

## 基本图形绘制

| beginPath() | 开始绘制                      |
| ----------- | ------------------------- |
| moveTo(x,y) | 设置绘制起点                    |
| lineTo(x,y) | 设置下一个点                    |
| closePath() | 结束绘制,会从当前点回到结束点,形成一个封闭的图形 |
| strokeStyle | 设置绘制的样式                   |
| stroke()    | 绘制点之间的路线                  |
| fillStyle   | 设置填充样式                    |
| fill()      | 填充当前绘图                    |
| lineWidth   | 线宽                        |

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			#myCanvas{
				/*border: 1px solid red;*/
				box-shadow: 2px 2px 10px #999;
			}
		</style>
	</head>
	<body>
		<canvas id="myCanvas" width="500" height="400">
			<p>您的浏览器太垃圾了，连canvas都不支持，赶紧下载最新浏览器或者谷歌</p>
		</canvas>
	</body>
	<script type="text/javascript">
		var canvas = document.getElementById("myCanvas");
		var context = canvas.getContext("2d");
		
		context.beginPath();
		context.moveTo(50,50);
		context.lineTo(150,150);
		context.lineTo(250,50);
		context.closePath();
		context.lineWidth=5;
		context.strokeStyle="red"
		context.stroke();
		context.fillStyle="green";
		context.fill();//填充
	</script>	
</html>

```

练习：canvas3-练习.html

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			#myCanvas{
				/*border: 1px solid red;*/
				box-shadow: 2px 2px 10px #999;
			}
		</style>
	</head>
	<body>
		<canvas id="myCanvas" width="500" height="400">
			<p>您的浏览器太垃圾了，连canvas都不支持，赶紧下载最新浏览器或者谷歌</p>
		</canvas>
	</body>
	<script type="text/javascript">
		var canvas = document.getElementById("myCanvas");
		var context = canvas.getContext("2d");
		var colorArr = ["red","blue","yellow","#ccc"];
		
		for (var i=0; i<colorArr.length; i++){
			context.beginPath();
			var x = 20+20*i;
			var y = 40+20*i;
			context.moveTo(x,y);
			context.lineTo(x+200,y);
			context.lineTo(x+200,y+100);
			context.lineTo(x,y+100);
			context.closePath();
			context.stroke();
			context.fillStyle = colorArr[i];
			context.fill();
		}
		
		
//		context.moveTo(50,50);
//		context.lineTo(150,150);
//		context.lineTo(250,50);
//		context.lineWidth=20;
//		context.lineCap = "round";
//		context.strokeStyle="red";
//		context.stroke();
	</script>	
</html>
```

### 矩形

| strokeRect(x,y,w,h) | 绘制矩形边框 |
| ------------------- | ------ |
| fillRect(x,y,w,h)   | 填充矩形边框 |

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			#myCanvas{
				/*border: 1px solid red;*/
				box-shadow: 2px 2px 10px #999;
			}
		</style>
	</head>
	<body>
		<canvas id="myCanvas" width="500" height="400">
			<p>您的浏览器太垃圾了，连canvas都不支持，赶紧下载最新浏览器或者谷歌</p>
		</canvas>
	</body>
	<script type="text/javascript">
		var canvas = document.getElementById("myCanvas");
		var context = canvas.getContext("2d");
		var colorArr = ["red","blue","yellow","#ccc"];
		
		for (var i=0; i<colorArr.length; i++){
			context.strokeStyle = colorArr[i];
			context.lineWidth = 10;
			context.strokeRect(20*i+20,20*i+20,200,100);
		}
		
	</script>
</html>

```

### 绘制圆形

context.arc(x,y,radius,starAngle,endAngel,anticlockwise);

```javascript
var deg = Math.PI/180;
		context.beginPath();
		context.arc(150,150,100,0,180*deg,false);
		context.strokeStyle="green";
		context.lineWidth=5;
		context.stroke();
		context.fillStyle = "red";
		context.fill();
```

### 绘制文字

| strokeText() | 绘制文字 |
| ------------ | ---- |
| fillText();  | 填充文字 |
| font         | 字体样式 |

```javascript
context.font = "100px 黑体";
		context.strokeText("育知",150,150);
```

案例2：

```javascript
context.font = "100px 黑体";
		context.fillStyle = "red";
		context.fillText("唐菜也",150,150);
```

## 阴影设置

| shadowColor   | 阴影颜色                      |
| ------------- | ------------------------- |
| shadowOffsetX | X方向偏移量                    |
| shadowOffsetY | Y方向偏移量                    |
| closePath()   | 结束绘制,会从当前点回到结束点,形成一个封闭的图形 |
| shadowBlur    | 设置阴影的模糊级别                 |

```javascript
context.shadowOffsetX = 10;
		context.shadowOffsetY = 10;
		
		context.shadowColor = "red";
		context.shadowBlur = 40;
		
		context.fillRect(50,50,200,100);
```

## 图形变换

### 平移

```javascript
context.translate(50,50);
		context.fillRect(0,0,200,100);
		context.fillRect(50,50,200,100);
```

### 旋转

```javascript
context.fillRect(0,0,100,100);
		var deg = Math.PI/180;
		context.rotate(45*deg);
		context.fillRect(150,0,100,100);
```

### 缩放

```javascript
context.scale(2,1.4);	context.fillRect(50,50,100,100);
```

## 状态的保存和读取

绘制表盘

1：

```java
context.translate(250,250);
		var deg = Math.PI/180;
		context.rotate(-90*deg);
		context.beginPath();
		context.moveTo(200,0);
		context.lineTo(240,0);
		context.lineWidth=10;
		context.lineCap = "round";
		context.stroke();
```

2.

```javascript
context.save();
		
		context.translate(250,250);
		var deg = Math.PI/180;
		context.rotate(-90*deg);
		
		context.save();
		
		for (var i=0; i<12; i++){
			context.restore();
			context.save();
			context.rotate(30*i*deg);
			context.beginPath();
			context.moveTo(200,0);
			context.lineTo(240,0);
			context.lineWidth=10;
			context.lineCap = "round";
			context.stroke();
		}
```

## 贝塞尔曲线

### 二次贝塞尔曲线

•quadraticCurveTo(cpx,cpy,dx,dy);创建一条表示二次贝瑟尔曲线的路径.

•该函数接受四个参数,分别代表两个点.

•(cpx,cpy)代表控制点,决定曲线的形状

•(dx,dy)代表锚点.绘制的曲线会将最后一个点与锚点连接起来

```javascript
		context.beginPath();
		context.moveTo(0,500);
		context.quadraticCurveTo(0,0,500,0);
		context.stroke();
```

### 三次贝塞尔曲线

•bezierCurveTo(cpx,cpy,cpx2,cpx2,dx,dy);创建一条表示三次贝瑟尔曲线的路径.

•该函数接受六个参数,分别代表三个点.

•(cpx,cpy),(cpx2,cpx2)代表控制点,决定曲线的形状

•(dx,dy)代表锚点.绘制的曲线会将最后一个点与锚点连接起来

```javascript
		context.beginPath();
		context.moveTo(0,500);
//		context.quadraticCurveTo(0,0,500,0);
		context.bezierCurveTo(0,0,500,500,500,0);
		context.stroke();
```

## canvas动画

### 清除画布

```javascript
		context.fillRect(50,50,100,100);
		context.clearRect(0,0,canvas.width,canvas.height);
```

### 动画

```java
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			#myCanvas{
				/*border: 1px solid red;*/
				box-shadow: 2px 2px 10px #999;
			}
		</style>
	</head>
	<body>
		<canvas id="myCanvas" width="300" height="200">
			<p>您的浏览器太垃圾了，连canvas都不支持，赶紧下载最新浏览器或者谷歌</p>
		</canvas>
	</body>
	<script type="text/javascript">
		var canvas = document.getElementById("myCanvas");
		var context = canvas.getContext("2d");
		
		var x = 0;
		var speedX = 2;
		var y = 0;
		var speedY = 2;
		
		var w = 50;
		var h = 50;
		
		var timer = setInterval(function (){
			x+=speedX;
			if (x>canvas.width-w){
				speedX*=-1;
			}else if(x<0){
				speedX*=-1;
			}
			y+=speedY;
			if (y>canvas.height-h){
				speedY*=-1;
//				alert(speedY);
			}else if(y<0){
				speedY*=-1;
			}
			context.clearRect(0,0,canvas.width,canvas.height);
			context.fillRect(x,y,w,h);
		},30);	
	</script>	
</html>

```

作业：

1.动画版的时钟
2.躁动的小球
3.模拟贝塞尔曲线工具
4.贪吃蛇游戏