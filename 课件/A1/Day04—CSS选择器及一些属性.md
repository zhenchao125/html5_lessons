# Day04—CSS选择器及一些属性

# 一、关系选择器

|       |                |
| ----- | -------------- |
| 选择器   | 功能             |
| E F   | 后代选择器          |
| E>F   | 子元素选择器         |
| E+F   | 选取当前元素后一个兄弟元素  |
| E ~ F | 选取当前元素后所有的兄弟元素 |

## 1.1	后代选择器 E F

> ​	找到页面中相应的的子元素及孙子及重孙子元素，因为这些元素都是后代元素，我们把标签的第一层嵌套的元素叫子元素，再一层嵌套及以后嵌套的元素及子元素都叫后代元素。（当然也是相对的）。
>
> 后代选择器可以是我们第三章讲过的所有的基本选择器中的一种.
>
> **我们先理一下元素之间的层次关系。**

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			
		</style>
	</head>
	<body>
		<div>
			<p>相关的内容<span>我是div的孙子元素（后代元素），但是我也是p的儿子，这就体现出“相对”了</span></p>
			<span>我是div的儿子,并且我是p紧邻的兄弟元素，我还是p后面的所有的兄弟元素</span>
			<span>我是p后面的所有的兄弟元素</span>
		</div>	
</body>
</html>
```

> 看下面的代码：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			div span{
				background-color: yellow;
			}
		</style>
	</head>
	<body>
		<div>
			<p>相关的内容<span>我是div的孙子元素（后代元素）</span></p>
			<span>我是div的儿子</span>
			<span>我是div的儿子</span>
		</div>
	</body>
</html>

```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/95945623-file_1488025160373_cb03.png)

## 1.2	子元素选择器 E>F

> 找到页面中相应元素的子元素

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			div > span{
				background-color: yellow;
			}
		</style>
	</head>
	<body>
		<div>
			<p>相关的内容<span>我是div的孙子元素（后代元素）</span></p>
			<span>我是div的儿子</span>
			<span>我是div的儿子</span>
		</div>
	</body>
</html>

```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/55533442-file_1488025284449_8baa.png)

## 1.3	下一个兄弟元素 E+F

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			p+span{
				background-color: yellow;
			}
		</style>
	</head>
	<body>
		<div>
			<p>相关的内容<span>我是div的孙子元素（后代元素）</span></p>
			<span>我是p的紧邻的元素</span>
			<span>我是p后面的所有的元素</span>
		</div>
	</body>
</html>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/91753078-file_1488025388762_554f.png)

## 1.4	当前元素的所有的兄弟元素 E~F

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			p~span{
				background-color: yellow;
			}
		</style>
	</head>
	<body>
		<div>
			<p>相关的内容<span>我是div的孙子元素（后代元素）</span></p>
			<span>我是p后面的所有的元素</span>
			<span>我是p后面的所有的元素</span>
		</div>
	</body>
</html>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/2376985-file_1488025467101_7767.png)

## 1.4	如何使用关系选择器

> 关系选择器我们经常使用，因为我们写代码的时候，经常这样写：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>CSS选择器</title>
	</head>
	<body>
		<div>
			<h3>我是h3标签</h3>
			<p>我是段落标签</p>
			<input type="button" value="提交" />
		</div>
      
		<div>
			<h3>我是h3标签</h3>
			<p>我是段落标签</p>
			<input type="button" value="提交" />
		</div>
	</body>
</html>
```

​	*观察上面的两段代码，以后我们写代码经常会这样写，一模一样的代码，我们设置第一个div的h3，p,input标签，第二个div里的h3，p,input标签不一样怎么办，我们不可能再定义很多个类别选择器对吧，所以我们就想到了用关系选择器。*      

​	来看代码：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>CSS选择器</title>
		<style type="text/css">
			.box_1 h3{
				color: red;
			}
			.box_1 p{
				color: greenyellow;
			}
			.box_1 input{
				color: blue;
			}
			.box_2 h3{
				color: pink;
			}
			.box_2 p{
				color: violet;
			}
			.box_2 input{
				color: orange;
			}
		</style>
	</head>
	<body>
		<div class="box_1">
			<h3>我是h3标签</h3>
			<p>我是段落标签</p>
			<input type="button" value="提交" />
		</div>
      
		<div class="box_2">
			<h3>我是h3标签</h3>
			<p>我是段落标签</p>
			<input type="button" value="提交" />
		</div>
	</body>
