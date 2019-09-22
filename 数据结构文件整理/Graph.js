function Graph() {
    // 属性  顶点(用数组存储)和边(用字典存储，即js的对象)
    this.vertexes = [];
    // key表示每个顶点，values为数组存储到某点的边
    this.eage = {};
    // 方法
    // 1.添加顶点  参数为要填的顶点
    Graph.prototype.addVertex = function (v) {
        // 添加该点到数组
        this.vertexes.push(v);
        // 并创建一对键值对 键为该点，值为存储该点指向其他点的一个数组
        this.eage[v] = [];
    };

    // 2.添加边  参数为两个要连接的顶点
    Graph.prototype.addEage = function (v1, v2) {
        // 2.1检查2个顶点是否存在不存在报错
        if (this.check(v1) && this.check(v2)) {
            // 有向图只用这一步  无向图还要保存反方向 可以在这里直接添加 也可以在调用该方法 
            this.eage[v1].push(v2);
            // this.eage[v2].push(v1);
        } else {
            console.error('检查你要连接的顶点是否存在');
        }
    };
    //3. 检查某个定点是否存在
    Graph.prototype.check = function (v) {
        // 因为存在返回0 不存在返回-1
        return this.vertexes.indexOf(v) + 1;
    };
    // 4.当通过重新指向 ；哎定义多个定点的时候，调用该方法，给每个顶点初始化一个存储边的数组
    Graph.prototype.addEages = function () {
        for (let i = 0; i < this.vertexes.length; i++) {
            this.eage[this.vertexes[i]] = [];
        };
    };
    // 5.toString打印所有的顶点和边
    Graph.prototype.toString = function () {
        let vs = '';
        for (let i in this.vertexes) {
            vs += this.vertexes[i];
        };
        console.log(vs);
        let eages = 0;
        for (let i in this.eage) {
            eages += this.eage[i].length;
        };
        console.log(`eages=${eages}`);
    };
    // 6.初始化每个顶点的颜色
    Graph.prototype.initColor = function () {
        let color = [];
        for (let i in this.vertexes) {
            color[this.vertexes[i]] = 'white';
        };
        return color;
    };
    // 7.广度搜索算法 BFS  参数为 指定开始访问的节点 和返回一个回调函数
    Graph.prototype.BFS = function (initV, handler) {
        if (this.check(initV)) {
            // 1.初始化颜色
            let color = this.initColor();
            // 2.创建队列
            let que = new Queue();

            // 3.将第一个顶点插入队列
            que.enqueue(initV);
            // 4.循环队列取出元素
            while (!que.isEmpty()) {
                // 4.1取出顶点
                let v = que.dequeue();
                // 4.2获取顶点的相邻顶点
                let vList = this.eage[v];
                // 4.3将v颜色设置成灰色
                color[v] = 'gray';
                // 4.4把相邻顶点插入队列 
                for (let i = 0; i < vList.length; i++) {
                    // 遍历相邻节点
                    let e = vList[i];
                    // 检查该点之前有没有被访问过
                    if (color[e] == 'white') {
                        console.log(e);
                        color[e] = 'gray';
                        que.enqueue(e);
                    }
                }
                // 4.5.访问v节点
                handler(v);
                // 4.6访问完毕
                color[v] = 'black';
            }
        } else {
            console.error('检查顶点是否存在');
        }

    };
    // 8.深度优先搜索遍历
    Graph.prototype.DFS = function (initV, handler) {
        if (this.check(initV)) {
            // 1.初始化颜色
            let color = this.initColor();
            this.recurrence(initV, color, handler);
        } else {
            console.error('检查顶点是否存在');
        }

    };
    // 递归访问顶点
    Graph.prototype.recurrence = function (v, color, handler) {
        // 1标记正在访问
        color[v] = 'gray';
        // 2处理顶点
        handler(v);
        // 3探索该点相邻顶点
        let vList = this.eage[v];
        for (let i in vList) {
            let e = vList[i];
            if (color[e] == 'white') {
                color[e] = 'gray';
                // 递归探索该点
                this.recurrence(e, color, handler);
            }
        };

        // 4标记探索完成
        color[v] = "black";

    };
};