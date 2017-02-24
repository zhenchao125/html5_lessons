# Day02—表格标签和表单标签

# 一、表格标签

## 1.1	什么是表格

> 看下面的图片

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-24/95849082-file_1487941053111_26ce.png)





看到以上的这个表格我们要表格是由行和单元格组成的。

table的主要作用：

a)     用于布局（过时）

a)     用于显示批量的数据

> 早期我们使用table来布局网页，但是table有一个缺点，就是加载页面的时候，需要全部的数据都请求到，才显示页面，否则就是一片的空白，而且表格进行布局页面为了达到某种效果,不得不嵌套使用大量的表格,最终导致页面灵活性很差,代码也显得繁琐，因此现在一般不采用table来做布局，而是使用div+css进行布局。虽然我们已经放弃使用table进行布局页面了，但是table在其它地方（显示批量数据的时候）还是有他的作用的。

## 1.2	表格的完整结构

> 一个完整的表格由这几个标签组成(thead、tbody、tfoot和tr、td组成)
>
>        第一步：我们写表格了首先们要先写的是table标签，也就是先写一对table标签。
>
>        第二步：在table这对标签里写thead这对标签（thead的意思是表格的头部）
>
>        第三步：在thead这对标签里写tr这对标签（tr表示行）
>
>        第四步：在tr这对标签里写th这对标签（th表示重要的单元格）或td这对标签（td表示单元格）
>
>        第五步：在td这对标签里写内容（内容包括各种标签）
>
>        注：
>
> 同理写tbody和tfoot.
>
> 写在table里标签里面的像border、cellspacing、cellpadding、align、width叫table的标签属性。那这些属性是什么意思呢，我们分别来介绍一下：
>
> border:边框
>
> cellspacing:单元格与单元格之间的间距
>
> cellpadding:内容到边框的距离
>
> align:center/left/right:表格的对齐方式
>
> width:表格的宽度

```html
<table border="1" cellspacing="0" cellpadding="0" align="center" width="600">
  <thead>
    <tr>
      <th>Header</th>
      <th>Header</th>
      <th>Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data</td>
      <td>Data</td>
      <td>Data</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Data</td>
      <td>Data</td>
      <td>Data</td>
    </tr>
  </tfoot>
</table>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-24/86556615-file_1487941357245_82ce.png)

## 1.3	书写表格的时的一些注意事项

> thead部分和tfoot部分是可以省略的，但tbody是不能省略的，而且tbody部分可以有多个。表格的完整结构在HTML页面的时候一般都不需要这样写了，这样写有些复杂，我们一般的时候写看表格的简写结构
>
> 下面看下表格的简写结构。

```html
<table border="1" cellspacing="0" cellpadding="0" align="center" width="600">
			
  <tr>
    <td>Data</td>
    <td>Data</td>
    <td>Data</td>
  </tr>

  <tr>
    <td>Data</td>
    <td>Data</td>
    <td>Data</td>
  </tr>
  </tr>

  <tr>
    <td>Data</td>
    <td>Data</td>
    <td>Data</td>
  </tr>

  <tr>
    <td>Data</td>
    <td>Data</td>
    <td>Data</td>
  </tr>

</table>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-24/63685468-file_1487941532264_172d1.png)

## 1.4	表格相关的一些属性

> 大家观察上面的这个表格好像长的不太好看，我还需要进一步修饰。那我们来修饰一下tr和td。那tr和td有那些属性呢？

tr的属性:

 	algin属性:left/center/right

​	valgin属性 :top/bottom/middle

​	height属性

td的属性:

​	colspan属性   水平合并 

​	rowspan属性  垂直合并 

​	algin属性: left/center/right

​	valgin属性 : left/center/right

​	width/height属性

那我们通过设置上面的属性来实现稍漂亮一点的表格吧！

```html
<table border="1" cellspacing="0" cellpadding="0" align="center" width="600">
  <tr height="40" align="center">
    <td>Data</td>
    <td>Data</td>
    <td>Data</td>
  </tr>
  <tr height="40"  align="center">
    <td>Data</td>
    <td>Data</td>
    <td>Data</td>
  </tr>
  <tr height="40"  align="center">
    <td>Data</td>
    <td>Data</td>
    <td>Data</td>
  </tr>
  <tr height="40"  align="center">
    <td>Data</td>
    <td>Data</td>
    <td>Data</td>
  </tr>
</table>
```

