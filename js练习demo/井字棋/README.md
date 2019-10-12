# 项目说明

一个学习数组的时候做的一个井字棋游戏

# [在线演示](https://shuaxindiary.github.io/Tic-Tac-Toe/)

# 更新

1.2019-8-12更新加入人机对战模式


# 总结

```javascript

    1.用flex做棋盘布局
    2.每次下棋前做两次判断
        1.判断有没有棋(通过e.target.childElementCount判断点击的div下子元素数量判断)
        2.判断是A选手还是B选手(通过一个变量判断)
    3.渲染棋子到棋盘
        通过给span标签加iconfont样式实现两个棋子的不同样式
    4.重点！！！在每次棋渲染到棋盘后判断结果
        1.首先创建一个三行三列的数组
        2.在每次棋子渲染到棋盘的同时,改变对应数组位置的值(A选手是1，B选手是-1)
        3.在每次棋子渲染到棋盘的后，调用判断函数；即遍历数组来判断结果
        判断思路：
            1.按行判断：每行的和为3或-3时A或B赢
            2.按列判断：每列的和为3或-3时A或B赢
            3.对角线判断：对角线和为3或-3时A或B赢

        /** 具体代码如下**/
        // 保存行的值
        let rowSum = 0;
        // 保存列的值
        let colSum = 0;
        // 保存对角线1的值
        let diagonalOne = 0;
        // 保存对角线2的值
        let diagonalTwo = 0;

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
```


