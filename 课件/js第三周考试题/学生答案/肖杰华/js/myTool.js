/*
 * 该文档封装了日常使用的一些代码的方法
 * 更新日期 2016 年 12 月 14 日
 * 亓官翊宸
 */

/*
 * 常用的获取元素的方式
 * 
 * $id  		从 id 属性获取元素
 * $name 		从 name 属性获取元素
 * $tagName		从 tagName （标签名）获取元素
 * $select		从 selector 选择器获取元素
 * $selectAll	从 selectorAll 选择器获取元素
 * 
 */
var $id = function(id) {
	return document.getElementById(id);
}
var $name = function(name) {
	return document.getElementsByName(name);
}
var $tagName = function(tagName) {
	return document.getElementsByTagName(tagName);
}
var $select = function(selector) {
	return document.querySelector(selector);
}
var $selectAll = function(selectorAll) {
	return document.querySelectorAll(selectorAll);
}

/*
 * 常用创建节点的方式
 * 
 * $cE	创建元素节点
 * $cTN	创建文本节点
 * 
 */
var $cE = function(tagName) {
	return document.createElement(tagName);
}
var $cTN = function(String) {
	return document.createTextNode(String);
}

/*
 * @Param	Number
 * 		传入两个参数	返回[n,m]的随机整数
 * 		传入一个参数	返回[0,m]的随机整数
 * @Return	Number
 * 
 */
function random(n, m) {
	if(m) {
		if(n > m) {
			var temp = n;
			n = m;
			m = temp;
		}
		return Math.floor(Math.random() * (m - n + 1) + n);
	} else {
		return Math.floor(Math.random() * n);
	}
}

/*
 * @Param	Object , String
 * 		传入一个对象和一个属性名，返回一个属性值。
 * 		兼容多浏览器,获取内部、外部 CSS
 * @Return	String
 * 
 */
function getStyle(obj, attributeName) {
	if(obj.currentStyle) {
		//IE 浏览器
		return obj.currentStyle["attributeName"];
	} else {
		//其他浏览器
		return window.getComputedStyle(obj, null)["attributeName"];
	}
}

/*
 *  @Param	Number
 * 		传入一个参数，返回该数值是否是闰年的布尔值。
 *  @Return	Boolean
 * 
 */

function isLeapYear(year) {
	return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}