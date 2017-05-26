# canvas2

## 图形的组合方式

| source-in        | 只保留当前图重叠的部分      |
| ---------------- | ---------------- |
| source-out       | 绘制不重叠部分          |
| destination-over | 原图覆盖新图           |
| destination-in   | 绘制原图和新图重叠部分      |
| destination-out  | 绘制原图和新图不重叠部分     |
| destination-atop | 绘制原图和新图重叠部分以及新图  |
| lighter          | 绘制新图和原图,重叠部分加色处理 |
| copy             | 绘制新图,覆盖原图        |

设置组合方式：

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
	#canvas1{
		border:1px solid red;
	}
	</style>
</head>
<body>
	<canvas id="canvas1" width="500" height="500"></canvas>
</body>
<script type="text/javascript">
	var canvas = document.getElementById("canvas1");
	var ctx = canvas.getContext("2d");

	ctx.fillStyle = "red";
	ctx.beginPath();
	ctx.arc(150, 150, 100, 0, Math.PI*2, true);
	ctx.closePath();
	ctx.fill();
	
	ctx.globalCompositeOperation = "source-in";

	ctx.fillStyle = "green";
	ctx.beginPath();
	ctx.arc(250,150, 100, 0, Math.PI*2, true);
	ctx.closePath();
	ctx.fill();

</script>
</html>
```

## 图片的处理

绘制图片的方法：

| drawImage(image,x,y)                     | 在canvas中(x,y)处绘制图片                       |
| ---------------------------------------- | ---------------------------------------- |
| drawImage(image,x,y,width,height)        | 在canvas中(x,y)处绘制图片，并将其缩放到指定的宽度和高度        |
| drawImage(image,sourceX,sourceY,sourceWidth,sourceHeight,x,y,width,height) | 从图片中切割出一个矩形区域(sourceX,sourceY,sourceWidth,sourceHeight)，缩放到指定的宽度和高度，并在canvas中(x,y)绘制出来。 |

图片的载入：

```javascript
var imgObj = new Image();
imgObj.src = "2.jpg";
imgObj.onload = function (){

  ctx.drawImage(this, 50, 50, 300,200);
}
```

图片的裁剪：

```javascript
var imgObj = new Image();
imgObj.src = "2.jpg";
imgObj.onload = function (){

  // ctx.drawImage(this, 50, 50, 300,200);
  ctx.drawImage(this,210,50, 230, 40, 100,50,115,20);
}
```

### 像素处理

- 我们使用getImageData()能够获取指定区域的像素值ImageData
- ImageData中3个属性:width,height和data
- width和height表示访问像素区域大小
- data是一个包含访问区域所有像素信息的CanvasPixeArray
- CanvasPixeArray是一个一维数组
- 每一个像素用4个整数(r,g,b,a)值表示,范围0~255

像素的操作方法：

| getImageData(x,y,width,height) | 获取像素,(x,y)像素区域原点坐标(width,height)像素区域的宽度和高度 |
| ------------------------------ | ---------------------------------------- |
| putImageData()                 | 插入像素                                     |

### 灰度处理

```javascript
var imgObj = new Image();
imgObj.src = "2.jpg";
imgObj.onload = function (){

  ctx.drawImage(this, 0,0);

  //获取像素
  var imageData = ctx.getImageData(210,50, 230, 40);
  // console.log(imageData);
  var pixels = imageData.data;

  //遍历像素点
  for (var i=0; i<pixels.length; i+=4){

    var r = pixels[i];
    var g = pixels[i+1];
    var b = pixels[i+2];

    //获取灰色
    var gray = parseInt((r+g+b)/3);

    pixels[i] = gray;
    pixels[i+1] = gray;
    pixels[i+2] = gray;
  }

  ctx.putImageData(imageData, 210,50);
}
```

### 反色处理

```javascript
var imgObj = new Image();
imgObj.src = "2.jpg";
imgObj.onload = function (){

  ctx.drawImage(this, 0,0);

  //获取像素
  var imageData = ctx.getImageData(0,0, canvas.width, canvas.height);
  // console.log(imageData);
  var pixels = imageData.data;

  //遍历像素点
  for (var i=0; i<pixels.length; i+=4){

    pixels[i] = 255-pixels[i];
    pixels[i+1] = 255-pixels[i+1];
    pixels[i+2] = 255-pixels[i+2];
  }

  ctx.putImageData(imageData, 0,0);
}
```

## 视频处理

### requestAnimationFrame-帧动画

使用`setTimeout`实现动画

```javascript
var x = 0;

function animate(){
  //清除画布内容
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  x += 2;
  ctx.fillStyle = "red";
  ctx.fillRect(x, 0, 50, 50);
  if (x > 200){
    return;
  }
  setTimeout(animate,30);
}
animate();
```

使用`requestAnimationFrame`实现动画

```javascript
var x = 0;

var oldDate = new Date();
var num = 0;

function animate(){
  num++;
  //清除画布内容
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var newDate = new Date();
  var time = newDate.getTime()-oldDate.getTime();
  var frame = parseInt(1000/time);
  if (num%20==0){
    console.log(frame);
  }
  if (num > 10000){
    num = 0;
  }
  oldDate = newDate;
  window.requestAnimationFrame(animate);
}
animate();
```

### canvas中播放视频

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
	#canvas1{
		border:1px solid red;
	}
	</style>
</head>
<body>
	<video id="video1" src="cn.mp4" style="width:300px;" autoplay></video>
	<canvas id="canvas1" width="500" height="500"></canvas>
</body>
<script type="text/javascript">
	var video1 = document.getElementById("video1");
	var canvas = document.getElementById("canvas1");
	var ctx = canvas.getContext("2d");
	// var num = 0;

	function animate(){
		// num++;
		
		ctx.drawImage(video1, 0, 0, canvas.width,canvas.height);

		window.requestAnimationFrame(animate);
	}
	animate();

</script>
</html>
```

### 灰度视频

```javascript
function animate(){
  // num++;

  ctx.drawImage(video1, 0, 0, canvas.width,canvas.height);
  //获取像素
  var imageData = ctx.getImageData(0,0, canvas.width, canvas.height);
  // console.log(imageData);
  var pixels = imageData.data;

  //遍历像素点
  for (var i=0; i<pixels.length; i+=4){

    var r = pixels[i];
    var g = pixels[i+1];
    var b = pixels[i+2];

    //获取灰色
    var gray = parseInt((r+g+b)/3);

    pixels[i] = gray;
    pixels[i+1] = gray;
    pixels[i+2] = gray;
  }

  ctx.putImageData(imageData, 0,0);

  window.requestAnimationFrame(animate);
}
animate();
```

## ps：图形的输出

```javascript
var url = canvas.toDataURL();
window.location.href=url;
```

作业：

1.刮刮卡-图形组合方式

2.房产证-图形的输出

3.飞机大战