# 移动端_Day03-CSS3动画

# 一、CSS3转换(transform)

> css3包括两种转换，2D转换和3D转换。
>
> css3的转换允许我们对元素进行旋转、缩放、移动或倾斜。
>
> 不管2D转换还是3D转换都是操作的同一个的属性：transform

## 1.1	2D转换

> 有四种转换：rotate、scale、translate、skew

### 1.1.1	translate

> 在x和y方向平移元素:
>
> transform: translate(500px, 0px);
>
> 说明：
>
> 参数可以是像素或百分比。
>
> 参数1：沿x方向的平移，正表示向右移动
>
> 参数2：沿y方向的平移，正表示向下移动
>
> 如果是百分比是相对于自己的宽高的百分比。
>
> 

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        div{
            width: 200px;
            height: 200px;
            background-color: pink;
        }
        div:nth-of-type(2){
            background-color: gray;
            /*沿x轴平移500px， 沿y轴方向不动*/
            transform: translate(500px, 0px);
        }
    </style>
</head>
<body>
<div></div>
<div></div>

</body>
</html>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-28/79916448-file_1488292082454_fd38.png-yztcText)

> 如果仅仅沿x或y某一个方向运动，也可以使用：
>
> transform:translateX(200px);
>
> 或
>
> transform:translateY(200px);

### 1.1.2	rotate

> 旋转元素， 是指有沿着 z 轴旋转。(就是垂直于屏幕的轴）
>
> transform:rotate(10deg);
>
> 参数必须是度数。大于0表示顺时针旋转的度数，小于0表示逆时针旋转的角度。

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-28/2397653-file_1488292846911_136d5.png-yztcText)

> 注意：

1. 旋转的时候默认是以元素的几何中心作为轴来旋转的。
2. 可以使用 transform-origin: offsetX offsetY;来设置旋转的时候的轴的位置. 

```css
transform-origin: 0 0;
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-28/66626316-file_1488293210743_14c9b.png-yztcText)

### 1.1.3	scale

> 对元素进行放大。
>
> transform: scale(倍数);
>
> 注意：
>
> 1. 倍数大于表示放大，小于1表示缩小。不需要带单位
> 2. 默认任然是元素中心作为放大或缩小的参考点

```css
transform: scale(.5);
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-28/66956068-file_1488293498004_38cd.png-yztcText)

```css
transform-origin: 0 0;
transform: scale(.5);
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-28/51264390-file_1488293883698_15c26.png-yztcText)

### 1.1..4	skew

> skew是倾斜（斜切）。让元素与x方向或y方向产生倾斜。
>
> transform: skew(40deg,10deg);
>
> 参数1：x方向的倾斜度数
>
> 参数2：y方向的倾斜度数

```css
transform-origin: 0 0;
transform: skew(40deg,20deg);
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-28/41140946-file_1488294903973_1b54.png-yztcText)


## 1.2	3D转换

> 相对2D转换来说，3D转换浏览器支持的不太好。不过在移动端可以放心的使用。

> 3D坐标系：
>
> 默认情况水平向右为x轴正方形、垂直向下为y轴正方形、垂直于屏幕向外的为z轴正方形

![](http://o7cqr8cfk.bkt.clouddn.com/17-3-1/94538587-file_1488376417580_2f25.png-yztcText)

### 1.2.1	perspective属性

> ​	perspective（透视）是transform变形3D中最重要的内容。如果不设置透视，元素的3D变形效果将无法实现，所有的变化都会被投影到2D的区域展示。
>
> ​	可以简单理解为 **视距**，用来设置用户和元素 3D 空间 Z 平面之间的距离。而其效应由他的值来决定，值越小，用户与 3D 空间 Z 平面距离越近，视觉效果更令人印象深刻；反之，值越大，用户与3D空间Z平面距离越远，视觉效果就越小。
>
> ​	**要把它用在父容器中。**

### 1.2.2	translate3d(x,y,z)

> translate3D(x,y,z)  可以在x,y,z三个方向移动。
>
> translateZ(z)	只在z轴平移

### 1.2.3	rotate3d(x, y, z, a)

> 1. 3d旋转。  分别表示绕着x，y，z旋转。  参数中的x，y，z是一个数值。a是一个角度。  
> 2. 如果a是正值表示顺时针旋转， 如果a是负值表示逆时针旋转。
> 3. x,y,z表示方向矢量，xyz的平方和如果是1的话就是标准矢量，如果不是1就会转换成一个标准矢量。x,y,z分别分别除以他们的平方和得到的值就是标准矢量。  **这三个值决定了将来要旋转的时候的坐标轴。**
>
> **注意：判断是顺时针还是逆时针，让逆着坐标轴的正放下观察的。**
>
> 可以使用rotateX、rotateY、rotateZ表示沿着某个轴的旋转
>
> ***rotateX(40deg) 等同于  rotate3d(1,0,0,40deg)***

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .outer, .inner {
            margin: 100px auto;
            width: 400px;
            height: 400px;
            background-color: gray;
        }
        .outer {
            perspective: 300px;
        }
        .inner {
            background-color: pink;
            transform: rotateX(45deg);
        }
    </style>
</head>
<body>
<div class="outer">
    <div class="inner"></div>
</div>
</body>
</html>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-3-5/67817135-file_1488688292604_9210.png-yztcText)

