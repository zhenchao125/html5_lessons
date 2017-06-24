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



## 2.2	HTML5的 `localStorage` 和 `sessionStorage`

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
    },{
        enableHighAccuracy : true,
        timeout : 3000,
        maximumAge : 10000
    });
};
</script>
</body>
```

2. `navigator.geolocation.watchPosition(success[, error[, options]])`

   用于注册监听器，在设备的地理位置发生改变的时候自动被调用。也可以选择特定的错误处理函数。

   参数和方法1是一样的。

   返回值是监听器的 `id`

3. `navigator.geolocation.clearWatch(id);`

   取消由 `watchPosition()注册的位置监听器。`


# 四、`File Api`

​	在HTML5之前的，从网页上传文件一次只能上传一个文件，而且也无法对要上传的文件做更深一步的操作。

​	HTML5提供了一个系列关于文件操在的API，通过使用这些API，对于从Web页面访问本地文件系统的相关处理将会变的非常简单。

## 4.1	File和FileList对象

​	`<input>`的type属性为 file 的时候，那么它就可以访问本地文件系统了。在HTML5之前，一次只能选择一个文件。HTML5中，给`<input>`添加属性 multiple 则可以一次选择多个文件。

**注意：multiple或multiple='multiple' 两种写法都可以。**

```html
<form action="#" enctype="multipart/form-data">
    <input type="file" multiple>
</form>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-10/91556762-file_1486692574714_10fab.gif)



​	用户选择的每一个文件都是一个File对象，而如果选择了多个File，则FileList表示这些多个File对象的列表集合。

​	**File对象提供了关于文件的一些信息并且允许Javascript去访问这些信息。**



> File主要提供了4个属性(包括从Blob中的继承的)

1. `file.lastModified`：表示的文件的最后修改时间。以毫秒为单位。
2. `file.name`：获取的是文件的文件名。由于安全考虑，这个地方的文件名不包含路径。
3. `file.size`：获取到文件大小。以字节为单位。
4. `file.type`: 获取文件的 `mime` 类型

> FileList是多个File的列表集合.
>
> 可以通过 `input.files`来得到`FileList`
>
> `FileList`的属性和方法：

属性：

`list.length`:文件的数量

方法：

`list.item(index)`:获取 `file`。注意：`index`从0开始计算。

> `File`和`FileList`使用参考下面的`demo`

```html
<form action="#" enctype="multipart/form-data">
    <input type="file" multiple>
</form>
<button>获取文件相关信息</button>
<p id="content"></p>
<script type="text/javascript">
    var btn = document.getElementsByTagName("button")[0];
    //1. 获取文件元素
    var inputFile = document.getElementsByTagName("input")[0];
    btn.onclick = function () {
        //2. 得到FileList
        var files = inputFile.files;
        for(var i = 0; i <
files.length; i++){ //files.length:返回类别中File对象的数量
            //3. files.itemt(i) 获取到每个文件。  
            var msg = `第${i + 1}个文件的文件名:${files.item(i).name}, 最后修改时间:${files.item(i).lastModified},文件长度：${files.item(i).size}`;
            content.innerHTML += msg + "<br>";
        }
    }
</script>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-10/74322032-file_1486695032477_18f5.gif)

## 4.2	`Blob`对象

表示二进制原始文件。前面见到的File对象也继承了Blob对象。

注意包括两个属性：size和type。

`size`：表示Blob对象的字节长度。  File文件的size就是继承这里的size

`type`：表示Blob的MIME类型。如果未知则返回一个长度为 0 的字符串。FIle对象也继承了这个属性。

> 仍然以File对象来演示Blob对象:

```javascript
for(var i = 0; i < files.length; i++){ //files.length:返回类别中File对象的数量
            
       var file = files.item(i);
       var msg = `第${i + 1}个文件的MIME类型：${file.type}<br>`;
	   content.innerHTML += msg
}
```

## 4.3	`FileReader`

​	`FileReader`对象允许`Web` 应用程序以==异步的方式读取文件的内容==，使用`File`对象或`Blob`对象指定要读取的文件。

​	`FileReader`对象主要包括3个属性和5个方法、6个事件。

### 3个属性

1. `FileReader.error`: 读取文件的时候发生的错误信息
2. `FileReader.readyState`:0-2数字，表示`FileReader`的状态

| EMPTY   | 0    | No data has been loaded yet.还没有加载到数据     |
| ------- | ---- | ---------------------------------------- |
| LOADING | 1    | Data is currently being loaded.正在加载数据    |
| DONE    | 2    | The entire read request has been completed.数据加载完成 |

3. `FileReader.result`:这个是最重要的属性。读取到的内容都存储在了这个属性中。只能在`readyState DONE`之后才能读取这个属性值。读取到的数据类型取决于用什么的方法去读取的文件。

### 5个方法

1. `FileReader.abort()`：终止读取文件的操作。这个方法一点结束，则readyState就成为了DONE
2. `FileReader.readAsArrayBuffer()`：开始读取文件的内容，一旦完成，则把文件的数据存储在`ArrayBuffer`中。当然`ArrayBuffer`自然也会存储在`FileReader`的`result`属性中
3. ~~FileReader.readAsBinaryString()：以二进制的形式读取文件的内容。***这个方法是非标准方法，不要使用。***~~
4. `FileReader.readAsDataURL()`：将文件读取为`DateUrl`
5. `FileReader.readAsText()`：将文件的内容读取文本。读取纯文本内容的时候使用。

### 6个事件
1. `FileReader.onloadstart`：**数据开始读取时触发。**

   A handler for the loadstart event. This event is triggered each time the reading is starting.*

2. `FileReader.onprogress`：**数据读取过程中触发。**

   A handler for the progress event. This event is triggered while reading a Blob content.

3. `FileReader.onloadend`：**数据读取完成后触发。不管数据读取成功还是失败都会触发。**

   A handler for the loadend event. This event is triggered each time the reading operation is completed (either in success or failure).

4. `FileReader.onload`：**数据读取成功后触发。**

   A handler for the load event. This event is triggered each time the reading operation is successfully completed.


5. `FileReader.onabort`：**数据读取被中断时触发。**

   A handler for the abort event. This event is triggered each time the reading operation is aborted.


6. `FileReader.onerror`：**数据读取发生错误时触发。**

   A handler for the error event. This event is triggered each time the reading operation encounter an error.


```html
<input type="file" multiple id="file">
<br>
<button id="readBtn">读取文件内容</button>
<img src="" alt="">
<p id="content">此处显示读取到的文件内容</p>

