let core = {
    // 传递当前获取到的运算符
    compare(op) {
        /**
             * 1.相等/大于，直接入栈
             * 2.小于，取出操作数栈顶2元素和操作符栈顶操作符，进行运算
             *  2.1删除操作数栈顶的这两个数和操作符栈顶的该元素
             *  2.2将运算结果推入操作数栈
             *  2.3将新运算符推入操作符栈栈
             * 3.当点击等号后运算剩下的值
             */
        // 获取栈顶运算符
        let op1 = until.getTopOfStack('op');
        // 待入栈操作优先级小于栈顶操作符
        if (until.opp[op] < until.opp[op1] && op != '=') {
            console.warn('需要先运算');
            let res = 0;
            let one = until.nums.pop();
            let two = until.nums.pop();
            switch (op1) {
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
            // 将栈顶操作符删除
            until.op.pop();
            // 将运算结果推入栈顶
            until.nums.push(res);
            // 将待入栈运算推入栈
            until.op.push(op);

        } else if (until.op.length === 0 && op != '=') {
            // 操作符栈为空
            console.log('第一个操作符');
            console.log(op);
            until.op.push(op);
        } else if (op != '=') {
            // 待入栈操作优先级大于或者等于栈顶操作符
            console.warn('操作符入栈');
            until.op.push(op);
        }
    }
}