## 1.5	合并单元格

> 有时候我们需将单元格进行合并，但是单元格进行合并分为水平合并（colspan）,垂直合并（rowspan）
>
>  colspan属性   水平合并 
>
> rowspan属性  垂直合并 

```html
<table border="1" cellspacing="0" cellpadding="0" align="center" width="500">
  <tr height="60" align="center">
    <td colspan="3">工作证</td>
  </tr>
  <tr height="40"  align="center">
    <td width="100">姓名：</td>
    <td width="200">张大宝</td>
    <td rowspan="3">照片</td>
  </tr>
  <tr height="40"  align="center">
    <td>职位：</td>
    <td>HTML5讲师</td>
  </tr>
  <tr height="40"  align="center">
    <td>部门：</td>
    <td>教学部</td>
  </tr>
</table>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-24/92431140-file_1487941843509_67ca.png)

# 二、表单标签

## 2.1	什么是表单

> 我们大家注册过QQ吧。登录过京东帐号在京东上买东吧，这些你输入信息的框都是表单，表单在整个网站起到一个至关重要的作用。我们一起来了解一下表单。

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-24/84263945-file_1487941949697_54a.png)

> **表单的作用**
>
> 表单在网页中主要负责数据采集功能，是网站管理者与浏览者之间沟通的桥梁。

## 2.2	书写表单的步骤

### 2.2.1	表单的组成

> 一个表单有三个基本组成部分： 表单标签：这里面包含了处理表单数据的URL以及数据提交到服务器的方法。 表单域：包含了文本框、密码框、隐藏域、多行文本框、复选框、单选框、下拉选择框和文件上传框等。
> 表单按钮：包括提交按钮、复位按钮和一般按钮,用于将数据传送到服务器上或者取消输入。

### 2.2.2	实现表单页面

> **步骤一：**
>
> ​	先写一对form标签及其它的标签属性。
>
>   ` <form action=“表单提交地址”method=“post/get”> `
>
>            这里面包含了所有的表单控件
>
>   ` </form>`

说明：

1. Action: 向何处发送表单数据,一般指的是后台程序。
2. Method: 规定如何发送表单数据。有两种方式（get与post）

- get是从服务器上获取数据，post是向服务器传送数据。
- get是把参数数据队列加到提交表单的action属性所指的URL中，值和表单内各个字段一一对应，在URL中可以看到。post是通过HTTP post机制，将表单内各个字段与其内容放置在HTML header内一起传送到action属性所指的URL地址。用户看不到这个过程。
- 对于get方式，服务器端用Request.QueryString获取变量的值，对于post方式，服务器端用Request.Form获取提交的数据。
- get传送的数据量较小，不能大于2KB。post传送的数据量较大，一般被默认为不受限制。但理论上，IIS4中最大量为80KB，IIS5中为100KB。
- get安全性非常低，post安全性较高。但是执行效率却比Post方法好。

3. 建议：

- get方式的安全性较Post方式要差些，包含机密信息的话，建议用Post数据提交方式；
- 在做数据查询时，建议用Get方式；而在做数据添加、修改或删除时，建议用Post方式；

> **步骤二：**
>
> 输入表单元素,值得注意的是每个表单元素都有一个name属性。但这个属性可写可不写。

## 2.3	常用的表单标签

### 2.3.1	text:文本框

> 公司名称：`<input type=”text” name=”username”/>`

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-24/88036703-file_1487942818341_11292.png)

> text：文本框并带有默认值的.
>
> 公司网站：`<input type=”text” name=”url” value=”http://”/>`

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-24/58213320-file_1487942909882_a7c4.png)

### 2.3.2	password:密码框

> 登录密码：`<input type=”password” name=”pwd“/>`

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-24/48685525-file_1487942991403_e040.png)

### 2.3.4	radio:单选按钮

> 但需注意若多个radio按钮互斥，则他们的name要设置成一样的，要不每个按钮都能选中了。另外单选按钮还有一个设置选中属性，就是checked属性，属性值也是checked,也可以不写。

```html
性别:<input type="radio" name="sex" value="男"  checked="checked"/>男
    <input type="radio" name="sex" value="女" />女

```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-24/39407995-file_1487943132206_91fb.png)