<script type="text/javascript">
var fileInput = document.getElementById("file");
var readBtn = document.getElementById("readBtn");
var content = document.getElementById("content");
var img = document.querySelector("img");

readBtn.onclick = function (){
    //1. 检测当前浏览器是否支持FileReader
    if (!FileReader){
        content.innerHTML = "你的文件不支持FileApi";
        return;
    }
    //2. 获取到用户选择的所有文件
    var files = fileInput.files;
    for (var i = 0; i < files.length; i++){
        //3. 获取用户选择的每一个文件
        var file = files.item(i);
        //4. 判断文件的类型，如果是文本文件就显示在p标签中，如果是图片，就显示在 img中
        if (file.type.startsWith("text")){
            //5. 创建FileReader对象
             
            //6. 定义数据读取成功的回调函数
            reader.onload = function (event){
                content.innerHTML += "<hr>" + reader.result;
            }
            //7. 开始读取文件数据
            reader.readAsText(file, "utf-8");
            
        }else if(file.type.startsWith("image")){
            //如果是图片文件，就以dataURL的形式读取。把读取到结果是一个url，给img标签的src
            var reader = new FileReader();
            reader.onload = function (event){
                img.src = event.currentTarget.result;
            }
            reader.readAsDataURL(file);
        }
    }
}
</script>
```

 # 五、`Drag和Drop API`

​	在HTML5中，提供了直接支持拖放操作的API。新的拖放API已经支持浏览器与其他应用程序之间的互相拖动。相比以前的使用`mousedown`、`mouseover`、`mouseup`实现的拖放，新的`API`大大简化了拖放的代码。

## 实现拖放的步骤

### 步骤1

​	把要拖放的对象的元素的`draggable`属性设为`true(draggable="true")`。另外对`<img>`和`<a>`元素默认允许拖放。

```html
<ul>
    <li>志玲</li>
    <li>凤姐</li>
    <li>张三</li>
    <li>李四</li>
    <li>王五</li>
    <li>马六</li>
</ul>
<script>
var lis = document.querySelectorAll("ul li");
//每个li元素都设置 draggable=true 允许li拖拽
for (let i = 0; i < lis.length; i++){
    lis[i].setAttribute("draggable", "true");
}
</script>
```

也可以直接在元素上添加

```html
<div draggable="true"></div>
```

### 步骤2

编写与拖放事件有关的事件处理代码

共有 8 个与拖放有关的事件

| 事件        | 产生事件的元素       | 描述                                       |
| :-------- | :------------ | ---------------------------------------- |
| dragstart | 被拖动的元素或文本     | This event is fired when the user starts dragging an element or text selection。***当开始拖动选择的元素或文本的时候出发*** |
| drag      | 被拖动的元素或文本     | This event is fired when an element or text selection is being dragged。***在元素在拖动的过程中触发。(会重复触发)*** |
| dragenter | ==拖放的目标元素==   | This event is fired when a dragged element or text selection enters a valid drop target。***元素进入目标元素区域的时候触发。*** |
| dragover  | ==拖放的目标元素==   | This event is fired when an element or text selection is being dragged over a valid drop target (every few hundred milliseconds).***在目标元素领域经过的时候触发*** (会一直重复触发) |
| dragleave | ==拖放的目标元素==   | This event is fired when a dragged element or text selection leaves a valid drop target.***当离开目标元素的时候触发。*** |
| dragend   | 被拖动的元素        | This event is fired when a drag operation is being ended (by releasing a mouse button or hitting the escape key).***当拖放操作完成后触发(松开了鼠标键或者按下了esc键)*** |
| dragexit  | 被拖动的元素        | This event is fired when an element is no longer the drag operation's immediate selection target.***当元素不再是拖动操作的直接目标时触发*** |
| drop      | ==drop的目标元素== | This event is fired when an element or text selection is dropped on a valid drop target。***当在有效的目标上放下拖动的元素后触发*** |
|           |               |                                          |

### 案例1

```html
<!DOCTYPE html>
<html>
<head>
<title>Title</title>
<meta charset="utf-8">
<style>
.dropzone {
    box-sizing: border-box;
    width: 400px;
    height: 100px;
    background: gray;
    display: flex;
    border: 1px solid #000;
}