### 1.2.4	scale3d(sx, sy, sz)

> 参数分别表示沿着向相应的坐标轴的缩放。注意sz其实是缩放的translateZ的值，如果没有设置translateZ则sz的值无效的。
>
> scaleX、scaleY、scaleZ分别表示x，y，z方向的缩放。

### 1.2.5	transform-style

> 表示他的子元素在变形的时候，是在一个2d平面内变形，还是在一个3d平面内变形。
>
> 两个值：flat和preserve-3d
>
> flat：变形仍然在2d空间
>
> preserve-3d：3d空间内变形
>
> **也是应用在父元素上。**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .outer, .inner {
            margin: 300px auto;
            width: 400px;
            height: 400px;
            background-color: gray;
        }
        .outer {
            transform:rotateY(45deg);
            transform-style: preserve-3d;
        }
        .inner {

            background-color: pink;
            transform:rotateX(60deg);
        }
    </style>
</head>
<body>
<div class="outer">
    <div class="inner"></div>
</div>
</body>
</html>
```

 ![](http://o7cqr8cfk.bkt.clouddn.com/17-3-5/44746943-file_1488690975973_b479.png-yztcText)

## 1.3	正方体案例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>

        div{
            width: 400px;
            height: 400px;
            text-align: center;
            line-height: 400px;
            font-size: 60px;
        }
        .container{

            position: relative;
            border: 1px dashed #000;
            margin: 200px auto;
            transform: rotateY(30deg) rotateX(30deg);
            transform-style: preserve-3d;
            animation: 10s linear 0s infinite reverse my_rotate;
        }
        .container div{
            position: absolute;
        }
        .font{
            background-color: rgba(100, 100, 100, 1);
            transform: translateZ(200px);
        }
        .back{
            background-color: rgba(80, 255, 133, 1);
            transform: rotateY(180deg) translateZ(200px);
        }
        .left{
            background-color: rgba(255, 57, 56, 1);
            transform: rotateY(-90deg) translateZ(200px);
        }
        .right{
            background-color: rgba(25, 37, 170, 1);
            transform: rotateY(90deg) translateZ(200px);
        }
        .up{
            background-color: rgba(232, 255, 204, 1);
            transform: rotateX(90deg) translateZ(200px);
        }
        .down{
            background-color: rgba(94, 255, 56, 1);
            transform: rotateX(-90deg) translateZ(200px);
        }
        @keyframes my_rotate {
            from{
                transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg);
            }
            to{
                transform: rotateY(360deg) rotateX(360deg) rotateZ(360deg);
            }
        }
    </style>
</head>
<body>
<div class="container">
    <div class="font">前</div>
    <div class="back">后</div>
    <div class="left">左</div>
    <div class="right">右</div>
    <div class="up">上</div>
    <div class="down">下</div>
</div>
</body>
</html>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-3-5/41271273-file_1488702997522_1365f.gif-yztcText)

# 二、CSS3过渡(transition)

> transition属性定义一个元素两种状态之间的过渡。是下面四个属性的简写：
>
>  `transition-property`, `transition-duration`, `transition-timing-function`,  `transition-delay`
>
> **不同的状态可以通过伪类像`:hover`、`:active`来定义。也可以通过js代码来动态的改变。**

![](http://o7cqr8cfk.bkt.clouddn.com/17-3-5/17269928-file_1488706322114_fd14.png-yztcText)



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>过渡</title>
    <style>
        .box {
            border: 1px solid #000;
            margin: 100px auto;
            display: block;
            width: 100px;
            height: 100px;
            background-color: #0000FF;
            			/*过渡的属性  过渡时间  过渡函数  延迟时间*/
            transition: width 2s linear 1s;
        }
        .box:hover {
            width: 200px;
        }
    </style>
</head>
<body>
<div class="box"></div>
</body>
</html>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-3-5/60517520-file_1488707298064_144c2.gif)

> 如果想同时定义多个过渡属性，则可以使用逗号分开。

```css
transition: width 2s linear 1s, height 3s linear 2s;
```

> 过渡属性和过渡周期不能省略。

> 过渡函数主要有以下几个值：
>
> 如果不设置默认是：ease

```css
transition-timing-function: ease;
transition-timing-function: ease-in;
transition-timing-function: ease-out;
transition-timing-function: ease-in-out;
transition-timing-function: linear;
transition-timing-function: step-start;
transition-timing-function: step-end;
```

> 延迟时间如果不设置默认是 0s

# 四、CSS3动画(animation)

> ​	我们在使用 transition实现动画的时候只能指定要改变的属性的开始值和结束值，然后在这两个值之间进行平滑过渡的方式来实现动画效果，因此不能实现比较复杂的动画效果
>
> ​	而animation通过定义多个**关键帧**( keyframes )以及定义每个关键帧中元素的属性值来实现更为复杂的动画效果。

> 下面的表格列出了 @keyframes 规则和所有动画属性：

| 属性                        | 描述                                      | CSS  |
| :------------------------ | :-------------------------------------- | ---- |
| @keyframes                | 规定动画。                                   | 3    |
| animation                 | 所有动画属性的简写属性，除了 animation-play-state 属性。 | 3    |
| animation-name            | 规定 @keyframes 动画的名称。                    | 3    |
| animation-duration        | 规定动画完成一个周期所花费的秒或毫秒。默认是 0。               | 3    |
| animation-timing-function | 规定动画的速度曲线。默认是 "ease"。                   | 3    |
| animation-delay           | 规定动画何时开始。默认是 0。                         | 3    |
| animation-iteration-count | 规定动画被播放的次数。默认是 1。                       | 3    |
| animation-direction       | 规定动画是否在下一周期逆向地播放。默认是 "normal"。          | 3    |
| animation-play-state      | 规定动画是否正在运行或暂停。默认是 "running"。            | 3    |
| animation-fill-mode       | 规定对象动画时间之外的状态。                          | 3    |

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>动画</title>
    <style>
        div{
            width : 200px;
            height : 200px;
            margin: 200px auto;
            background-color : pink;
            animation-name: my_animation;
            animation-duration: 3s;
            animation-iteration-count: 1;
            animation-direction: reverse;
            animation-delay:2s;
            animation-timing-function: linear;
            animation-fill-mode: both;
        }
        @keyframes my_animation {
            0%{
                width: 200px;
                height: 200px;
            }
            100%{
                width: 600px;
                height: 600px;
            }
        }
    </style>
</head>
<body>
<div></div>
</body>
</html>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-3-5/30148798-file_1488717635216_a877.gif)

> `@keyframes 动画名{`
>
> ​	//定义关键帧
>
> `}`
>
> 1. 关键帧定义时可以使用from、to、百分比
> 2. from表示0%、to表示100%
> 3. 可以定义很多关键帧。20%、30%、...
> 4. 百分比其实是指的时间完成的百分比。(考虑以前学习过的归一化的时间)

> animation-timing-function可以是以下的关键值：
>
> ```css
> animation-timing-function: ease;
> animation-timing-function: ease-in;
> animation-timing-function: ease-out;
> animation-timing-function: ease-in-out;
> animation-timing-function: linear;
> animation-timing-function: step-start;
> animation-timing-function: step-end;
> ```
>
> 也可以是下面的函数：
>
> ```css
> animation-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
> animation-timing-function: steps(4, end);
> ```
>
> - cubic-bezier：贝塞尔曲线。如果提供的关键值不是我们想要的，则可以使用贝塞尔曲线定制自己需要的任何速度曲线。可以使用在线工具生成贝塞尔函数。
>
> https://isux.tencent.com/css3/tools.html
>
> 例如：
>
> cubic-bezier(0.315, -0.575, 0.680, 1.650)
>
> 对应的曲线：
>
> ![](http://o7cqr8cfk.bkt.clouddn.com/17-3-5/79878285-file_1488720393755_fd93.png)
>
> - steps(4, end):  表示每两个关键帧中间共需要再填充3个关键帧。

```css
/* @keyframes duration | timing-function | delay | 
iteration-count | direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slidein;

/* @keyframes duration | timing-function | delay | name */
animation: 3s linear 1s slidein;

/* @keyframes duration | name */
animation: 3s slidein;
```

