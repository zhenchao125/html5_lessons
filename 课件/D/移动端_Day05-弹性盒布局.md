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