</html>


```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/10011881-file_1488026272454_15e01.png)

# 二、动态伪类选择器

| 动态伪类选择器   |           |
| --------- | --------- |
| 选择器       | 功能        |
| E:link    | 加了超链接时的样式 |
| E:visited | 访问过之后的样式  |
| E:hover   | 鼠标滑过的样式   |
| E:active  | 鼠标点击时的样式  |

> ​	动态伪类选择器，常给a标签使用，尤其是在IE6的年代，只能给a标签使用.
>
> ​	但是在最新的浏览器，动态伪类选择器可以给任何一个标签使用。
>
> ​	另外还要注意一点，写动态伪类选择器时，还要注意他的顺序，他顺序一定按照定义: link,:visited,:hover,:active的顺序定义，要不有的浏览器会识别的不是很好。
>
> ​	方便大家记忆我们给其取个名字叫”爱恨原则”,也就是”LoVeHAte”.
>
> ​	好了，其实我们在学习a标签的时候，我们已经注意到了只要给文字添加了超链接，文字本身就会自带颜色，而这些效果往往不是我们不想要的。我们需要从新定义文字的状态。我们先来看一下原始状态。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>CSS选择器</title>
		<style type="text/css">
		
		</style>
	</head>
	<body>
		<a href="#">加了超链接的文字状态</a>
	</body>
</html>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/87113416-file_1488026978380_ff9b.png)

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/35400558-file_1488027046166_10ebe.png)

> ​	以上四种状态时默认的时候的状态，不是我们想要的，
>
> ​	如果我们想改变，就要从新设置这四种状态的样子就可以了。（因为我们学的样式还不多，所以我们主要还是以颜色为例，其实下划线及背景颜色等都是可以改变的）请看代码：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>CSS选择器</title>
		<style type="text/css">
			a:link {color:red;}/*红色*/
			a:visited {color:blue;}/*蓝色*/
			a:hover {color:greenyellow;}/*黄绿色*/
			a:active {color:orange;}/*橙色*/
		</style>
	</head>
	<body>
		<a href="#">加了超链接的文字状态</a>
	</body>
</html>

```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/53266347-file_1488027144783_7696.png)

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/55644450-file_1488027192212_4931.png)

> ​	其实我们在页面中看到的超链接的状态，不需要分设置这四种情况，
>
> ​	这样设置的办法一是麻烦，二是浏览器中也存在着兼容问题（比如在谷歌浏览器中，给多个文字添加了超链接，我们只是点了其中一个，另其它的颜色都变成了访问过之后的了）。
>
> ​	所以我们平时只需要设置a标签的状态，他表示四个状态，然后我们再设置：hover的状态，就把a标签的:hover的状态给替换掉了。就解决了以上两种问题

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>CSS选择器</title>
		<style type="text/css">
			a{
				color:red;	/*红色*/
			}
			a:hover{
				color:greenyellow;/*黄绿色*/
			}
		</style>
	</head>
	<body>
		<a href="#">加了超链接的文字状态</a>
		<a href="#">加了超链接的文字状态</a>
	</body>
</html>

```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/80531277-file_1488027325111_10dab.png)

# 三、结构性伪类选择器

| 结构性伪类选择器              |                      |
| --------------------- | -------------------- |
| 选择器                   | 功能                   |
| **E:first-child**     | 匹配父元素的第一个子元素         |
| **E:last-child **     | 匹配父元素的最后一个子元素        |
| **E:nth-child(n) **   | 匹配父元素的第n个子元素         |
| E:nth-last-child(n)   | 匹配父元素的倒数第n个子元素E      |
| E:only-child          | 匹配父元素仅有的一个子元素E       |
| **E:first-of-type **  | 匹配同类型中的第一个同级兄弟元素E。   |
| **E:last-of-type **   | 匹配同类型中的最后一个同级兄弟元素E。  |
| E:only-of-type        | 匹配同类型中的唯一的一个同级兄弟元素E。 |
| **E:nth-of-type(n)**  | 匹配同类型中的第n个同级兄弟元素E。   |
| E:nth-last-of-type(n) | 匹配同类型中的倒数第n个同级兄弟元素E。 |

>  好了，我们对以上的结构性伪类选择器不做全部讲解，我们只讲一些在制制作网页时常用到的，其它我们可以参考一下手册就可以学会了！

## 3.1	E:first-child：匹配父元素的第一个子元素	

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>CSS选择器</title>
		<style type="text/css">
			p:first-child{
				color: red;
			}
		</style>
	</head>
	<body>
		<div>
			<p>我是div第一个子元素</p>
			<p>我是div第二个子元素</p>
			<p>我是div第三个子元素</p>
			<p>我是div最后一个子元素</p>
		</div>
	</body>
</html>

```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/24333869-file_1488027628820_666b.png)

