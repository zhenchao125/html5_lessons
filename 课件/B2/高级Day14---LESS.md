#  高级Day 14---LESS![](http://www.yztcedu.com/images/logo.png)

# 一、Less介绍

​	Less 是一门 CSS 预处理语言，它扩充了 CSS 语言，增加了诸如变量、混合（mixin）、函数等功能，让 CSS 更易维护、方便制作主题、扩充。

​	**可以运行在 Node（服务器）、浏览器和 Rhino 平台上。**

Sass:

less使用 **.less** 作为文件后缀。通过第三方工具，可以一键或者实时编译成对应的css文件。

# 二、使用Less

​	Less可以用到服务器端，也可以用作浏览器端。我们今天只研究如何在浏览器端使用。

有两种办法使用Less：

## 2.1 在HTML中直接使用 .less文件

1. **书写扩展名为.less的less文件，比如：**

```less
@base: #f938ab;

.box-shadow(@style, @c) when (iscolor(@c)) {
  box-shadow:         @style @c;
  -webkit-box-shadow: @style @c;
  -moz-box-shadow:    @style @c;
}
.box-shadow(@style, @alpha: 50%) when (isnumber(@alpha)) {
  .box-shadow(@style, rgba(0, 0, 0, @alpha));
}
.box { 
  color: saturate(@base, 5%);
  border-color: lighten(@base, 30%);
  div { .box-shadow(0 0 5px, 30%) }
}
```

2. **在html中引入less文件.注意：ref属性必须是 stylesheet/less   href的值就是指的less文件。**

```html
<link rel="stylesheet/less" type="text/css" href="styles.less">
```

3. **引入下面的js文件，负责把 less文件编译成css文件。(less.js需要预先下载完成。)**

```javascript
<script src="less.js" type="text/javascript"></script>
```

也可以使用cdn加速

```javascript
<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.7.1/less.min.js"></script>
```

> 注意： 一定要先引入less文件，再引入script标签。
>
> 缺点：由于less的编译是在前台通过css实时编译的，所以会影响前端页面的执行效率，在实际的生产环境中一般不建议使用，而是使用下面的先编程成css文件，然后在页面中仍然引用css文件。

## 2.2 提前把.less编译成 .css文件，然后再使用 css文件

### 2.2.1编译方法1

> 1. 下载less cli工具

```npm
npm install -g less
```

> 2. 在`webstorm`中设置 `file watcher`，则`webstorm`会自动把`less`编译成`css`

### 2.2.2编译方法2：

​	传统做法一般是在服务器端下载less，然后使用命令行手动编译less文件为css文件。编译less文件需要node.js的支持。编译起来比较麻烦。

​	目前一些第三方GUI工具可以自动的帮助我们完成从less到css的编译工作。

```tex
koala(Win/Mac/Linux)
	国人开发的LESSCSS/SASS编译工具。下载地址：http://koala-app.com/index-zh.html
Codekit(Mac)
	一款自动编译Less/Sass/Stylus/CoffeeScript/Jade/Haml的工具，含语法检查、图片优化、自动刷新等附加功能。下载地址	  http://incident57.com/codekit/
WinLess(Win)
	一款LESS编译软件。下载地址http://winless.org/
SimpleLess(Win/Mac/Linux)
	一款LESS编译软件。下载地址http://wearekiss.com/simpless
```

> 我们可以使用koala作为我们的编译工具。

1. 安装koala
2. 把当前的工程目录或者less文件所在的目录添加到coala中。coala就会自动编译less文件成为css文件。完全后台自动运行不需要人工干预。

