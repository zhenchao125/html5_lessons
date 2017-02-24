# Day01---HTML简介及常用标签

# 一、了解网页

> 看下面的网页案例：

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-23/80126885-file_1487854126525_165bd.png)

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-23/13124916-file_1487854202739_a102.png)

在浏览器中输入网址可以看到需要浏览的网页，那这个网页是怎么生成的呢？

**那我们先了解一下什么是web（互联网总称）:**

​	Web：web（World Wide Web）即全球广域网，也称为万维网，它是一种基于超文本和HTTP的、全球性的、动态交互的、跨平台的分布式图形信息系统。是建立在Internet上的一种网络服务，为浏览者在Internet上查找和浏览信息提供了图形化的、易于访问的直观界面，其中的文档及超级链接将Internet上的信息节点组织成一个互为关联的网状结构。

Web又分为Web前端呢和Web后端。

什么又是Web前端呢和Web后端呢？

前端：就是在Web应用中用户可以看得见碰得着的东西。包括Web页面的结构、Web的外观视觉表现以及Web层面的交互实现。

后端：更多的是与数据库进行交互以处理相应的业务逻辑。

***我们这里着重介绍web前端相关的知识点。***

web前端分为网页设计师、web前端开发工程师。

网页设计师是对网页的架构、色彩负责; 网站得做的漂亮，客户满意。主要需要您有美术功底，会photoshop等。

web前端开发工程师是负责交互设计的，需要和后台程序猿进行交互设计的配合 。需要掌握的有脚本技术javascript、HTML+CSS现下最流行的页面搭建技术，ajax和jquery等。

我们此阶段就是web前端开发师。

大家都上过网吧，我们都浏览过网页，那什么是网站，什么又是网页呢，网页或者网站是怎么形成的呢？

网站用于展示相关内容的网页的集合。

网页是网站中的任何一页面，通常文件扩展名为html、或htm ，那我们要实现一个网页首先需要学习那些技术呢？那就是HTML,其次是CSS，还有还javascript等一些相关的技术。

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-23/35152230-file_1487854617722_a910.png)

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-23/9069277-file_1487854648297_12aef.png)

# 二、HTML简介

## 2.1	什么是HTML

​	HTML（Hyper Text Mark-up Language）即超文本标记语言或超文本链接标示语言，是目前网络上应用为广泛的语言，也是构成网页文档的主要语言。HTML文本是由HTML命令组成的描述性文本，HTML命令可以说明文字、图形、动画、声音、表格、链接等 .也就是说文字、图片、表格、音视频都被看成是文本。这些部分都是用HTML的标签生成的

## 2.2	HTML发展史

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-23/87326892-file_1487854795322_fc28.png)

## 2.3	HTML的特点

1. 简易性
2. 可扩展性
3. 平台无关

   ## 2.4HTML的基本组成单位

HTML的基本组成单位-----标签。

那什么是标签，标签又那些特点呢？我们一一介绍一下。

标签：标记是一些符号，用来区分文档中的不同部分 。

***标签的分类*** 

- 单标签 
- 双标签 

标签的基本写法 

​	单标签 ：某些标签只需单独使用就能完整地表达意思，控制网页效果，这类标签的语法是： 

​			`< 标签名/> `

​	双标签：标签成对使用，由一个开始标签和一个结束标签构成。开始标签告诉Web浏览器从此处开始执行该标签所代表的功能，而结束标签告诉Web浏览器在这里结束该功能，结束标签的形式是在开始标签前加上一个斜杠。语法： 

​			`< 标签名></标签名> `

**标签属性**

在单标签和双标签的开始标签里，还可以包含一些属性，以达到个性化的效果。 

`<标签 属性名1="属性值" 属性2="属性值">内容标签</标签>`

# 三、HTML基本结构

> 了解了以上的知识我们开学习HTML吧。应该那里写HTML呢？在那里运行呢？

## 3.1	HTML的编辑工具

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-23/5049454-file_1487855187062_12b13.png)

## 3.2	HTML的运行环境

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-23/32839379-file_1487855237230_153e9.png)

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-23/80760630-file_1487855290123_14750.png)

## 3.3	HTML基本结构

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-23/48392657-file_1487855377296_1c9a.png)

网页的标题、其它的说明信息及不需要在浏览器中显示的内容放在head这对标签中。

在浏览器中需要显示的内容放在body这对标签中。

