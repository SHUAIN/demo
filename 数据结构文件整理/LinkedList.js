function LinkedList() {
    // 节点类 链表中每个节点包含元素内容和指向下一个节点的引用
    function Node(data) {
        this.data = data;
        this.next = null;
    };
    // 第一个节点的引用
    this.head = null;
    // 链表长度属性
    this.length = 0;
    // append追加元素方法
    LinkedList.prototype.append = function (data) {
        // 1.创建新节点
        let node = new Node(data);
        // 2.判断是否是第一个节点  也可以根据heae是否为空判断
        if (this.length === 0) {
            this.head = node;
        } else {
            // 当前第一个节点
            let current = this.head;
            // 通过判断每个节点的next是否为空来找到最后一个元素 
            while (current.next) {
                current = current.next;
            };
            // 然后给将最后一个元素的next指向我们新添加的元素
            current.next = node;
        }
        // 3.更新长度
        this.length++;
    };
    // tostring打印元素内容方法
    LinkedList.prototype.toString = function () {
        // 1.定义起始变量
        let current = this.head;
        // 2.定义要打印变量
        let listString = "";
        // 循环每一个节点
        while (current) {
            // 获取当前节点data
            listString += current.data + " ";
            // 切换到下一个节点
            current = current.next;
        };
        return listString;
    };
    // insert向特定位置插入方法  position计数规则和数组下标一直 0为第一个
    LinkedList.prototype.insert = function (position, data) {
        // 1.对position做越界判断  即插入位置是否存在
        if (position >= 0 && position <= this.length) {
            let node = new Node(data);
            // 2.插入位置是第一个时
            if (position === 0) {
                // 让要插入的节点的指针指向原来的第一个节点
                node.next = this.head;
                // 让head指向要插入的节点
                this.head = node;
            } else {
                // 标识每一个节点的位置  previous保存前一个节点 
                let index = 0,
                    current = this.head,
                    previous;
                while (index++ < position) {
                    // 这里是指针 所以current指向对象变化后 previous也会变
                    previous = current;
                    current = current.next;
                };
                node.next = current;
                previous.next = node;
            };
            // 更新长度
            this.length++;
            return true;
        } else {
            return false;
        }
    };
    // get方法 提供position返回链表中该位置的data
    LinkedList.prototype.get = function (position) {
        // 判断position越界
        if (position >= 0 && position <= this.length) {
            let index, current = this.head;
            while (index++ < position) {
                current = current.next;
            };
            return current.data;
        } else {
            return 0;
        }
    };
    // indexof方法 提供data 返回该元素在链表中的索引(index) 没有时 返回负一
    LinkedList.prototype.indexOf = function (data) {
        let index = 0,
            current = this.head;
        while (current) {
            if (current.data == data) {
                return index;
            }
            current = current.next;
            index++;
        };
        return -1;
    };
    // update方法 修改某个位置的元素
    LinkedList.prototype.update = function (position, data) {
        // 越界判断
        if (position >= 0 && position <= this.length) {
            let index = 0,
                current = this.head;
            while (index++ < position) {
                // 这里是指针 所以current指向对象变化后 previous也会变
                current = current.next;
            };
            current.data = data;
            return true;
        } else {
            return false;
        }
    };
    // removeAt方法 删除特定位置的元素 返回删除的元素
    LinkedList.prototype.removeAt = function (position) {
        // 越界判断
        if (position >= 0 && position <= this.length) {
            let index = 0,
                current = this.head,
                previous;
            if (position === 0) {
                this.head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                };
                previous.next = current.next;
            }
            // 更新长度
            this.length--;
            return current.data;
        } else {
            return -1;
        }
    };
    // remove方法  根据data移除链表中的一项
    LinkedList.prototype.remove = function (data) {
        let position = this.indexOf(data);
        return this.removeAt(position);
    };
    // size方法 返回链表对的元素个数
    LinkedList.prototype.size = function () {
        return this.length;
    };
    // isEmpty方法 判断链表是否为空
    LinkedList.prototype.isEmpty = function () {
        if (this.length === 0) {
            return true;
        } else {
            return false;
        }
    };

};