# Day09---设计模式

# 一、什么是设计模式

**作用：JavaScript设计模式的作用 - 提高代码的重用性，可读性，使代码更容易的维护和扩展。**

​	设计模式（Design pattern）是一套被反复使用、多数人知晓的、经过分类编目的、代码设计经验的总结。使用设计模式是为了可重用代码、让代码更容易被他人理解、保证代码可靠性。 毫无疑问，设计模式于己于他人于系统都是多赢的；设计模式使代码编制真正工程化；设计模式是软件工程的基石脉络，如同大厦的结构一样。

​	设计模式代表了最佳的实践，通常被有经验的面向对象的软件开发人员所采用。设计模式是软件开发人员在软件开发过程中面临的一般问题的解决方案。这些解决方案是众多软件开发人员经过相当长的一段时间的试验和错误总结出来的。

​	设计模式有六大原则：

1. 开闭原则。就是说模块应对扩展开放，而对修改关闭。
2. 里氏代换原则。如果调用的是父类的话，那么换成子类也完全可以运行。
3. 依赖倒转原则。把父类都替换成它的子类，程序的行为没有变化。
4. 接口隔离原则，每一个接口应该是一种角色，不多不少，不干不该干的事，该干的事都要干。
5. 单一职责原则。
6. 迪米特法则。 最少知识原则。


---

## 设计模式的六大原则

**1、开闭原则（Open Close Principle）**

开闭原则的意思是：**对扩展开放，对修改关闭**。在程序需要进行拓展的时候，不能去修改原有的代码，实现一个热插拔的效果。简言之，是为了使程序的扩展性好，易于维护和升级。

**2、里氏代换原则（Liskov Substitution Principle）**

里氏代换原则是面向对象设计的基本原则之一。 里氏代换原则中说，任何基类可以出现的地方，子类一定可以出现。LSP 是继承复用的基石，只有当派生类可以替换掉基类，且软件单位的功能不受到影响时，基类才能真正被复用，而派生类也能够在基类的基础上增加新的行为。里氏代换原则是对开闭原则的补充。实现开闭原则的关键步骤就是抽象化，而基类与子类的继承关系就是抽象化的具体实现，所以里氏代换原则是对实现抽象化的具体步骤的规范。

**3、依赖倒转原则（Dependence Inversion Principle）**

这个原则是开闭原则的基础，具体内容：针对接口编程，依赖于抽象而不依赖于具体。

**4、接口隔离原则（Interface Segregation Principle）**

这个原则的意思是：使用多个隔离的接口，比使用单个接口要好。它还有另外一个意思是：降低类之间的耦合度。由此可见，其实设计模式就是从大型软件架构出发、便于升级和维护的软件设计思想，它强调降低依赖，降低耦合。

**5、迪米特法则，又称最少知道原则（Demeter Principle）**

最少知道原则是指：一个实体应当尽量少地与其他实体之间发生相互作用，使得系统功能模块相对独立。

**6、合成复用原则（Composite Reuse Principle）**

合成复用原则是指：尽量使用合成/聚合的方式，而不是使用继承。

# 二、单例设计模式

> 定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点。

​	单例模式是一种常用的软件设计模式。在它的核心结构中只包含一个被称为单例类的特殊类。通过单例模式可以保证系统中一个类只有一个实例而且该实例易于外界访问，从而方便对实例个数的控制并节约系统资源。

> ​	单例模式是一种常用的模式，有一些对象我们往往只需要一个，比如线程池、全局缓存、浏览器中的 window 对象等。在 JavaScript开发中，单例模式的用途同样非常广泛。试想一下，当我们单击登录按钮的时候，页面中会出现一个登录浮窗，而这个登录浮窗是唯一的，无论单击多少次登录按钮，这个浮窗都只会被创建一次，那么这个登录浮窗就适合用单例模式来创建。

## 2.1	最简单的单例：使用对象字面量

```javascript
var mySingleton = {
    name: "张三",
    age: 20,
    eat: function () {
        console.log('太好吃了');
    }
};
```

## 2.2	能创建单例的函数

```javascript
<script type="text/javascript">
	var creatKing = (function  () {
		function King (name) {
			this.name = name;
			this.speak = function  () {
				alert("my name is" + this.name);
			}
		}
		var king;
		return function  (name) {
			if(!king){
				king = new King(name);
			}
			king.name = name;
			return king;
		}
	}());
	var k1 = creatKing("康熙");
	var k2 = creatKing("乾隆");
	console.log(k1.name);
	console.log(k2.name);
	console.log(k1 === k2);
	k1.speak();
	k2.speak();
</script>
```