##3.2	E:last-child  匹配父元素的最后一个子元素
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>CSS选择器</title>
		<style type="text/css">
			p:last-child{
				color: red;
			}
		</style>
	</head>
	<body>
		<div>
			<p>我是div第一个子元素</p>
			<p>我是div第二个子元素</p>
			<p>我是div第三个子元素</p>
			<p>我是div最后一个子元素</p>
		</div>
	</body>
</html>
```
![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/56051323-file_1488027695829_1621f.png)

##3.3	E:nth-child(n)  匹配父元素的第n个子元素
>注意n是从1开始的。N的写法可以用多种，比如(2n、2n+1、odd、even等)

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>CSS选择器</title>
		<style type="text/css">
			p:nth-child(2){
				color: red;
			}
		</style>
	</head>
	<body>
		<div>
			<p>我是div第一个子元素</p>
			<p>我是div第二个子元素</p>
			<p>我是div第三个子元素</p>
			<p>我是div最后一个子元素</p>
		</div>
	</body>
</html>

```
![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/91899270-file_1488027797049_18355.png)

##3.4	综合案例
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>CSS选择器</title>
		<style type="text/css">
			li:nth-child(even){
				color:greenyellow;
			}
			li:nth-child(odd){
				color:deeppink;
			}
			li:first-child{
				color: red;
			}
			li:last-child{
				color: blue;
			}
		</style>
	</head>
	<body>
		<ul>
			<li>北国之美，雪花飘舞</li>
			<li>北国之美，雪花飘舞</li>
			<li>北国之美，雪花飘舞</li>
			<li>北国之美，雪花飘舞</li>
			<li>北国之美，雪花飘舞</li>
			<li>北国之美，雪花飘舞</li>
			<li>北国之美，雪花飘舞</li>
		</ul>
		<ul>
			<li>北国之美，雪花飘舞</li>
			<li>北国之美，雪花飘舞</li>
			<li>北国之美，雪花飘舞</li>
			<li>北国之美，雪花飘舞</li>
			<li>北国之美，雪花飘舞</li>
			<li>北国之美，雪花飘舞</li>
			<li>北国之美，雪花飘舞</li>
		</ul>
	</body>
</html>

