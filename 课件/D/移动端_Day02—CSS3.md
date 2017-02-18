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



## 

# 三、文字相关属性

# 四、CSS3盒模型

# 五、背景相关属性

# 六、边框相关属性

# 七、渐变属性