![](http://o7cqr8cfk.bkt.clouddn.com/16-12-31/10897004-file_1483157004233_29ba.png)



> 另外也可以使用Hbuilder自带的编译功能，也可以把less编译成css，但是每次都需要手动去完成，相对比较麻烦。

![](http://o7cqr8cfk.bkt.clouddn.com/16-12-31/56240032-file_1483157301350_14b04.png)

# 三、Less语法

​	LESS 做为 CSS 的一种形式的扩展，它并没有阉割 CSS 的功能，而是在现有的 CSS 语法上，添加了很多额外的功能，所以学习 LESS 是一件轻而易举的事情。

​	**可以把Less看出css的一种超集。**

## 3.1	变量

​	LESS 允许开发者自定义变量，变量可以在全局样式中使用，变量使得样式修改起来更加简单。

例如：

less内容：

```less
 @border-color : #b5bcc7; /* 定义一个变量，变量名必须以@开头*/

 .div{ 
   border : 1px solid @border-color; 
 }
```

css内容：

```css
 .mythemes{ 
  border: 1px solid #b5bcc7; 
 }
```

> 说明：
>
> 如果对同一个变量定义两次的话，在当前作用域中最后一次定义的将被使用。这与CSS的机制类似，最后一次定义的值会成为这个属性的值。
>
> 变量是“按需加载”（lazyloaded）的，因此不必强制在使用之前声明。

## 3.2	混入

​	混合可以将一个定义好的class A轻松的引入到另一个class B中，从而简单实现class B继承class A中的所有属性。我们还可以带参数地调用，就像使用函数一样。

less源码：

```less
.rounded-corners (@radius: 5px) {/* 使用我们的时候，如果有传入值就使用传入的值，没有传入值就使用默认值5px*/
    -webkit-border-radius: @radius;
    -moz-border-radius: @radius;
    -ms-border-radius: @radius;
    -o-border-radius: @radius;
    border-radius: @radius;
}

#div1 {
    .rounded-corners;   /* 使用默认值*/
}
#divide {
    .rounded-corners(10px); /*使用10px*/
}
```

css源码：

```css
#div1 {
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px;
}
#div2 {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  border-radius: 10px;
}
```

## 3.3	嵌套

​	我们可以在一个选择器中嵌套另一个选择器来实现继承，这样很大程度减少了代码量，并且代码看起来更加的清晰。

less源码：

```less
#header {
	h1 {
		font-size: 60px;
		font-weight: bold;
	}
	p {
		font-size: 40px;
		a {
			text-decoration: none;
			&:hover {
				border: 1px dashed pink;
			}
		}
	}
}
```

css源码：

```css
#header h1 {
  font-size: 60px;
  font-weight: bold;
}
#header p {
  font-size: 40px;
}
#header p a {
  text-decoration: none;
}
#header p a:hover {
  border: 1px dashed pink;
}

```

> 说明：
>
> &符号的使用 —如果你想写串联选择器，而不是写后代选择器，就可以用到 &了。这点对伪类尤其有用
>
> 如 :hover和 :focus。

## 3.4	运算

​	运算提供了加，减，乘，除操作；我们可以做属性值和颜色的运算，这样就可以实现属性值之间的复杂关系。**运算应该被包裹在括号中**

```less
@base: 5%;
@filler: (@base * 2);
@other: (@base + @filler);

color: (#888 / 4);
background-color: (@base-color + #111);
height: (100% / 2 + @filler);
```

> 说明：
>
> 任何数字、颜色或者变量都可以参与运算，运算应该被包裹在括号中。

##3.5	函数

LESS 提供了多种函数用于控制颜色变化、处理字符串、算术运算等等。这些函数在[函数手册](http://www.1024i.com/demo/less/reference.html)中有详细介绍。

函数的用法非常简单，下面这个例子将介绍如何将 0.5 转换为 50%，将颜色饱和度增加 5%,以及颜色亮度降低 25% 色相值增加 8 等用法：

```less
@base: #f04615;

@width: 0.5;

.class {

    width: percentage(0.5); // returns 50%

    color: saturate(@base, 5%);

    background-color: spin(lighten(@base, 25%), 8);

}
```

## 3.6	注释

注释

CSS 的注释格式在LESS 中依然有效：

```Less
/*Hello, I'm a CSS-style comment */ 

.class{ color: black } 
```

LESS 同样也支持双斜线的注释，但是编译成CSS 的时候自动过滤掉：

```less
//Hi, I'm a silent comment, I won't show up in your CSS 

.class{ color: white } 
```

## 3.7	字符串插入

```less
@v:"host";
#div2 {
	height: 200px;
	width: 200px;
	.rounded-corners(50px);
	background: url("http://os.blog.163.com/common/ava.s?@{v}=hzungang@126&b=1&r=-1");
}
```

## 3.8	选择器插入

如果需要在选择器中使用LESS 变量，只需通过使用和字符串插件一样的@{selector} 即可，例如：

```less
@name: blocked;
.@{name} {
    color: black;
}
输出：

.blocked {
    color: black;
}

```

# 四、LESS的优缺点

**优点：**

1.结构清晰，便于扩展。

2.方便屏蔽浏览器私有语法差异

3.轻松实现多重继承

4.完全兼容CSS代码，可以方便应用到老项目中

---

**缺点：**

1.需要编译

2.更新不够活跃








