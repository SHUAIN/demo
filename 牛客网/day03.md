# 如何阻止IE和各大浏览器默认行为
浏览器拥有它自己的默认行为，如：
在form中按回车键就会提交表单；单击鼠标右键就会弹出context menu.
以上行为称为浏览器默认行为

注意：有一些浏览器行为是在事件处理程序执行前发生的，也就是说这些默认行为是无法取消的，如：在大部分浏览器上鼠标移到一个超链接上超链接的样式会发生改变，这个动作是发生在focus事件之前的，是focus事件处理程序中无法取消的。
```js
// 其他浏览器
window.event.returnValue = false;
// ie
event.preventDefault();
```
# 可以获取元素e相邻的下一个元素
```html
<body>
    <p>
        <span id="left">left</span><span>right</span>
    </p>
    <script>
        let left = document.querySelector('#left');
        console.log(left.nextSibling);
    </script>
</body>
```
# 哪些事件支持冒泡
scroll

keypress
[更多](https://www.cnblogs.com/rubylouvre/p/5080464.html)
# typeof 可以得到的类型
```js
symbol
boolean
undefined
string
function
// NaN也是number
number  
// 以下都是object
null
object
```