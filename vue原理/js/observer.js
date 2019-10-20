// des:对数据进行劫持，做响应式
class Observer {
    constructor(data) {
        this.observe(data);
    }
    // 观察data的每个属性 是否需要劫持
    observe(data) {
        // 1.判断data是否为空 不为空判断类型是否是对象 满足条件时再对data的所有属性进行拦截
        if (!data || typeof data !== 'object') {
            return;
        }
        // Object.keys(data)将对象的key全部拿出来并存到数组,在进行遍历对其进行拦截
        Object.keys(data).forEach(
            (key) => {
                this.definReactive(data, key, data[key]);
                // 如果属性是个对象 对这个属性对象内部在进行一次该操作
                this.observe(data[key]);
            }
        );
    }
    // 响应式
    definReactive(obj, key, value) {
        let _this = this;
        let dep = new Dep();
        Object.defineProperty(obj, key, {
            // 可枚举
            enumerable: true,
            // 可删除
            configurable: true,
            // 取值时调用
            get() {
                //watcher存在时 添加该watcher
                Dep.target && dep.addSub(Dep.target);
                return value;
            },
            // 赋值时调用
            set(newVal) {
                // 当旧的值和新设置的值不同时重新赋值
                if (newVal != value) {
                    // 新值如果是对象 对这个对象的所有属性也进行观察 并判断是否需要劫持
                    _this.observe(newVal);
                    value = newVal;
                    // 通知订阅者更新模板
                    dep.notify();
                }
            }
        });
    }
}
// 管理监听者  
class Dep {
    constructor() {
        // 订阅的数组
        this.subs = [];
    }
    // 添加订阅
    addSub(watcher) {
        this.subs.push(watcher);
    }
    // 通知订阅者 需要更新数据
    notify() {
        this.subs.forEach(
            (watcher) => watcher.update()
        );
    }
}