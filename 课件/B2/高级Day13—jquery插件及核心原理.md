# 高级Day13—jquery插件及核心原理

> `jQuery`插件就是用来扩展jQuery的功能。
>
> 如果我们的部分代码需要在项目的多个地方使用，这个时候就可以把这个部分做为插件添加到jQuery中。

# 一、插件原理

​	jQuery插件本质上就是定义在jQuery对象上添加方法，然后就可以在多个地方使用了。

> 一般有2种方法给jQuery添加插件：
>
> 1. jQuery.extend()
>
> 相当于给jQuery函数添加了静态属性和方法，将来可以通过  jQuery.新增的方法() 来调用。
>
> 比如前面用到的 `$.ajax()`就是这样的方法。
>
> 这种方式并不是很常用。
>
> 2. jQuery.fn
>
> 把方法添加到jQuery的原型对象上，是添加jquery插件的常用方式。
>
> jQuery.fn = jQuery.prototype

*注意：*

​	**添加插件之前一定要先导入jQuery！**

# 二、方式1：jQuery.extend()

> 这种方式添加插件很少使用，了解即可。

```javascript
<script>
    var obj = {}
    $.extend({
        test : "abc",  //test 会成为 $的一个属性
        foo: function (){  // foo会成为$的一个方法
            console.log("a")
        }
    });
    $("div").click(function (){
        console.log($.test);  //  "abc"
        $.foo()   // "a"
    })
</script>
```

# 三、方式2：jQuery.fn

> 这种方式是我们定义常见最常用的方式。
>
> 这种方式的本质是是把方法添加到`jQuery`的原型对象上。
>
>  因为在`jQuery`中，把`jQuery.prototype`简写成了 `jQuery.fn`,所以我们可以通过下面的方式向`jQuery`的原型对象添加方法，即添加了插件。

```html
<script>
  	//给jQuery的原型对象添加插件。考虑到$符号有可能被占用，所以此处不建议使用$符号
    jQuery.fn.foo = function (){
        console.log("我是jQuery的一个插件");
    }
    
    //因为插件是添加到的原型对象上，所以任何一个jQuery对象都可以调用。
    $("div").click(function (){
        $(this).foo();
    })
</script>
```

> 如果想在我们自定义的插件内部自由的使用 `$`符号,我们可以把添加插件的代码封装在一个自执行的匿名函数的内部。
>
> 看下面的代码：

```javascript
(function ($){ //形参 $ 接受传过来的jQuery。
	$.fn.foo = function (){
		console.log("这个函数内部可以自由的使用$符号:");
    }
})(jQuery);  //把jQuery作为实参传入
```

如果是一个比较复杂的插件，需要多个属性和方法，则可以把这多属性方法封装一个对象中，然后这些这个对象的属性和方法都会添加到jQuery对象的原型上。   `$.fn.extend({  //方法  })`

看下面的代码：

```javascript
(function ($){
    $.fn.extend({
      	msg : "你好",
      	foo : function (){
        	console.log("插件中添加的函数");
      	}
})
}(jQuery));
$("div").click(function (){
    $(this).foo()    //  "插件中添加的函数"
    console.log($(this).a);   // "你好"
})
```

# 四、简单插件开发

> jQuery没有提供直接修改直接修改 `backgroud-color和color` 的方法，只能通过 `css` 来修改,我们可以提供一个插件可以直接修改 `backgroud-color和color` 

```javascript
(function ($){
    $.fn.extend({
        backgroundColor(color){
          	//插件内的this已经是jQuery对象了。
            this.css("backgroundColor", color);
        },
        color(color){
            this.css("color", color);
        }
    })
})(jQuery)
```

使用插件:

```javascript
$("div").backgroundColor("gray");
$("div").color("red");
```

# 五、实现链式调用

> 大家观察到在jQuery的很多方法都可以使用链式调用，就是所谓的可以一路点下去。
>
> 原理其实 很简单：
>
> ​	**只要在方法内部返回 this，就可以轻松的实现链式调用**

看下面的代码，把前面我们自定义的插件也实现链式调用。

```javascript
(function ($){
    $.fn.extend({
        backgroundColor(color){
            this.css("backgroundColor", color);
            return this;
        },
        color(color){
            this.css("color", color);
            return this;
        }
    })
})(jQuery)

$("div").backgroundColor("gray").color("green");
```