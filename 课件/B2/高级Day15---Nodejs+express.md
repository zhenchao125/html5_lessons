#  高级Day 15---Nodejs + express![](http://www.yztcedu.com/images/logo.png)

# 一、 Node.js简介

​	**Node是JavaScript语言的服务器运行环境。**

​	所谓“运行环境”有两层意思：首先，JavaScript语言通过Node在服务器运行，在这个意义上，Node有点像JavaScript虚拟机；其次，Node提供大量工具库，使得JavaScript语言与操作系统互动（比如读写文件、新建子进程），在这个意义上，Node又是JavaScript的工具库。

​	Node内部采用Google公司的V8引擎，作为JavaScript语言解释器；通过自行开发的libuv库，调用操作系统资源。

# 二、Node.js的下载和安装

## 2.1	Node.js下载

[node.js官网下载](https://nodejs.org/en/)

官网会根据你当前的操作系统，提供给你最合适的版本去下载。

![](http://o7cqr8cfk.bkt.clouddn.com/public/16-11-19/61189608.jpg)

## 2.2	安装

​	下载成功之后是一个msi文件，双击安装即可。安装成功后，相应的环境变量都会自动配置，不需要我们再去手动配置。

![](http://o7cqr8cfk.bkt.clouddn.com/public/16-11-19/12314512.jpg)

​	一路next就可以安装成功。

## 2.3	测试Node.js是否安装成功

安装成功之后，可以在window控制台查看是否安装成功。

```javascript
输入下面的命令查看node的版本。
node -v
直接输入node然后回车，就可以让node去执行我们的js代码了。
node
```
![](http://o7cqr8cfk.bkt.clouddn.com/public/16-11-19/50687597.jpg)

## 2.4	使用Node.js运行JavaScript代码

> 新建一个nodeproject目录，新建一个js文件。01_hello.js

```javascript
var num1 = 10;
var num2 = 20;
console.log(num1 + num2);
```

> 在windows控制台中，切换目录到js文件所在目录。然后输入
>
> node  01_hello.js

![](http://o7cqr8cfk.bkt.clouddn.com/public/16-11-19/90887557.jpg)

# 三、Node.js中的一些基本概念澄清

## 3.1	Node.js不是JS应用、而是JS运行平台

​	看到Node.js这个名字，初学者可能会误以为这是一个Javascript应用，事实上，Node.js采用C++语言编写而成，是一个Javascript的运行环境。

​	既然不是Javascript应用，为何叫.js呢？因为Node.js是一个Javascript的运行环境。提到Javascript，大家首先想到的是日常使用的浏览器，现代浏览器包含了各种组件，包括渲染引擎、JavaScript引擎等，其中Javascript引擎负责解释执行网页中的Javascript代码。作为Web前端最重要的语言之一，Javascript一直是前端工程师的专利。不过，Node.js是一个后端的Javascript运行环境（支持的系统包括Linux、Windows），这意味着你可以编写系统级或者服务器端的Javascript代码，交给Node.js来解释执行，

## 3.2	Node.js与JavaScript的关系

​	JavaScript包括3个部分：ECMAScript-262、BOM、DOM。BOM与浏览器相关，DOM和HTML页面相关。Node.js中只是包括了ECMAScript-262。所以我们以前的一些关于BOM的操作和DOM的操作都是基于浏览器端运行的，在Node.js中是无法使用的。

![](http://o7cqr8cfk.bkt.clouddn.com/public/16-11-20/64075724.jpg)



## 3.3	Node.js中几个全局变量

###3.3.1	 **global**

​	表示Node所在的全局环境，类似于浏览器的window对象。需要注意的是，如果在浏览器中声明一个全局变量，实际上是声明了一个全局对象的属性，比如`var x = 1`等同于设置`window.x = 1`，但是Node不是这样，至少在模块中不是这样（REPL read-eval-print-loop  读取-求值-输出-循环   环境的行为与浏览器一致）。在模块文件中，声明`var x = 1`，该变量不是`global`对象的属性，`global.x`等于undefined。这是因为模块的全局变量都是该模块私有的，其他模块无法取到。

###3.3.2	**process**

​	该对象表示Node所处的当前进程，允许开发者与该进程互动。

> process.stdout	标准输出
>
> std:standand
>
> 是标准输出流，通常我们使用的 console.log() 向标准输出打印字符，而 process.stdout.write() 函数提供了更底层的接口。

```javascript
process.stdout.write('输出代码');
```

> process.stdin
>
> 是标准输入流，需手动手动编写流的事件响应函数。

```javascript
process.stdin.on("data", function(msg){
	console.log("你刚才输入的是：" + msg);
});
```


###3.3.3	**console**
指向Node内置的console模块，提供命令行环境中的标准输入、标准输出功能。



##3.4   Node.js中的几个全局函数


- **setTimeout()**：用于在指定毫秒之后，运行回调函数。实际的调用间隔，还取决于系统因素。间隔的毫秒数在1毫秒到2,147,483,647毫秒（约24.8天）之间。如果超过这个范围，会被自动改为1毫秒。该方法返回一个整数，代表这个新建定时器的编号。

- **clearTimeout()**：用于终止一个setTimeout方法新建的定时器。

- **setInterval()**：用于每隔一定毫秒调用回调函数。由于系统因素，可能无法保证每次调用之间正好间隔指定的毫秒数，但只会多于这个间隔，而不会少于它。指定的毫秒数必须是1到2,147,483,647（大约24.8天）之间的整数，如果超过这个范围，会被自动改为1毫秒。该方法返回一个整数，代表这个新建定时器的编号。

- **clearInterval()**：终止一个用setInterval方法新建的定时器。

- **require()**：用于加载模块。

- **buffer()**：用于操作二进制数据。


## 3.5	Node.js的核心模块

JS的模块分三种：核心模块、第三方模块、自定义模块

 	如果只是在服务器运行JavaScript代码，用处并不大，因为服务器脚本语言已经有很多种了。Node.js的用处在于，它**本身**还提供了一系列功能模块，与操作系统互动。这些核心的功能模块，不用安装就可以使用，下面是它们的清单。

- **http**：提供HTTP服务器功能。
- **url**：解析URL。
- **fs**：与文件系统交互。
- **querystring**：解析URL的查询字符串。   ?user=abc&pwd=aaa
- **child_process**：新建子进程。   单线程没有办法充分发挥多核cpu的作用。
- **util**：提供一系列实用小工具。
- **path**：处理文件路径。


- **events：** 模块只提供了一个对象: events.EventEmitter。EventEmitter 的核心就是事件发射与事件监听器功能的封装。


```javascript
var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent', function(arg1, arg2) { 
  console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function(arg1, arg2) { 
  console.log('listener2', arg1, arg2);
});
emitter.emit('someEvent', 'byvoid', 1991); 
运行的结果是:
listener1 byvoid 1991
listener2 byvoid 1991
```

- **crypto**：提供加密和解密功能，基本上是对OpenSSL的包装。


#  三、node基本模块使用

## 3.1	一些全局变量

1. __dirname

```javascript
console.log(__dirname);
// 输出: /Users/mjr
console.log(path.dirname(__filename));
// 输出: /Users/mjr
```
2. __filename

```javascript
console.log(__filename);
// 输出: /Users/mjr/example.js
console.log(__dirname);
// 输出: /Users/mjr
```

## 3.3	fs模块

> 文件 I/O 是由简单封装的标准 POSIX 函数提供的。 通过 `require('fs')` 使用该模块。 所有的方法都有异步和同步的形式。

### 3.3.1	读文件

```javascript
/**
 * Created by lzc on 2017/3/8.
 */
var fs = require("fs");
/**
 异步的方式读取文件
 参数1：文件
 参数2：可选参数可以省略.可以是对象或者字符串。如果是文本文件可以指定编码 "utf8".
        如果不指定文件则回调函数中传入的data为Buffer数据。指定编码则返回字符串。
 参数3：回调函数。
        回调函数中，第一个参数为err。如果没有发生错误，则是null或者undefined
        回调函数的第二个参数是文件内容

*/
fs.readFile("test.txt", "utf8", function (err, data) {
    if(err) throw err;
    console.log(data);
})
```

### 3.3.2	写文件

```javascript
/**
 * Created by lzc on 2017/3/8.
 */
var fs = require("fs");
/**
 异步的方式读取文件
 参数1：文件
 参数2：写入到文件中的内容
 参数3：如果是文本文件，在这里添加文本的编码
 参数3：回调函数。
        回调函数中只有一个参数：err

*/
fs.writeFile("hello.txt", "这是要写入的文件", "utf-8", function (err) {
    if(err){
        console.log("文件写入出错")
    }else{
        console.log("文件写入成功");
    }
})
```

### 3.3.3	用流的方式读写文件

> 如果读取的是非文本文件或者是比较大的文件，建议使用流的方式读取文件。

```javascript
/**
 * Created by lzc on 2017/3/8.
 */
var fs = require("fs");
/**
    参数：文件
 返回一个新的ReadStream 对象
*/
var readStream = fs.createReadStream("a.jpg");
var writeStream = fs.createWriteStream("b.jpg")
readStream.on("data",function (chunk) {
    //把缓冲区写入到写入流中。完成了复制
    writeStream.write(chunk)
})
```

# 四、手动搭建Web应用

> 使用node.js核心模块手动搭建一个web服务器

```javascript
// 先导入http模块。
var http = require("http");
//使用http模块创建一个服务器
var server = http.createServer();
//导入url模块，可以对url进行分析
var url = require("url");
var count = 1;
// 服务监听一个事件：request事件（请求事件）.   回调函数：两个参数  request， response
server.on("request", function(req, res){
    //给客户端返回信息，通过res这个对象
    res.setHeader("Content-Type", "text/html;charset=utf-8");  //给浏览器发送响应头
    res.write("你是本网站的第" + count++ + "个访问者");
    res.end();  //把写入到缓存中的数据发送到客户端

});
//监听指定的端口
server.listen(8888);   //端口号：0 - 65535   0-1024 一般操作系统或一些默认的应用给占用
```

> 可以用你的浏览器测试我们的web服务器了

![](http://o7cqr8cfk.bkt.clouddn.com/17-6-1/58006017.jpg)

# 三、搭建web应用

​	使用Node.js搭建web服务器，一般使用一些框架来帮助完成。

​	**express** 是一个开源的node.js项目框架，初学者使用express可以快速的搭建一个Web项目，express中已经集成了Web的http服务器创建、请求和文件管理以及Session的处理等功能，所以express是非常适合初学者的入门学习。

注意：为了加快框架的下载速度，建议更改npm的镜像地址。愿意你懂的

第一步:下载nrm

`npm install -g nrm`

第二步：查看目前支持的所有镜像

`nrm ls`

![](http://o7cqr8cfk.bkt.clouddn.com/17-3-8/14867504-file_1488981070901_6688.png)

第三步：建议更换淘宝镜像，国内速度相对比较快。

`nrm use taobao`

![](http://o7cqr8cfk.bkt.clouddn.com/17-3-8/897940-file_1488980986492_81fe.png)

## 3.1	安装Express框架

> 使用node.js自带的包管理器npm安装。

1. 创建一个项目目录，Node_Hello。进入该目录，创建一个package.json文件，文件内容如下：

```json
{
  "name": "Node_Hello",
  "description": "nodejs hello world app",
  "version": "0.0.1",
  "private": true,
  "dependencies": {
    "express": "4.x"
  }
}
```

上面代码定义了项目的名称、描述、版本等，并且指定需要4.0版本以上的Express。

2. **从控制台首先进入刚才的项目目录**，然后输入如下命令，则会开始下载Express。

```javascript
npm install
```

![](http://o7cqr8cfk.bkt.clouddn.com/public/16-11-19/23566978.jpg)


下载完成


![](http://o7cqr8cfk.bkt.clouddn.com/public/16-11-19/3061746.jpg)
![](http://o7cqr8cfk.bkt.clouddn.com/public/16-11-19/44088268.jpg)

## 3.2	创建启动文件

​	在上面的项目目录下，新建一个启动文件，名字暂叫 **index.js** 。书写如下代码：

```javascript
var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('<h1>你好，这是我们的第一个nodejs项目</h1>');
});
app.listen(8080);
```

## 3.3	运行index.js文件

```html
node index.js
```

## 3.4	使用浏览器访问

在浏览器输入下面的地址就可以访问我们刚刚搭建的web网站了。

```html
http://127.0.0.1:8080
```

# 四、使用Webstorm搭建Node.js web应用

​	使用webstorm搭建Node.js应用更加方便。

## 4.1	下载WebStorm，并安装

[官网下载Webstorm](https://www.jetbrains.com/webstorm/)

下载完成后，直接安装即可。

## 4.2	创建Node + Express应用

![](http://o7cqr8cfk.bkt.clouddn.com/public/16-11-20/50253248.jpg)

## 4.3	Project目录结构

![](http://o7cqr8cfk.bkt.clouddn.com/public/16-11-20/4504409.jpg)

```html
app.js：启动文件，或者说入口文件

package.json：存储着工程的信息及模块依赖，当在 dependencies 中添加依赖的模块时，运行 npm install ，npm 会检查当前目录下的 package.json，并自动安装所有指定的模块

node_modules：存放 package.json 中安装的模块，当你在 package.json 添加依赖的模块并安装后，存放在这个文件夹下

public：存放 image、css、js 等文件

routes：存放路由文件

views：存放视图文件或者说模版文件

bin：存放可执行文件(www)
```

## 4.4	各个主要文件的说明

### 4.4.1	app.js

```javascript
//加载模块
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//加载路由文件
var index = require('./routes/index');
var users = require('./routes/users');

// 生产一个express的实例
var app = express();

// view engine setup
/*
设置 views 文件夹为存放视图文件的目录,
即存放模板文件的地方,__dirname 为全局变量,
存储当前正在执行的脚本所在的目录。
 */
app.set('views', path.join(__dirname, 'views'));
//设置模板引擎为ejs
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//加载日志中间件
app.use(logger('dev'));
//加载解析json的中间件
app.use(bodyParser.json());
//加载解析urlencoded请求体的中间件。  post请求
app.use(bodyParser.urlencoded({extended: false}));
//加载解析cookie的中间件
app.use(cookieParser());
//设置public文件夹为放置静态文件的目录   html也应该放在这个目录下
app.use(express.static(path.join(__dirname, 'public')));

// 路由控制器。
app.use('/', index);  // http://localhost:3000
app.use('/users', users);   //http://localhost:3000/users


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

//把app导出。  别的地方就可以通过 require("app") 获取到这个对象
module.exports = app;
```

### 4.4.2	bin/www

```javascript
#!/usr/bin/env node //表明是node可执行文件

/**
 * Module dependencies.
 */
//引入我们在app.js中导出的app模块
var app = require('../app');
//引入debuger模块，打印调试日志
var debug = require('debug')('hello:server');
//引入http模块
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);  //设置端口号

/**
 * Create HTTP server.
 */
//创建Http服务器
var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
//监听指定的端口
server.listen(port);
//监听error事件。 onError是发生错误的时候的回调函数
server.on('error', onError);
//监听listening事件
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
```

### 4.4.3	routes/index.js

```javascript
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '育知同创' });
});

module.exports = router;
/*
 生成一个路由实例用来捕获访问主页的GET请求，
 导出这个路由并在app.js中通过app.use('/', routes); 加载。这样，当访问主页时，就会调用res.render('index', { title: '育知同创' }); 渲染views/index.ejs模版并显示到浏览器中。
 */
```

### 4.4.4	ejs模板

> 模板引擎（Template Engine）是一个将页面模板和要显示的数据结合起来生成 HTML 页面的工具。如果说上面讲到的 express 中的路由控制方法相当于 MVC 中的控制器的话，那模板引擎就相当于 MVC 中的视图。
>
> 模板引擎的功能是将页面模板和要显示的数据结合起来生成 HTML 页面。它既可以运行在服务器端又可以运行在客户端，大多数时候它都在服务器端直接被解析为 HTML，解析完成后再传输给客户端，因此客户端甚至无法判断页面是否是模板引擎生成的。有时候模板引擎也可以运行在客户端，即浏览器中，典型的代表就是 XSLT，它以 XML 为输入，在客户端生成 HTML 页面。但是由于浏览器兼容性问题，XSLT 并不是很流行。目前的主流还是由服务器运行模板引擎。
>
> 在 MVC 架构中，模板引擎包含在服务器端。控制器得到用户请求后，从模型获取数据，调用模板引擎。模板引擎以数据和页面模板为输入，生成 HTML 页面，然后返回给控制器，由控制器交回客户端。

> **ejs 是模板引擎的一种，它使用起来十分简单，而且与 express 集成良好。**

> 我们通过以下两行代码设置了模板文件的**存储位置**和使用的**模板引擎**：(app.js文件中进行的设置)

```javascript
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1><%= title %></h1>
    <p>Welcome to <%- title %></p>
  </body>
</html>
```

> 说明：

ejs 的标签系统非常简单，它只有以下三种标签：

- <% code %>：JavaScript 代码。
- <%= code %>：显示替换过 HTML 特殊字符的内容。(也就是说如果code中有标签，则会原样输出，不会让浏览器解析)
- <%- code %>：显示原始 HTML 内容。(例如：如果有a标签，在浏览器端这则会看到一个超链接)

路由代码：

```javascript
router.get('/', function(req, res, next) {
  res.render('index', { title: "<a href='http://www.baidu.com'>百度 </a>"});
});

// 则会用title的值去替换ejs中的相应的代码。
```

则生成的代码：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>&lt;a href=&#39;http://www.baidu.com&#39;&gt;百度 &lt;/a&gt;</title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1>&lt;a href=&#39;http://www.baidu.com&#39;&gt;百度 &lt;/a&gt;</h1>
    <p>Welcome to <a href='http://www.baidu.com'>百度 </a></p>
  </body>
</html>
```

