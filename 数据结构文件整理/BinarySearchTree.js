function BinarySearchTree() {
    // 根节点属性
    this.root = null;
    // 单个节点类  一个键是一个节点 一个节点保存一对键值对  key-value
    function Node(key) {
        this.key = key;
        // thi.value=value;  扩充 用来存值 和key成对保存
        // 左子节点
        this.left = null;
        // 右子节点
        this.right = null;
    };
    BinarySearchTree.prototype.insert = function (key) {
        let node = new Node(key);
        // 1.判断root节点是否存在
        if (this.root == null) {
            // 不存在就让该节点成为root节点
            this.root = node;
        } else {
            // 2.存在 和root节点的值(该例子没定义，所以比较key)比较大小  可以递归可以循环做
            // 控制循环找到对的位置
            let current = this.root;
            // 保存插入位置的父节点
            let father;
            while (current) {
                if (node.key > current.key) {
                    father = {
                        next: 'right',
                        value: current
                    };
                    current = current.right;
                } else {
                    father = {
                        next: 'left',
                        value: current
                    };
                    current = current.left;
                }
            };
            switch (father.next) {
                case 'left':
                    father.value.left = node;
                    break;
                case 'right':
                    father.value.right = node;
                    break;
                default:
                    console.error('插入异常');
                    break;
            }
        }
    };
    BinarySearchTree.prototype.search = function (key) {
        let current = this.root;
        while (current) {
            if (key > current.key) {
                current = current.right;
            } else if (key < current.key) {
                current = current.left;
            } else if (key == current.key) {
                // return current;
                return true;
            };
        };
        return false;
    };
    BinarySearchTree.prototype.extremeValue = function (str) {
        let current = this.root;
        let min = null,
            max = null;
        while (current) {
            if (str === 'max') {
                max = current;
                current = current.right;
                return max;
            } else if (str === 'min') {
                min = current;
                current = current.left;
                return min;
            } else {
                console.error("只能提供max或min为参数");
            }

        }
    };
    BinarySearchTree.prototype.recurrence = function (node, callback, mold) {

        if (node != null) {
            if (mold == "pre") {
                // 处理经过的节点
                callback(node.key);
                // 处理经过节点的左子节点
                this.recurrence(node.left, callback, mold);
                // 处理经过节点的右子节点
                this.recurrence(node.right, callback, mold);
            } else if (mold == "middle") {
                // 处理经过节点的左子节点
                this.recurrence(node.left, callback, mold);
                // 处理经过的节点
                callback(node.key);
                // 处理经过节点的右子节点
                this.recurrence(node.right, callback, mold);
            } else if (mold == "post") {
                // 处理经过节点的左子节点
                this.recurrence(node.left, callback, mold);
                // 处理经过节点的右子节点
                this.recurrence(node.right, callback, mold);
                // 处理经过的节点
                callback(node.key);
            }
        }
    };
    // 提供一个回调函数做参数
    // 先序
    BinarySearchTree.prototype.preOrderTraverse = function (callback) {
        // 通过递归来做
        this.recurrence(this.root, callback, 'pre');
    };
    // 中序  较常用
    BinarySearchTree.prototype.inOrderTraverse = function (callback) {
        this.recurrence(this.root, callback, 'middle');
    };
    // 后序
    BinarySearchTree.prototype.postOrderTraverse = function (callback) {
        this.recurrence(this.root, callback, 'post');
    };
    // 删除
    BinarySearchTree.prototype.remove = function (key) {
        // 1.先找到要删除节点
        let current = this.root, //
            parent = null,
            isLeft = true;
        while (current.key != key) {
            if (key > current.key) {
                isLeft = false;
                parent = current;
                current = current.right;
            } else if (key < current.key) {
                isLeft = true;
                parent = current;
                current = current.left;
            };
            if (current == null) {
                return false;
            }
        };
        //2.根据情况操作
        // 2.1删除叶节点
        if (current.left == null && current.right == null) {
            if (current == this.root) {
                this.root = null;
            } else if (isLeft == true) {
                parent.left = null;
            } else if (isLeft == false) {
                parent.right = null;
            }
        }
        // 2.2删除的节点有一个节点
        else if (current.right == null) {
            // 判断删除节点的子叶节点在左还是右 和删除的节点是不是根节点
            if (current == this.root) {
                this.root = current.left;
            } else if (isLeft) {
                parent.left = current.left;
            } else {
                parent.right = current.left;
            };
        } else if (current.left == null) {
            if (current == this.root) {
                this.root = current.left;
            } else if (isLeft) {
                parent.left = current.right;
            } else {
                parent.right = current.right;
            };
        }
        // 2.3删除有两个节点的情况
        else {
            let successor = this.getSuccessor(current);
            if (current == this.root) {
                this.root == successor;
            } else if (isLeft == true) {
                parent.left = successor;
            } else {
                parent.right = successor;
            }
            successor.left = current.left;
        }
    }
    // 找后继  删除节点右子树的最小值
    BinarySearchTree.prototype.getSuccessor = function (delNode) {
        let current = delNode.right;
        let successor = delNode;
        let successorParent = delNode;
        while (current!=null) {
            successorParent = successor;
            successor = current;
            current = current.left;
        }
        // 寻找后继节点是否直接是delNOde的右节点
        if (successor != delNode.right) {
            successorParent.left = successor.right;
            successor.right = current;
        }
        return successor;
    };
    // 找前驱  删除节点左子树的最大值
    BinarySearchTree.prototype.getPredecessor = function (delNode) {
        let current = delNode.left;
        let max = null;
        while (current) {
            if (current.key < delNode.key) {
                max = current;
            };
            current = current.right;
        }
        return max;
    };
};