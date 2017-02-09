# 移动端_Day01---HTML5

> **作者：李振超**

# 一、了解HTML5

> 是对 HTML 标准的第五次修订。其主要的目标是将互联网语义化，以便更好地被人类和机器阅读，并同时提供更好地支持各种媒体的嵌入。HTML5 的语法是向后兼容的。    
>
> HTML5 是从 Web Applications 1.0 项目发展而来的， 由网页超文本技术工作小组 （WHATWG）发起，后被 W3C 采纳。HTML5 规范的大部分内容都偏重于处理 Web 应用 程序。
>
> **目前最新的HTML5.1标准在2016发布，并且成为w3c的推荐标准。**HTML5.2标准亦在制定中。

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-8/15028388-file_1486542034941_221e.png)



​	*HTML5不仅仅是对HTML的升级改进，更加体现了 **Web应用程序** 这个概念。THML5目前是包括CSS3和JavaScript技术在内的技术和标准的统称。*

​	*HTML5更重要的是它制定了Web应用开发的一系列标准，成为第一个将Web做为应用开发平台的HTML语言。*

> HTML5定义了一系列新元素，如新语义标签、智能表单、多媒体标签等，可以帮助开发者创建富互联网应用，还提供了一些Javascript API，如地理定位、重力感应、硬件访问等，可以在浏览器内实现类原生应用，甚至结合Canvas我们可开发网页版游戏。
>
> **广义概念：HTML5代表浏览器端前端技术的一个新发展阶段。在这个阶段，浏览器呈现技术得到了一个飞跃发展和广泛支持，HTML5是包括：HTML5，CSS3，Javascript API在内的一套技术组合**

# 二、HTML5语法规范

> 特点：HTML5的语法更简洁和更宽松
>
> HTML5在语法规范上也做了比较大的调整，去除了许多冗余的内容，书写规则更加简洁、清晰。

1. 简洁的文档声明。

```html
//HTML5的文档声明
<!DOCTYPE html>

//下面是以前的4.01过渡版本的文档声明
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
        "http://www.w3.org/TR/html4/loose.dtd">
```

2. 标签支持大写和小写。

> **建议：开发过程中所有标签名小写！**

3. 空标签可以关闭也可以不关闭。

> 建议：所有的标签都有关闭，空标签也建议关闭。   对自己来说至少要做到统一。比如：空标签要么都关闭要么都不关闭。

```html
<!--空标签可以不关闭-->
<img src="" >
<!--空标签也可以关闭-->
<img src="" />
```

4. 双标签可以省略结束标签。但是建议永远不要省略，因为浏览器在自动给你补齐的时候，可能并不是你想要的。

```html
<!--在html5中，这是完全合法的。 只有开始标签没有结束标签-->
<div id=box>
```

5. 属性值双引号("")或单引号('')均可以省略。

> 建议：不要省略双引号和单引号

```html
<!--属性值的引号可以省略。 但是有一点例外：属性值如果有空格的时候，则引号不能省略，比如多个类名-->
<div id=box></div>
```

6. script、style、link标签的type属性可以省略。

```html
<!--属性 type="text/css" 可以省略-->
<style></style>
<!-- type="text/javascript" 可以省略-->
<script></script>
<!-- type="text/css" 可以省略-->
 <link rel="stylesheet" href=""/>
```

7. 更简单方法指定字符编码

```html
<!--HTML5指定页面字符编码的方式-->
<meta charset="UTF-8">

<!--以前的版本指定页面字符编码的方式-->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
```

7. html、head、body可以完全省略。

> **建议永远不要省略！**
>
> 而且省略后有些浏览器中可能会崩溃

# 三、HTML5新增语义标签

## 3.1	常用新增结构化语义元素

> 在以前的html中，我们通常会用很多的div来给网页布局，然后给div定义有一个意义的类。这种情况一般情况下程序员是能读的的懂的，但是搜索引擎很难理解每个div到底代表什么意思。
>
> 看下面的代码：

```html
<body>
<div id="wrapper">
  
    <!--the header -->
    <div id="header">
        
        <div id="logo"></div>
        <div id="navigation">
            <ul>
                <li><a href="#">Why?</a></li>
            </ul>
        </div>
    </div> 
  
    <!-- the content -->
    <div id="content">
    </div> 
  
    <!-- the sidebar -->
    <div id="sidebar">
    </div> 
  
    <!-- the footer -->
    <div id="footer">
    </div>
</div>
</body>
```

