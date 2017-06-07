# 移动端_Day08-canvas

# 一、canvas简介

​	`<canvas>` 是 `HTML5` 新增的，一个可以使用脚本(通常为`JavaScript`)在其中绘制图像的 `HTML` 元素。它可以用来制作照片集或者制作简单(也不是那么简单)的动画，甚至可以进行实时视频处理和渲染。

​	它最初由苹果内部使用自己`MacOS X WebKit`推出，供应用程序使用像仪表盘的构件和 `Safari` 浏览器使用。	后来，有人通过`Gecko`内核的浏览器 (尤其是`Mozilla`和`Firefox`)，`Opera`和`Chrome`和超文本网络应用技术工作组建议为下一代的网络技术使用该元素。

​	`Canvas`是由`HTML`代码配合高度和宽度属性而定义出的可绘制区域。`JavaScript`代码可以访问该区域，类似于其他通用的二维`API`，通过一套完整的绘图函数来动态生成图形。

​	Mozilla 程序从 Gecko 1.8 (Firefox 1.5)开始支持 `<canvas>`, Internet Explorer 从IE9开始`<canvas>` 。Chrome和Opera 9+ 也支持 `<canvas>`。

# 二、Canvas基本使用

## 2.1	`<canvas>`元素

```html
<canvas id="tutorial" width="300" height="300"></canvas>
```

​	`<canvas>`看起来和`<img>`标签一样，只是 `<canvas>` 只有两个可选的属性 `width、heigth` 属性，而没有 `src、alt` 属性。

​	如果不给`<canvas>`设置`widht、height`属性时，则默认 `width`为300、`height`为150,单位都是`px`。也可以使用`css`属性来设置宽高，但是如宽高属性和初始比例不一致，他会出现扭曲。所以，建议永远不要使用`css`属性来设置`<canvas>`的宽高。

###替换内容

​	由于某些较老的浏览器（尤其是IE9之前的IE浏览器）或者浏览器不支持HTML元素"canvas"，在这些浏览器上你应该总是能展示替代内容。

​	支持`<canvas>`的浏览器会只渲染`<canvas>`标签，而忽略其中的替代内容。不支持 `<canvas>` 的浏览器则 会直接渲染替代内容。

> 用文本替换：

```html
<canvas>
    你的浏览器不支持canvas,请升级你的浏览器
</canvas>
```

> 用 `<img>` 替换：

```html
<canvas>
    <img src="./美女.jpg" alt=""> 
</canvas>
```

### `</canvas>`不可省

与 `<img>`元素不同，`<canvas>`元素**需要**结束标签(`</canvas>`)。如果结束标签不存在，则文档的其余部分会被认为是替代内容，将不会显示出来。

## 2.2	渲染上下文(Thre Rending Context)

​	`<canvas>`会创建一个固定大小的画布，会公开一个或多个 **渲染上下文**(画笔)，使用 **渲染上下文**来绘制和处理要展示的内容。

​	我们重点研究 2D渲染上下文。  其他的上下文我们暂不研究，比如， WebGL使用了基于OpenGL ES的3D上下文 ("experimental-webgl") 。

```javascript
var canvas = document.getElementById('tutorial');
//获得 2d 上下文对象
var ctx = canvas.getContext('2d');
```

## 2.3	检测支持性

```javascript
var canvas = document.getElementById('tutorial');

if (canvas.getContext){
  var ctx = canvas.getContext('2d');
  // drawing code here
} else {
  // canvas-unsupported code here
}
```

## 2.4	代码模板

```html
<html>
<head>
    <title>Canvas tutorial</title>
    <style type="text/css">
        canvas {
            border: 1px solid black;
        }
    </style>
</head>
<canvas id="tutorial" width="300" height="300"></canvas>
</body>
<script type="text/javascript">
    function draw(){
        var canvas = document.getElementById('tutorial');
        if(!canvas.getContext) return;
      	var ctx = canvas.getContext("2d");
      	//开始代码
        
    }
    draw();
</script>
</html>
```

## 2.5	一个简单的例子

