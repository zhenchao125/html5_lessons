# Day09---组件和案例![](http://www.yztcedu.com/images/logo.png)

# 一、选项卡

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			.div {
				width: 500px;
				height: 300px;
				border: 1px solid black;
				position: absolute;
			}
		</style>
	</head>
	
	<body>
		<!--控制导航目录的按钮-->
		<button class="btn">button1</button>
		<button class="btn">button2</button>
		<button class="btn">button3</button>
		<button class="btn">button4</button>
		
		<!--四个导航按钮对应的子菜单-->
		<div id="wrap">
			<div class="div">我是第1个div</div>
			<div class="div">我是第2个div</div>
			<div class="div">我是第3个div</div>
			<div class="div">我是第4个div</div>
		</div>
		
		
	</body>
	<script type="text/javascript">
		// 获取到相关标签
		var btns = document.getElementsByClassName('btn');
		var divs = document.getElementsByClassName('div');
		
		// 把所有的div隐藏起来
		for (var i = 0; i < divs.length; i++) {
			divs[i].style.display = 'none';
		}
		
		
		// 给按钮添加mouseover事件事件，当点击了这个按钮就把他所对应的div显示出来，其他div隐藏
		for (var j = 0; j < btns.length; j++) {
			btns[j].index = j;
			btns[j].onmouseover = function () {
				// 点击按钮后，开始遍历所有图片，如果某个图片的下标和当前点击按钮的下标一致，则让这个图片显示出来，否则就隐藏
				for (var k = 0; k < divs.length; k++) {
					if (k == this.index) {
						divs[k].style.display = 'block';
					} else {
						divs[k].style.display = 'none';
					}
				}
				
			}
			
			// 当鼠标移出时，让所有标签隐藏
			btns[j].onmouseout = function () {
				for (var h = 0; h < divs.length; h++) {
					divs[h].style.display = 'none';
				}
			}
			
		}
	</script>
</html>
```

# 二、模态窗口

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			#over {
				width: 100%;	
				height: 100%;
				position: absolute;
				background: rgba(145, 152, 159, 0.5);
			}
			
			#over>div {
				width: 300px;
				height: 100px;
				margin: 0 auto;
				background: white;
				margin-top: 200px;
				text-align: center;
			}			
		</style>	
		<script type="text/javascript">
			window.onload = function () {
				// 获取弹框的按钮
				var btn = document.querySelector('#btn');
				// 给按钮添加事件函数
				btn.onclick = showOrHidden;
				// 获取a标签
				var a = document.querySelector('a');
				// 给a标签添加事件函数
				a.onclick = showOrHidden;
				
				// 获取over标签
				var over = document.querySelector('#over');
				over.onclick = showOrHidden;
				
				// 获取内容标签
				var content = document.querySelector('#content');
				content.onclick = function (ev) {
					var event = ev || window.event;
					event.stopPropagation();
				}
				
				function showOrHidden (e) {
					var event = e || window.event;
					// 拿到弹框标签
					var over = document.querySelector('#over');					
					// 判断当前的弹框是显示还是隐藏
					over.style.display = over.style.display == 'none' ? 'block' : 'none';		
					// 取消事件冒泡
					event.stopPropagation();				
				}			
			}					
		</script>		
	</head>
	<body>
		<!-- 模态窗口-->
		<div id="over" style="display: none;
">
			<!-- 展示用户操作页面的div-->
			<div id="content">
				<h3>我是模态</h3>
				<a href="#">点击关闭模态</a>
			</div>
		</div>		
		<!-- 触发模态标签-->
		<button id="btn">点击弹出</button>
	</body>
</html>

```



# 三、 瀑布流

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		
		<!-- 瀑布流的样式-->
		<style type="text/css">
			* {
				margin: 0;
				padding: 0;
				list-style: none;
			}
			
			/* 设置背板的样式*/
			#wrap {
				width: 850px;
				border: 1px solid hotpink;
				margin: 0 auto;
				
				overflow: hidden; /* 清浮动*/
			}
			
			/* 设置ul的样式*/
			ul {
				float: left;
				width: 200px;
				margin-left: 10px;
				
			}
			
			li {
				margin-top: 10px;
				font-size: 50px;
			}
			
		</style>
		
		<script type="text/javascript">
			// 动态创建li标签，并向高度最低的ul中添加标签
			// 工具函数：产生指定范围内的随机数
			function randomFun (min, max) {
				return parseInt(Math.random() * (max - min + 1) + min);
			}
			
			window.onload = function () {
				// 获取ul标签
				var uls = document.getElementsByTagName('ul');
				var num = 1; // 保存当前创建的是第几个li
				// 调用创建、拼接li的函数，把瀑布流图片加载出来
				createLi();
				
				
				// 当用户滚动页面时，判断用户卷起来的高度是否等于最大卷起来的高度，如果相等，则代表用户已经滚动到页面的底部，调用一次createLi,加载新标签
				
				window.onscroll = function () {
					// 获取到允许用户卷起来的最大高度
					var maxHeight = document.documentElement.offsetHeight - document.documentElement.clientHeight;
					
					// 获取当前用户已经卷起来的高度
					var height = document.body.scrollTop;
					
					// 判断用户卷起来的高度是否等于准许用户卷起来的总高
					if (height >= maxHeight-20) {
//						console.log('已经到页面底部啦');
						createLi();
					}
				}			
				// 封装创建li并拼接进文档流的操作
				function createLi () {
					// 创建li：一次创建30
					for (var i = 0; i < 30; i ++) {
						var li = document.createElement('li');
						// 给li添加样式
						li.style.background = 'gray';
						li.style.width = '200px';
						li.style.height = randomFun(100, 300) + 'px';
						
						li.innerText = num;
						num++;
						
//						li.style.marginTop = '10px';
						// 找出高度最低的ul，把li拼接进去
						
						// 1、定义一个变量，用来盛放高度最低的ul标签
						var minHeight = uls[0];
						// 2、定义一个变量，用来盛放高度最低标签的下标
						var index = 0;
						// 3、通过for循环遍历数组，并判断出高度最低的标签
						for (var j = 0; j < uls.length; j++) {
							if (minHeight.offsetHeight > uls[j].offsetHeight) {
								// 把当前判断出的新最小高度的标签放进minHeight变量中，用于下一次的判断
								minHeight = uls[j];
								// 保存当前最小高度标签的下标，供以后拼接li时使用
								index = j;
							}
						}	
						// 经过遍历比较后，把li拼接进高度最小的ul中
						uls[index].appendChild(li);						
					}
				}			
			}		
		</script>
	</head>
	<body>
		
		<!-- 背板标签，盛放四列ul--><br />
		<div id="wrap">
			<!-- 四列ul标签-->
			<ul id="ul1"></ul>
			<ul id="ul2"></ul>
			<ul id="ul3"></ul>
			<ul id="ul4"></ul>
		</div>
	</body>
</html>
```