> HTML5 旨在使用新增的全新语义化元素来解决这 个问题。

### 3.1.1	标签:`<section>`

> `<section>`元素用来定义文档或应用程序中的区域（或节）。例如，可以用它组织你的个 人信息，一个`<section>`用于联系信息，另一个用于新闻动态。需要重点理解的是用它 的目的不是为了美化样式。如果你只想将某个元素包裹起来以便设置样式，那应该和以 前一样继续使用`<div>`。

> section 元素代表文档或应用的一个一般的区块。 section 是具有相似主题的一组内容， 通常 包含一个标题。

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>section</title>
</head>
<body>

<section>
    <h1>苹果</h1>
    <p>
        一种树上结的果子，很甜，有的也酸
    </p>
</section>

<section>
    <h1>香蕉</h1>
    <p>
        一种书上结果的水平，很长，很黄，女生比较喜欢吃
    </p>
</section>

</body>
</html>
```

### 3.1.2	标签:`<nav>`

> `<nav>`元素用来定义文档的主导航区域，其中的链接指向其他页面或当前页面的某些区 域。因为`<nav>`用于主导航区域，所以严格来讲它不是为页脚或其他经常会包含一组链 接的区块而设计的***（虽然将它用在这些区块里包含链接也没问题）***。
>
> **将一组链接指定为重要导航!**
>
> 比如一个网站的最上方的主导航。

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-8/27009815-file_1486562197263_17c76.png)

```html
<!DOCTYPE html>
<html>
<body>

<nav>
  <a href="/html/">HTML</a> |
  <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a> |
  <a href="/jquery/">jQuery</a>
</nav>

</body>
</html>
```

### 3.1.3	标签:`<article>`

> `<article>`元素表示文档、页面、 应用或网站中一个独立的容器， 原 则上是可独立分配或可再用的， 就 像聚合内容中的各部分。 它可以是 一篇论坛帖子、一篇杂志或报纸文 章、一篇博客条目、一则用户提交 的评论、一个交互式的小部件或小 工具，或者任何其他独立的内容项。
>
> `<article>`元素用来包裹独立的内容片段。当搭建一个页面时，想 想你准备放入`<article>`标签的内容能否作为一个整块而被复制粘贴到另外一个完全不 同的网站且能保持完整的意义？另一种办法是，想想包裹在`<article>`中的内容能否在 RSS 订阅源中独立成为一篇文章？**应该使用`<article>`标签包裹的内容，最明显的例子 就是博客正文。**

注意：

`<article>`元素与`<section>`元素很容易混淆。

在考虑何时使用 section 的时候， 记住定义中“具有相似主题的一组内容”这一条是 很有帮助的。 这也是 section 区别于 div 的另一个原因。 

section 和 article 的区别在于， section 在本质上组织性和结构性更强，而 article 代表的是自包含的容器。

**对内容进行标记时，并非总能分出对和错，只是大多数时候有正确的选择。而其他时候，就只能依靠个人对最适合描述内容的 HTML 元素的感觉了。**

==在考虑是否使用 section 的时候，一定要仔细思考，不过也不必每次都对是否用对感到 担心。有时，些许主观并不会影响页面正常工作。==

### 3.1.4	标签:`<aside>`

> `<aside>`元素用来表示与页面主内容松散相关的内容。在实践中，我经常将其用作侧边 栏（当它包含合适的内容时）。另外，引文、广告以及导航元素（如友情链接等）也可以 使用它。

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-8/92867099-file_1486563351724_176cb.png)

### 3.1.5	标签:`<header>`

> 如果页面中有一块包含一组介绍性或导 航性内容的区域， 应该用 header 元素对其进 行标记。
>
> 一个页面可以有任意数量的 header 元 素， 它们的含义可以根据其上下文而有所不 同。 例如， 处于页面顶端或接近这个位置的 header 可能代表整个页面的页眉（有时称为 页头）
>
> 通常，页眉包括网 站标志、主导航和其他全站链接， 甚至搜索框。这无疑是 header 元 素最常见的使用形式。

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-8/48221838-file_1486563772606_172b8.png)

### 3.1.6	标签:`<footer>`

> 当你想到页脚的时候， 你大概想的是页 面底部的页脚（通常包括版权声明， 可能还 包括指向隐私政策页面的链接以及其他类似 的内容）。HTML5 的 footer 元素可以用在 这样的地方， 但它同 header 一样， 还可以用 在其他的地方。

> footer 元素代表嵌套它的最近的 article 、aside 、 blockquote 、 body 、 details 、 fieldset 、 figure 、 nav 、 section 或 td 元 素 的页脚。 只有当它最近的祖先是 body 时， 它才是 整个 页面的页脚。

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-8/24777218-file_1486564157878_b223.png)

## 3.2	常用非结构化语义标签

> `<audio>，<video>，<canvas>，<datalist>，<details>，<figure>，<figcaption>,<mark>，<progress>，<source>，<time>`
>
> 多媒体标签：`<audio>，<video>，<source>`。后面专门去讲
>
> 画布：`<canvas>`。很多js API，后面专门去讲
>
> 表单元素：`<datalist>`，配合表单元素，下章专门去讲。

###3.2.1	标签:`<figure>`和`<figcaption>`

> `<figure>` 标签规定独立的流内容（图像、图表、照片、代码等等）。
>
> `<figure>` 元素的内容应该与主内容相关，同时元素的位置相对于主内容是独立的。如果被删除，则不应对文档流产生影响。
>
> `<figure>`主要用来标记图片的。

以前添加图片列表经常这样写：

```html
<li>
   <p>这个是个美女图片</P><img src="" />
