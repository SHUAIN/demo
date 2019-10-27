// 获取数据
dom.app.onclick = function (e) {
    let val = e.target.innerHTML;
    if (val.length === 1) {
        // 判断获取到的是符号还是数字
        if (isNaN(parseInt(val))) {
            // 将存储的第一个数字推入栈中
            until.nums.push(Number(until.tmp));
            // 存储时和栈顶操作符优先级进行对比
            core.compare(val);
            until.tmp = '';
        } else {
            until.tmp += val;
        }
        if (val !== '=') {
            // 实时显示表达式
            until.show += val;
            dom.showRes.innerText = until.show;
        }
    }
}
// 点击等号运算整个表达式结果
dom.calculate.onclick = function () {
    // 存储第二个数字
    if (until.tmp.length != 0) {
        until.nums.push(Number(until.tmp));
        until.tmp = '';
    }
    // 运算所有的结果
    let res = 0;
    while (until.op.length != 0) {
        let one = until.nums.shift();
        let two = until.nums.shift();
        let op = until.op.shift();
        switch (op) {
            case '+':
                res = one + two;
                break;
            case '-':
                res = one - two;
                break;
            case '*':
                res = one * two;
                break;
            case '/':
                res = one / two;
                break;
            default:
                break;
        }
        until.nums.unshift(res);
    }
    until.show = until.nums[0];
    if (isNaN(until.show)) {
        dom.showRes.innerText = '不规则运算';
    } else {
        dom.showRes.innerText = until.show;
    }
    // 计算完重置
    until.reSet();
}
// 清空显示器
dom.clear.onclick = function () {
    // 重置计算器
    until.reSet();
    dom.showRes.innerText = until.show;
}
