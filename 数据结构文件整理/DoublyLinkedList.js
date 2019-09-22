function DoublyLinkedList() {
    // 属性
    this.head = null; //表头
    this.tail = null; //表尾
    this.length = 0;
    // 内部类 记录每个节点
    function Node(data) {
        this.prev = null; //上一个节点指针
        this.data = data; //节点数据
        this.next = null; //下一个节点指针
    };
    // append追加元素方法
    DoublyLinkedList.prototype.append = function (data) {
        // 创建新节点
        let node = new Node(data);
        // 判断是第一个还是其他位置节点
        if (this.length === 0) {
            this.head = node;
        } else {
            let current = this.head;
            // 通过判断每个节点的next是否为空来找到最后一个元素 
            while (current.next) {
                current = current.next;
            };
            // 设置最后一个节点的next指向当前节点
            current.next = node;
            // 设置当前节点的prev指向最后一个节点
            node.prev = current;
            node.next = this.tail;

        };
        this.length++; //更新长度
    };
    // tostring打印链表内容方法
    DoublyLinkedList.prototype.toString = function () {
        let current = this.head;
        let stringList = "";
        // 循环每一个节点
        while (current) {
            stringList += current.data + " ";
            current = current.next;
        };
        return stringList;
    };
    // insert方法 向链表特定位置插入节点
    DoublyLinkedList.prototype.insert = function (position, data) {
        // 越界判断
        if (position >= 0 && position <= this.length) {
            let node = new Node(data);
            // 判断 position是否为1
            if (position === 0) {
                this.head.prev = node;
                node.next = this.head;
                // 让head指向要插入的节点
                this.head = node;
            } else {
                let index = 0,
                    current = this.head,
                    previous;
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                };
                // console.log(`current=${current.data}`);
                // console.log(`previous=${previous.data}`);
                node.next = current;
                node.prev = previous;
                previous.next = node;
            }
            this.length++;
            return true;
        } else {
            return false;
        }

    };
    // get方法 获取指定位置的元素 没有返回0
    DoublyLinkedList.prototype.get = function (position) {
        if (position >= 0 && position <= this.length) {
            let index = 0,
                current = this.head;
            while (index++ < position) {
                current = current.next;
            }
            return current.data;
        } else {
            return 0;
        }
    };
    // indexof方法 提供data 返回该元素在链表中的索引(index) 没有时 返回负一
    DoublyLinkedList.prototype.indexOf = function (data) {
        let current = this.head,
            index = 0;
        while (current.next) {
            if (current.data == data) {
                return index;
            }
            current = current.next;
            index++;
        };
        return -1;
    };
    // update方法 修改某个位置的元素
    DoublyLinkedList.prototype.update = function (position, data) {
        let index = 0,
            current = this.head;
        if (position >= 0 && position <= this.length) {
            while (index++ < position) {
                current = current.next;
            }
            current.data = data;
            return true;
        } else {
            return false;
        }
    };
    // removeAt方法 删除特定位置的元素 返回删除的元素
    DoublyLinkedList.prototype.removeAt = function (position) {
        let index = 0,
            current = this.head,
            previous;
        if (position >= 0 && position <= this.length) {
            if (position === 0) {
                this.head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                console.log(`previous=${previous.data}`);
                console.log(`current=${current.data}`);
                previous.next = current.next;
                current.next.prev = previous;
            }
            this.length--;
            return 1;
        } else {
            return false;
        }
    };
    // remove方法 从链表中移除某一项
    DoublyLinkedList.prototype.remove = function (data) {
        let position = this.indexOf(data);
        return this.removeAt(position);
    };
    // size方法 返回链表对的元素个数
    DoublyLinkedList.prototype.size = function () {
        return this.length;
    };
    // isEmpty方法 判断链表是否为空
    DoublyLinkedList.prototype.isEmpty = function () {
        if (this.length === 0) {
            return true;
        } else {
            return false;
        }
    };
};