```
![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/55324831-file_1488027865548_16f3b.png)

##3.5	E:first-of-type   匹配同类型中的第一个同级兄弟元素E。
##3.6	E:last-of-type  匹配同类型中的最后一个同级兄弟元素E。
##3.7	E:nth-of-type(n)   匹配同类型中的第n个同级兄弟元素E。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>CSS选择器</title>
		<style type="text/css">
			p:nth-of-type(odd){
				color: greenyellow;
			}
			p:nth-of-type(even){
				color: deeppink;
			}
			p:first-of-type{
				color:red;
			}
			p:last-of-type{
				color: blue;
			}
		</style>
	</head>
	<body>
		<div>
			<h3>我是标题</h3>
			<p>我是一些内容1</p>
			<p>我是一些内容2</p>
			<p>我是一些内容3</p>
			<p>我是一些内容4</p>
			<p>我是一些内容5</p>
			<p>我是一些内容6</p>
			<p>我是一些内容7</p>
			<p>我是一些内容8</p>
			<span>总之：今天很开心了</span>
		</div>
	</body>
</html>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/41833738-file_1488028039121_e136.png)

> 好了，CSS3中的选择器有很多种，但是我们目前先讲这么多，等我们后面用到那种选择器的时候，再继续讲解，而且到后也非常的好理解了。
>
> 大家还记得样式的定义方式吗？选择器{样式1：样式值1;样式2:样式值2;…},所以大家应该猜得到我们接下来应该讲解那些内容了吧，对了下面我们主要讲解的内容是CSS样式（CSS属性）。
>
> 大家看到目前为止我们页面中显示的标签样式都是浏览器默认的一些样式，我们得设置成我们需要的样式，我们从以下几类讲样式讲起。

# 四、文字相关属性

| 文字属性        |                             |
| ----------- | --------------------------- |
| 属性          | 描述                          |
| color       | 字体颜色                        |
| font-size   | 字号  ,网页上常用字号大小为12px和14px    |
| font-family | 字体,网页常用的字体为”微软雅黑”，“宋体”,”黑体” |
| font-weight | 字体加粗：  bold  加粗\ normal     |
| font-style  | 字体样式: normal  \| italic     |

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>文字属性</title>
		<style type="text/css">
			body{
				font-size: 12px;
				font-family: "微软雅黑";
			}
			h3{
				color: red;
			}
			p:first-of-type{
				color:blue;
			}
			h3 em{
				font-style: normal;
				color: greenyellow;
			}
			p:first-of-type strong{
				font-weight: normal;
				color: pink;
			}
			p:last-of-type span{
				font-weight: bold;
			}
			p:last-of-type strong{
				color: red;
			}
		</style>
	</head>
	<body>
		<h3>气象局<em>停发霾预警</em>？回应：正协商联合发布机制</h3>
		<p>
			1月17日晚间，一张<strong>“关于暂停霾预报预警业务的通知”</strong>图片在微博上流传。图片中的文字写道：“各省辖市气象局，各直管县（市）气象局，省气象台：2017年1月17日18：36分接中国气象局预报司电话通知，要求立即停止霾预报预警工作。请各单位接到本通知后，即刻停止制作和发布霾预报预警产品。对于出现能见度小于10KM的情况，可根据相对湿度，按照雾开展预报预警工作”，落款人为“科技与预报处”。
		</p>
		<p>
			<span>多位气象、环保系统人士分析称</span>，气象部门<em>不再发布霾预警</em>预报，意味着两部门正在进一步厘清职责划分，避免在公开发布中出现两种口径的“预警”引发误解。中央电视台天气预报节目主持人宋英杰在认证的微博上转发了这条消息，并评论表示：“我猜测是两部门在切磋新规，如何联合发布霾污染预警，<strong>避免之前预警等级不一致的情况。</strong>
		</p>
	</body>
</html>

```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/54633547-file_1488028192730_80eb.png)

# 五、段落相关属性

| 段落属性            |                                          |
| --------------- | ---------------------------------------- |
| 属性              | 描述                                       |
| text-align      | 文本对齐 属性值为:left/center/right              |
| text-indent     | 文本缩进属性值为2em/24px/-24px最小值设为-9999px       |
| text-decoration | 文本描述 属性值为:underline（下划线）、none 、 overline（上划线） 、 line-through（删除线） |
| line-height     | 文本行高 属性值为:  20px   150%  1.5             |
| text-transform  | 文字大小写转换 属性值分别是capitalize  \| uppercase \| lowercase   （ 将单词首字母转大写  \| 所有字母转大写 \| 所有字母转小写，只对英文单词起作用。） |
| letter-spacing  | 设置标签的字符之间的最小，最大和最佳间隙  ，属性值为:length,  值是 数值单位可以是px或em . |
| word-spacing    | 设置标签的单词之间的最小，最大和最佳间隙。或者说，单词之间空格的大小。值是 数值单位可以是px或em . |
| white-space     | 属性值：normal  \| nowrap  nowrap： 强制在同一行内显示所有文本，合并文本间的多余空白，直到文本结束或者遭遇br对象 |

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>文字、段落属性</title>
		<style type="text/css">
			body{
				font-size: 12px;
				font-family: "微软雅黑";
			}
			h3{
				color: red;
				text-align: center;
				text-decoration: underline;
				letter-spacing: 2px;
			}
			p{
				text-indent: 2em;
				line-height: 24px;
			}
			p:first-of-type{
				color:blue;
			}
			h3 em{
				font-style: normal;
				color: greenyellow;
			}
			p:first-of-type strong{
				font-weight: normal;
				color: pink;
			}
			p:last-of-type span{
				font-weight: bold;
			}
			p:last-of-type strong{
				color: red;
			}
		</style>
	</head>
	<body>
		<h3>气象局<em>停发霾预警</em>？回应：正协商联合发布机制</h3>
		<p>
			1月17日晚间，一张<strong>“关于暂停霾预报预警业务的通知”</strong>图片在微博上流传。图片中的文字写道：“各省辖市气象局，各直管县（市）气象局，省气象台：2017年1月17日18：36分接中国气象局预报司电话通知，要求立即停止霾预报预警工作。请各单位接到本通知后，即刻停止制作和发布霾预报预警产品。对于出现能见度小于10KM的情况，可根据相对湿度，按照雾开展预报预警工作”，落款人为“科技与预报处”。
		</p>
		<p>
			<span>多位气象、环保系统人士分析称</span>，气象部门<em>不再发布霾预警</em>预报，意味着两部门正在进一步厘清职责划分，避免在公开发布中出现两种口径的“预警”引发误解。中央电视台天气预报节目主持人宋英杰在认证的微博上转发了这条消息，并评论表示：“我猜测是两部门在切磋新规，如何联合发布霾污染预警，<strong>避免之前预警等级不一致的情况。</strong>
		</p>
		<p></p>
	</body>
