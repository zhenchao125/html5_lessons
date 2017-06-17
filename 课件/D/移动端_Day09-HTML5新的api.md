# 移动端_Day09-HTML5新API

# 一、数据本地化存储

​	本地化存储的意思是，把一些数据存储到客户端。

> web本地化存储的发展：

 ![](http://o7cqr8cfk.bkt.clouddn.com/17-6-17/55119156.jpg)

- HTTP cookie：HTTP cookie的缺点很明显，最多只能存储4KB的数据，每个HTTP请求都会被传送回服务器，明文传输（除非你使用SSL）。

  对于购物网站而言，cookie是非常重要的，为了实现购物车功能，把已选物品加入cookie，可以实现不同页面之间数据的同步，同时在提交订单的时候又会把这些cookie传到后台，大大方便了前后端开发

- userData是微软在上世纪90年代的浏览器大战时推出的本地存储方案，借助DHTML的behaviour属性来存储本地数据， 允许每个页面最多存储64K数据，每个站点最多640K数据。

  userData的缺点显而易见，它不是Web标准的一部分，除非你的程序只需要支持IE， 否则它基本没什么用处。

- Flash cookie的名字有些误导，它实际上和HTTP cookie并不是一回事，或许它的名字应该叫做"Flash本地存储”，Flash cookie默认允许每个站点存储不超过100K的数据，如果超出了，Flash会自动向用户请求更大的存储空间，借助Flash的 ExternalInterface接口，你可以很轻松地通过Javascript操作Flash的本地存储。

  Flash的问题很简单，就是因为它是 Flash。

- Gears是Google在07年发布的一个开源浏览器插件，旨在改进各大浏览器的兼容性，Gears内置了一个基于SQLite的嵌入式 SQL数据库，并提供了统一API对数据库进行访问，在取得用户授权之后，每个站点可以在SQL数据库中存储不限大小的数据。

  Gears的问题就是 Google自己都已经不用它了。

---

​	从上面的简介我们可以看出，在以前，本地存储面临的主要问题是，对于存储容量较大的方式，需要特定的插件支持；对于不需要插件支持的存储方式，则处于安全问题或者大小限制而遭到扼杀。

​	在这种双重的矛盾面前，HTML5本地存储横空出世，对于前端开发人员是一种巨大的福音。

# 二、cookie知识

## 2.1	什么是cookie

​	Cookie，有时也用其复数形式 Cookies，指某些网站为了辨别用户身份、进行 session 跟踪而储存在用户本地终端上的数据（通常经过加密）。

​	Cookie 是在 HTTP 协议下，服务器或脚本可以维护客户工作站上信息的一种方式。Cookie 是由 Web 服务器保存在用户浏览器（客户端）上的小文本文件，它可以包含有关用户的信息。无论何时用户链接到服务器，Web 站点都可以访问 Cookie 信息。

​	cookie是浏览器提供的一种机制，它将document 对象的cookie属性提供给JavaScript。可以由JavaScript对其进行控制，而并不是JavaScript本身的性质。cookie是存于用户硬盘的一个文件，这个文件通常对应于一个域名，当浏览器再次访问这个域名时，便使这个cookie可用。因此，cookie可以跨越一个域名下的多个网页，但不能跨越多个域名使用。 而且不同的浏览器之间cookie不能共享。

> **==cookie的本质就是用键值对存储在用户本地的一些数据，这些数据不同的网站，不同的浏览器是不能共享的==**

## 2.2	cookie的用处

​	cookie机制将信息存储于用户硬盘，因此可以作为全局变量，这是它最大的一个优点。它可以用于以下几种场合。 

1. 保存用户登录状态。例如将用户id存储于一个cookie内，这样当用户下次访问该页面时就不需要重新1录了，现在很多论坛和社区都提供这样的功能。 cookie还可以设置过期时间，当超过时间期限后，cookie就会自动消失。因此，系统往往可以提示用户保持登录状态的时间：常见选项有一个月、三个 月、一年等。 
2. 跟踪用户行为。例如一个天气预报网站，能够根据用户选择的地区显示当地的天气情况。如果每次都需要选择所在地是烦琐的，当利用了 cookie后就会显得很人性化了，系统能够记住上一次访问的地区，当下次再打开该页面时，它就会自动显示上次用户所在地区的天气情况。因为一切都是在后 台完成，所以这样的页面就像为某个用户所定制的一样，使用起来非常方便。 
3. 定制页面。如果网站提供了换肤或更换布局的功能，那么可以使用cookie来记录用户的选项，例如：背景色、分辨率等。当用户下次访问时，仍然可以保存上一次访问的界面风格。 
4. 创建购物车。正如在前面的例子中使用cookie来记录用户需要购买的商品一样，在结账的时候可以统一提交。例如淘宝网就使用cookie记录了用户曾经浏览过的商品，方便随时进行比较。 



## 2.3	cookie的缺陷

1. cookie可能被禁用。当用户非常注重个人隐私保护时，他很可能禁用浏览器的cookie功能； 
2. cookie是与浏览器相关的。这意味着即使访问的是同一个页面，不同浏览器之间所保存的cookie也是不能互相访问的； 
3. cookie可能被删除。因为每个cookie都是硬盘上的一个文件，因此很有可能被用户删除； 
4. cookie安全性不够高。所有的cookie都是以纯文本的形式记录于文件中，因此如果要保存用户名密码等信息时，最好事先经过加密处理。 



## 2.4	cookie的构成

> cookie 由浏览器保存的以下几块信息构成。

1. 名称：一个唯一确定 cookie 的名称。cookie 名称是不区分大小写的，所以 myCookie 和 MyCookie被认为是同一个 cookie。然而，实践中最好将 cookie 名称看作是区分大小写的，因为某些服务器会这样处理 cookie。cookie 的名称必须是经过 URL 编码的。
2. 值：储存在 cookie 中的字符串值。值必须被 URL 编码。
3. 域：cookie 对于哪个域是有效的。所有向该域发送的请求中都会包含这个 cookie 信息。这个值可以包含子域（subdomain，如 www.wrox.com ），也可以不包含它（如. wrox.com ，则对于wrox.com的所有子域都有效）。如果没有明确设定，那么这个域会被认作来自设置 cookie 的那个域。
4. 路径：对于指定域中的那个路径，应该向服务器发送 cookie。例如，你可以指定 cookie 只有从
   http://www.wrox.com/books/ 中才能访问，那么 http://www.wrox.com 的页面就不会发送 cookie 信息，即使请求都是来自同一个域的。
5. 失效时间：表示 cookie 何时应该被删除的时间戳（也就是，何时应该停止向服务器发送这个cookie）。默认情况下，浏览器会话结束时即将所有 cookie 删除；不过也可以自己设置删除时间。这个值是个 GMT 格式的日期（Wdy, DD-Mon-YYYY HH:MM:SS GMT），用于指定应该删除cookie 的准确时间。因此，cookie 可在浏览器关闭后依然保存在用户的机器上。如果你设置的失效日期是个以前的时间，则 cookie 会被立刻删除。
6. 安全标志：指定后，cookie 只有在使用 SSL 连接的时候才发送到服务器。例如，cookie 信息只
   能发送给  https://www.wrox.com ，而 http://www.wrox.com 的请求则不能发送 cookie。



## 2.5	存储cookie

> 有2种途径去存储cookie.

1. 服务器端通过http响应头Set-Cookie来通知浏览器存储cookie。例如：(这个暂时不研究，仅了解)。浏览器收到这个头响应头之后会自动存储这个cookie

```javascript
HTTP/1.1 200 OK
Content-type: text/html
Set-Cookie: name=value; expires=Mon, 22-Jan-07 07:10:24 GMT; domain=.wrox.com
//Other-header: other-header-value
```

2. 客户端(浏览器端)通过JavaScript去存储cookie(重点研究)。Javascript操作cookie需要通过document的cookie属性来完成。

```javascript
//存储cookie，并设置超时时间。  domaim和secure使用默认的情况
<script type="text/javascript">
	/*
		在存储cookie的时候，name和value是必须的
		参数1：cookie的name
		参数2：cookie的值
		参数3：存储时间 单位天
		
		只要name不同，就可以存储多个cookie
	*/
	function saveCookie(name, value, expiredays){
        var d = new Date();
        d.setTime(d.getTime() + (expireday * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = name + "=" + value + "; expires=" + expires;
	}
	saveCookie("name", "张三", 1);
</script>
```

## 2.5	读取cookie

> 读取cookie仍然是通过document的cookie属性，不过字符串需要我们自己解析。
>
> 只能说，JavaScript的这个API设计的真烂

```javascript
<script type="text/javascript">
function readCookie(name){
    name += "=";
    var cookie = document.cookie;
    var ca = cookie.split(";")
    for (var i = 0; i < ca.length; i++){
        var c = ca[i].trim();
        if (c.indexOf(name) != -1){
            return c.substring(name.length);
        }
    }
}
var value = readCookie("name");
console.log(value);

</script>
```

## 2.6	删除cookie

> 删除cookie的原理非常简单，只要把超时时间设置为0，就会立即删除了。

```javascript
function removeCookie(name, expireday){
    var d = new Date();
    d.setTime(d.getTime() + (expireday * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = name + "=; expires=" + expires;
}
removeCookie("name", 0);
```
# 二、HTML5本地存储

## 2.1	HTML5本地存储的优点

1. 解决了4k的大小问题
2. 解决了请求头常带存储信息的问题
3. 解决了关系型存储的问题
4. 跨浏览器



## 2.2	HTML5的`localStorage`和`sessionStorage`

`Web Storage` 包含如下两种机制：

- `sessionStorage` 为每一个给定的源（`given origin`）维持一个独立的存储区域，该存储区域在页面会话期间可用（即只要浏览器处于打开状态，包括页面重新加载和恢复）。
- `localStorage` 同样的功能，但是在浏览器关闭，然后重新打开后数据仍然存在。

---

​	这两种机制是通过 `Window.sessionStorage`和 `Window.localStorage` 属性使用，调用其中任一对象都会创建 `Storage`对象，可以设置、获取和移除数据项。对于每个源（origin）`sessionStorage` 和 `localStorage` 使用不同的 Storage 对象——独立运行和控制。

​	例如，在文档中调用 `localStorage` 将会返回一个 `Storage`对象；调用 `sessionStorage` 返回一个不同的 `Storage`对象。可以使用相同的方式操作这些对象，但是操作是独立的。

**总结：`localStorage`和`sessionStorage`具有相同的`api`，因为他们都是`Storage`类型的对象。**

### 用到的属性和方法

#### 属性

`storage.length`

​	返回一个整数，表示存储在`storage`对象中的数据项的数量

#### 方法

`storage.key(index)`

​	返回存储对象第 `index` 个数据项的键名。`index` 从 `0`开始

`storage.getItem(keyName)`

​	接受一个键名（`key name`）作为参数，并返回对应键名的值（`key's value`）。

`storage.setItem(keyName, keyValue)`

​	接受一个键名和值作为参数，将会把键名添加到存储中，如果键名已存在，则更新其对应的值。

`storage.removeItem(keyName)`

​	接受一个键名作为参数，会把该键名和对应的键值从存储中移除。(删除键值对)

`storage.clear()`

​	清空存储对象里所有的键值

### 案例

```html

<style>
body{
    background-color: #ff0000;
}
</style>

<div id="bg_color">
    <p>选择背景色</p>
    <input type="color" value="#ff0000">
</div>
<div id="image">
    <p>选择图片</p>
    <select >
        <option value="1.jpg" selected>美女1</option>
        <option value="2.jpg">美女2</option>
        <option value="3.jpg">美女3</option>
    </select>
    <br>
    <img src="./1.jpg" alt="">
</div>
<script>
var bgInput = document.querySelector("#bg_color input");
var imgSelect = document.querySelector("#image select")
var img = document.querySelector("img");

//如果已经存储过，则直接设置样式。
if(localStorage.getItem("bgColor")){
    setStyle();
}else{  //否则把默认样式存储起来
    populateStorage();
}
  
bgInput.onchange = populateStorage;
imgSelect.onchange = populateStorage;

/*向localStorage 中存储数据*/
function populateStorage(){
    localStorage.setItem("bgColor", bgInput.value);
    localStorage.setItem("imgSrc", imgSelect.value);

    setStyle();
}

/*从 localStorage 中读取数据，并设置相应的样式*/
function setStyle(){
    var bgColor = localStorage.getItem("bgColor");
    var imgSrc = localStorage.getItem("imgSrc");
    document.body.style.backgroundColor = bgColor;
    img.src = imgSrc;
    
    bgInput.value = bgColor;
    imgSelect.value = imgSrc;
}
</script>
</body>
</html>
```

# 三、地理位置API

`HTML5Geolocation API` 用于获得用户的地理位置。

鉴于该特性可能侵犯用户的隐私，除非用户同意，否则用户位置信息是不可用的。

> 浏览器支持：

InternetExplorer 9、Firefox、Chrome、Safari以及 Opera支持地理定位。

注释：对于拥有 GPS的设备，比如 iPhone，地理定位更加精确。

## 3.1	获取`Geolocation`对象

`navigator` 只读属性返回一个 `Geolocation` 对象，通过这个对象可以访问到设备的位置信息。这允许网站或应用根据用户的位置提供个性化结果。

```javascript
var geo = navigator.geolocation
```

## 3.2	`Geolocation`对象的方法

`Geolocation`类型的对象没有属性，只有3个方法：

1. `navigator.geolocation.getCurrentPosition(success, error, options)`

   这个方法用于获取当前设备的地理位置。

   3个参数：

   *success*

   成功得到位置信息时的回调函数，使用`Position`对象作为唯一的参数。 

   *error* 可选

   获取位置信息失败时的回调函数，使用 `PositionError`对象作为唯一的参数，这是一个可选项。 

   *options* 可选

   一个可选的`PositionOptions` 对象。

```html
<body>
<button>获取地理位置信息</button>
<div>
    <p>你的地理位置信息是：</p>
    <p></p>
</div>
<script>
document.querySelector("button").onclick = function (){
  	//location有两个属性：coords 封装了位置信息  timestamp  时间戳
    navigator.geolocation.getCurrentPosition(function (location){
        var longitude = location.coords.longitude;  //经度
        var latitude = location.coords.latitude; // 纬度
        var altitude = location.coords.altitude; // 海拔. 如果不提供则返回null
        var accuracy = location.coords.accuracy; // 精度
        var speed = location.coords.speed; // 运动速度 如果不提供则返回null
        document.querySelector("div p:nth-child(2)").innerHTML =
            `经度：${longitude}<br>
             维度：${latitude}<br>
             海拔：${altitude}米<br>
             精度：${accuracy}米<br>
             运动速度：${speed}m/s<br>
            `;
    }, function (postionError){
        var errorMsg;
        switch (postionError.code){
            case 1 :
                errorMsg = "地理位置信息的获取失败，因为该页面没有获取地理位置信息的权限。"
                break
            case 2 :
                errorMsg = "地理位置获取失败，因为至少有一个内部位置源返回一个内部错误。"
                break
            case 3 :
                errorMsg = "地理位置获取失败，因为至少有一个内部位置源返回一个内部错误。"
                break
        }
        document.querySelector("div p:nth-child(2)").innerHTML = errorMsg;
    });
};
</script>
</body>
```



1. navigator.geolocation.watchPosition(success[, error[, options]])`

   用于注册监听器，在设备的地理位置发生改变的时候自动被调用。也可以选择特定的错误处理函数。

   参数和方法1是一样的。

   返回值是监听器的 `id`

2. `navigator.geolocation.clearWatch(id);`

   取消由 `watchPosition()注册的位置监听器。`




