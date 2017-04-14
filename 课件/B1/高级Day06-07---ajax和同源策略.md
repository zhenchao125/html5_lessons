#  高级Day 06-07---ajax![](http://www.yztcedu.com/images/logo.png)

# 零、基础知识准备

## 0.1	B/S和C/S

​	什么是B/S和C/S

B/s :  browser / server

C/s:  client /server

## 0.2	HTTP协议

​	请求和响应

请求协议：

​	浏览器向服务器发送请求的时候使用的协议

请求行

​	访问的路径，主机，协议版本

请求头

​	浏览器的一些信息

请求体

​	get请求没有请求体

 	post请求才有请求体



响应协议：

 	响应码：服务器给浏览器响应后的一种代码。     200 ok     404：资源没有找到     500：服务器内部问题



## 0.3	GET请求和POST请求

​	GET请求和POST请求的区别

get请求：

​	没有请求体。 get请求如果想向服务器传递数据，必须把要传递的数据放入到  **url** 中。

​	请求数据是键值对的形式，建和值用=连接

post请求：

​	有请求体。而且我们的数据都是通过请求体提交的数据



#一、AJAX简介

​	传统的网页（不使用 AJAX）如果需要更新内容，必须重载整个网页页面，在加载新的网页的过程中，用户会有一个等待。降低了用户体验。

​	局部更新！

​	AJAX的出现就可以让网页进行部分更新。

​	异步和同步：

​	Ajax的全称是Asynchronous JavaScript+XML ，Ajax不是一个技术，它实际上是几种技术，每种技术都有其独特这处，合在一起就成了一个功能强大的新技术。Ajax结合了异步技术、XML以及JavaScript等编程技术，可以让开发人员构建基于Js技术的Web应用，并打破了使用页面重载的惯例。 Ajax是使用客户端脚本与Web服务器交换数据的Web应用开发方法。这样，Web页面不用打断交互流程进行重新加载，就可以动态地更新。使用Ajax，用户可以创建接近本地桌面应用的直接、高可用、更丰富、更动态的Web用户界面。

​	Ajax刚出生的时候，用的比较多的数据格式是XML，后来JSON数据格式更多的去替换了XML格式的数据。

# 二、AJAX工作原理