另外我们在真正写网页时除了以上的标签之外，我们还需要添加其它的标签，比如文档声明，中文编码声明等，为什么加这些呢？因为我们大家都知道浏览器特别多对吧。浏览器对HTML的代码解析不一样，不加文档声明，会不同的浏览器按自己的标准去解析HTML代码！所以我们在HTML最开始的位置加<!DOCTYPE HTML>这句话,每个浏览器都会按着符合标准的HTML代码去解析，说到标准，我们还要知道HTML是应该遵循谁的标准，HTML要遵循W3C标准，那W3C标准又是什么呢？

W3C标准：万维网联盟创建于1994年。到目前为止，W3C已发布了200多项影响深远的Web技术标准及实施指南，（W3C）标准不是某一个标准，而是一系列标准的集合。网页主要由三部分组成：结构（Structure）、表现（Presentation）和行为（Behavior）。

对应的标准也分三方面：结构化标准语言主要包括[HTML](http://baike.baidu.com/view/15906.htm)和[XML](http://baike.baidu.com/view/63.htm)，表现标准语言主要包括CSS，行为标准主要包括对象模型（如W3C DOM）、ECMA[Script](http://baike.baidu.com/view/266997.htm)等。这些标准大部分由W3C起草和发布。

另外加中文编码声明，是为了浏览器解析中文时以简体中文形式显示。

那中文编码有那些呢？有UTF-8（用在网页上可以统一页面显示中文简体繁体及其它语言）、GB2312(信息交换用汉字编码字符集)等。完整的HTM基本结构如下：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>这是第一个网页</title>
	</head>
	<body>
                           需要在浏览器中显示的内容。

	</body>
</html>
```



# 四、HTML常用标签

## 4.1	标题标签

> 语法:`<h1 align=”center”>内容</h1>`
>
>        常用属性：
>
> align：设置对齐方式.
>
> 属性值有left（左对齐）、center（居中对齐）、right（右对齐）  
>
> 代码：

```html
<body>		
  <h1 align="center">我是一级标题</h1>
  <h2>我是二级标题</h2>
  <h3>我是三级标题</h3>
  <h4>我是四级标题</h4>
  <h5>我是五级标题</h5>
  <h6>我是六级标题</h6>
</body>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-23/82202318-file_1487855526556_13496.png)

## 4.2	段落标签

> 语法：`<p></p>`
>
> 常用属性：
>
> align：设置对齐方式.
>
> 属性值有left（左对齐）、center（居中对齐）、right（右对齐）  
>
> 代码：

```html
<body>
		
		<h1 align="center">赵薇真实身家曝光：资产总值56亿 不动产占6亿</h1>
		<p>澎湃新闻讯 1月11日，浙江万好万家（18.380，0.00，0.00%）文化股份有限公司（600576）发布公告，回复上证所问询。</p>
<p>2016年12月29日，万家文化收到上海证券交易所《关于对浙江万好万家文化股份有限公司权益变动信息披露相关事项的问询函》（上证公函[2016]2483号）（以下简称“《问询函》”），问询函要求西藏龙薇文化传媒有限公司（以下简称“龙薇传媒”）就通过股份转让协议，以30.6亿元对价取得公司1.85亿股份、成为公司控股股东事项作进一步说明和披露。</p>
<p>根据公告显示，龙薇传媒用于本次收购所需资金30亿元万元，全部为自筹资金，其中股东自有资金借款6，000万元，第三方自有资金借款150，000万元，筹资成本为年化利率10%；拟向金融机构股票质押融资149，990万元，目前正在金融机构审批流程中，融资年利率遵守市场化原则，预计6%左右。</p>	
</body>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-23/66642866-file_1487855612116_10b92.png)

## 4.3	三种列表标签

### 4.3.1	无序类别

> 语法:
>
> `<ul >` 
>
> `<li>无序列表项</li>` 
>
> `<li>无序列表项</li> `
>
> `<li>无序列表项</li>` 
>
> ...... 
>
> `</ul> `
>
> 常用属性： 
>
> type：设置符合类型，属性值有circle （空心圆）、 square （黑色方块）、 disc （黑色实心圆） 

```html
<ul>
	<li>吉林省</li>
	<li>黑龙江省</li>
	<li>辽宁省</li>
