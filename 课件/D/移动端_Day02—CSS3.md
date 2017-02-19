# 移动端_Day02—CSS3

# 一、CSS3简介

​	现如今，随着 Web2.0 技术的流行，之前的 CSS2 标准和相关技术似乎已经满足不了日益增长的开发需求：人们需要实现更加美观、用户体验更好的界面。

​	CSS3，这个新一代的标准应运而生。***CSS3是CSS2的“进化”版本。***为了满足现有的对于 Web UI 的开发需求，它提供了一系列强大的功能，如许多新的 CSS 属性（文字，布局，颜色等等），各种 CSS 特效，甚至还支持 CSS 动画、元素的变换。

​	这些 CSS 新特性在现阶段可以说都是非常强大和完善的，您只需要加入几行简单的 CSS 代码便可以实现出一系列令人眼前一亮的效果，这比我们之前用 JavaScript 去模拟这样的效果要好得多，不仅降低了复杂度，变得易维护，在性能上也突飞猛进了。

## 1.1	CSS3的浏览器情况

​	在pc端，高级浏览器支持比较好，最新的chrome、firfox、Safari浏览器对css3属性支持比较好。微软系的浏览器ie9+和edge浏览器支持比较好。 ie8之前的浏览器情况比较差。

​	在移动端，整体支持情况比pc端好很多，所以在移动端可以放心的使用css3新增特性，而不用考虑不支持情况。

## 1.2	CSS3使用原则

1. 听领导的安排。
2. 按照产品方案。
3. **渐进增强、优雅降级**。
4. 考虑产品的使用人群。

# 二、新增选择器

## 1.1	属性选择器

> css2已经引入了一些属性选择器，css3扩展了属性选择器，基于模式匹配来定位元素

- [attr]

Represents an element with an attribute name of attr. 

***匹配具有属性名为 attr 的元素***

- [attr=value]

Represents an element with an attribute name of attr and whose value is exactly "value".

***匹配具有属性名为 attr 的属性，并且这个属性值为 value 的元素***

- [attr~=value]

Represents an element with an attribute name of attr whose value is a whitespace-separated list of words, one of which is exactly "value".

***匹配具有属性名为attr的属性，并且attr的属性值是用空白字符分隔的单词列表的元素。这些单词中必须有一个是value***

```css
div[class~=a]{
    background-color: pink;
}
/*选中这个元素*/
<div id="div1" class="a b"></div>
/*这个元素不会被选中*/
<div id="div2" class="b c"></div>
```

- [attr|=value]

Represents an element with an attribute name of attr. Its value can be exactly “value” or can begin with “value” immediately followed by “-” (U+002D). It can be used for language subcode matches.

***匹配具有属性名attr的属性，并且attr的属性值是value或者是以value-开头的元素。  最常用语lang属性。***    ==注意：是value-开头。  value后面是一个连接符。==

- [attr^=value]

Represents an element with an attribute name of attr and whose first value is prefixed by "value".

***属性值以value开头（value是前缀）***

- [attr$=value]

Represents an element with an attribute name of attr and whose last value is suffixed by "value".

***属性值以value结尾(value是后缀)***

- [attr*=value]

Represents an element with an attribute name of attr and whose value contains at least one occurrence of string "value" as substring.

***属性值中包含至少一个value(value是属性值的一个字符串)***

- [attr operator value i]

Adding an i (or I) before the closing bracket causes the value to be compared case-insensitively (for characters within the ASCII range).

***在方括号的结束的时候添加一个字母 i 或者 I ，则匹配属性值的时候会忽略大小写***

## 1.2	UI元素状态伪类选择器

- :active	用户按下鼠标，但是没有松开的时候的状态   主要用a和button标签，当然其他标签也可以用
- :hover   鼠标移动到元素上方的时候的状态。   可以用作任何的元素上
- :focus   获取焦点的时候状态。  一般用在input、textarea上
- :enable  enable状态
- :disable  disable状态
- :read-only  只读状态
- :read-write  读写状态。input元素的正常状态就是read-write
- :checked   选中之后的状态  比如：radio和checkbox选中
- :required  具有required表单元素。
- :optional   不具有required表单元素
- :target  目标伪类。 当激活一个锚点的时候，会选中激活的那个锚点

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style type="text/css">
        * {
            padding: 0;
            margin: 0;
        }

        nav {
            width: 100px;
            height: 1000px;
            background-color: #CCCCCC;
            text-align: center;
            position: fixed;
        }

        article {
            width: 800px;
            position: absolute;
            left: 100px;
        }

        div {
            height: 1000px;
            background-color: pink;
        }

        div:nth-of-type(2n) {
            background-color: gray;
        }

        p {
            font-size: 50px;
        }
		/*目标伪类选择器*/
        :target {
            background-color: green;
        }
    </style>