</html>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/90075757-file_1488028350037_123c7.png)

> 另外对于text-transform、word-spacing常给英文的网站使用

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>文字、段落属性</title>
	</head>
	<body>
		<p>sometimes, we need a little tears to clear the mist in our eyes, a little 
assurance to clear the doubts in our head, a little hug to nurse our aching heart.		</p>
	</body>
</html>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/77049928-file_1488028422928_4a37.png)

> 还有white-space是否换行的问题

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>文字、段落属性</title>
		<style type="text/css">
			p{
				font-family: "微软雅黑";
				width: 200px;
			}
		</style>
	</head>
	<body>
		<p>得不到的终归是风，强留千百次终究会走。人人都忙于自己的欢喜与悲伤，有时候习惯寂寞就好了。孤独的话说太多不被倾听更难过，给我个暂停键吧我真的累了。下面是小编为大家带来的一些感伤的qq个性签名短语。</p>
	</body>
</html>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/14834857-file_1488028644653_c225.png)

> 在没有加white-space之前，超出宽度200px之后，文字会自动换行，但是加了white-space之后，文字超过宽度200px之后也不会换行。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>文字、段落属性</title>
		<style type="text/css">
			p{
				font-family: "微软雅黑";
				width: 200px;
				white-space: nowrap;
			}
		</style>
	</head>
	<body>
		<p>得不到的终归是风，强留千百次终究会走。人人都忙于自己的欢喜与悲伤，有时候习惯寂寞就好了。孤独的话说太多不被倾听更难过，给我个暂停键吧我真的累了。下面是小编为大家带来的一些感伤的qq个性签名短语。</p>
	</body>
</html>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/95628823-file_1488028709395_1088b.png)

## 总结：

> ​	像font-size,font-family这两种属性常给body这个标签添加，因为对于整个页面来说，整个页面的字号和字体都是一样的，如果页面中其它的地方需要各别设置，再去设置就可以了，其它的文字段落属性需要给那个标签设置就给那个标签设置。
>
> ​	另外text-decoration: underline;除了underline这个属性值用的比较多之外，none用的也比较多，比如我们只要给文字添加超链接之后，文字就会带有下划线，那如果我们的文字不需添加超链接呢，我们通常给a标签添加一个这样的属性a{text-decoration: none;},
>
> ​	 text-decoration的其它属性用的比较少。还有就是定属性的顺序没有顺序，先写那个属性都中以。看代码：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>文字、段落属性</title>
		<style type="text/css">
			
		</style>
	</head>
	<body>
		<a href="#">我加了超链接1</a>
		<a href="#">我加了超链接2</a>
		<a href="#">我加了超链接3</a>
	</body>
</html>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/30539490-file_1488028854554_d262.png)

---

> 添加了a{text-decoration: none;}样式之后:

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>文字、段落属性</title>
		<style type="text/css">
			a{
				text-decoration: none;
			}
		</style>
	</head>
	<body>
		<a href="#">我加了超链接1</a>
		<a href="#">我加了超链接2</a>
		<a href="#">我加了超链接3</a>
	</body>
</html>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/55190297-file_1488028922175_ff3b.png)

# 六、背景属性

