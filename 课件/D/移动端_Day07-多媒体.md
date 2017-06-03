# 移动端_Day07-多媒体

​	在网页中播放多媒体，是用户最通常的一个需求。在HTML5出来之前，都需要利用第三方插件来完成多媒体的播放。比如 Adobe 的 flash 插件是播放视频的最常用的插件。但是第三方插件总是有各种问题，比如受制于人，flash 耗电等。

​	HTML5新增的 `<audio>、<video>` 标签创造性的解决了多媒体的播放。HTML5新增的多媒体标签使播放音频、视频变得简单起来，而且非常的省资源。而且在移动设备上也能表现良好，增加了移动设备的续航。

​	很多视频网站已经全站支持HTML5的多媒体播放，但是为了兼容旧版浏览器也会提高flash播放方式。

# 一、多媒体标签基本使用

> 播放视频：

```html
<video src="a.mp4" type="video/mp4" ></video>
```

> 播放音频：

```html
<audio src="b.mp3"></audio>
```

​	**由于不是每个浏览器的支持的多媒体的格式不尽相同，可以多准备几个，支持哪个就播放哪个。**

```html
<video>
    <source src="a.mp4" type="video/mp4">
    <source src="a.ogg" type="video/ogg">
</video>
```

# 二、常用属性

1. `src`：多媒体来源

2. `autoplay`：设置多媒体是否自动播放。不添加这个属性表示不自动播放，只添加属性名不添加属性值表示自动播放。(若添加属性值，则与属性名一致)

   ```html
   <video src="a.mp4" autoplay>
   </video>
   ```

3. `controls`：显示标准的音频视频控件。不添加该属性，默认不显示播放控件。

   ```html
   <video src="a.mp4" controls>
   </video>
   ```

   ![](http://o7cqr8cfk.bkt.clouddn.com/17-6-3/82982244.jpg)

4. `currentSrc`(只读)：当前多媒体的`url`

5. `duration`(只读)：当前音视频的长度，以`s`来计。

6. `muted`：返回或者设置静音。`true`表示静音，`false`表示不是静音

7. `playbackRate`：返回或设置播放速度。  `1.0`正常速度(默认值)。 `0.5`半速  …。使用这个属性可以实现变速播放。

8. `ended(只读)`：返回音视频是否播放完毕。

9. `loop`：返回或设置音视频是否循环播放。true/false(默认值)

10. ​