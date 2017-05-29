# 移动端_Day06-移动端事件

# 一、pc端事件回顾

HTML事件、DOM0事件、DOM2事件

# 二、移动端事件简介

## 2.1	pc端事件在移动端的问题

​	移动设备主要特点是不配备鼠标，键盘也只是在需要输入的地方才会激活虚拟机键盘。所以以前的pc端事件在移动端使用起来就没有以前那么爽了，虽然部分仍然可以使用。

- **click事件的300ms延迟问题。**

 ​2007年第一代iphone发布，由于那个年代所有的网页都是针对大屏的pc端设计的，iphone的Safari浏览器为了让用户浏览网页的时候可以浏览到整个网页，把viewport设置为960px(参考前面的文章)，好是好，但是由于缩放了整个页面，导致内容变得非常小，视力6.0的都不一定看得清楚。

 ​所以Safari浏览器自带了一个当时看起来相当酷的一个功能：双击缩放。你双击页面的时候，浏览器会智能的缩放当前页面到原始大小。

 ​双击缩放的原理就是，当你click一次之后，会经过300ms之后检测是否再有一次click，如果有的话，就会缩放页面。否则的话就是一个click事件。

 ​所以，当你想执行click操作的时候，就感觉到了"卡顿"。如果点击之后100ms之后没有反应，基本就有卡顿的感觉。

- **dblclick**事件失效

  由于双击缩放的存在，pc端的dblclick事件也失效了。

  ## 2.2移动端web新增touch事件

  ​随着触屏设备的普及，w3c为移动端web新增了touch事件。

  ​最基本的touch事件包括4个事件：

- touchstart

  当在屏幕上按下手指时触发

- touchmove

  当在屏幕上移动手指时触发

- touchend

  当在屏幕上抬起手指时触发

- touchcancel

  当一些更高级别的事件发生的时候（如电话接入或者弹出信息）会取消当前的touch操作，即触发touchcancel。一般会在touchcancel时暂停游戏、存档等操作。

# 三、touch事件详解

​	为了区别触摸相关的状态改变，存在多种类型的触摸事件。可以通过检查触摸事件的 `TouchEvent.type` 属性来确定当前事件属于哪种类型。

​	*注意:在很多情况下，触摸事件和鼠标事件会同时被触发（目的是让没有对触摸设备优化的代码仍然可以在触摸设备上正常工作）。如果你使用了触摸事件，可以调用 `event.preventDefault()`来阻止鼠标事件被触发。* 

```javascript
var i = 1;
var box = document.querySelector("div");
var ps = document.querySelectorAll("p");
box.addEventListener("touchstart", function (e){
   ps[0].innerHTML = e.type + i++;
})
box.addEventListener("touchmove", function (e){
   ps[1].innerHTML = e.type + i++;
})
box.addEventListener("touchend", function (e){
   ps[2].innerHTML = e.type + i++;
})
```

## 3.1	touchstart

