#draggable {
    width: 200px;
    height: 60px;
    text-align: center;
    margin: auto;
    background-color: white;
    
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
</head>
<body>
<!--dropzone:表示可释放的区域-->
<div class="dropzone" id="div1">
    <!--可拖动的元素 draggable="true"-->
    <div id="draggable" draggable="true">
        来拖动我啊
    </div>
</div>
<div class="dropzone" id="div2"></div>
<div class="dropzone" id="div3"></div>
<div class="dropzone" id="div4"></div>

<script>
var dragged;

/*开始拖动的时触发。 只触发一次  在被拖动的元素上触发*/
document.addEventListener("dragstart", function (event){
    console.log("dragstart", event.target.id);
    // 保存被拖动的元素对象
    dragged = event.target;
    // 把拖动元素的设置成半透明。
    event.target.style.opacity = .4;
}, false);

/* 拖动的过程中触发。 只要元素在拖动，会一直重复触发   在被拖动的元素上触发*/
document.addEventListener("drag", function (event){
//    console.log("drag", event.target.id);
}, false);

/*进入另外一个元素的区域时触发.  是在目标元素上触发*/
document.addEventListener("dragenter", function (event){
    console.log("dragenter", event.target.id);
    // 判断当前的目标是否进入了潜在的 dropzone区域，如果是则高量这个潜在的目标区域
    if (event.target.className == "dropzone"){
        event.target.style.background = "red";
    }

}, false);

/* 在潜在目标区域的上方的时候会重复触发 */
document.addEventListener("dragover", function (event){
    console.log("dragover", event.target.id);
    // 因为默认情况下，拖放目标是不允许接受元素的。阻值默认行为，可以随时释放元素。
    event.preventDefault();  //必须阻止默认行为，否则的后面的drop事件不会触发
}, false);

/*松开鼠标拖放结束。*/
document.addEventListener("dragend", function (event){
    console.log("dragend", event.target.id);
    // 把元素的透明重新设置为1
    event.target.style.opacity = "1";
}, false);

/*从潜在目标元素上方离开的时候触发*/
document.addEventListener("dragleave", function (event){
    console.log("dragleave", event.target.id);
    // 因为进入一个元素的时候更改了目标元素的北京，所以离开的时候要重置背景
    if (event.target.className == "dropzone"){
        event.target.style.background = "";
    }

}, false);
document.addEventListener("dragexit", function (event){
    console.log("dragexit", event.target.id);
}, false);
/*释放拖动元素的时候触发。  这个事件是在dropend事件触发前触发。*/
document.addEventListener("drop", function (event){
    console.log("drop", event.target.id);
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // 把拖动的元素移动目标区域中
    if (event.target.className == "dropzone"){
        event.target.style.background = "";
        //把拖动元素从他原来的父节点中移除。
        dragged.parentNode.removeChild(dragged);
        //插入到目标元素中。
        event.target.appendChild(dragged);
    }

}, false);
</script>
</body>
</html>
```

### 案例2：拖拽文件

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Title</title>
<style>

html, body {
    height: 100%;
    margin: 0;
    height: 0;
}

div {
    height: 400px;
    background-color: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
}
</style>
</head>
<body>
<div id="dropArea">请拖拽文件到此区域</div>
<img src="" alt="">
<script>
var dropArea = document.getElementById("dropArea");
dropArea.addEventListener("dragenter", function (e){
    e.preventDefault();
    this.style.backgroundColor = "pink";
});
dropArea.addEventListener("dragover", function (e){
    e.preventDefault();
});
dropArea.addEventListener("dragleave", function (e){
    e.preventDefault();
    this.style.backgroundColor = "lightgray";
});
dropArea.addEventListener("drop", function (e){
    e.preventDefault();  //阻止默认行为。(浏览器的默认行为是打开文件)
    var file = e.dataTransfer.files[0];
    var fileReader = new FileReader();
    fileReader.onload = function (e){
        document.querySelector("img").src = fileReader.result;
    }
    fileReader.readAsDataURL(file);

})

</script>
</body>
</html>
```

