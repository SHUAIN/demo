let con = document.querySelector('#app');
let cal = document.querySelector('#calculate');
let showRes = document.querySelector('#showRes');
let clear = document.querySelector('#clear');
// 保存显示器
let show = '';
//保存数字的中间变量
let tmp = '';
// 存储数字
let nums = [];
// 存储操作符
let op = [];
// 操作符优先级表
let priority = {
    '+': 0,
    '-': 0,
    '*': 1,
    '/': 1
};
// 实时显示输入的数据
let render = function (val) {
    show += val;
    showRes.innerText = show;
}
// 比较优先级
let compare = function (op1, op2) {
    if (priority[op1] > priority[op2]) {
        // 当前运算符优先级小于栈顶元素 取出栈顶运算符和nums栈顶2个数字进行运算 并将结果入栈
        let one = nums.pop();
        let two = nums.pop();
        switch (op.pop()) {
            case '+':
                // 将运算结果入栈
                nums.push(one + two);
                break;
            case '-':
                nums.push(one - two);
                break;
            case '*':
                nums.push(one * two);
                break;
            case '/':
                nums.push(one / two);
                break;
            case '%':
                nums.push(one % two);
                break;
            default:
                break;
        }
        // 将该运算符入栈
        op.push(op2);
    } else {
        // 大于或者等于时 直接入栈
        op.push(op2);
    }
}
// 计算表达式结果
let calculate = function () {
    while (op.length != 0) {
        // 依次取出栈低(数组起始位置)的2个元素和符号进行运算
        // 运算完毕后 再将结果插入到第一个 
        let one = nums.shift();
        let two = nums.shift();
        switch (op.shift()) {
            case '+':
                // 将运算结果插入到第一个
                nums.unshift(one + two);
                break;
            case '-':
                nums.unshift(one - two);
                break;
            case '*':
                nums.unshift(one * two);
                break;
            case '/':
                nums.unshift(one / two);
                break;
            case '%':
                nums.unshift(one % two);
                break;
            default:
                break;
        }
    }
    // 上述操作后 数组最后就剩下一个数 即运算结果
    return nums;
}
// 获取输入内容
con.addEventListener('click', (e) => {
    let val = e.target.innerText;
    // 判断输入内容
    if (val.length === 1) {
        if (isNaN(Number(val))) {
            // 点击小数点后添加到本地变量
            if (val === '.') {
                tmp += val;
                show += val;
            } else if (tmp.length != 0) {
                // 本地变量不为空时 将本地变量数字入栈 入栈后清空本地变量
                nums.push(Number(tmp));
                tmp = '';
            }
            // 运算符 比较优先级
            if (val != '=' && val != '.') {
                compare(op[op.length - 1], val);
                // 实时更新显示
                render(val);
            }
        } else {
            // 数字 保存到本地变量
            tmp += val;
            // 实时更新显示
            render(val);
        }
        if (val === '=') {
            // 是等号计算表达式结果
            let res = calculate();
            // 渲染结果到页面 时处理运算过程中的非法输入
            showRes.innerText = isNaN(res[0]) ? "不规则运算" : res[0];
        }
    }
});
// 重置
clear.onclick = function () {
    num = [];
    op = [];
    tmp = '';
    show = '';
    showRes.innerText = 0;
}