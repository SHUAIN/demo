class Queue {
    item = [];
    // 给队列队尾添加元素
    enqueue(val) {
        return this.item.push(val);
    };
    // 给队列队头删除元素
    dequeue(val) {
        return this.item.shift(val);
    };
    // 返回队列第一个元素
    front() {
        return this.item[0];
    };
    // 判断队列中是否含有元素
    isEmpty() {
        return this.item.length;
    };
    // 判断队列的元素个数
    size() {
        return this.item.length;
    };
};