| 背景属性                |                                          |
| ------------------- | ---------------------------------------- |
| 属性                  | 描述                                       |
| background-color    | 背景颜色                                     |
| background-image    | 背景图像 属性值:url(前背景图像的路径)                   |
| background-repeat   | 背景图像是否重复  属性值为:repeat  no-repeat repeat-x repeat-y |
| background-position | 背景图像的位置 属性值为 left  right top bottom 或 px或百分比;  Y  两个值：第一个值为  [top,center,bottom] 中三选一，而第二个值由 [left,center,right] 中三选一。  Y  两个百分比：第一个百分比为  x-轴的百分比，第二个为  y-轴的百分比。  Y  两个数：第一个数为  x-轴的位置，第二个数目为  y-轴的位置 |
| background          | 复合属性                                     |

## 6.1	背景色：background-color

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>背景属性</title>
		<style type="text/css">
			body{
				font-size: 12px;
				font-family: "微软雅黑";
				background-color: #9E3F3F;
			}
			p{
				background-color: #f0f0f0;
				line-height: 24px;
			}
		</style>
	</head>
	<body>
		<h3>唯美伤感</h3>
		<p>
			人人都忙于自己的欢喜与悲伤，有时候习惯寂寞就好了。孤独的话说太多不被倾听更难过，给我个暂停键吧我真的累了。下面是小编为大家带来的一些感伤的qq个性签名短语。
		</p>
		<p>
			得不到的终归是风，强留千百次终究会走。人人都忙于自己的欢喜与悲伤，有时候习惯寂寞就好了。孤独的话说太多不被倾听更难过，给我个暂停键吧我真的累了。
		</p>
	</body>
</html>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/48580874-file_1488029069273_b642.png)

## 6.2	background-image、background-repeat、background-position 配合使用

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>背景属性</title>
		<style type="text/css">
			body{
				font-size: 12px;
				font-family: "微软雅黑";
			}
			div{
				background-color: #BECEEB;
				background-image: url(img/a.png);
				width: 500px;
				height: 150px;
				line-height: 24px;
				font-weight: bold;
				color: #fff;
			}
		</style>
	</head>
	<body>
		<div>
			七星瓢虫是鞘翅目瓢虫科的捕食性昆虫，它的身体像半个圆球，头黑黑的翅膀是橘色的。触角很短，不太明显，他的脚在大大的翅膀底下，他的口器既有咀嚼食物的能力，因为它的翅膀有
		</div>
	</body>
</html>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/8195340-file_1488029153146_e669.png)

> 给div添加background-repeat属性之后的效果如下图：

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/56087329-file_1488029269086_10107.png)

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/47753676-file_1488029290374_7523.png)

> 如果背景图像设置不重复的话，有时需要设置背景图像的位置。再来看一下background-position的使用。background-position如果没有设置的话，它的默认值为左上角。
>
> 先来看几张图就可以知道background-position的使用了。

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/14897926-file_1488029347323_c0b4.png)

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/70580717-file_1488029381340_d097.png)

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/49480174-file_1488029413764_e9bc.png)

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/21243209-file_1488029452048_a496.png)

