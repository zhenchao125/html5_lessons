# 移动端_Day03-CSS3动画

# 一、CSS3转换(transform)

> css3包括两种转换，2D转换和3D转换。
>
> css3的转换允许我们对元素进行旋转、缩放、移动或倾斜。
>
> 不管2D转换还是3D转换都是操作的同一个的属性：transform

## 1.1	2D转换

> 有四种转换：rotate、scale、translate、skew

### 1.1.1	translate

> 在x和y方向平移元素:
>
> transform: translate(500px, 0px);
>
> 说明：
>
> 参数可以是像素或百分比。
>
> 参数1：沿x方向的平移，正表示向右移动
>
> 参数2：沿y方向的平移，正表示向下移动
>
> 如果是百分比是相对于自己的宽高的百分比。
>
> 

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        div{
            width: 200px;
            height: 200px;
            background-color: pink;
        }
        div:nth-of-type(2){
            background-color: gray;
            /*沿x轴平移500px， 沿y轴方向不动*/
            transform: translate(500px, 0px);
        }
    </style>
</head>
<body>
<div></div>
<div></div>

</body>
</html>
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-28/79916448-file_1488292082454_fd38.png)

> 如果仅仅沿x或y某一个方向运动，也可以使用：
>
> transform:translateX(200px);
>
> 或
>
> transform:translateY(200px);

### 1.1.2	rotate

> 旋转元素， 是指有沿着 z 轴旋转。(就是垂直于屏幕的轴）
>
> transform:rotate(10deg);
>
> 参数必须是度数。大于0表示顺时针旋转的度数，小于0表示逆时针旋转的角度。

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-28/2397653-file_1488292846911_136d5.png)

> 注意：

1. 旋转的时候默认是以元素的几何中心作为轴来旋转的。
2. 可以使用 transform-origin: offsetX offsetY;来设置旋转的时候的轴的位置. 

```css
transform-origin: 0 0;
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-28/66626316-file_1488293210743_14c9b.png)

### 1.1.3	scale

> 对元素进行放大。
>
> transform: scale(倍数);
>
> 注意：
>
> 1. 倍数大于表示放大，小于1表示缩小。不需要带单位
> 2. 默认任然是元素中心作为放大或缩小的参考点

```css
transform: scale(.5);
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-28/66956068-file_1488293498004_38cd.png)

```css
transform-origin: 0 0;
transform: scale(.5);
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-28/51264390-file_1488293883698_15c26.png)

### 1.1..4	skew

> skew是倾斜（斜切）。让元素与x方向或y方向产生倾斜。
>
> transform: skew(40deg,10deg);
>
> 参数1：x方向的倾斜度数
>
> 参数2：y方向的倾斜度数

```css
transform-origin: 0 0;
transform: skew(40deg,10deg);
```

![](http://o7cqr8cfk.bkt.clouddn.com/17-2-28/41140946-file_1488294903973_1b54.png)


## 1.2	3D转换

> 想对2D转换来说，3D转换浏览器支持的不太好。不过在移动端可以放心的使用。



