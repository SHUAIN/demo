// 工具对象
let until = {
    // 显示器数据
    show: '',
    // 存储操作数
    nums: [],
    // 存储操作符
    op: [],
    // 保存输入的数字
    tmp: '',
    // 存储操作符优先级
    opp: {
        '+': 0,
        '-': 0,
        '*': 1,
        '/': 1
    },
    // 获取dom
    $(str) {
        return document.querySelector(str)
    },
    // 获取栈顶元素
    getTopOfStack(sName) {
        let len = until[sName].length;
        let top = until[sName][len - 1];
        return top;
    },
    // 重置计算器
    reSet() {
        until.nums = [];
        until.show = '0';
        until.op = [];
    }

}
let dom = {
    app: until.$('#app'),
    showRes: until.$('#showRes'),
    calculate: until.$('#calculate'),
    clear: until.$('#clear')
}