```html
<!DOCTYPE HTML>  
<html>  
  <head>  
    <title>bg_image.html</title>  
  	<meta charset="UTF-8">
    <style type="text/css">  
        ul{list-style:none;/*去掉无序列表前面的项目符号*/
margin:0px;/*外边距为0*/
padding:0px;/*内边距为0*/
}  
        li{float:left;/*设置元序列表横向显示*/}  
        .clear{clear:both;/*清除浮动*/}  
        .small_image{  
            border:1px solid #000/*设置边框*/;  
            margin:20px;  
            width:200px;  
            height:200px;  
            background-image:url(img/b.jpg);  
            background-repeat:no-repeat;  
        }  
        .large_image{  
            border:1px solid #000;  
            margin:20px;  
            width:200px;  
            height:200px;  
            background-image:url(img/c.gif);  
            background-repeat:no-repeat;  
        }  
        .bg_position_left_center{  
            background-position:left center;  
        }  
        .bg_position_50_50{  
            background-position:50% 50%;  
        }  
        .bg_position_-50_-50{  
            background-position:-50% -50%;  
        }  
        .bg_position_20px_20px{  
            background-position:20px 20px;  
        }  
        .bg_position_-20px_-20px{  
            background-position:-20px -20px;  
        }  
        .bg_position_50_20px{  
            background-position:50% 20px;  
        }  
    </style>  
  </head>  
    
  <body>  
    <ul>  
        <li>  
            <p>小图像 left center</p>  
            <div class="small_image bg_position_left_center"></div>  
        </li>  
        <li>  
            <p>小图像 50% 50%</p>  
            <div class="small_image bg_position_50_50"></div>  
        </li>  
        <li>  
            <p>小图像 -50% -50%</p>  
            <div class="small_image bg_position_-50_-50"></div>  
        </li>  
        <li class="clear">  
            <p>小图像 20px 20px</p>  
            <div class="small_image bg_position_20px_20px"></div>  
        </li>  
        <li>  
            <p>小图像 -20px -20px</p>  
            <div class="small_image bg_position_-20px_-20px"></div>  
        </li>  
        <li>  
            <p>小图像 50% 20px</p>  
            <div class="small_image bg_position_50_20px"></div>  
        </li>  
        <li class="clear">  
            <p>大图像 left center</p>  
            <div class="large_image bg_position_left_center"></div>  
        </li>  
        <li>  
            <p>大图像 50% 50%</p>  
            <div class="large_image bg_position_50_50"></div>  
        </li>  
        <li>  
            <p>大图像 20px 20px</p>  
            <div class="large_image bg_position_20px_20px"></div>  
        </li>  
      </ul>  
  </body>  
</html>  
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/83786678-file_1488029520260_2131.png)

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/599921-file_1488029556039_6dba.png)

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/92302882-file_1488029597533_e96d.png)

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/43963591-file_1488029627376_1036a.png)

# 七、文字段落背景：综合案例1



```html
<!DOCTYPE html>
<html>
	<head>
		<title>css文字、段落、背景属性</title>
		<meta charset="utf-8">
		<style type="text/css">
			body {
				font-family: 微软雅黑, microsoft yahei;
				font-size: 12px;
			}
			div {
				height: 40px;
			}
			h2 {
				font-size: 16px;
				height: 40px;
				line-height: 40px;
				text-indent: 50px;
			}
			.h2One {
				background: url(img/lu.jpg) no-repeat left center;
			}
			p {
				text-indent: 2em;
				line-height: 24px;
			}
			.orange {
				color: orange;
			}
			.blue {
				color: blue;
			}
			.h2Two {
				background: url(img/car.jpg) no-repeat left center;
			}
		</style>
	</head>

	<body>

		<h2 class="h2One">绝不哭泣</h2>
		<p>逛街时，我突然觉得膀胱有些鼓胀，正巧看见<span class="orange">肯德基</span>招牌上的大叔笑得和蔼可亲，我一喜立刻推门进去，本来是直奔卫生间的。可恰巧看见阿辉和一个女人亲密地坐在一起，他们的手紧紧地握在一起，像一对热恋中的男女。我鬼使神差地走了过去，站在他面前的一刻，他弹跳着站了起来，叫道：“老婆！你咋来了？”我冷笑：“你还知道我是你老婆呀？”</p>
		<p>逛街时，我突然觉得膀胱有些鼓胀，正巧看见肯德基招牌上的大叔笑得和蔼可亲，我一喜立刻推门进去，本来是直奔<span class="blue">卫生间</span>的。可恰巧看见阿辉和一个女人亲密地坐在一起，他们的手紧紧地握在一起，像一对热恋中的男女。我鬼使神差地走了过去，站在他面前的一刻，他弹跳着站了起来，叫道：“老婆！你咋来了？”我冷笑：“你还知道我是你老婆呀？”</p>
		<p>逛街时，我突然觉得膀胱有些鼓胀，正巧看见肯德基招牌上的大叔笑得和蔼可亲，我一喜立刻推门进去，本来是直奔卫生间的。<span class="blue">可恰巧看见阿辉和一个女人亲密地坐在一起</span>，他们的手紧紧地握在一起，像一对热恋中的男女。我鬼使神差地走了过去，站在他面前的一刻，他弹跳着站了起来，叫道：“老婆！你咋来了？”我冷笑：“你还知道我是你老婆呀？”</p>
		<h2 class="h2Two">漫天的紫丁香</h2>
		<h3>正是紫丁香花开的季节</h3>
		<p>小曼跳下火车的时候，正是紫丁香花开的季节，整个城市里弥漫着紫丁香花那淡淡的香气，<span class="orange">一簇一簇，淡紫、俏丽，十分惹人怜爱</span>，小曼忍不住深深地吸了一口气，笑了。然后她拿起了电话打给妈妈，妈妈的声音永远是那么忙碌、急促，她说：“小曼，你自己打车过来，我出不去。”话一说完，电话里立刻传出了嘟嘟声。这声音让小曼感到沮丧，想想自从父母离婚之后，自己就像一个皮球被爸爸妈妈踢来踢去，她先是在奶奶家念完了初中，又在外婆家念完了高中，落榜之后，爸爸说他带着女儿不方便，于是把她踢给了妈妈，还好妈妈没有在推辞，否则小曼真不知道自己能去哪？</p>
	</body>
