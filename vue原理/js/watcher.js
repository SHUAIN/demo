// 当observer中发现数据进行变动时，通知compile，重新对数据发生变化的模板进行编译
// 即观察者模式：当对象间存在一对多关系时，则使用观察者模式（Observer Pattern）。
// 比如，当一个对象被修改时，则会自动通知它的依赖对象
class Watcher {
    // cb:function  回调函数
    constructor(vm, value, cb) {
        this.vm = vm;
        this.val = value;
        this.cb = cb;
        // 进行新旧值对比 不相等时调用更新模板的方法
        this.oldVal = this.getOldaVal();
    };
    // 获取数据
    getVal(vm, value) {
        // des:获取data中的数据
        // 转换成数组
        value = value.split('.');
        // 数组的方法
        return value.reduce((prev, next) => {
            return prev[next];
        }, vm.$data);
    };
    // 获取更新前的数据
    getOldaVal() {
        // 获取当前watche实例
        Dep.target = this;
        let val = this.getVal(this.vm, this.val);
        Dep.target = null;
        return val;
    };
    // 更新方法
    update() {
        let newVal = this.getVal(this.vm, this.val);
        let oldVal = this.oldVal;
        if (newVal != oldVal) {
            this.cb(newVal);
        }
    };
}