### 2.3.5	checkbox：复选按钮

> 但注意同一组的checkbox按钮的name也要设置成一样的。另外复选按钮还有一个设置选中属性，就是checked属性，属性值也是checked,也可以不写。

```html
申请产品:<input type="checkbox" name="type" value="实木" />实木
        <input type="checkbox" name="type" value="沙发"  checked="checked"/>沙发
	    <input type="checkbox" name="type" value="办公" />

```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-24/94112257-file_1487943260900_105f4.png)

### 2.3.6	file:上传文件域     

```html
联系人证件:<input type="file" name="file" />
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-24/15993382-file_1487943388542_2ddb.png)

### 2.3.7	select:下拉框

> 但是注意，select里有一个option常和select一起使用，表示下拉选项，另外option还有一个selected属性，表示选中，属性值也为selected.如果没有写这个属性，默认选中第一项。

```html
密码查询问题:
<select name="problem">
  <option value="">请选择查询问题</option>
  <option value="1">你的毕业院校</option>
  <option value="2">你居住的城市</option>
  <option value="3">你的职业</option>
</select>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-24/74293679-file_1487943501673_a815.png)

```html
密码查询问题:
<select name="problem">
  <option value="">请选择查询问题</option>
  <option value="1">你的毕业院校</option>
  <option value="2" selected="selected">你居住的城市</option>
  <option value="3">你的职业</option>
</select>

```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-24/54814715-file_1487943560529_12e4c.png)

### 2.3.8	textarea:多行文本域

> 可以输入多行文本的，有两个属性分别是
>
> - Cols属性：定义文本域的宽度
> - rows属性：定义文本域的高度。

```html
备注:<textarea rows="6" cols="30"></textarea>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-24/233426-file_1487943752060_15aa8.png)

### 2.3.9	submit:提交按钮

> 使用submit可以将当前页面的数据提交到action的提交地址，reset:重置按钮，可以让当前页面的数据重新恢复到初始状态。

```html
<input type="submit" value="提交" />
<input type="reset" value="取消" />
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-24/46025200-file_1487943829009_11250.png)

### 2.3.10	button:普通按钮

> 不具有提交和重置的作用，以后可以结合javascript让其具有相关功能

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-24/8122695-file_1487943904536_12137.png)

### 2.3.11	hidden:隐藏域

> 在页面中没有任何效果，但是他可以传递数据。

```html
<input type="hidden" />
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-24/43791522-file_1487943990497_1155e.png)

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-24/94690016-file_1487944045742_3709.png)

## 2.4	标签总结

> 输入标签：`<input   type=“值”value=“” name=“”/> ` 
>
>         值：     text             单行文本框，只能输入一行文本  
>
>                   password   密码框 
>
>                   radio         单选框 
>
>                   checkbox   复选框 
>
>                   file             文件域 
>
>                   submit      提交按钮 
>
>                   reset                重置按钮 
>
>                   button      普通按钮（一般按钮）
>
> **表单元素属性介绍:**
>
> ​	value:指的是表单元素的值。
>
> ​	name:是给每个表单元素取一个名字，方便找到他将他的值传递到后台程序进而提交到数据库。
>
> ​	checked:复选框和单选按钮的属性，表示选中。
>
> ​	selected:下拉框表示选中的属性。
>
> ​	maxlength:表示输入的最大长度。
>
> ​	readonly:表示只读形式

```html
<form action="#" method="get">
	公司名称:<input type="text" name="name" maxlength="16" /><br>
	公司网站:<input type="text" name="url" /><br>
	登录密码:<input type="password" name="pwd" /><br>
	性别:<input type="radio" name="sex" value="男"  checked="checked"/>男
	     <input type="radio" name="sex" value="女" />女<br>
	申请产品:<input type="checkbox" name="type" value="实木" />实木
		   <input type="checkbox" name="type" value="沙发" checked="checked"/>沙发
		<input type="checkbox" name="type" value="办公" />办公<br>
	联系人证件:<input type="file" name="file" /><br>
	密码查询问题：<select name="problem">
				<option value="">请选择查询问题</option>
				<option value="1">你的毕业院校</option>
				<option value="2">你居住的城市</option>
			</select><br>	
	备注：<textarea rows="6" cols="30"></textarea><br>
		<input type="submit" value="提交" />
