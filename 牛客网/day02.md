# 数组常用API
>push---向数组最后位置添加元素
>pop---删除最后一个元素
>unshift---向数组第一个位置添加元素
>shift---删除第一个元素
>conact---合并2个数组

# 变量声明提升，函数取决于定义的形式
```js
var m=1;
var y=add(m);
// 这样函数也会提升
function add(n){
    return n=n+1;
}
// 这样不会 必须在使用前定义
var add=function (n){
    return n=n+1;
}
console.log(y);//2
```
# 关于js模块化
标准：
>CommonJS
- NodeJS

>AMD
- requireJS
- 推崇依赖前置
```js
// 即依赖文件一开始必须提前写好
define(['./a', './b'], function(a, b) { // 依赖必须一开始就写好
a.doSomething()
// 此处略去 100 行
b.doSomething()
...
})
```
- AMD 是提前执行

>CMD
- SeaJS
- 推崇依赖就近
```js
// 即依赖文件可以在使用时，在引入
define(function(require, exports, module) {
var a = require('./a')
a.doSomething()
// 此处略去 100 行
var b = require('./b') // 依赖可以就近书写
b.doSomething()
// ...
}
```
- CMD 是延迟执行

# 关于js原型链
>new操作符的原理
```js
// 核心
function create(con, ...args) {
    let obj = {}
    // 给obj对象设置要创建实例的对象的原型
    Object.setPrototypeOf(obj, con.prototype)
    let result = con.apply(obj, args)
    return result instanceof Object ? result : obj
}
// 测试
function Person(name) {
    this.name = name;
    Person.prototype.sayName = function () {
        console.log(this.name);
    }
}
let one = new Person("one");
one.sayName();
let two = create(Person, 'two');
two.sayName();
```
# 获取select的option文本

# h5不在支持的属性
```html
<acronym>
<applet>
<basefont>
<big>
<center>
<dir>
<font>
<frame>
<frameset>
<noframes>
<strike>
<tt>
```
# 变量提升
```js
// 变量提升是指 可以先使用，后定义，但是初始化不会提升 
// 1.可以提升的情况
x=9;
console.log(x);
var x;
// 2.不会提升的情况
console.log(y);
var y=100;
```

# 可以在html中嵌入的图片格式
*.jpg/*.png/*.gif/*.bmp  
*.tif不可以


