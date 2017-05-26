# 移动端_Day05-Flexbox Layout

参考文章：

[flexbox 完全指导](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

[w3c规范](https://www.w3.org/html/ig/zh/css-flex-1/)

# 一、背景

​	`Flextbox Layout`(弹性盒布局或伸缩盒布局)，提供了一种更加有效的方式去布局、对齐和给容器中的子元素分配空间，即使他们的尺寸未知或者是动态改变的。  看看里面有个`flex`就能想象出来。

​	`Flexbox layout`背后的设计理念：赋予容器去改变他的子元素的宽、高、排列顺序的能力，从而可以更好的填充可用空间，尤其对各种各样的设备和屏幕尺寸提供了便利的方式去布局。一个具有flex特性的容器可以去拉伸他的子元素去填充可用的自由空间，也可以收缩他的子元素防止溢出。

​	更重要的一点，`flextbox layout` 的布局方向也是不固定的。这点与我们以前的布局是不同的。比如：`block`是垂直布局的，而`inline`是水平布局的。 对那些可以工作良好的页面来说，他们在支持庞大或者复杂的应用方面缺乏灵活性。尤其当面对设备的方向、尺寸、缩放等等方面发生改变的时候，这种缺点更加明显。

# 二、基本知识

​	`flexbox`是一个完整的模块，而不是一个单一的属性。 

​	`flexbox`加入了大量的属性。这些属性一部分用在容器上(父元素，一般称之为 `flex container`),而另外的一些是用在子元素上(一般称之为 `flex items`.  弹性项目)。

> 下面介绍一些基本概念：

这张图来自w3c规范。

![](http://o7cqr8cfk.bkt.clouddn.com/17-5-24/10640272.jpg)

一般情况下，`flex itmes` 要么沿着 `main axis` 布局(从主轴起点到主轴重点)，要么沿着 `cross axis` 布局(从侧轴起点到侧轴重点)。

- **主轴(main axis)** : 弹性容器的主轴是最主要的轴，flex items会沿着这条轴被布局。有一点需要注意：主轴不一定总是水平的，他的方向由 `flex-direction` 属性的值来决定。(后面后细讲)
- **主轴起点(main start)和主轴终点(main end)**：弹性容器中的 flex items 会从 主轴起点 开始 到主轴重点结束 布局。
- **主轴长度(main size)**：flex item的宽或高就是主轴长度。到底是宽还是高，由谁沿着主轴的方向来决定。
- **侧轴(cross axis)**：垂直于主轴的轴就是侧轴。侧轴的方向由主轴来决定。
- **侧轴起点(cross start )和侧轴终点(cross end)**：弹性行(flex lines)从侧轴起点开始到侧轴重点结束。
- **侧轴长度(cross size)**：伸缩项目的在侧轴方向的宽度或高度就是项目的侧轴长度，伸缩项目的侧轴长度属性是「`width`」或「`height`」属性，由哪一个沿着着侧轴方向决定。

# 三、flex container的属性

![](http://o7cqr8cfk.bkt.clouddn.com/17-5-24/8759372.jpg)

## 3.1	display

​	这个属性把一个元素定义成为 flex container。可以设置为 `flex` 或 `inline-flex`。设置为`flex`容器就是块级容器，设置为 `inline-flex` 就是行内元素。  这个容器就会成为他们的直接子元素的 `flex context`

```css
.container {
	display: flex; /* or inline-flex */
}
```

## 3.2	flex-direction

​	这个属性创建主轴，定义了 `flex items` 在弹性容器中布局的方向。主轴要么水平方向，要么垂直方向。

```css
.container {
	flex-direction: row | row-reverse | column | column-reverse;
}
```

- row : 主轴水平，方向从左向右。**（默认值）**
- row-reverse：主轴水平，方向从右向左
- column : 主轴垂直，方向从上向下
- column-reverse：主轴垂直，方向从下向上

![](http://o7cqr8cfk.bkt.clouddn.com/17-5-25/56696626.jpg)

## 3.3	flex-wrap

​	默认情况下，所有的`flex items` 都会试图在一行。通过修改这个属性的值，可以让 `flex items`按照要求多行排列。其实这个属性可以定义 `flex items` 在侧轴方向的排序方式。

```css
.container{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- nowrap	：所有的 `flex items` 在一行。**(默认值)**
- wrap ：允许 `flex items` 自动换行在多行，方向是从上向下。
- wrap-reverse : 允许 `flex items` 自动换行在多行，方向是从下向上。 

html:

```html
<div class='container'>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
</div>
```

css:

```css
* {
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  width: 700px;
  height: 500px;
  background-color: gray;
  flex-direction: row;
  flex-wrap: nowrap;
}
p{
  width : 200px;
  height : 200px;
  background-color : pink;
}
p:nth-child(2n){
  background-color: cornflowerblue;
}
```
**效果1：**

![](http://o7cqr8cfk.bkt.clouddn.com/17-5-25/33422693.jpg)

**效果2：**

![](http://o7cqr8cfk.bkt.clouddn.com/17-5-25/26943325.jpg)

**效果3：**

![](http://o7cqr8cfk.bkt.clouddn.com/17-5-25/80870562.jpg)

**效果4：**

![](http://o7cqr8cfk.bkt.clouddn.com/17-5-25/68686976.jpg)

**效果5：**

![](http://o7cqr8cfk.bkt.clouddn.com/17-5-25/86813761.jpg)

**效果6：**

![](http://o7cqr8cfk.bkt.clouddn.com/17-5-25/32692631.jpg)

## 3.4	flex-flow

​	`flex-flow`是`flex-direction` 和 `flex-wrap`两个属性的合并简写方式。一次性的定义了主轴和侧轴，他的默认值是：`row nowrap`

```css
flex-flow: <‘flex-direction’> || <‘flex-wrap’>
```

## 3.5	justify-content

​	该属性定义了主轴方向`flex items`的对齐方式。也能把多余的自由空间，分配给`flex-items`。

```css
.container {
	justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

- flex-start：`flex-items`从主轴起点开始排列。

![](http://o7cqr8cfk.bkt.clouddn.com/17-5-25/21454457.jpg)

- flex-end：`flex-items`从主轴终点开始排列。

![](http://o7cqr8cfk.bkt.clouddn.com/17-5-25/72039231.jpg)

- center：`flex-items`在主轴方向居中排列。

![](http://o7cqr8cfk.bkt.clouddn.com/17-5-25/68296087.jpg)

- space-between：把 free space 平局分布在 `flex-items`之间。第一个 item紧挨着主轴起点，最后一个item紧挨着主轴终点。

![](http://o7cqr8cfk.bkt.clouddn.com/17-5-25/69815781.jpg)

- space-around：把 `free space`平均分布在每个item的周围。所以中间空白会比边上的空白大一倍。

  ![](http://o7cqr8cfk.bkt.clouddn.com/17-5-25/41495995.jpg)



## 3.6	align-items

​	该属性定义了`flex-items`在侧轴上的对齐方式。可以看成是`justify-content`在侧轴上的版本。

**如果是单行`flex-items`的情况使用比较好**

```css
.container {
	align-items: flex-start | flex-end | center | baseline | stretch;
}
```

- flex-start：从侧轴起点开始排列
- flex-end：从侧轴的终点开始排列
- center：沿着侧轴方向居中
- baseline：沿着内容的基线对齐
- stretch：在侧轴方向拉伸`flex-items`。**(默认值)**。但是他的优先级比设定了具体的`heigth`和`max-height`低，但是比auto高。

![](http://o7cqr8cfk.bkt.clouddn.com/17-5-25/26736671.jpg)

## 3.7	align-content

​	该属性定义了当有多行`flex items`时，`free-space`如何分布，类似于主轴的`justify-content`

```css
.container {
	align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

- flex-start：从侧轴起点开始排列
- flex-end：从侧轴的终点开始排列
- center：沿着侧轴方向居中
- stretch：在侧轴方向拉伸`flex-items`。**(默认值)**。但是他的优先级比设定了具体的`heigth`和`max-height`低，但是比auto高。
- space-between：把 free space 平局分布在 `flex-items`之间。第一个 item紧挨着侧轴起点，最后一个item紧挨着侧轴终点。
- space-around：把 `free space`平均分布在每个item的周围。所以中间空白会比边上的空白大一倍。

![](http://o7cqr8cfk.bkt.clouddn.com/17-5-25/56214136.jpg)

# 四、flex-items的属性

![](http://o7cqr8cfk.bkt.clouddn.com/17-5-26/49578220.jpg)

## 4.1	order

​	默认情况下，`flex-items`安装源码的属性布局。然后，通过 `order`属性可以改变他们在弹性容器中的出现的顺序。

```css
.item {
    order: <integer>;
}
```

​	`order`的默认默认值是 0 。值越大，布局越靠后; 反之，越小，布局越靠前。



