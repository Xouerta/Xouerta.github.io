# html1
-一些HTML的基础知识
## 1.html基础元素

```html
<h1></h1>//标题

<p></p>//段落

<span></span>//文本

<a href="http://localhost"></a>//链接

<img alt="" src="">//图像

<div></div>

<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>
<form></form>
<input type="text" name="" id="" placeholder="" value="" maxlength="" minlength="" disabled="" checked="" max="" min="" autofocus="" autocomplete="" autoplay="">

```
## 2.html属性
id：标签唯一标识

class：给元素指定一个或多个类名，可以多个
 
style：标签css样式

src：指定资源路径

href：指定链接地址

target：_self：当前窗口打开，_blank：新窗口打开

title：鼠标移上去显示的文字

alt：图片加载失败时显示的文字

value：表单提交时，提交给服务器的值

type：表单元素的类型，如text，password，radio，checkbox，submit，button，reset等

name：表单元素的名字，如text，password，radio，checkbox，submit，button，reset等

placeholder：表单元素的提示文字

disabled：禁用表单元素

checked：选中表单元素

maxlength：表单元素的最大长度

minlength：表单元素的最小长度

max：表单元素的最大值

min：表单元素的最小值

autofocus：自动获取焦点

autocomplete：自动完成，如用户名，密码等

autoplay：自动播放，如视频等

## 3.html布局

1.浮动布局：float:left;float:right;clear:both;

 2.flex布局：display:flex;flex-direction:row;flex-direction:column;justify-content:center;align-items:center;

 3.grid布局：display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,1fr);grid-gap:

 4.table布局：table-layout:fixed;width:100%;border-collapse:collapse;border-spacing:0;

5.定位布局：position:absolute;position:relative;position:fixed;top:0;left:0;right:0;bottom:0;

## 4.html框架
```html
<iframe src="" name=""></iframe>
```