</head>
<body>
<nav>
    <ul>
        <li><a href="#p1">1</a></li>
        <li><a href="#p2">2</a></li>
        <li><a href="#p3">3</a></li>
    </ul>
</nav>
<article>
    <p id="p1">第一段</p>
    <div></div>
    <p id="p2">第二段</p>
    <div></div>
    <p id="p3">第三段</p>
    <div></div>
</article>

</body>
</html>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-18/79144128-file_1487417513579_6af4.gif)

## 1.3	结构伪类选择器

- :root   根元素，他始终是html元素

- :not(x) 否定伪类选择器。   x是一个选择器，not()可以看出一个否定元素，最终的结果不满足x的被选中  

  ```css
  /*选中id不是abc的div*/
  div:not(#abc){
      background-color: green;
  } 
  ```

- :empty  没有子元素的被选中。 

- :nth-child(n) 第n个子元素

- :nth-last-child(n) 从后向前计算的第n个子元素

- :nth-of-type(n)  第n个子元素

- :nth-last-of-type(n) 从后向前计算的第n个子元素


## 1.4	伪元素选择器

> 伪元素和伪类有点相似。
>
> 伪类用一个冒号（:）表示，而伪元素用两个冒号 (::) 表示。
>
> 伪类一般表示的是某种状态，而伪元素表示的是 **DOM外部的某种文档结构**

- ::first-letter  选中第一个字符
- ::first-line   选中第一行
- ::after  给选中的元素的最后添加一个子元素。 必须设置content属性
- ::before  给选中的元素最前面添加一个子元素。 必须设置conent元素

```css
div::after{
    content: '最后添加的内容';
    background-color: pink;
}
div::before{
    content: '最前面的位置添加的内容';
    background-color: gray;
}
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-18/96013523-file_1487423686893_cadb.png)

- ::selection	选中用户用鼠标选中的元素

```css
::selection{
    background-color: green;
    color: red;
}
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-18/75824319-file_1487424222294_16af9.gif)

# 三、文字相关属性

## 3.1	给文字添加阴影

> text-shadow属性，可以给文本添加阴影
>
> - 每个shadow一般包含四个值： x偏移、y偏移、模糊半径、阴影颜色
> - 模糊半径和颜色值都是可选的，也可以把颜色值写在其他值之前。
> - 也可以提供多个shadow值，用逗号分开

```css
/* offset-x | offset-y | blur-radius | color */
text-shadow: 4px 4px 2px gray;

/*提供多个shadow值*/
text-shadow: 4px 4px 2px gray, -4px -4px 2px red;
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-18/56999022-file_1487425513456_c7db.png)

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-18/20311325-file_1487425620488_7746.png)

## 3.2	文本自动换行：word-break属性

> 对文本来说，默认情况下单词内是不会换行的。
>
> 使用word-break属性，可以控制到底该怎么换行
>
> work-brak:normal [|](file:///Users/lzc/Library/Application%20Support/Dash/DocSets/CSS/CSS.docset/Contents/Resources/Documents/developer.mozilla.org/en-US/docs/Web/CSS/Value_definition_syntax.html#Single_bar) break-all [|](file:///Users/lzc/Library/Application%20Support/Dash/DocSets/CSS/CSS.docset/Contents/Resources/Documents/developer.mozilla.org/en-US/docs/Web/CSS/Value_definition_syntax.html#Single_bar) keep-all
>
> normal:正常换行
>
> break-all：对非Chinese/Japanese/Korean语言，运行单词内换行
>
> keep-all：对Chinese/Japanese/Korean不允许换行，别的语言与nomal相同。

```css
p {
    width: 100px;
    background-color: pink;
    word-break: normal;
}
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-18/4946935-file_1487426639280_993c.png)

