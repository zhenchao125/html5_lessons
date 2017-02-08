# 响应式web设计(Responsive web design)

> 一个响应式设计的网站
>
> http://foodsense.is

## 创建可伸缩的图像

- 在img标签中省略width和height属性
- 在css中为每个想做成可伸缩的图像添加**max-width:100%**

## 弹性布局

宽度使用百分百。给最外层的容器设置max-width。

## 媒体查询

针对特定的媒体类型定位css。

两种方式：

```css
<link rel="stylesheet" href="your-styles.css" media="screen" />
```

```css
/* 只用于打印的样式 */
@media print { header[role="banner"] nav, .ad { display: none; } }
```



> 媒体查询的语法

```html
<!--外部样式表-->
<link rel="stylesheet" media="logic type and (feature: value)"  href="your-stylesheet.css" />
```

```html
<!-- 内部样式表的写法。  要写在style中 -->
@media logic type and (feature:value) {

	/* 目标CSS样式规则写在这里 */
}
```

logic：only或not

tyle：媒体类型  screen 、print等

## 给文本添加阴影



[](http://html5pattern.com)



