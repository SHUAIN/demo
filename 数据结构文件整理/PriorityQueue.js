function PriorityQueue() {
    // 创建一个包含元素内容和优先级的对象
    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    };
    // 封装属性
    this.items = [];
    // 实现插入方法
    PriorityQueue.prototype.enqueue = function (element, priority) {
        // 创建QueueElement
        let queueElement = new QueueElement(element, priority);
        // 判断队列是否为空?直接插入:和已有元素对比优先级后插入
        if (this.items.length===0) {
            this.items.push(queueElement);
        } else {
            let added=false;
            for(let i in this.items){
                if(queueElement.priority<this.items[i].priority){
                    this.items.splice(i,0,queueElement);
                    added=true;
                    break;
                }
            };
            if (!added) {
                this.items.push(queueElement);
            }
        }
    };
    // 其他方法和队列一样
};