</ul>
```



![](http://o7cqr8cfk.bkt.clouddn.com/17-2-23/85639180-file_1487855804321_2b1e.png)

### 4.3.2	有序列表

>        语法:
>
> `<ol > `
>
> `<li>无序列表项</li> `
>
> `<li>无序列表项</li> `
>
> `<li>无序列表项</li> `
>
> ...... 
>
> `</ol> `
>
> 常用属性： 
>
> type：设置编号类型，属性值有"a"、"A"、"i"、"I"、"1"（默认）
>
> start：设置编号起始值，属性值为起始的数值，如从2开始就写2 
>
>        代码：

```html
<ol>
	<li>吉林省</li>
	<li>黑龙江省</li>
	<li>辽宁省</li>
</ol>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-23/45749101-file_1487855915267_14a4.png)

### 4.3.3	定义列表

> 语法:
>
> `<dl>`
>
> ​	`<dt>定义项</dt> `
>
> ​	`<dd>描述项</dd> `
>
> ​	`<dd>描述项</dd> `
>
> ​	`<dt>定义项</dt> `
>
> ​	`<dd>描述项</dd> `
>
> ​	`<dd>描述项</dd> `
>
> </dl> 

```html
<dl>
  <dt>吉林省</dt>
  <dd>长春市</dd>
  <dd>吉林市</dd>
  <dt>辽宁省</dt>
  <dd>沈阳市</dd>
  <dd>大连市</dd>
</dl>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-23/11511683-file_1487856046070_608f.png)



## 4.4	其他标签

> pan标签、strong标签、b标签、i标签、em标签 、br标签

> 语法：
>
>       ` <span>内容</span>  <strong>内容</strong> <b>内容</b><i>内容</i>`
>
>      `  <em>内容</em> <br/>`
>
>        **说明：span 标签默认浏览器中没有效果，strong和b标签默认是加粗显示，但strong更多是有强调的作用。i和em是倾斜的意见，但em具有强调的作用。br表示换行的意思。**

```html
<p>
  <span>根据</span><strong>公告</strong><b>显示</b>，<i>龙薇传媒</i><em>用于本次</em>收购所需资金30亿元万元，全部为自筹资金，其中股东自<br>有资金借款6，000万元，第三方自有资金借款150，000万元，筹资成本为年化利率10%；拟向金融机构股票质押融资149，990万元，目前正在金融机构审批流程中，融资年利率遵守市场化原则，预计6%左右。
</p>
<span>根据</span><strong>公告</strong><b>显示</b>，<i>龙薇传媒</i><em>用于本次</em>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-23/96670266-file_1487856259594_11f14.png)



## 4.5	div标签

> 语法:
>
>         ` <div>内容</div>`
>
> 说明:
>
>          Div的中文含义是区块的意思，里面可嵌套任何一个标签。

```html
<div>
  <h3>赵微资产</h3>
  <p>第三方自有资金借款150，000万元，筹资成本为年化利率10%；拟向金融机构股票质押融资149，990万元	</p>
  <ul>
    <li>投资赚来的</li>
    <li>演电影赚的</li>
    <li>演电视剧赚的</li>
  </ul>
</div>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-23/24647270-file_1487856376592_eddb.png)



## 4.6	img标签

> **语法**: `<img src=“图片地址” width=“” height=“” title=“” alt=“” border=“”/> `
>
> **常用属性**：
>
> src：        指定图像的源文件路径，可以使用相对路径、绝对路径或URL。 
>
> width：     指定图像的宽度，单位为像素。
>
> border：   指定图像边框厚度。
>
> alt：         这是用以描述该图像的文字，图像不能显示时将显示该属性值；当鼠标移至图像上时，将该属性值作为提示信息显示。 
>
> Title:         图片的提示信息
>
> 网页中图片的常用格式有三种：gif、jpg、png。相应格式的特点如下
>
> a)    Gif格式只有256种颜色、支持透明、动画
>
> b)   Jpg格式颜色丰富（1670多万种）、文件小
>
> c)    Png格式是无损压缩，文件大，支持透明。【半透明】
>
> 代码：

```html
<img src="img/zhao.jpg" width="400" height="300" title="赵微" alt="zhao.jpg" />
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-23/36115978-file_1487856490889_90b9.png)

## 4.7	a标签（超级链接）