## 2.3	重写构造函数

```javascript
function Universe() {

    // 缓存的实例
    var instance = this;

    // 其它内容
    this.start_time = 0;
    this.bang = "Big";

    // 重写构造函数
    Universe = function () {
        return instance;
    };
}
```

## 2.4	使用单例模式封装表单数据提交

```javascript
<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<title></title>
</head>

<body>
<form action="#" method="get" id="form1">
	<input type="text" name="user" id="user" value="a" />
	<input type="password" name="pwd" id="pwd" value="b" />
	<input type="submit" value="提交" />
</form>
<div id="result">

</div>
<script type="text/javascript">
	var submitObj = {
		id_form: "form1",
		id_result_div: "result",
		init: function() {
			var self = this;
			this.form = document.getElementById(this.id_form);
			this.result = document.getElementById(this.id_result_div);
			this.form.onsubmit = this.handSubmit.bind(this);
		},
		handSubmit : function (event) {
			event = event || window.event;
			event.preventDefault();
			console.log(this.form)
			var data = new FormData(this.form);
			
			this.ajaxSubmit(data);
			
		},
		ajaxSubmit : function (requestParas) {
			var self = this;
			var xhr = new XMLHttpRequest();
			xhr.open("POST", "new_file.php");
			xhr.onreadystatechange = function () {
				if(xhr.readyState === 4){
					self.showResult.call(self, xhr.responseText);
				}
			};
			xhr.send(requestParas);
			// 使用ajax提交表单数据
		},
		showResult : function  (data) {
			// 获取到结果之后展示数据
			console.log(data);
		}
	};
	submitObj.init();
	
</script>
</body>

</html>
```

# 三、工厂模式

工厂模式：通过工厂函数获取想要的内容

利：简化创造对象的操作，只需要调用函数就可以获取对象

弊：无法判断出对象的归属

# 四、适配器模式

​	适配器模式（Adapter）是将一个类（对象）的接口（方法或属性）转化成客户希望的另外一个接口（方法或属性），适配器模式使得原本由于接口不兼容而不能一起工作的那些类（对象）可以一些工作。俗称包装器（wrapper）。

```javascript
<script type="text/javascript">
	var obj = {
		str1: "a",
		str2: "b",
		str3: "c"
	};
	//如果现在需要把obj的三个属性的值传递给foo函数，则这个时候可以使用适配器模式
	function fooAdapter(obj) {
		foo(obj.str1, obj.str2, obj.str3);
	}

	function foo(str1, str2, str3) {
		console.log(str1, str2, str3);
	}

	fooAdapter(obj);
	//假设某一天从服务器拿到的json数据格式发生了变化，则fooAdapter已经无法使用
	var obj2 = {
			data: {
				str1: "aaa",
				str2: "bbb",
				str3: "ccc"
			}
		}
		//创建一个新的适配器，而不需要修改以前的代码
	function fooAdapterAdapter(obj2) {
		fooAdapter(obj2.data);
	}
	fooAdapterAdapter(obj2);
</script>
```

# 五、观察者模式

​	观察者模式又叫发布订阅模式（Publish/Subscribe），它定义了一种一对多的关系，让多个观察者对象同时监听某一个主题对象，这个主题对象的状态发生变化时就会通知所有的观察者对象，使得它们能够自动更新自己。

使用观察者模式的好处：

1. 支持简单的广播通信，自动通知所有已经订阅过的对象。
2. 页面载入后目标对象很容易与观察者存在一种动态关联，增加了灵活性。
3. 目标对象与观察者之间的抽象耦合关系能够单独扩展以及重用。

```javascript
<script type="text/javascript">
/*定义售楼处 ：   发布者*/
var salesOffices = {
	/*存放订阅者的集合*/
	clientList : [],
	/*增加订阅者 ： 每个订阅者其实就是一个函数*/
	listen : function(subscribe) {
		this.clientList.push(subscribe);
	},
	/*发布信息的方法*/
	publish:function (arear, price) {
		for(var i = 0; i < this.clientList.length; i++){
			this.clientList[i](arear, price);
		}
	}
};
/*增加订阅者*/
salesOffices.listen(function (arear, price) {
	console.log("面积：" + arear + " 价格：" + price);
});
salesOffices.listen(function (arear, price) {
	console.log("面积：" + arear + " 价格：" + price);
});
/*发布消息*/
salesOffices.publish(200, "400万");
salesOffices.publish(100, "600万");
</script>
```



