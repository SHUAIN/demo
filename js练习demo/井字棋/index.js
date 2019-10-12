const dom = {
    rowOne: document.querySelector('#rowOne'),
    rowTwo: document.querySelector('#rowTwo'),
    rowThree: document.querySelector('#rowThree'),
    clean: document.querySelector('#clear'),
    hint: document.querySelector('#hint'),
};
// 先判断是哪一方出棋
// 在判断下棋的位置是否有棋
// 然后渲染棋子
// 最后判断结果
const feature = {
    role: 1,
    // 保存棋子布局  
    arr: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ],
    // 判断点击位置是否有棋子
    change(e) {
        let clickTargetId = e.target.id;
        // 判断点击节点的子节点数量
        let childNumber = e.target.childElementCount;
        if (childNumber === 0 && e.target.localName == 'div') {
            feature.render(clickTargetId);
            return 1;
        } else {
            alert('这个地方已经有棋了');
        };

    },
    // 渲染棋盘的棋子
    render(domName) {
        let span = document.createElement('span');
        if (this.role == true) {
            // 对勾 1
            span.setAttribute('class', 'iconfont icon-check-circle');
            this.saveData(domName, 1);
            this.role = !this.role;
        } else {
            // 叉号 0   人机下棋
            span.setAttribute('class', 'iconfont icon-close-circle');
            this.saveData(domName, -1);
            this.role = !this.role;
        }
        document.querySelector('#' + domName).appendChild(span);
    },
    // 保存数据  第一个参数是dom名对应的数组位置 第二个是要保存到数组的值
    saveData(domName, value) {
        switch (domName) {
            case "rowOne-colOne":
                this.arr[0][0] = value;
                break;
            case "rowOne-colTwo":
                this.arr[0][1] = value;
                break;
            case "rowOne-colThree":
                this.arr[0][2] = value;
                break;
            case "rowTwo-colOne":
                this.arr[1][0] = value;
                break;
            case "rowTwo-colTwo":
                this.arr[1][1] = value;
                break;
            case "rowTwo-colThree":
                this.arr[1][2] = value;
                break;
            case "rowThree-colOne":
                this.arr[2][0] = value;
                break;
            case "rowThree-colTwo":
                this.arr[2][1] = value;
                break;
            case "rowThree-colThree":
                this.arr[2][2] = value;
                break;
            default:
                break;
        }
    },
    /**
     * 1.数组全部有值且没有达到胜利条件 平局
     * 2.达到胜利条件 某一方胜利 8种
     */
    judge() {
        // 保存行的值
        let rowSum = 0;
        // 保存列的值
        let colSum = 0;
        // 保存对角线1的值
        let diagonalOne = 0;
        // 保存对角线2的值
        let diagonalTwo = 0;

        /**
         * 判断行
         *  0,0 1 2
         *  1,0 1 2
         *  2,0 1 2
         *  */

        for (let i = 0; i < 3; i++) {
            rowSum = 0;
            colSum = 0;
            for (let j = 0; j < 3; j++) {
                rowSum += this.arr[i][j];
                colSum += this.arr[j][i];
                // 判断左上到右下对角线
                if (i == j) {
                    diagonalOne += this.arr[i][j];
                };
                // 判断右上到左下
                if (i + j == 2) {
                    diagonalTwo += this.arr[i][j];
                };
                // 判断行  判断列
                if (rowSum == 3 || colSum == 3 || diagonalOne == 3 || diagonalTwo == 3) {
                    dom.hint.innerText = 'A赢了';
                } else if (rowSum == -3 || colSum == -3 || diagonalOne == -3 || diagonalTwo == -3) {
                    dom.hint.innerText = 'B赢了';
                };
            }
        };
    },
};
dom.rowOne.addEventListener('click', function (e) {
    // 渲染棋子
    feature.change(e);
    // 判断结果
    feature.judge();
});
dom.rowTwo.addEventListener('click', function (e) {
    feature.change(e);
    feature.judge();
});
dom.rowThree.addEventListener('click', function (e) {
    feature.change(e);
    feature.judge();

});
// 重开一局
dom.clean.onclick = function () {
    location.reload();
}