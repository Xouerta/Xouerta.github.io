# html2
-主要是一些h5的相关知识
## 1.h5新元素
```html
<canvas></canvas>//标签定义图形
<audio/>//音频源
<video/>//视频源
<source src=""/>//定义多媒体源
<track src=""/> //视频字幕
<embed>//嵌入外部插件

//新表单
<datalist></datalist>//定义下拉列表
<keygen/>//生成密钥
<output/>//输出

```
## canvas
- 一种新的元素，用来进行对图形的绘制，比如画线，画圆，画矩形，画文字等。
- canvas标签只是一个容器，图形需要通过js进行绘制
- 绘制的图形会覆盖在canvas标签上
```javascript
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.fillStyle="#FF0000";
ctx.fillRect(0,0,150,75)//从(0,0)填充一个150x75的矩形
```
* 坐标轴

- canvas以左上角坐标为（0，0）

* 路径

- moveTo(x,y)定义开始坐标
- lineTo(x,y)定义一条直线
```javascript
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();
```

* 圆形/弧形：ctx.arc(x,y,r,sAngle,eAngle,counterclockwise)
* 图像：ctx.drawImage(image,x,y,width,height)
* 渐变：ctx.createLinearGradient(x1,y1,x2,y2)
* 文本：ctx.fillText(text,x,y)（实心，空心为strokeText）
* 动画方法：
  - setInterval(function,time) //每隔time毫秒执行function
  - setTimeout(function,time) //在time毫秒后执行function
  - clearInterval(id)//停止setInterval
  - requestAnimationFrame(function)//动画函数，浏览器会根据情况决定执行频率，但至少每秒60次

## SVG
-svg对我来说是老朋友了，之前写公众号的时候用过一些作为动画，当时觉得这东西挺好玩的，可惜没深入研究
- 那现在就好好学习

* 直接使用<svg>标签，就可以将其嵌入到HTML里
* svg使用xml绘制图像，而canvas使用js绘制图像

- transform: 应用到元素上的变换。
- x, y: 元素的位置。
- width, height: 元素的尺寸。
- fill: 填充颜色。
- stroke: 描边颜色。
- stroke-width: 描边宽度。
- opacity: 透明度。
- visibility: 元素的可见性。

## localstorage
- 本地存储，可以存储一些数据，但是只能存储字符串，并且只能存储在浏览器里，不能在服务器上，所以可以用来存储一些用户信息，比如用户名，密码等。
- 存储的数据会一直存在，直到用户清除缓存，或者被删除。原来用的是cookie，但是cookie的大小有限制，而localstorage没有
- 存储的数据是字符串，所以需要转换一下
- 没用时间限制，可以一直存下去，直到浏览器清除缓存
```javascript
localStorage.setItem("sitename","Xouerta's blog")
console.log(localStorage.getItem("sitename"))
```

保存数据：localStorage.setItem(key,value);

读取数据：localStorage.getItem(key);

删除单个数据：localStorage.removeItem(key);

删除所有数据：localStorage.clear();

得到某个索引的key：localStorage.key(index);
- sessionStorage和localStorage类似，但是只在当前浏览器窗口有效，关闭窗口就失效了
```javascript
if (localStorage.clickcount)
{
    localStorage.clickcount=Number(localStorage.clickcount)+1;
}
else
{
    localStorage.clickcount=1;
}
document.getElementById("result").innerhtml="你点击了"+localStorage.clickcount+"次";


//save
function save(){
    var  siteurl=document.getElementById("siteurl").value;
    var sitename=document.getElementById("sitename").value;
    localStorage.setItem("siteurl",siteurl);
    alert("save successful")
}//保存
function find(){
    var sitename=document.getElementById("sitename").value;
    var siteurl=localStorage.getItem("siteurl");
    alert(siteurl);
}//查找
function clear(){
    localStorage.clear();
}//清除所有数据
function del(){
    localStorage.removeItem("siteurl");//清除指定数据
}
```
## IndexDB
- 索引数据库，可以存储大量数据，并且可以查询，但是不能排序，并且不能直接访问，需要通过js进行操作
- 索引数据库的存储空间是固定的，但是可以通过压缩来减小存储空间
- 异步的存储，所以需要用回调函数
```javascript
// 打开或创建一个数据库
var request = indexedDB.open('databaseName', version);

// 处理数据库升级
request.onupgradeneeded = function(event) {
  var db = event.target.result;

  // 创建对象存储（表）并设置主键
  var objectStore = db.createObjectStore('storeName', { keyPath: 'id' });

  // 创建索引
  objectStore.createIndex('fieldName', 'fieldName', { unique: false });
};

// 数据库打开成功时的回调
request.onsuccess = function(event) {
  var db = event.target.result;

  // 进行事务操作
  var transaction = db.transaction('storeName', 'readwrite');
  var objectStore = transaction.objectStore('storeName');

  // 插入数据
  objectStore.add({ id: 1, name: 'John Doe', age: 30 });

  // 查询数据
  var query = objectStore.get(1);
  query.onsuccess = function(event) {
    console.log(event.target.result);
  };
};

// 错误处理
request.onerror = function(event) {
  console.error('Database error:', event.target.error);
};
```
## websocket
- WebSocket是一种用于创建 interactive applications的协议，它实现了浏览器与服务器的全双工通信，同时也是跨域通讯的利器。
- 可以实时更新网页

```javascript
var ws = new WebSocket("ws://localhost:8080/");
ws.onopen = function(){
    ws.send("hello");
    alert("msg_sent")
}
ws.onmessage = function (evt) { 
    var received_msg = evt.data;
    alert(received_msg);
}
ws.onclose = function(){
    alert("ws_closed")
}
```