</li>
```

上面这种写法明显没有语义。使用figure可以增加语义。使用`<figure>`**替换掉**`<li>`

```html
<figure>
  <p>这个是美女图片</p>
  <img src="meinv.jpg" />
</figure>
```

**`<p>`**是这个图片的标题，则可以使用**`<figcaption>`**来替换

```HTML
<figure>
  <figcaption>这个是美女图片</figcaption>
  <img src="meinv.jpg" />
</figure>
```

### 3.2.2	标签:`<mark>`

> `<mark>` 标签定义带有记号的文本。
>
> 出于引用的目的，对与另一个上下文相关的文本进行突出显示

```html
<h1>美女</h1>
<p>四大<mark>美女</mark></p>
<p>杨玉环是<mark>美女</mark></p>
<p>凤姐也是<mark>美女</mark></p>
```

效果：

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-9/79583762-file_1486610329611_7512.png)

### 3.2.3	标签:`<progress>`

>  它指示某项任务的完成进度。 可以用它表示一个进度条

```html
<progress></progress>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-9/38677347-file_1486610760981_16447.png)

> progress主要支持三个可选的属性：max，value和form

- max属性指定任务的总工作量。其值必须大于0.其默认值是1
- value是任务已经完成量。
- form的含义，下章讲表单的时候再讲。

> 可以通过js来动态的更改value的值，从而达到显示任务动态的完成情况。

```html
<progress max="100"></progress>
<script type="text/javascript">
    var pro = document.getElementsByTagName("progress")[0];
    var i = 0;
    setTimeout(function step() {
      	//更改progress的value的值
        pro.value = i++;
        if(i == 100) return;
        setTimeout(step, 100);
    }, 100)
</script>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-9/95404631-file_1486611896104_3560.gif)

### 3.2.4	标签:`<time>`

> 在以前的网页中没有标准的语义标签来表示时间，<time>标签填补了这个空白。其目的是让时间有语义，让搜索引擎等其它程序可以更容易的提取这些信息。
>
> **time标签在任何浏览器中都不会呈现出任何特殊的显示效果。**

1. `<time>`元素可以标注日期，时间或日期与时间的组合（日期格式是YYYY-MM-DD）

```html
出生日期<time>2010-03-20</time>
```

2. 也可以使用任何格式来显示日期，只要在datetime属性中提供计算机能看懂得通用格式日期即可。

```html
出生日期<time datetime="2010-03-20 10:52">2010年03月20日下午11点<time>
```

# 四、增强的表单元素

> 过去，想要让表单风格跨浏览器保持一致是很困难的。而且还需要 JavaScript 来验证表单 输入，此外，也缺少一些处理日常信息（如电话号码、电子邮箱以及 URL）的输入类型。
>
> 好消息是 HTML5 基本上解决了这些常见的问题。

## 4.1	HTML5的新增输入类型

> HTML5 新增了很多输入类型，它们最大的作用就是可以限制用户输入的数据，不需要引 入额外的 JavaScript 代码。这些新的输入类型最赞的一点，就是在那些不支持新特性的浏 览器中，它们会被降级显示为一个标准的文本输入框。
>
> 在移动端显示的时候，不同的输入类型弹出的虚拟键盘的布局是不一样的。

### 4.1.1	email类型

> 要求输入的内容中是个email，即必须包含@符号。
>
> 当提交的信息不符号格式时，浏览器会生成警告信息。
>
> **注意：不同的浏览器警告信息是不同的。**

```html
<form action="#">
    <input type="email">
    <p><input type="submit"></p>

