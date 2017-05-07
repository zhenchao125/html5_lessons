# 移动端_Day04-移动端webapp开发

# 一、移动端浏览器概述

## 1.1	移动端浏览器分布

> 移动端主要分两大操作系统：Android和ios。目前在国内用的比较多的浏览器仍然是第三方的浏览器。
>
> 不管Android喜欢还是ios系统，原生浏览器大家都较少使用。

![](http://o7cqr8cfk.bkt.clouddn.com/17-3-13/76507331-file_1489394011130_b8f4.png)

## 1.2	移动端浏览器的核心

​	参考资料：http://web.jobbole.com/84826/

​	浏览器内核又可以分成两部分：渲染引擎(layout engineer 或者 Rendering Engine)和 JS 引擎。

​	负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入 CSS 等），以及计算网页的显示方式，然后会输出至显示器或打印机。

​	浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。

​	所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。

​	JS 引擎则是解析 Javascript 语言，执行 javascript 语言来实现网页的动态效果。

​	最开始渲染引擎和 JS 引擎并没有区分的很明确，后来 JS 引擎越来越独立，**内核就倾向于只指渲染引擎**。

​	有一个网页标准计划小组制作了一个 ACID 来测试引擎的兼容性和性能。内核的种类很多，如加上没什么人使用的非商业的免费内核，可能会有 10 多种.

​	但是常见的浏览器内核可以分这四种：Trident、Gecko、Blink、Webkit。

### 1.2.1	Trident ([‘traɪd(ə)nt])

​	Trident(IE内核)：该内核程序在 1997 年的 IE4 中首次被采用，是微软在 Mosaic（”马赛克”，这是人类历史上第一个浏览器，从此网页可以在图形界面的窗口浏览） 代码的基础之上修改而来的，并沿用到 IE11，也被普遍称作 “IE内核”。

### 1.2.2	Gecko ([‘gekəʊ])

​	Gecko(Firefox 内核)：Netscape6 开始采用的内核，后来的 Mozilla FireFox(火狐浏览器) 也采用了该内核，Gecko 的特点是代码完全公开，因此，其可开发程度很高，全世界的程序员都可以为其编写代码，增加功能。

​	因为这是个开源内核，因此受到许多人的青睐，Gecko 内核的浏览器也很多，这也是 Gecko 内核虽然年轻但市场占有率能够迅速提高的重要原因。

### 1.2.3	Webkit

​	一提到 webkit，首先想到的便是 chrome，可以说，chrome 将 Webkit内核 深入人心，殊不知，Webkit 的鼻祖其实是 Safari。现在很多人错误地把 webkit 叫做 chrome内核（即使 chrome内核已经是 blink 了），苹果都哭瞎了有木有。

​	Safari 是苹果公司开发的浏览器，使用了KDE（Linux桌面系统）的 KHTML 作为浏览器的内核，Safari 所用浏览器内核的名称是大名鼎鼎的 WebKit。 Safari 在 2003 年 1 月 7 日首度发行测试版，并成为 Mac OS X v10.3 与之后版本的默认浏览器，也成为苹果其它系列产品的指定浏览器（也已支持 Windows 平台）。

​	如上述可知，WebKit 前身是 KDE 小组的 KHTML 引擎，可以说 WebKit 是 KHTML 的一个开源的分支。当年苹果在比较了 Gecko 和 KHTML 后，选择了后者来做引擎开发，是因为 KHTML 拥有清晰的源码结构和极快的渲染速度。

​	Webkit内核 可以说是以硬件盈利为主的苹果公司给软件行业的最大贡献之一。随后，2008 年谷歌公司发布 chrome 浏览器，采用的 chromium 内核便 fork 了 Webkit。

### 1.2.4	Chromium/Blink

​	2008 年，谷歌公司发布了 chrome 浏览器，浏览器使用的内核被命名为 chromium。

​	chromium fork 自开源引擎 webkit，却把 WebKit 的代码梳理得可读性提高很多，所以以前可能需要一天进行编译的代码，现在只要两个小时就能搞定。因此 Chromium 引擎和其它基于 WebKit 的引擎所渲染页面的效果也是有出入的。所以有些地方会把 chromium 引擎和 webkit 区分开来单独介绍，而有的文章把 chromium 归入 webkit 引擎中，都是有一定道理的。

​	谷歌公司还研发了自己的 Javascript 引擎，V8，极大地提高了 Javascript 的运算速度。

​	***chromium 问世后，带动了国产浏览器行业的发展。一些基于 chromium 的单核，双核浏览器如雨后春笋般拔地而起，例如 搜狗、360、QQ浏览器等等，无一不是套着不同的外壳用着相同的内核。***

> **目前移动设备浏览器上常用的内核有 Webkit，Blink，Trident，Gecko 等，其中 iPhone 和 iPad 等苹果 iOS 平台主要是 WebKit，Android 4.4 之前的 Android 系统浏览器内核是 WebKit，Android4.4 系统浏览器切换到了Chromium，内核是 Webkit 的分支 Blink，Windows Phone 8 系统浏览器内核是 Trident。**

## 1.3	一些国内浏览器的情况

​	目前国内手机浏览器厂商宣称的“自主内核”如UC的U3内核、手机QQ浏览器的X5内核以及华为天天的T9内核(以上均为Android平台)均基于开源内核Webkit开发，在Webkit的基础上进行二次优化，并不能算是完全的自主内核。

​	而在iOS以及WP7平台上，由于系统封闭，不允许除系统自带浏览器内核以外的浏览器内核进入，因此各家浏览器的开发均为在Safari或者IE内核的基础上进行二次开发，优化功能和自制UI。而海豚、遨游等浏览器则直接采用系统自带浏览器的内核，这点从这几款浏览器的HTML5评分与系统自带浏览器评分结果完全一致可见一斑。

​	之前海豚浏览器的负责人针对UC提出内核打架时明确表示真假内核之争毫无意义，大家都是基于Webkit开发的，没有必要睁着眼睛说瞎话。

# 二、移动端开发的一些基础

> 以前在pc端的web那套东西，多数情况下不太适合移动端web开发。
>
> 移动端web相比pc端web有一套自己的开发体系。
>
> h5和css3的知识，在移动端web可以放心的使用，***因为移动端web开发，完全不用考虑ie的感受。***

## 2.1	像素的进一步理解

### 1. 物理像素（physical pixel）

​	一个物理像素是显示器(手机屏幕)上最小的物理显示单元，在操作系统的调度下，每一个设备像素都有自己的颜色值和亮度值。**对于任何一个设备来讲物理像素的数量是固定。**

​	比如：iphone6和iphon7的物理分辨率为750*1334，表示宽和高方向的物理像素的个数分别为750个像素和1334个像素。

### 2. CSS像素

​	CSS像素是Web编程的概念，独立于设备的用于逻辑上衡量像素的单位，也就是说我们在做网页时用到的CSS像素单位，是抽象的，而不是实际存在的。

​	比如：我们在css设置 `width:100px`.  这里的100px就是css像素。在设备上显示的时候，具体跨越多个物理像素，是和每个设备相关的。

### 3. 设备独立像素dip（density-independent pixel）

​	设备独立像素(也叫密度无关像素 dip)，可以认为是计算机坐标系统中得一个点，这个点代表一个可以由程序使用的虚拟像素(比如: ***css像素***)，然后由相关系统转换为物理像素。

​	**其实我们web开发中的css像素，就是一种密度无关系像素。只是叫法不同而已。在web开发的时候称之为css像素，在Android开发中称之为dp(和dip一个概念)**

​	所以说，物理像素和设备独立像素(或者css像素)之间存在着一定的`对应关系`，这就是接下来要说的`设备像素比`.

### 4. 设备像素比dpr（device pixel ratio ）

​	设备像素比(简称dpr)定义了物理像素和设备独立像素(css像素)的对应关系，它的值可以按如下的公式的得到：

***设备像素比 = 物理像素 / 设备独立像素(css像素)			 // 在某一方向上，x方向或者y方向***

> 备注：在javascript中，可以通过`window.devicePixelRatio`获取到当前设备的dpr。

**以iphon6为例：**

1. 设备宽高为`375×667`，可以理解为设备独立像素(或css像素)。
2. dpr为2，根据上面的计算公式，其物理像素就应该`×2`，为`750×1334`。

![](http://o7cqr8cfk.bkt.clouddn.com/17-3-19/55530238-file_1489934361354_130a3.png)

[参考文章](https://www.quirksmode.org/blog/archives/2010/04/a_pixel_is_not.html)

#三、viewport的概念

> 先看一个例子：一个div的宽度为375px。

```css
* {
    padding: 0;
    margin: 0;
}
div {
    width: 375px;
    height: 200px;
    background-color: pink;
}
```
​	我们让这个页面显示在iphone6的浏览器中，由于iphone6的设备宽度为375px，按照我们以前的理解，这个div理应充满整个设备的宽度，但是**实际情况并没有充满整个屏幕**，这又是为什么？

![](http://o7cqr8cfk.bkt.clouddn.com/17-4-23/12614667-file_1492938707500_12489.png)

## 3.1	layout viewport（布局视口）

> ​	在几年前大部分网站都是为pc浏览器而设计，很少考虑到适应手机屏幕。由于手机屏幕相对pc显示要小很多所以如果用手机大多网站时会出现问题。
>
> ​	比如常见固定宽度的网页会出现横向竖向滑动条，当然这还不算什么大问题；但如果是浏览流动布局的网页那情况会非常糟糕，设想一个宽度为 30% 的侧边栏对于 320px 手机屏幕而言也就 96px，只能容纳8个 12px 的汉字，可阅读性非常差。

​	手机浏览器为了在浏览pc页面的时候，不至于出现上面的那些问题，ios上的浏览器就率先使用了一个虚拟窗口的概念。

​	在手机设备上浏览网页的时候会在设备屏幕上创建一个980px(css像素)的窗口，然后用这个窗口来承载网页，为了让用户能够不左右滑动的情况下看到所有的网页内容，浏览器又会自动的缩放这个虚拟窗口，使这个虚拟窗口可以完整的在手机屏幕上显示。那么网页中的内容就会响应的变小。

​	在上面的例子中，整个页面的宽度其实是980px,所以我们设置的375px肯定不会充满整个屏幕的宽度了，而且字体看起来要比pc上看起来小很多。是整个页面进行了缩放的原因导致的。

> **在开发术语中，这个980px的虚拟窗口，我们一般称之为layout viewport。**
>
> 不同的设备和浏览器的layout viewport是不一样的，这就是一个 比较麻烦的地方。
>
> Safari iPhone: 980px  
>
> Opera: 850px 
>
> Android WebKit: 800px 
>
> IE: 974px
>
> 我么可以通过
>
>  `document.documentElement.clientWidth`来获取layout viewport的宽度。(其实就是html元素的宽度)

> 对移动端开发来说，我们会涉及到3个viewport：layout viewport 、visual viewport和ideal viewport。

## 3.2	visual viewport（可视视口）

> 通过上面的学习，我们了解到，如果浏览器不进行缩放的情况下，layout viewport一般情况下要比屏幕的显示尺寸大的多。比如iphon6的显示宽度是375px，而layout viewport的宽度是980px。

> 为了学习和交流的方便，有人就又提出了一个新的名词 **visual viewport**。 visual viewport表示正在浏览的网页的可视区域的大小。比如iphone6如果不进行缩放页面的情况下默认就是 375px*667px。
>
> visual viewport的宽度可以通过`window.innerWidth`来获取。

## 3.3	ideal viewport（理想视口）

> 有了layout viewport和 visual viewport在手机端浏览pc网站的时候，一般可以正常显示，但是用户体验变的很差：
>
> 1. 由于浏览器会对layout viewport的自动缩放，导致同样的尺寸和字体大小，在pc端和移动端看起来差别很大。
> 2. 为了看清文字，用户会放大页面，则又会出现滚动条，需要左右滚动才可以看完整页面。

![](http://o7cqr8cfk.bkt.clouddn.com/17-4-23/13492193-file_1492944976750_7ade.png)

![](http://o7cqr8cfk.bkt.clouddn.com/17-4-23/89495394-file_1492944992272_15203.png)

> ideal viewport(理想视口)的出现就是为了解决上面这些问题的！
>
> ​	ideal viewport并没有一个固定的尺寸，不同的设备拥有有不同的ideal viewport。
>
> ideal viewport的宽度应该等于移动设备的屏幕宽度，只要在css中把某一元素的宽度设为ideal viewport的宽度(单位用px)，那么这个元素的宽度就是设备屏幕的宽度了，也就是宽度为100%的效果。
>
> **ideal viewport 的意义在于，无论在何种分辨率的屏幕下，那些针对ideal viewport 而设计的网站，不需要用户手动缩放，也不需要出现横向滚动条，都可以完美的呈现给用户。**

# 四、viewport语法详解

## 4.1	启用ideal viewport

> 对移动设备来说，默认的viewport是layout viewport，也就是一般情况比屏幕宽的那个viewport,但在移动网站的开发的时候，我们需要的是ideal viewport，那么怎么才能ideal viewport呢?
>
> 启用ideal viewport，只需要在页面中添加一个meta标签，这个meta标签一般添加在head中，而且添加的这个meta标签仅对移动端浏览器有效。

```html
<meta name=“viewport” content=“width=device-width”>
```

> 说明：

1. 这个meta仅对移动端有效.
2. width=device-width的意思是指让当前viewport(layout viewport)的宽度等于设备的宽度(独立设备像素宽度)。比如在iphon6中，这样设置后，layout viewport的宽度就成为375px。 这个时候的viewport就是理想viewport了。



## 4.2	与视口相关的其他参数

> ​	meta viewport 标签首先是由苹果公司在其safari浏览器中引入的，目的就是解决移动设备的viewport问题。后来安卓以及各大浏览器厂商也都纷纷效仿，引入对meta viewport的支持，事实也证明这个东西还是非常有用的。
>
> 苹果共提供了6个相关的参数，可以同时设置多个，不同的参数之间用逗号分隔。
>
> | width         | 设置layout viewport 的宽度，为一个正整数，或字符串"divice-width" |
> | ------------- | ---------------------------------------- |
> | initial-scale | 设置页面的初始缩放值，为一个数字，可以带小数                   |
> | minimum-scale | 允许用户的最小缩放值，为一个数字，可以带小数                   |
> | maximum-scale | 允许用户的最大缩放值，为一个数字，可以带小数                   |
> | height        | 设置layout viewport  的高度，这个属性对我们并不重要，很少使用  |
> | user-scalable | 是否允许用户进行缩放，值为"no"、0或"yes"、1, no 、0代表不允许，yes、1代表允许 |

### 4.2.1	width

1. width的值可以是数值。例如：设置 `width=300` 表示设置layout viewport的值为 300px。
2. width的值也可以是 `width-device`。 例如：设置为 `width=device-width` 表示把layout viewport的值设置为与屏幕的宽度(独立设备像素宽度)一致。这个时候的viewport就是 ideal viewport。



### 4.2.2	initial-scale

这个是设置页面的初始缩放值。他是个倍数。

如果把`initial-scale`的值设置为 1 ,则和 `width=device-width` 的效果是一致的。

initial-scale的值既然是个倍数，通过这个倍数来计算出来layout-viewport的宽度，那么这个倍数是相对于谁的？答案就是相对于设备的宽度(或者理想viewport)。比如iphone6，就是相对于375px像素来计算的。

**例如：inital-scale=2, 则这个时候layout-viewport的宽度 = 理想viewport / 2;**

![](http://o7cqr8cfk.bkt.clouddn.com/17-4-23/60967985-file_1492957773607_156e4.png)

那么如果width和inital-scale同时设置，并且有冲突的时候会怎么样呢？

答案就是：谁计算出来的layout viewport的值大就以谁的为准！

**验证1：**

```html
<meta name="viewport" content="width=200,initial-scale=1">
```

width=200，则layout viewport 的值为200px

initial-scale=1,则layout viewport的值为375px

所以最终layout viwport的值为375px。

![](http://o7cqr8cfk.bkt.clouddn.com/17-4-23/66108442-file_1492958925182_12fdb.png)

**验证2：**

```html
<meta name="viewport" content="width=700,initial-scale=1">
```

width=200，则layout viewport 的值为700px

initial-scale=1,则layout viewport的值为375px

所以最终layout viwport的值为700px。

并且由于700px超出了设备的宽度，则页面也可以左右滑动了。

![](http://o7cqr8cfk.bkt.clouddn.com/17-4-23/19910845-file_1492959250142_c650.png)

------

所以最佳设置为： `width=device-width,initial-scale=1`.

这样他们就不冲突了。

------

### 4.2.3	viewport的通用设置

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
```

# 五、响应式设计

## 5.1	响应式设计概述

​	响应式设计是一个网站搭建的实践尝试，他使得每种设备和屏幕尺寸都能很好的工作，而不论是大屏还是小屏，手机或是pc。响应式设计关注于提供每个人一个直观的感受和满足。使得pc和手机用户都能够从中受益。

​	[响应式设计](http://alistapart.com/article/responsive-web-design)本身的很多术语是由[Ethan Marcotte](http://alistapart.com/author/emarcotte)提出的。他们第一次出现在Ethan在线访谈和他的书中，而且[响应式](http://www.abookapart.com/products/responsive-web-design/)这本书也是很值得一读的。

​	[Food Sense](http://foodsense.is/)是个很漂亮的网站，他响应所有不同的设备尺寸。不管设备尺寸大小如何，食物感官网站都可以轻松适应，给用户一个很自然的用户体验。

​	目前在响应式设计中最流行的技术，就是对于不同浏览器和设备的动态布局设计，他会根据不同的浏览器和设备尺寸的变化，动态改变网页的布局和内容。这个解决方案充分发挥了响应式，自适应和移动设备的三方优势。

***响应式设计主要有三部分组成：流式布局，媒体查询和灵活的媒体类型。***

## 5.2	流式布局

> 流式布局，有人也叫百分比布局。通常在制作网页时候不使用固定的宽度，而是使用百分比。
>
> 流式布局可以动态的调整以适应于任何宽度，多使用相对长度单位，通常是百分比或是em。

​	流式布局不推荐使用固定单位，如px或是英寸。因为屏幕的宽高会随着设备的不同而改变。网站布局需要适应这种变化，而固定单位有太多的限制。幸运的是，Ethan指出用一个简单的公式，就可以在流式布局中使用相对值。

> 公式是用目标元素的宽度除以他父元素的宽度，结果就是目标元素的相对宽度
>
> ```
> target / parent = result	
> ```
>
> 








