<input type="reset" value="取消" />
</form>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-24/74273737-file_1487944507988_b872.png)

> 大家看到上面的效果在浏览器中显示的不是很好看，所以我们一般写表单的时候还是放到表格里，就整齐，美观。***但是需要注意的是table需要放在form里面，而不是table里面放form.***

```html
<form action="#" method="get">
	<table border="0" cellspacing="0" cellpadding="0">
		<tr height="35">
			<td align="right">公司名称:</td>
			<td>&nbsp;<input type="text" name="name" /></td>
		</tr>
		<tr height="35">
			<td align="right">公司网站:</td>
			<td>&nbsp;<input type="text" name="url" /></td>
		</tr>
		<tr height="35">
			<td align="right">登录密码:</td>
			<td>&nbsp;<input type="password" name="pwd" /></td>
		</tr>
		<tr height="35">
			<td align="right">性别:</td>
			<td>&nbsp;<input type="radio" name="sex" value="男"  checked="checked"/>男
			<input type="radio" name="sex" value="女" />女
			</td>
		</tr>
		<tr height="35">
		    <td align="right">申请产品:</td>
			<td>&nbsp;<input type="checkbox" name="type" value="实木" />实木
			<input type="checkbox" name="type" value="沙发"  checked="checked"/>沙发
		<input type="checkbox" name="type" value="办公" />办公
			</td>
		</tr>
		<tr height="35">
			<td align="right">联系人证件:</td>
			<td>&nbsp;<input type="file" name="file" /></td>
		</tr>
		<tr height="35">
			<td align="right">密码查询问题:</td>
			<td>&nbsp;<select name="problem">
				<option value="">请选择查询问题</option>
				<option value="1">你的毕业院校</option>
				<option value="2">你居住的城市</option>
				</select></td>
		</tr>
		<tr>
			<td align="right">备注:</td>
		<td>&nbsp;<textarea rows="6" cols="30"></textarea></td>
				</tr>
		<tr height="35">
			<td align="right"></td>
			<td>&nbsp;<input type="submit" value="提交" />
			<input type="reset" value="取消" />
			</td>
				</tr>
		</table>
</form>

```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-24/30320575-file_1487944646692_f99a.png)

# 三、元素的表现分类及特点及嵌套规则   

到目前为止常用的一些标签讲了大部分了，还有些HTML5新增的一些标签放到后面去讲。那我们的标签有是分类的，我们看一下标签的表现分类,标签的分类分以下三种：

- 块级元素block;  
- 内联元素inline; 
- 内联块inline-block; 

1. 块级有那些呢？我们总结一下：

  	div table  h1-h6 p form ul ol li dl dtdd

2. 行内元素有那些呢？总结如下:

  	a span strong b i em 

3. 行内块级元素有那些？总结如下：

    img  input select



> 那下面来看一下块级元素的特点:

​	1、独占一行，默认情况下，其宽度自动填满其父元素宽度

​	2、可以设置宽和高，设置了宽度还是独占一行 

​	3、可以设置margin和padding属性 

​	4、对应的相关display属性:block

​	5、可以互相转换display:inline变成行内元素 

​	6、可以嵌套块级元素及行内元素 



> 再来看一下行内元素的特点:

​	1、不会独占一行，相邻行内元素会排列在同一行里，直到一行排不下，才会换行，其宽度随元素的内容而变化 

​	2、不可以设置宽和高，设置了宽度不是独占一行 

​	3、水平方向的内外都产生边距效果但竖直方向的内外边距却不会产生边距效果 

​	4、对应的相关display属性:inline

​	5、可以互相转换display:block变成行块级元素 

​	6、不可以嵌套块级元素 



> 我们都知道页面中的元素都不是独立存在，都是互相嵌套的，那嵌套规则是什么呢？

​	1、不能交叉嵌套 

​	2、块级元素嵌套行内元素或者块级元素 

​	3、行内元素不能嵌套块级元素 

​	4、块级元素不能放在<p>里面 

​	5、有几个特殊的块级元素只能包含内嵌元素，不能再包含块级元素，这几个特殊的标签是： 

​		h1、h2、h3、h4、h5、h6、p、dt



       ***我们知道了嵌套规则及元素特点之后，我们以后再写标签的时候要注意不能乱嵌套。要符合嵌套规则***。