</form>
```

chorme:

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-9/35371060-file_1486620625766_afec.png)

firfox:

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-9/65783037-file_1486620861251_bc5a.png)

> 在移动终端设备，会根据输入类型改变键盘模式。
>
> 

Android手机:键盘是全键盘形式，比较方便输入。

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-9/14752775-file_1486622738624_7652.png)



### 4.1.2	number类型

> 要输入的内容是数字。
>
> 这种输入类型默认还提供控制按钮，允许用户简单地点击向上或向下来改变数值。
>
> 只能输入数字。(小数点是可以)
>
> 也可以添加属性min和max来限制输入的数字的范围。

```html
<form action="#">
    <input type="number" min="10" max="30">
    <p><input type="submit"></p>

</form>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-9/69110816-file_1486622976400_f949.png)

### 4.1.3	url类型

> 要求必须输入一个合法的url。

### 4.1.4	tel类型

> 期望输入一个电话号码。
>
> 由于各个地区的电话号码格式都不一样，所以目前几乎所有的浏览器都不会对电话号码做出验证。只是在移动弹出的虚拟键盘不一样而已。

### 4.1.5	search类型

> 这个在浏览器中显示和普通的文本输入框没有太大区别。
>
> 只是在chrome中会有个快速删除的按钮出现。

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-9/85123748-file_1486623794721_1036f.png)

### 4.1.6	color类型

> 会在支持该特性的浏览器中生成一个颜色选择器，让用户可以选择十六进制的颜色值。

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-9/43591321-file_1486624156089_1ddf.png)

> 移动端：

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-9/8405331-file_1486624373374_11c1.png)

### 4.1.7	range类型

> 会生成一个滑动条滑动条可以手动拖动。

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-9/10268210-file_1486624502173_12910.png)

> 这个滑动条最大的不便是不给用户展示当前的进度。如果非要显示进度只能通过js来完成。

```html
<form action="#" method="get">
    <p>30</p>
    <input type="range" name="a" min="0" max="100" value="30" onchange="show(this);">
    <p><input type="submit" value="提交"></p>
</form>
<script type="text/javascript">
    var p = document.getElementsByTagName("p")[0];
    function show(ele) {
        p.innerHTML = ele.value;
    }
</script>
```

### 4.1.7	时间相关类型：date、month、week、time、datatime

> 把type设置成这几个值，会和设置成color差不多，会弹出一个与日期时间相关的选择器，可以从中选择日期或时间。
>
> 在移动端显示效果会好一些。pc端目前只有chrome实现了，firefox和safari还没有实现。

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-9/97268477-file_1486625234785_157c2.png)

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-9/50522477-file_1486625345280_16cf9.png)

## 4.2	HTML5表单中新增属性

### 4.2.1	placeholder属性

> 在用户没有输入任何文字时，显示placeholder的值。就是占位符，并且给用户提示要输入什么样的类型的数据。当用户输入数据后，placeholder的值会自动消失

```html
<form action="#">
    <input type="text" placeholder="请输入你的账号">
    <input type="submit" value="提交">
</form>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-9/6942410-file_1486626455632_ba7b.gif)

### 4.2.2	required

> 表示这个表单元素必须输入，否则提交失败。
>
> required只写属性名可以不写属性值，如果写属性值就和属性名保持一致就可以了。
>
> required="rquired"

```html
<form action="#">
    <input type="text" placeholder="请输入你的账号" required>
    <input type="submit" value="提交">
</form>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-9/30067012-file_1486626859984_172b6.gif)

### 4.2.3	autofocus

> 表示这个表单元素自动获取焦点。当打开页面的时候，有autofuc的元素会自动获取用户的焦点。
>
> **在整个页面中不要让多个元素获取焦点，否则有可能会出现混乱，不同的浏览器处理方式不一样，有的是先出现的获取，有的后出现的获取。**

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-9/28886436-file_1486627109844_fe1a.gif)

### 4.2.3	autocomplete