> 绘制两个长方形。

```html
<html>
<head>
    <title>Canvas tutorial</title>
    <style type="text/css">
        canvas {
            border: 1px solid black;
        }
    </style>
</head>
<canvas id="tutorial" width="300" height="300"></canvas>
</body>
<script type="text/javascript">
    function draw(){
        var canvas = document.getElementById('tutorial');
        if(!canvas.getContext) return;
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "rgb(200,0,0)";
      	//绘制矩形
        ctx.fillRect (10, 10, 55, 50);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect (30, 30, 55, 50);
    }
    draw();
</script>
</html>
```

# 三、绘制形状

## 3.1	栅格`(grid)`和坐标空间

​	如下图所示，`canvas`元素默认被网格所覆盖。通常来说网格中的一个单元相当于`canvas`元素中的一像素。栅格的起点为左上角（坐标为（0,0））。所有元素的位置都相对于原点来定位。所以图中蓝色方形左上角的坐标为距离左边（X轴）x像素，距离上边（Y轴）y像素（坐标为（x,y））。

​	后面我们会涉及到坐标原点的平移、网格的旋转以及缩放等。

 ![](https://mdn.mozillademos.org/files/224/Canvas_default_grid.png)

## 3.2	绘制矩形

​	`<canvas>` 只支持一种原生的 图形绘制：矩形。所有其他图形都至少需要生成一种路径(`path`)。不过，我们拥有众多路径生成的方法让复杂图形的绘制成为了可能。

>`canvas`t 提供了三种方法绘制矩形：

1. `fillRect(x, y, width, height)`

   绘制一个填充的矩形

2. `strockRect(x, y, width, height)`

   绘制一个矩形的边框

3. `clearRect(x, y, widh, height)`

   清除指定的矩形区域，然后这块区域会变的完全透明。

说明：

​	这3个方法具有相同的参数。

​	`x, y`：指的是矩形的左上角的坐标。(相对于`canvas`的坐标原点)

​	`width, height`：指的是绘制的矩形的宽和高。

```javascript
function draw(){
    var canvas = document.getElementById('tutorial');
    if(!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    ctx.fillRect(10, 10, 100, 50);  //绘制矩形,填充的默认颜色为黑色
    ctx.strokeRect(10, 70, 100, 50);  //绘制矩形边框
    
}
draw();
```

 ![](http://o7cqr8cfk.bkt.clouddn.com/17-6-4/57498980.jpg)



```javascript
ctx.clearRect(15, 15, 50, 25);
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-6-4/92358331.jpg)

# 四、绘制路径(`path`)

​	图形的基本元素是路径。

​	路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合。

​	一个路径，甚至一个子路径，都是闭合的。

> 使用路径绘制图形需要一些额外的步骤：

1. 创建路径起始点
2. 调用绘制方法去绘制出路径
3. 把路径封闭
4. 一旦路径生成，通过描边或填充路径区域来渲染图形。

> 下面是需要用到的方法：

1. `beginPath()`

   新建一条路径，路径一旦创建成功，图形绘制命令被指向到路径上生成路径

2. `moveTo(x, y)`


   把画笔移动到指定的坐标`(x, y)`。相当于设置路径的起始点坐标。

3. `closePath()`

   闭合路径之后，图形绘制命令又重新指向到上下文中

4. `stroke()`

   通过线条来绘制图形轮廓

5. `fill()`


   通过填充路径的内容区域生成实心的图形

## 4.1 绘制线段

```javascript
function draw(){
    var canvas = document.getElementById('tutorial');
    if (!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    ctx.beginPath(); //新建一条path
    ctx.moveTo(50, 50); //把画笔移动到指定的坐标
    ctx.lineTo(200, 50);  //绘制一条从当前位置到指定坐标(200, 50)的直线.
    //闭合路径。会拉一条从当前点到path起始点的直线。如果当前点与起始点重合，则什么都不做
    ctx.closePath();
    ctx.stroke(); //绘制路径。
}
draw();
```

## 4.2 绘制三角形边框

```javascript
function draw(){
    var canvas = document.getElementById('tutorial');
    if (!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(200, 50);
    ctx.lineTo(200, 200);
  	ctx.closePath(); //虽然我们只绘制了两条线段，但是closePath会closePath，仍然是一个3角形
    ctx.stroke(); //描边。stroke不会自动closePath()
}
draw();
```

 ![](http://o7cqr8cfk.bkt.clouddn.com/17-6-4/20099429.jpg)

## 4.3 填充三角形

```javascript
function draw(){
    var canvas = document.getElementById('tutorial');
    if (!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(200, 50);
    ctx.lineTo(200, 200);
   
    ctx.fill(); //填充闭合区域。如果path没有闭合，则fill()会自动闭合路径。
}
draw();
```

 ![](http://o7cqr8cfk.bkt.clouddn.com/17-6-4/83072674.jpg)

## 4.4 绘制圆弧

> 有两个方法可以绘制圆弧：

1. `arc(x, y, r, startAngle, endAngle, anticlockwise)`:

   以`(x, y)`为圆心，以`r`为半径，从 `startAngle`弧度开始到`endAngle`弧度结束。`anticlosewise`是布尔值，`true`表示逆时针，`false`表示顺时针。(默认是顺时针)

   注意：

   1. 这里的度数都是弧度。
   2. 0弧度是指的`x`轴正方形

   ```javascript
   radians=(Math.PI/180)*degrees   //角度转换成弧度
   ```

2. `arcTo(x1, y1, x2, y2, radius)`:

   根据给定的控制点和半径画一段圆弧，最后再以直线连接两个控制点。

### 圆弧案例1：

```javascript
function draw(){
    var canvas = document.getElementById('tutorial');
    if (!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(50, 50, 40, 0, Math.PI / 2, false);
    ctx.stroke();
}
draw();
```

 ![](http://o7cqr8cfk.bkt.clouddn.com/17-6-4/97210404.jpg)

### 圆弧案例2：

```javascript
function draw(){
    var canvas = document.getElementById('tutorial');
    if (!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(50, 50, 40, 0, Math.PI / 2, false);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(150, 50, 40, 0, -Math.PI / 2, true);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(50, 150, 40, -Math.PI / 2, Math.PI / 2, false);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(150, 150, 40, 0, Math.PI, false);
    ctx.fill();

}
draw();
```

 ![](http://o7cqr8cfk.bkt.clouddn.com/17-6-4/62078705.jpg)

### 圆弧案例3：

```javascript
function draw(){
    var canvas = document.getElementById('tutorial');
    if (!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(50, 50);
  	//参数1、2：控制点1坐标   参数3、4：控制点2坐标  参数4：圆弧半径
    ctx.arcTo(200, 50, 200, 200, 100);
    ctx.lineTo(200, 200)
    ctx.stroke();
    
    ctx.beginPath();
    ctx.rect(50, 50, 10, 10);
    ctx.rect(200, 50, 10, 10)
    ctx.rect(200, 200, 10, 10)
    ctx.fill()
}
draw();
```

 ![](http://o7cqr8cfk.bkt.clouddn.com/17-6-4/95442248.jpg)

`arcTo`方法的说明：

​	这个方法可以这样理解。绘制的弧形是由两条切线所决定。

​	第 1 条切线：起始点和控制点1决定的直线。

​	第 2 条切线：控制点1 和控制点2决定的直线。

​	**其实绘制的圆弧就是与这两条直线相切的圆弧。**

## 4.5 绘制贝塞尔曲线

### 4.5.1 什么是贝塞尔曲线

​	贝塞尔曲线(Bézier curve)，又称贝兹曲线或贝济埃曲线，是应用于二维图形应用程序的数学曲线。

​	一般的矢量图形软件通过它来精确画出曲线，贝兹曲线由线段与节点组成，节点是可拖动的支点，线段像可伸缩的皮筋，我们在绘图工具上看到的钢笔工具就是来做这种矢量曲线的。

​	贝塞尔曲线是计算机图形学中相当重要的参数曲线，在一些比较成熟的位图软件中也有贝塞尔曲线工具如PhotoShop等。在Flash4中还没有完整的曲线工具，而在Flash5里面已经提供出贝塞尔曲线工具。

​	贝塞尔曲线于1962，由法国工程师皮埃尔·贝塞尔（Pierre Bézier）所广泛发表，他运用贝塞尔曲线来为汽车的主体进行设计。贝塞尔曲线最初由Paul de Casteljau于1959年运用de Casteljau演算法开发，以稳定数值的方法求出贝兹曲线。

#### 一次贝塞尔曲线(线性贝塞尔曲线)

​	一次贝塞尔曲线其实是一条直线。

 ![](http://o7cqr8cfk.bkt.clouddn.com/17-6-4/40655077.jpg)

#### 二次贝塞尔曲线

 ![](http://o7cqr8cfk.bkt.clouddn.com/17-6-4/94917354.jpg)

 ![](http://o7cqr8cfk.bkt.clouddn.com/17-6-4/35792129.jpg)

#### 三次贝塞尔曲线

 ![](http://o7cqr8cfk.bkt.clouddn.com/17-6-4/69159470.jpg)



 ![](http://o7cqr8cfk.bkt.clouddn.com/17-6-4/55999388.jpg)

### 4.5.2	绘制贝塞尔曲线

#### 绘制二次贝塞尔曲线

`quadraticCurveTo(cp1x, cp1y, x, y)`:

**说明：**

​	参数1和2：控制点坐标

​	参数3和4：结束点坐标

```javascript
function draw(){
    var canvas = document.getElementById('tutorial');
    if (!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(10, 200); //起始点
    var cp1x = 40, cp1y = 100;  //控制点
    var x = 200, y = 200; // 结束点
    //绘制二次贝塞尔曲线
    ctx.quadraticCurveTo(cp1x, cp1y, x, y);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.rect(10, 200, 10, 10);
    ctx.rect(cp1x, cp1y, 10, 10);
    ctx.rect(x, y, 10, 10);
    ctx.fill();
    
}
draw();
```

  ![](http://o7cqr8cfk.bkt.clouddn.com/17-6-4/31012258.jpg)

#### 绘制三次贝塞尔曲线

`bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)`：

说明：

​	参数1和2：控制点1的坐标

​	参数3和4：控制点2的坐标

​	参数5和6：结束点的坐标

```javascript
function draw(){
    var canvas = document.getElementById('tutorial');
    if (!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(40, 200); //起始点
    var cp1x = 20, cp1y = 100;  //控制点1
    var cp2x = 100, cp2y = 120;  //控制点2
    var x = 200, y = 200; // 结束点
    //绘制二次贝塞尔曲线
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(40, 200, 10, 10);
    ctx.rect(cp1x, cp1y, 10, 10);
    ctx.rect(cp2x, cp2y, 10, 10);
    ctx.rect(x, y, 10, 10);
    ctx.fill();

}
draw();
```

 ![](http://o7cqr8cfk.bkt.clouddn.com/17-6-4/18941618.jpg)

# 五、添加样式和颜色

​	在前面的绘制矩形章节中，只用到了默认的线条和颜色。

​	如果想要给图形上色，有两个重要的属性可以做到。

1. `fillStyle = color`

   设置图形的填充颜色

2. `strokeStyle = color`

   设置图形轮廓的颜色

> 备注：

	1. `color` 可以是表示 `css` 颜色值的字符串、渐变对象或者图案对象。
	2. 默认情况下，线条和填充颜色都是黑色。
	3. 一旦您设置了 `strokeStyle` 或者 `fillStyle` 的值，那么这个新值就会成为新绘制的图形的默认值。如果你要给每个图形上不同的颜色，你需要重新设置 `fillStyle` 或 `strokeStyle` 的值。

## `fillStyle`

```javascript
function draw(){
  var canvas = document.getElementById('tutorial');
  if (!canvas.getContext) return;
  var ctx = canvas.getContext("2d");
  for (var i = 0; i < 6; i++){
    for (var j = 0; j < 6; j++){
      ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' +
        Math.floor(255 - 42.5 * j) + ',0)';
      ctx.fillRect(j * 50, i * 50, 50, 50);
    }
  }
}
draw();
```

 ![](http://o7cqr8cfk.bkt.clouddn.com/17-6-4/90462466.jpg)

## `strokeStyle`

```javascript
<script type="text/javascript">
    function draw(){
        var canvas = document.getElementById('tutorial');
        if (!canvas.getContext) return;
        var ctx = canvas.getContext("2d");
        for (var i = 0; i < 6; i++){
            for (var j = 0; j < 6; j++){
                ctx.strokeStyle = `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
                ctx.strokeRect(j * 50, i * 50, 40, 40);
            }
        }
    }
    draw();
    /**
     作者:李振超      4 Jun 2017 12:12
     返回随机的 [from, to] 之间的整数(包括from，也包括to)
     */
    function randomInt(from, to){
        return parseInt(Math.random() * (to - from + 1) + from);
    }

</script>
```

 ![](http://o7cqr8cfk.bkt.clouddn.com/17-6-4/39824191.jpg)

## `Transparency(透明度)`

`globalAlpha = transparencyValue`

​	这个属性影响到 canvas 里所有图形的透明度，有效的值范围是 0.0 （完全透明）到 1.0（完全不透明），默认是 1.0。

​	`globalAlpha` 属性在需要绘制大量拥有相同透明度的图形时候相当高效。不过，我认为使用`rgba()`设置透明度更加好一些。

## `line style`

### 1. `lineWidth = value`

   线宽。只能是正值。默认是`1.0`。

   起始点和终点的连线为中心，**上下各占线宽的一半**

   ```javascript
   ctx.beginPath();
   ctx.moveTo(10, 10);
   ctx.lineTo(100, 10);
   ctx.lineWidth = 10;
   ctx.stroke();

   ctx.beginPath();
   ctx.moveTo(110, 10);
   ctx.lineTo(160, 10)
   ctx.lineWidth = 20;
   ctx.stroke()
   ```

 ![](http://o7cqr8cfk.bkt.clouddn.com/17-6-4/29873575.jpg)


###2. `lineCap = type`

   线条末端样式。

   共有3个值：

1.    `butt`：线段末端以方形结束
2. `round`：线段末端以圆形结束
3. `square`：线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

   ```javascript
   var lineCaps = ["butt", "round", "square"];

   for (var i = 0; i < 3; i++){
       ctx.beginPath();
       ctx.moveTo(20 + 30 * i, 30);
       ctx.lineTo(20 + 30 * i, 100);
       ctx.lineWidth = 20;
       ctx.lineCap = lineCaps[i];
       ctx.stroke();
   }

   ctx.beginPath();
   ctx.moveTo(0, 30);
   ctx.lineTo(300, 30);

   ctx.moveTo(0, 100);
   ctx.lineTo(300, 100)

   ctx.strokeStyle = "red";
   ctx.lineWidth = 1;
   ctx.stroke();
   ```

    ![](http://o7cqr8cfk.bkt.clouddn.com/17-6-4/41486892.jpg)


### 3. `lineJoin = type` 

同一个path内，设定线条与线条间接合处的样式。

共有3个值`round`, `bevel` 和  `miter`：

1. `round`


   通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。

2. `bevel`

   在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。

3. `miter`(默认)

   通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。

```javascript
function draw(){
    var canvas = document.getElementById('tutorial');
    if (!canvas.getContext) return;
    var ctx = canvas.getContext("2d");

    var lineJoin = ['round', 'bevel', 'miter'];
    ctx.lineWidth = 20;

    for (var i = 0; i < lineJoin.length; i++){
        ctx.lineJoin = lineJoin[i];
        ctx.beginPath();
        ctx.moveTo(50, 50 + i * 50);
        ctx.lineTo(100, 100 + i * 50);
        ctx.lineTo(150, 50 + i * 50);
        ctx.lineTo(200, 100 + i * 50);
        ctx.lineTo(250, 50 + i * 50);
        ctx.stroke();
    }

}
draw();
```

 ![](http://o7cqr8cfk.bkt.clouddn.com/17-6-5/5058353.jpg)

### 4. 虚线

用 `setLineDash` 方法和 `lineDashOffset` 属性来制定虚线样式. `setLineDash` 方法接受一个数组，来指定线段与间隙的交替；`lineDashOffset `属性设置起始偏移量.

```javascript
function draw(){
    var canvas = document.getElementById('tutorial');
    if (!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    
    ctx.setLineDash([20, 5]);  // [实线长度, 间隙长度]
    ctx.lineDashOffset = -0;
    ctx.strokeRect(50, 50, 210, 210);
}
draw();
```

 ![](http://o7cqr8cfk.bkt.clouddn.com/17-6-5/92471191.jpg)

备注：

​	`getLineDash()`:返回一个包含当前虚线样式，长度为非负偶数的数组。

# 六、绘制文本

## 绘制文本的两个方法

canvas 提供了两种方法来渲染文本:

1. `fillText(text, x, y [, maxWidth])`

   在指定的(x,y)位置填充指定的文本，绘制的最大宽度是可选的.

2. `strokeText(text, x, y [, maxWidth])`

   在指定的(x,y)位置绘制文本边框，绘制的最大宽度是可选的.


```javascript
var ctx;
function draw(){
    var canvas = document.getElementById('tutorial');
    if (!canvas.getContext) return;
    ctx = canvas.getContext("2d");
    ctx.font = "100px sans-serif"
    ctx.fillText("天若有情", 10, 100);
    ctx.strokeText("天若有情", 10, 200)
}
draw();
```

 ![](http://o7cqr8cfk.bkt.clouddn.com/17-6-6/87968030.jpg)

## 给文本添加样式

1. `font = value`

   当前我们用来绘制文本的样式。这个字符串使用和 `CSS font`属性相同的语法. 默认的字体是 `10px sans-serif`。

2. `textAlign = value`

   文本对齐选项. 可选的值包括：`start`, `end`, `left`, `right` or `center`. 默认值是 `start`。

3. `textBaseline = value`

   基线对齐选项，可选的值包括：`top`, `hanging`, `middle`, `alphabetic`, `ideographic`, `bottom`。默认值是 `alphabetic。`

4. `direction = value`

   文本方向。可能的值包括：`ltr`, `rtl`, `inherit`。默认值是 `inherit。`


# 七、绘制图片

​	我们也可以在`canvas`上直接绘制图片。

## 7.1	由零开始创建图片

### 创建`<img>`元素

```javascript
var img = new Image();   // 创建一个<img>元素
img.src = 'myImage.png'; // 设置图片源地址
```

脚本执行后图片开始装载

### 绘制`img`

```javascript
//参数1：要绘制的img  参数2、3：绘制的img在canvas中的坐标
ctx.drawImage(img,0,0); 
```

注意：

​	考虑到图片是从网络加载，如果 `drawImage` 的时候图片还没有完全加载完成，则什么都不做，个别浏览器会抛异常。所以我们应该保证在 `img` 绘制完成之后再 `drawImage`。

```javascript
var img = new Image();   // 创建img元素
img.onload = function(){
  ctx.drawImage(img, 0, 0)
}
img.src = 'myImage.png'; // 设置图片源地址
```

## 7.2	绘制 `img` 标签元素中的图片

​	`img` 可以 `new` 也可以来源于我们也没中的 `<img>`标签

```javascript
<img src="./美女.jpg" alt="" width="300"><br>
<canvas id="tutorial" width="600" height="400"></canvas>
<script type="text/javascript">
    function draw(){
        var canvas = document.getElementById('tutorial');
        if (!canvas.getContext) return;
        var ctx = canvas.getContext("2d");
        var img = document.querySelector("img");
        ctx.drawImage(img, 0, 0);
    }
    document.querySelector("img").onclick = function (){
        draw();
    }

</script>
```

 ![](http://o7cqr8cfk.bkt.clouddn.com/17-6-6/84133001.jpg)

## 7.3	缩放图片