- ![](http://o7cqr8cfk.bkt.clouddn.com/public/16-11-14/99053133.jpg)

# 三、使用AJAX

​	AJAX的核心对象是XMLHttpRequest, 这个对象在目前的所有浏览器都支持，只是IE6 和 IE5的写法不一样而已。使用AJAX一般按照下面 **4个步骤** 使用即可。

## 3.1	步骤1：创建XMLHttpRequest对象

​	这个对象从IE5开始支持，后来各大浏览器都进行了跟进。IE7+和chrome、firefox写法一样，IE6以前的浏览器一种写法。实际开发中，一般使用如下的兼容写法。

```javascript
function createXHR() {
  if(window.XMLHttpRequest) {
    //标准浏览器创建XMLHttpRequest对象的方式
  	return new XMLHttpRequest();
  }else{
    //IE5和IE6的创建方式
 	return new ActiveXObject("Microsoft.XMLHTTP");
  }
}
```

## 3.2	步骤2：调用open方法

```javascript
/*调用open方法
* 参数1：请求方法，一般是get或post
* 参数2：请求是url
* 参数3：是否为异步。true表示异步，默认是true异步。
*/
xhr.open("GET", "msg.json", true);
```

> 注意：

- URL相对于执行代码的当前页面（当然也可以使用绝对路径）；
- 调用 open() 方法并不会真正发送请求，而只是启动一个请求以备发送。
- 如果使用绝对路径,则一定要和当前页面的协议、主机和端口完全一致，否则会出现错误。



## 3.3	步骤3：监听请求状态(onreadystatechange)

​	xhr.onreadystatechange监听请求状态，根据状态来确定数据获得之后要做的事情。

​	xhr.readyState的值保存了xhr的状态。一共有5种状态，每个状态用1个整数来表示

- 0    未初始化。对象new出来了，但是还没有调用open方法
- 1    启动。 已经调用open，但是还没有调用send方法
- 2    发送。 已经send方法，但是还没有接收到相应
- 3    接收。 已经开始接收数据，但是还没有完全接收。
- **4    完成。 已经完全接收数据。**

作为开发者，我们一般只关注 **第4种** 状态。

```javascript
//监听状态
xhr.onreadystatechange = function () {
  	// 如readyState的值为4，表示已经接收完数据，可以开始对数据处理。
	if(xhr.readyState == 4){
      	// xhr.status 保存了服务的响应码，  200表示正常响应  
		if(xhr.status == 200){
			alert(xhr.responseText);
		}
	}
}
```

==**注意：步骤2和步骤3可以调换顺序。**==

## 3.4	步骤4：调用send方法发送请求	

```javascript
//send方法才是真的的发起网络请求。 参数：请求的时候向服务区传递的参数。 如果是get请求，直接传入null即可。
xhr.send(null);
```

#四、 使用AJAX是携带参数

​	**不同的请求方式，携带参数的方式不一样。**

## **4.1**	GET请求

​	get请求携带的参数直接追加到url后面即可。`?`后面跟的就是参数，多个参数之间用`&`连接。注意，参数中的中文必须要经过`url`编码。

```javascript
var url = 'http://wthrcdn.etouch.cn/weather_mini?city='+encodeURI('深圳')+'&pwd='+pwdValue;
```

## 4.2	POST请求

​	post请求的的参数是在send方法中携带，参数的格式必须是：xxx=XXX&yyy=YYY格式。并且需要添加头部信息

xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")

```javascript
//post请求必须添加这个头部
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
xhr.send('user='+nameVal + '&pwd=' + pwdVal);
```

# 五、同源策略

## 5.1	什么是同源策略

​	 同源策略，它是由Netscape提出的一个著名的安全策略，现在所有的可支持javascript的浏览器都会使用这个策略。最初，它的含义是指，A网页设置的 Cookie，B网页不能打开，除非这两个网页"同源"。所谓"同源"指的是"**三个相同**"。

1. 协议相同

2. 域名相同

3. 端口号相同

   例如：http://www.yztcedu.com:80/index.html

   协议： http

   域名：www.yztcedu.com

   端口号：80(省略的时候默认是80)

   ​

   http://www.yztcedu.com/another.html	同源

   https://www.yztcedu.com/a.html	不同源 因为协议不同

   http://www.yztc.com/a.html	不同源	因为域名不同

   http://www.yztcedu.com:8080/a.html	不同源	因为端口号不同。

   要想同源，三个必须完全相同。



## 5.2	同源策略的目的

​	同源政策的目的，是为了保证用户信息的安全，防止恶意的网站窃取数据。

## 5.2	同源策略的限制范围

​	随着互联网的发展，"同源政策"越来越严格。目前，如果非同源，共有三种行为受到限制。

（1） Cookie、LocalStorage 和 IndexDB 无法读取。

（2） DOM 无法获得。

**（3） AJAX 请求接收不到数据。**   



# 六、AJAX中规避同源策略

​	在AJAX中，同源策略要求，AJAX只能发给同源的网址，否则就报错。

![](http://o7cqr8cfk.bkt.clouddn.com/public/16-11-14/63159156.jpg)

## 6.1	使用JSONP规避同源（服务器端和前端要配合）

​	JSONP是服务器与客户端跨源通信的常用方法。最大特点就是简单适用，老式浏览器全部支持，服务器改造非常小。

​	它的基本思想是，网页通过动态添加一个 script 元素，向服务器请求 JSON 数据，这种做法不受同源政策限制；服务器收到请求后，将数据放在一个指定名字的回调函数里传回来。

```javascript
//函数功能：添加script标签。	参数表示AJAX要请求的地址(一个外部的网页)。
function addScriptTag(src) {
  var script = document.createElement('script');
  script.setAttribute("type","text/javascript");
  script.src = src;
  document.body.appendChild(script);
}
//请求参数中添加一个callback参数，用来指定回调函数的名字，这对于JSONP是必须的。
window.onload = function () {
  addScriptTag('http://localhost:8020?callback=foo');
}
//回调函数。 一旦响应成功，会执行该方法
function foo(data) {
  alert(data);
  console.log(data);
};
```

*使用JSONP的局限性：只能使用get请求，不能发送post请求。如果想要发送post请求，只能其他的途径*

## 6.2	服务器断打破同源( *必须服务器支持* )	

![](http://o7cqr8cfk.bkt.clouddn.com/16-12-10/15828407-file_1481381845672_6961.png)

> php端支持跨域的代码：

```php
header("Access-Control-Allow-Origin:*");
```

# 七、AJAX的数据解析

## 7.1	解析JSON数据

## 7.2	解析XML数据

> 一段xml数据：

```xml
<?xml version="1.0" encoding="utf-8"?>
<users>
	<user id="1" >
		<name>李四</name>
		<age>20</age>
		<sex>男</sex>
	</user>
	<user id="2">
		<name>张三</name>
		<age>20</age>
		<sex>女</sex>
	</user>
</users>	
```

# 八、使用ajax提交表单数据

## 8.1	FormData

> FormData主要方便序列化表单数据和创建与表单数据格式相同的数据。

```javascript
//创建一个FormData对象
var data = new FormData(); 
//append接收两个参数：键和值。相当于表单中的name的值和value的值
data.append("name", "lisi");
```

> 传入表单元素，则可以把表单中的数据直接存入到了FormData中

```javascript
//直接把表单中的数据存入到FormData中
var data = new FormData(document.forms[0]);
```

> 有了FormData对象可以把它作为send函数的参数。

```javascript
xhr.send(new FormData(form))
```

**注意：**

​	使用 FormData 的方便之处体现在不必明确地在 XHR 对象上设置请求头部。XHR 对象能够别传 入的数据类型是 FormData 的实例，并配置适当的头部信息。

# 附录php代码

```php
<?php
/*$user = $_POST["user"];
$pwd = $_POST["pwd"];*/

$user = $_GET["user"];
$pwd = $_GET["pwd"];
if($user == "zs"){
	echo $user . "登录成功";
}else{
	echo $user . "登录失败";
}
?>
```



```php
header("Content-Type:text/html;charset=utf-8");
```