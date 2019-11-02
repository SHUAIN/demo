# 关于布尔值
```js
new Boolean()
new Boolean(NaN)
new Boolean(null)
new Boolean("")
new Boolean(0)
// 以上结果都是false
```

# apply 和 call(bind)
相同点：都改变this指向
不同点
>apply接收多个参数时，以数组格式
```js
***.apply(target,[***,***]);
```
>call接收多个参数时，和普通函数一样，以参数列表形式接收
```js
***.call(target,***,***);
```
>bind接收参数格式和call一样，不同于前两个，bind内部返回的是一个函数，所以需要执行一次
```js
***.call(target,***,***)();
```
# 触发js异步的操作
事件(click等)、定时器(setTimeout和setInterval)、ajax
>所以下列代码，弹出的都是4
```html
<ul>
        <li>click me</li>
        <li>click me</li>
        <li>click me</li>
        <li>click me</li>
</ul>
<script>
    var elements = document.getElementsByTagName('li');
    var length = elements.length;
    for (var i = 0; i < length; i++) {
        console.log(i);
        elements[i].onclick = function () {
            alert(i);
        }
    }
</script>
```

# 闭包
```js
function test() {
    var n = 4399;

    function add() {
        n++;
        console.log(n);
    }
    return {
        n,
        add
    }
}
let res = test();
let res2 = test();
// 加的是test作用域的n
res.add();
res.add();
// 打印的是res的n
console.log(res.n);
res2.add();
```
# DOM事件流包括哪些阶段
>事件捕获阶段
- 事件从Document节点自上而下向目标节点传播的阶段
>处于目标阶段
- 真正的目标节点正在处理事件的阶段
>事件冒泡阶段
- 事件从目标节点自上而下向Document节点传播的阶段
- 如果使用传统方法直接给事件处理函数属性赋值，事件处理函数将被添加到事件的冒泡阶段
```html
<!-- 具体表现 -->
<!-- 当点击了第一个li 弹出li后还会弹出ul -->
<body>
    <ul id="btn">
        <li id="li">4</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
    </ul>
    <script>
        let btn = document.querySelector('#btn');
        let li = document.querySelector('#li');
        li.onclick = function () {
            alert('li');
        }
        btn.onclick = function () {
            alert('ul');
        }
    </script>
</body>
```
- 解决上述问题，用addEventListener就好

# 判断数组
>Array.isArray()
>instance of 
>Object.prototype.toString.call([1, 2, 3])