```css
p {
    width: 100px;
    background-color: pink;
    word-break: break-all;
}
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-18/85104084-file_1487426695476_11582.png)

## 3.3	文本溢出处理属性：text-overflow

> 主要支持两个值：clip和ellipsis

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style type="text/css">

        p {
            width: 105px;
            border: 1px solid #000;
            overflow: hidden;
            white-space: nowrap;
        }

        p:nth-child(2) {
            text-overflow: clip;
        }

        p:nth-child(3) {
            text-overflow: ellipsis;
        }

    </style>
</head>
<body>
<p>This keyword value indicates to truncate the text at the limit of the content area</p>
<p>This keyword value indicates to truncate the text at the limit of the content area</p>
<p>This keyword value indicates to truncate the text at the limit of the content area</p>
</body>
</html>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-18/37549266-file_1487427897652_c293.png)

# 四、CSS3盒相关样式

## 4.1	box-sizing属性

> box-sizing属性是用来改变默认的盒模型的。主要两个值：content-box和border-box
>
> - content-box：就是默认的盒模型。设置的宽高属性不包括border和padding，当增加border和padding的值的时候，整个盒子的整体尺寸会增加，给容器设置的宽高属性会保持。所以这种模型也叫**外扩模型**
>
> ![](http://o7cqr8cfk.bkt.clouddn.com/17-2-19/56787640-file_1487466972930_11d7.png)
>
> - border-box：设置的宽度包括border和padding，当增加border和padding的值的时候，会压缩盒子的content的尺寸，盒子的整体尺寸不会发生变化。所以这种模型也称之为**内缩模型**。目前大高级浏览器都支持。
>
> ![](http://o7cqr8cfk.bkt.clouddn.com/17-2-19/58431396-file_1487467424399_134c8.png)
>
> 补充：其实还有一种盒模型叫 padding-box，不过除了firefox外没有浏览器支持。所以目前没有人用。
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style type="text/css">
        div{
            width: 200px;
            height: 200px;
            background-color: pink;
        }
        div:first-child{
            border: 50px solid gray;
            box-sizing: content-box;
        }
        div:last-child{
            border: 50px solid goldenrod;
            box-sizing: border-box;
        }

    </style>
</head>
<body>
<div></div>
<div></div>
</body>
</html>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-19/58589822-file_1487468582252_1ea0.png)



![](http://o7cqr8cfk.bkt.clouddn.com/17-2-19/13000080-file_1487468663912_a260.png)

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-19/75466539-file_1487468734741_78db.png)



## 4.2	盒子的阴影：box-shadow

> box-shadow:inset 0px 0px 40px 2px gray;
>
> 第一个值：inset表示阴影是显示在盒子内部。如果不设置，则默认显示在盒子外部。
>
> 第二个值：x方向的offset
>
> 第三个值：y方法的offset
>
> 第四个值：模糊半径
>
> 第五个值：放大阴影。 正值表示放大，负值表示缩小。
>
> 第六个值：阴影的颜色。
>
> 注意：box-shadow也可以像text-shadow一样，使用逗号分隔同时设置多个阴影。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style type="text/css">
        div {
            margin: 50px auto;
            width: 200px;
            height: 200px;
            border: 1px solid #000;
        }
        div:nth-child(1):hover {
            box-shadow: 0px 0px 40px 2px gray;
        }
        div:nth-child(2):hover {
            box-shadow:inset 0px 0px 40px 2px gray;
        }
    </style>
</head>
<body>
<div></div>
<div></div>
</body>
</html>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-19/77519232-file_1487470001610_14a8a.gif)



# 五、边框相关属性

## 5.1	边框圆角:border-radius

> border-radius:	给边界设置圆形或椭圆形。
>
> /* top-left | top-right | bottom-right | bottom-left */
>
> border-radius: 1px 0 3px 4px;

## 5.2	边框图片:border-image

> border-image:允许在边框上绘制图片。
>
> 相关属性：
>
> | *border-image-source* | 用在边框的图片的路径。                              |      |
> | --------------------- | ---------------------------------------- | ---- |
> | *border-image-slice*  | 图片边框向内偏移。                                |      |
> | *border-image-width*  | 图片边框的宽度。                                 |      |
> | *border-image-outset* | 边框图像区域超出边框的量。                            |      |
> | *border-image-repeat* | 图像边框是否应平铺(repeated)、铺满(rounded)或拉伸(stretched)。 |      |



# 六、背景相关属性

# 七、渐变属性

