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

##1. `src`：

多媒体来源

##2. `autoplay`：

设置多媒体是否自动播放。不添加这个属性表示不自动播放，只添加属性名不添加属性值表示自动播放。(若添加属性值，则与属性名一致)

   ```html
   <video src="a.mp4" autoplay>
   </video>
   ```

##3. `controls`：

显示标准的音频视频控件。不添加该属性，默认不显示播放控件。

   ```html
   <video src="a.mp4" controls>
   </video>
   ```

   ![](http://o7cqr8cfk.bkt.clouddn.com/17-6-3/82982244.jpg)

##4. `currentSrc`(只读)：

当前多媒体的`url`。如果`networkState`是`empty`，`currentSrc`的值有可能是空字符串("")。

##5. `duration`(只读)：

当前音视频的长度，以`s`来计。如果媒体数据可用，但是长度未知，则返回值为`NaN`.

##6. `currentTime`：

音视频当前播放的长度(`s`计)。如果设置他的值，则可以让视频到指定的长度开始播放。

##7. `muted`：

返回或者设置静音。`true`表示静音，`false`表示不是静音

##8. `playbackRate`：

返回或设置播放速度。  `1.0`正常速度(默认值)。 `0.5`半速  …。使用这个属性可以实现变速播放。

##9. `ended(只读)`：

返回音视频是否播放完毕。

##10. `loop`：

返回或设置音视频是否循环播放。`true/false`(默认值)

##11. `paused`(只读)：

查看音视频是否已经暂停。 true/false

##12. `preload`：

设置和返回是否在页面加载后立即加载音视频。有3个值：

`auto`：自动加载

`metadata`：仅加载元数据。(音视频的长度等)

`none`：不加载音视频。

> 注意：

1. 如果不设置这个属性，则他的默认值是由浏览器来决定的。不同的浏览器默认值可能是不同的。
2. 建议把它的值设置为 `metadata`。或者根据使用者的网络来决定如何加载。比如 `wifi`就`auto`，否则就`metadata`
3. 如果设置了`autoplay` 则很明显需要自动加载(`auto`)

##13. `networkState`：

返回音视频的网络状态。有4个状态：

| Constant            | Value | Description                              |
| ------------------- | ----- | ---------------------------------------- |
| `NETWORK_EMPTY`     | 0     | There is no data yet. Also, `readyState` is `HAVE_NOTHING`. |
| `NETWORK_IDLE`      | 1     | HTMLMediaElement is active and has selected a resource, but is not using the network. |
| `NETWORK_LOADING`   | 2     | The browser is downloading HTMLMediaElement data. |
| `NETWORK_NO_SOURCE` | 3     | No HTMLMediaElement src found.           |

##14. `readyState`：

返回音视频的就绪状态。有 5 个状态：

| Constant          | Value | Description                              |
| ----------------- | ----- | ---------------------------------------- |
| HAVE_NOTHING      | 0     | No information is available about the media resource.没有音视频的就绪信息 |
| HAVE_METADATA     | 1     | Enough of the media resource has been retrieved that the metadata attributes are initialized. Seeking will no longer raise an exception. |
| HAVE_CURRENT_DATA | 2     | Data is available for the current playback position, but not enough to actually play more than one frame. |
| HAVE_FUTURE_DATA  | 3     | Data for the current playback position as well as for at least a little bit of time into the future is available (in other words, at least two frames of video, for example). |
| HAVE_ENOUGH_DATA  | 4     | Enough data is available—and the download rate is high enough—that the media can be played through to the end without |

## 14. `seekable`(只读):

返回一个`TimeRanges`对象。包含了用户可以寻址的范围。(可以拖动的范围)

`TimeRanges`对象的属性：

1. lenght:获得音视频中可寻址范围的数量

2. start(index):获得可寻址的开始位置

3. end(index):获得可寻址的结束位置

   注意：`index`是从0开始计算的。

## 15. `poster`：

给视频设置默认图片。可以把一个视频中最精华的一帧作为默认图片。如果不设置，则把视频的第一帧作为默认图片。

# 三、常用方法

## `1. load()`：

重新加载音视频

## `2. play()`：

开始播放音视频

## `3. pause()`：

暂停播放音视频

## `4. requestFullScreen()`:

全屏播放的视频.

需要兼容处理：

​	webkitRequestFullScreen();

​	mozRequestFullScreen();

# 四、事件

1. play
2. pause
3. progress
4. error







 