> 很多浏览器默认提供自动完成功能以帮助用户输入。以往用户可以在浏览器设置中打开 或关闭这项功能，现在我们还能告知浏览器我们不想在某个表单或表单域上使用自动完 成功能。这不仅仅能保护敏感数据（例如银行账户），还可以让你确保用户用心填写表单， 手工输入一些值。
>
> autocomplete属性有两个值：on和 off。 

正常情况，高级浏览器都开启了自动完成功能：

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-9/89303995-file_1486627697996_4e7.png)

把autocomplete的属性值改成off之后，则不会再有自动完成功能，只能挨个手动输入。

```html
<form action="#">
    <input type="text" autocomplete="off" name="user">
    <input type="submit" value="提交">
</form>
```

> **注意：也可以把这个属性给form标签，则这个form下的所有input都不会再有自动完成功能！**

### 4.2.4	list属性和`listdata`标签

> list 属性以及对应的 datalist 元素可以让用户在输入框中开始输入值的时候，显示 一组备选值。

```html
<form action="#">
    输入你喜欢的编程语言:<input type="text" name="lang" list="data">
    <datalist id="data">
        <option value="java">java大法好</option>
        <option value="javaScript">javaScript更牛叉</option>
        <option value="c">c比较难</option>
        <option value="c#">微软的贼船不要上</option>
        <option value="c++">比c还难</option>

    </datalist>

</form>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-9/38983629-file_1486629322340_155ec.gif)

### 4.2.5	form属性

> HTML5出来之前，我们的表单元素都必须在`<form>`标签下。
>
> 现在，有了form属性，即使把表单元素写在了`<form>`标签外面，也可以成为这个表单的一部分被提交。
>
> **注意：form属性是那些表单元素`<input>`的属性**，他的值是某一个`<form>`的 id值
>
> 在表单特别复杂的时候比较有用。

```html
<!--这个input就属于id是form1的form-->
<input type="text" name="user" form="form1">
<form action="#" id="form1">
    <input type="submit">
</form>
```

### 4.2.6	novalidate属性

> 关闭表单的自动验证功能。比如我们添加了required属性，则如果没有输入则不准提交，如果再添加上novalidate属性，则不再进行任何的验证。
>
> 注意：novalidate是用在`<form>`标签中
>
> 多了解一点：给提交提交按钮添加属性 formnovalidate 和在 `<form>`中添加novalidate属性是一样的效果。

### 4.2.7	pattern属性

> 表单的默认验证功能比较弱，pattern属性接收一个字符串形式的正则表达式，来验证表单。

```html
<form action="#">
    <input type="tel" pattern="1[3578]\d{9}" placeholder="请输入11手机号码">
    <input type="submit">
</form>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-9/59974086-file_1486631807152_1545a.png)

> 如果感觉自带的验证不通过的提示太low，可以自定义不同过时的提示信息。
>
> 只需要在响应的表单元素(input)中添加属性title，他的值就是自定义的提示信息

```html
<form action="#">
    <input type="tel" pattern="1[3578]\d{9}" placeholder="请输入11手机号码"
    title="你神经病，你家的电话是这个格式啊">
    <input type="submit">
</form>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-9/10893100-file_1486632022637_15ec3.png)

### 4.2.7	disabled属性

> 在某些情况下， 你可能不想让访问者使用表单中的某些部分。 例如， 你可能希望 在所有必填字段完成之前禁用提交按钮。
>
> 可以使用disabled属性完成这个功能。
>
> 写法：disabled或disabled="disabled"

```html
<form action="#">
    <input type="text">
    <input type="button" value="我是被禁用的按钮" disabled>
</form>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-9/79684486-file_1486632454642_13bf1.png)

### 4.2.8	readonly属性

> 让一个表单只读
>
> 只能用于允许用户输入的表单元素。使用readonly后，则这个表单元素就成为只读而无法输入了。

> 注意：**disabled和readonly**都是让这个元素处于只能看到不能更改的状态，但是他们还是有很大的区别的。
>
> 1. 作用范围： disabled可以用在任何的表单元素中。readonly只能用于允许用户输入的表单元素。
> 2. 对元素的影响：disabled属性阻止对元素的一切操作，例如获取焦点，点击事件等等。
>    `readonly`属性只是将元素设置为只读，其他操作正常。
> 3. 表单提交：`disabled`属性可以让表单元素的值无法被提交。`readonly`属性则不影响提交问题。

# 五、文件API





