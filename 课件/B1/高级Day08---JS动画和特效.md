#  高级Day 08---JS动画和特效

> 现如今，许多页面上均有一些动画效果。适当的动画效果可以在一定程度上提高页面的美观度，具有提示效果的动画可以增强页面的易用性。

> 实现页面动画的途径一般有两种。

- **一种是通过操作JavaScript间接操作CSS样式，每隔一段时间更新一次**；
- 一种是直接通过CSS定义动画。第二种方法在CSS3成熟之后被广泛采用。

我们今天只讲第一种实现方式。

# 一、JavaScript中动画原理

​	所谓的动画，就是通过一些列的运动形成的动的画面。在网页中，我们可以通过不断的改变元素的css值，来达到动的效果。 

​	JavaScript的动画用的最多的3个api就是setInterval()、setTimeout()和requestAnimationFrame()

​	普通人眼能看到1/24秒，就是说1秒至少24帧，每次移位间隔需要小于1000/24=41.7毫秒，也就说setInterval要每隔至少40毫秒执行一次，一般地，我们采用10毫秒，当然间隔时间越短，客户端执行计算次数就越多，如果你code计算量大则可以适当调长些。 

## 1.1 setTimeout()和setInterval ()

这两个函数的使用大家已经比较熟悉了，不再多赘述。

## 1.2 requestAnimationFrame(回调函数)

​	像setTimeout、setInterval一样，requestAnimationFrame是一个全局函数。调用requestAnimationFrame后，它会要求浏览器根据自己的频率进行一次重绘，它接收一个回调函数作为参数，在即将开始的浏览器重绘时，会调用这个函数，并会给这个函数传入调用回调函数时的时间作为参数。由于requestAnimationFrame的功效只是一次性的，所以若想达到动画效果，则必须连续不断的调用requestAnimationFrame，就像我们使用setTimeout来实现动画所做的那样。requestAnimationFrame函数会返回一个资源标识符，可以把它作为参数传入cancelAnimationFrame函数来取消requestAnimationFrame的回调。

​	跟setTimeout的clearTimeout很相似啊有木有。

​	可以这么说，requestAnimationFrame是setTimeout的性能增强版。

​	有一点需要注意的是，requestAnimationFrame不能自行指定函数运行频率，而是**浏由览器决定刷新频率**。所以这个更能达到浏览器所能达到的最佳动画效果了。

​	这个方法不是所有的浏览器都兼容。