</html>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/75347854-file_1488029725199_15d0f.png)

# 八、文字段落背景：综合案例2

```html
<!DOCTYPE html>
<html>
	<head>
		<title>文字段落背景属性</title>
		<meta charset="utf-8">
		<style>
body{
	       font-family:微软雅黑;
             font-size:12px;
}
ol,ul{
	list-style:none;
	}
li{
	width:192px;
	height:34px;
	line-height:34px;
	border:1px solid #d8dfe5;
	text-indent:50px;
	margin-bottom:2px;
}
li:first-child{
	background:#edf2f8 url(img/person.jpg) no-repeat 5px center;
}
li:nth-child(2){
	background:#edf2f8 url(img/computer.jpg) no-repeat 5px center;
}
</style>
	</head>
	<body>
		<ul>
			<li>文字段落背景属性</li>
			<li>段落文字背景属性</li>
		</ul>		
	</body>
</html>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/36577072-file_1488029841345_8aff.png)

# 九、文字段落背景：综合案例3

```html
<!DOCTYPE html>
<html>
	<head>
		<title>文字段落背景属性</title>
		<meta charset="utf-8">
		<style>
 body{
	         font-family:微软雅黑;
                font-size:12px;
}
        input{
	     width:176px;
	     height:25px;
	     background-image:url(img/girl.jpg);
	     background-repeat:no-repeat;
	     background-position:5px center;
	    border:1px solid #01b5ec;
	    text-indent:26px;
}
</style>
	</head>
	<body>
	<input type="text"/>
	</body>
</html>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/53510775-file_1488029919152_7d28.png)

# 十、列表属性

| 列表属性                |                                          |
| ------------------- | ---------------------------------------- |
| 属性                  | 描述                                       |
| list-style-type     | 列表类型  属性值 :square circle disc lower-latin upper-roman等 |
| list-style--image   | 列表图像  属性值: url(项目符号路径)                   |
| list-style-position | 列表图像的位置  属性值:inside outside              |
| list-style          | 复合属性                                     |

> 列表属性主要是使用list-style去掉元序列表和有序列表前面的项目符号的。其它的几个属性几乎很少使用。看一下代码

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>列表属性</title>
	</head>
	<body>
		<ul>
			<li>无序列表项1</li>
			<li>无序列表项2</li>
			<li>无序列表项3</li>
		</ul>
		
		<ol>
			<li>有序列表项1</li>
			<li>有序列表项2</li>
			<li>有序列表项3</li>
		</ol>
	</body>
</html>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/4499115-file_1488030074553_16ac3.png)

> 加入列表属性后：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>列表属性</title>
		<style type="text/css">
			ul,ol{
				list-style: none;
			}
		</style>
	</head>
	<body>
		<ul>
			<li>无序列表项1</li>
			<li>无序列表项2</li>
			<li>无序列表项3</li>
		</ul>
		
		<ol>
			<li>有序列表项1</li>
			<li>有序列表项2</li>
			<li>有序列表项3</li>
		</ol>
	</body>
</html>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/90369791-file_1488030132641_781f.png)

> 像这个属性，以后会经常使用，需要去掉项目符号，然后加上我们自己所需的样式。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>列表属性</title>
		<style type="text/css">
			body{
				font-size: 12px;
				font-weight: normal;
			}
			ul,ol{
				list-style: none;
			}
			li{
				line-height: 24px;
				background: url(img/icon.jpg) no-repeat left center;
				text-indent: 10px;
			}
		</style>
	</head>
	<body>
		<ul>
			<li>无序列表项1</li>
			<li>无序列表项2</li>
			<li>无序列表项3</li>
		</ul>
		
		<ol>
			<li>有序列表项1</li>
			<li>有序列表项2</li>
			<li>有序列表项3</li>
		</ol>
	</body>
</html>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-25/29673796-file_1488030179946_97de.png)