> 语法: `<a href="资源地址“ target =“”>超链接文本及图像</a>`
>
> 常用属性:
>
> href：指定链接地址。若是链接到网站外部，必须为URL地址；若是链接到网站内部页面，只需指明该页面的绝对路径或相对路径。 
>
> target：指定显示链接目标的窗口。 可取如下值： 
>            _self：默认值。当前窗口 。
>            _blank：新打开、未命名的窗口 。
>            _top：清除当前窗口并在整个浏览器窗口显示 。
>            _parent：当前窗口的父窗 口。
>
>   我们在使用img和a标签的时候都用到了路径那先要理解下路径
>
> 路径分为:绝对路径、相对路径.
>
> 绝对路径：完整的描述文件位置的路径就是绝对路径，从盘符或协议名称开始写，如：C:\Users\Administrator\Desktop\web1\1.png， 
>
> (注：火狐浏览器中如果使用绝对路径，可以使用下面的写法：file:///D|a/pic.jpg)
>
> 相对路径：就是自己相对于目标位置，可以分为三种情况 
>
> a)      网页文件和图片位于同一个文件夹下：直接写图片名，如src="1.png"
>
> b)      网页文件和图片不在同一个文件夹下，图片位于另外一个文件夹里面：先写文件夹的名，再写文件名，如src="a\1.png"
>
> c)      网页文件和图片不在同一个文件夹下，网页文件位于另外一个文件夹里面：先使网页文件跳出文件夹，再写文件名，如src="..\1.png"

```html
	<a href="demo.html" target="_blank">需要添加链接的文字</a>
	<a href="img/zhao.jpg" target="_self">链接的内容是图片</a>
	<a href="source/QQ8.3.exe">链接的内容是exe文件</a>
	<a href="source/setup10th_7.15.0.0.zip">链接的内容是压缩软件</a>
	<a href="source/d.mp4">链接的内容是视频文件</a>
	<a href="source/o.mp3">链接的内容是音频文件</a>
	<a href="source/知识点总结.docx">链接的内容是office文档</a>
	<a href="http://www.baidu.com"><img src="img/bd_logo.png" width="100"></a>
	<a href="http://www.w3school.com.cn">W3School</a>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-23/85486488-file_1487856655751_4481.png)

# 六、THML4.0与HTML5.0规范

–     Html4.0的基本规范 

•      标签名和属性名称不区分大小写 

•      HTML标签不必全部关闭

•      属性值用引号或者不用引号括起来 

•      标签必须正确嵌套

•      文档必须拥有一个根元素，所有的XHTML元素必须嵌套于<html>根元素中 

–     XHTML基本规范 

•      标签名和属性名称必须小写 

•      HTML标签必须关闭 

•      属性值必须用引号括起来 

•      标签必须正确嵌套

•      文档必须拥有一个根元素，所有的XHTML元素必须嵌套于<html>根元素中 

–     Html5的基本规范：对于html4和xhtml的规范都可以并对在基础上又做了简化。                                 

**渐进增强和优雅降级**

# 七、HTML4.0与HTML5.0的区别

A、<!DOCTYPE>声明:HTML也有很多个不同的版本，只有完全明白页面中的使用的确切HTML版本， 浏览器才能完全正确地显示出HTML页面。这就是<!DOCTYPE>用处.

    HTML5： 

           <! DOCTYPE  html>

    HTML4.01 

​		<!DOCTYPEHTML PUBLIC "-//W3C//DTD HTML 4.01 

​				Transitional//EN""http://www.w3.org/TR/html4/loose.dtd">

    XHTML 1.0 

           <!DOCTYPE html PUBLIC"-//W3C//DTD XHTML 1.0 

​			Transitional//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

B、编码设置

    HTML5:

           `<metacharset="utf-8">`

    HTML4.01:

           `<metahttp-equiv="Content-Type" content="text/html;charset=utf-8" /> `

 

  C、type省略

         **HTML5**

​		`	<style></style>    `                        

​		`<link href=“” rel=“stylesheet”/>        `        

​		`<script></script>  `

          **HTML4**  	

​		`<style type=”text/css”></style>   `                      

​		`<link href=“” rel=“stylesheet” type=”text/css”/>  `           

​		`<script type=”text/javascript”></script>`

       D、HTML5新增了一些标签，也废弃了一些标签

        **新增标签**

`•    	<article>`

`•      <aside>`

`•      <audio>`

`•      <canvas>`

`•      <footer>`

`•      <header>`

`•      <hgroup>`

`•      <section>`

`•      <time>`

`•      <video>`

`•      。。。。`

**废弃标签**

a)      能用css代替的元素basefont、big、center、font、s、strike、tt、u 

b)      不再使用frame框架 

c)      只有部分浏览器支持的元素applet、bgsound、blink、marquee等标签 

d)      其他被废除的元素 Rb acronym dir isindexlisting xmp nextid plaintex 