![](http://o7cqr8cfk.bkt.clouddn.com/16-12-24/69927764-file_1482545803950_99e6.png)

```javascript
<script type="text/javascript">
  	var id；
	function step() {
		var temp = div.offsetLeft + 2;
		div.style.left = temp + "px";
  		//和setTimeout一样，要手动调用才能实现连续动画。
		id = window.requestAnimationFrame(step);  //返回值是一个id，可以通过这个id来取消
	}
	id = window.requestAnimationFrame(step);
	//取消回调函数
	window.cancelAnimationFrame(id);
</script>
```

## 1.3	简单动画的问题

### 1.3.1	setTimeout和setInterval深入理解

​	我们知道JavaScript试单线程的产物，两个函数就是利用了插入代码的方式实现了伪异步，和AJAX的原理实际上是一样的。

```javascript
console.log("1");
setTimeout(function(){
  console.log("3")
 },0);
 console.log("2");
//输出结果是什么？
```

```javascript
function fn() {
setTimeout(function(){
	console.log('can you see me?');
},1000);
while(true) {}
}
//输出结果是什么？
```

### 1.3.2	简单动画的变慢问题

```javascript
	function step() {
		var temp = div.offsetLeft + 2;
		div.style.left = temp + "px";
		window.requestAnimationFrame(step);
		for (var i = 0; i < 50000; i++) {
			console.log("再牛逼的定时器也得等到我执行完才能执行")
		}	
	}
	window.requestAnimationFrame(step);
```

## 1.4 使用动画的正确姿势

​	动画其实是 “位移”关于“时间”的函数：s=f(t)

​	所以不该采用增量的方式来执行动画，为了更精确的控制动画，更合适的方法是将 **动画与时间关联起来**

```javascript
function startAnimation() {
  var startTime = Date.now();
  requestAnimationFrame(function change() {
    var current = Date.now() - startTime;
    console.log("动画已执行时间" + current);
    
    requestAnimationFrame(change);
  });
}
startAnimation();
```

​	**动画通常情况下有终止时间，如果是循环动画，我们也可以看做特殊的——当动画达到终止时间之后，重新开始动画。因此，我们可以将动画时间归一(Normalize)表示：**

```javascript
//duration 是动画执行时间   isLoop是否为循环执行。
function startAnimation(duration, isLoop){
  var startTime = Date.now();

  requestAnimationFrame(function change(){
    // 动画已经用去的时间占总时间的比值
    var p = (Date.now() - startTime) / duration;

    if(p >= 1.0){
      if(isLoop){ // 如果是循环执行，则开启下一个循环周期。并且把开始时间改成上个周期的结束时间
        startTime += duration;
        p -= 1.0; //动画进度初始化
      }else{
        p = 1.0;	//如果不是循环，则把时间进度至为 1.0 表示动画执行结束
      }
    }
    console.log("动画已执行进度", p);
    if(p < 1.0){ //如果小于1.0表示动画还诶有值完毕，继续执行动画。
      requestAnimationFrame(change);
    }
  });
}
```



示例1：用时间控制动画周期精确到2s中

```javascript
block.addEventListener("click", function() {
  var self = this,
      startTime = Date.now(),
      duration = 2000;
  setInterval(function() {
    var p = (Date.now() - startTime) / duration;
    // 时间已经完成了2000的比例，则360度也是进行了这么个比例。
    self.style.transform = "rotate(" + (360 * p) + "deg)";
  }, 100);
});
```

示例2：让滑块在**2秒**内向右匀速移动600px

```javascript
block.addEventListener("click", function(){
  var self = this, 
      startTime = Date.now(),
      distance = 600, 
      duration = 2000;

  requestAnimationFrame(function step(){
    var p = Math.min(1.0, (Date.now() - startTime) / duration);
    self.style.transform = "translateX(" + (distance * p) +"px)";
    if(p < 1.0) {
      requestAnimationFrame(step);
    }
  });
});
```



![](http://o7cqr8cfk.bkt.clouddn.com/16-12-24/69406185-file_1482550167275_104ab.png)



# 二、常见动画效果实现

## 2.1	匀速水平运动

​	用时间来控制进度:这里的p是归一化时间
$$
s = S*p
$$


## 2.2 	匀加速(减速)运动

​	**加速度恒定，速度从0开始随时间增加而均匀增加。**

**匀加速公式：**大写S：要移动的总距离     p：归一化的时间进度
$$
s = S*p^2
$$

```javascript
// 2s中内匀加速运动2000px
block.addEventListener("click", function() {
		var self = this,
			startTime = Date.now(),
			distance = 1000,
			duration = 2000;
		requestAnimationFrame(function step() {
			var p = Math.min(1.0, (Date.now() - startTime) / duration);
			self.style.transform = "translateX(" + (distance * p * p) + "px)";
			if(p < 1.0) requestAnimationFrame(step);
		});
	});
```

**匀减速运动公式**：
$$
s=S*p*(2-p)
$$

```javascript
//2s中使用速度从最大匀减速到0运动1000px
block.addEventListener("click", function(){
  var self = this, startTime = Date.now(),
      distance = 1000, duration = 2000;
  requestAnimationFrame(function step(){
    var p = Math.min(1.0, (Date.now() - startTime) / duration);
    self.style.transform = "translateX(" 
      + (distance * p * (2-p)) +"px)";
    if(p < 1.0) requestAnimationFrame(step);
  });
});
```

课堂练习：小球的自由落体运动

## 2.3	水平抛物运动

​	匀速水平运动和自由落体运动的组合。

```javascript
block.addEventListener("click", function(){
  var self = this, startTime = Date.now(),
      disX = 1000, disY = 1000, 
      duration = Math.sqrt(2 * disY / 10 / 9.8) * 1000;   // 落到地面需要的时间  单位ms
    //假设10px是1米，disY = 100米

  requestAnimationFrame(function step(){
    var p = Math.min(1.0, (Date.now() - startTime) / duration);
    var tx = disX * p;	//水平方向是匀速运动
    var ty = disY * p * p;  //垂直方向是匀加速运动

    self.style.transform = "translate(" 
      + tx + "px" + "," + ty +"px)";
    if(p < 1.0) requestAnimationFrame(step);
  });
});
```



## 2.4	正弦曲线运动

正弦运动：x方向匀速，垂直方向是时间t的正弦函数

```javascript
block.addEventListener("click", function(){
  var self = this, startTime = Date.now(),
      distance = 800, 
      duration = 2000; 

  requestAnimationFrame(function step(){
    var p = Math.min(1.0, (Date.now() - startTime) / duration);
    var ty = distance * Math.sin(2 * Math.PI * p);
    var tx = 2 * distance * p;

    self.style.transform = "translate(" 
      + tx + "px," + ty + "px)";
    if(p < 1.0) requestAnimationFrame(step);
  });
});
```



## 2.5	圆周运动

圆周运动公式：
$$
x = R.sin(2*π*p)	, y = R.cos(2*π*p)
$$

```javascript
block.addEventListener("click", function() {
  var self = this,
      startTime = Date.now(),
      r = 100,
      duration = 2000;

  requestAnimationFrame(function step() {
    var p = Math.min(1.0, (Date.now() - startTime) / duration);
    var tx = r * Math.sin(2 * Math.PI * p),
        ty = -r * Math.cos(2 * Math.PI * p);

    self.style.transform = "translate(" +
      tx + "px," + ty + "px)";
    requestAnimationFrame(step);
  });
});
```



#三、动画算子（easing）

​	对于一些比较复杂的变化，算法也比较复杂，就要用到动画算子。**动画算子** 是一个函数，可以把进度转化成另外一个值。其实也就是一种算法。

**我们总结一下上面的各类动画，发现它们是非常相似的，匀速运动、匀加速运动、匀减速运动、圆周运动唯一的区别仅仅在于位移方程：**

- 匀速运动：
  $$
  s = S *p
  $$

- 匀加速运动：

$$
s = S *p^2
$$

- 匀减速运动：

$$
s = S*p*(2-p)
$$

- 圆周运动x轴： 

$$
x = R*sin(2*PI*p)
$$



- 圆周运动y轴：

$$
y = R*cos(2*PI*p)
$$



我们把共同的部分 S 或R 去掉，得到一个关于 p 的方程 ,这个方程我们称为动画的**算子**(easing)，它决定了动画的性质。

- 匀速算子：

$$
e = p
$$



- 匀加速算子:

$$
e = p^2
$$

- 匀减速算子：

$$
e = p*(2 - p)
$$

- 圆周算子x轴： 

$$
e = sin(2*PI*p)
$$



- 圆周算子y轴： 

$$
e = cos(2 * PI * p)
$$

**一些常用的动画算子**

```javascript

var pow = Math.pow,
     BACK_CONST = 1.70158;
// t指的的是动画进度 归一化的时间  前面的p
Easing = {
        // 匀速运动
        linear: function (t) {
            return t;
        },
		// 匀加速运动
        easeIn: function (t) {
            return t * t;
        },
		// 减速运动
        easeOut: function (t) {
            return (2 - t) * t;
        },
		//先加速后减速
        easeBoth: function (t) {
            return (t *= 2) < 1 ? .5 * t * t : .5 * (1 - (--t) * (t - 2));
        },
        // 4次方加速
        easeInStrong: function (t) {
            return t * t * t * t;
        },
        // 4次方法的减速
        easeOutStrong: function (t) {
            return 1 - (--t) * t * t * t;
        },
        // 先加速后减速，加速和减速的都比较剧烈
        easeBothStrong: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : .5 * (2 - (t -= 2) * t * t * t);
        },
        //	
        easeOutQuart: function (t) {
            return -(Math.pow((t - 1), 4) - 1)
        },
        // 指数变化 加减速
        easeInOutExpo: function (t) {
            if (t === 0) return 0;
            if (t === 1) return 1;
            if ((t /= 0.5) < 1) return 0.5 *Math.pow(2, 10 * (t - 1));
            return 0.5 * (-Math.pow(2, - 10 * --t) + 2);
        },
        //指数式减速
        easeOutExpo: function (t) {
            return (t === 1) ? 1 : -Math.pow(2, - 10 * t) + 1;
        },
		// 先回弹，再加速
        swingFrom: function (t) {
            return t * t * ((BACK_CONST + 1) * t - BACK_CONST);
        },

		// 多走一段，再慢慢的回弹
        swingTo: function (t) {
            return (t -= 1) * t * ((BACK_CONST + 1) * t + BACK_CONST) + 1;
        },

		//弹跳
        bounce: function (t) {
            var s = 7.5625,
                r;

            if (t < (1 / 2.75)) {
                r = s * t * t;
            } else if (t < (2 / 2.75)) {
                r = s * (t -= (1.5 / 2.75)) * t + .75;
            } else if (t < (2.5 / 2.75)) {
                r = s * (t -= (2.25 / 2.75)) * t + .9375;
            } else {
                r = s * (t -= (2.625 / 2.75)) * t + .984375;
            }

            return r;
        }
    };
```

# 四、使用面向对象封装动画

> 为了实现更加复杂的动画，我们可以将动画进行 **简易** 的封装，要进行封装，我们先要抽象出动画相关的**要素**：
>
> 动画时长：T = duration
>
> 动画进程：p = t/T  （归一化的动画时间）
>
> easing: e = f(p)  (动画算子：p的函数 )
>
> 动画方程： x = g(e)  y = g(e)    (动画的位移相对于动画算子的方程)
>
> 动画生命周期：开始、进程中、结束

```javascript
/*
 作者：李振超    2017年5月22日 14:44

 1、归一化的时间       需要：duration

 2. 把归一化的时间交给动画算子  需要：动画算子

 3、把需要做的动画封装到函数中传入。 需要：函数 doSomething( e )

 3. 动画的结束时机

 */
function Animator(option){
    this._init(option);
}
Animator.prototype = {
    _init: function (option){
        this.duration = option.duration;
        this.easing = option.easing;
        this.doSomething = option.doSomething;
    },
    start: function (isLoop){

        if (typeof this.duration != "number"
            || typeof this.easing != "function"
            || typeof this.doSomething != "function")   return;

        var duration = this.duration,
            easing = this.easing,
            doSomething = this.doSomething,
            startTime = new Date(),
            p;
        var that = this;
        this.animationId = requestAnimationFrame(function step(){
            p = Math.min(1, (new Date() - startTime) / duration);
            doSomething(easing(p));
            if (p == 1){
                if (isLoop){
                    startTime = new Date();
                }else{
                    return;
                }
            }
            that.animationId = requestAnimationFrame(step);
        });

    },
    stop: function (){
        cancelAnimationFrame(this.animationId);
    }
}

```



# 五、逐帧动画

> 有时候，我们不但要支持元素的运动，还需要改变元素的外观，比如飞翔的小鸟需要扇动翅膀，这类动画我们可以用逐帧动画来实现:

```javascript
<style type="text/css">
.sprite {display:inline-block; overflow:hidden; background-repeat: no-repeat;background-image:url(http://res.h5jun.com/matrix/8PQEganHkhynPxk-CUyDcJEk.png);}

.bird0 {width:86px; height:60px; background-position: -178px -2px}
.bird1 {width:86px; height:60px; background-position: -90px -2px}
.bird2 {width:86px; height:60px; background-position: -2px -2px}

 #bird{ 
   position: absolute;
   left: 100px;
   top: 100px;
   zoom: 0.5;
 }The 32
</style>
<div id="bird" class="sprite bird1"></div>
var i = 0;
setInterval(function(){
  bird.className = "sprite " + "bird" + ((i++) % 3);
}, 1000/10);
```

