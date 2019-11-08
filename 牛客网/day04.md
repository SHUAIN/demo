# 关于数组
```js
var arr=[];
arr[0]=0;
arr[1]=1;
arr.one='asd';
//  [0, 1, one: "asd"]
console.log(arr);
// 2
console.log(arr.length);
for(let i =0;i<arr.length;i++>){
    console.log(i);// 0  1
}
```
# 关于变量声明
```js
function demo(num){
    console.log(num);//100
    var num=456; // 如果这里是let就会报错  说该变量已定义
    console.log(num);//456
}
demo(100);
```

# 时间格式化
>Thu Mar 07 2019 12:00:00 GMT+0800 (中国标准时间) 转换为 2019-03-07 12:00:00
```js
// 个位数补0
function p (str){
    return s < 10 ? '0' + s : s
}
const d = new Date(Thu Mar 07 2019 12:00:00 GMT+0800 (中国标准时间))
const resDate = d.getFullYear() + '-' + p((d.getMonth() + 1)) + '-' + p(d.getDate())
const resTime = p(d.getHours()) + ':' + p(d.getMinutes()) + ':' + p(d.getSeconds())
```
>2019-03-07 12:00:00转换成Thu Mar 07 2019 12:00:00 GMT+0800 (中国标准时间) 
```js
// @param date要转换的时间
parserDate(date) {
    var t = Date.parse(date)
    if (!isNaN(t)) {
        return new Date(Date.parse(date.replace(/-/g, '/')))
    }
},
```