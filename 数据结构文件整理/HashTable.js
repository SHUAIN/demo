function HashTable() {
    this.items = []; //保存哈希后的数据
    this.count = 0; //记录数组元素个数 来控制数组长度
    this.limit = 7; //当前哈希表数组总长度  一般最好是质数
    HashTable.prototype.hash = function (key, size) {
        let hashCode = 0;
        for (let i = 0; i < key.length; i++) {
            hashCode = 37 * hashCode + key.charCodeAt();
        };
        // 存储位置下标
        let index = hashCode % size;
        return index;
    };

    //      2.2相同就修改之前的值
    // 插入&修改操作
    HashTable.prototype.put = function (key, value) {
        // 1.通过哈希函数 来获取索引值
        let index = this.hash(key, this.limit);
        // 2.根据索引值存数据
        let bucket = this.items[index];
        //       2.1判断该位置是否为空
        if (bucket == null) {
            bucket = [key, value];
            this.items[index] = bucket;
        }
        // 3.判断存在的值是否相同 相同就修改数据
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i];
            if (tuple[0] == key) {
                tuple[1] = value;
                return;
            }
        };
        // 4.进行添加操作
        bucket.push([key, value]);
        this.count++;
    };
    // 获取操作
    HashTable.prototype.get = function (key) {
        // 1.根据key获取index
        let index = this.hash(key, this.limit);
        // 2.判断index位置是否为空
        if (this.items[index] == null) {
            return null;
        } else {
            for (let i = 0; i < this.items[index].length; i++) {
                let tuple = this.items[index][i];
                //  2.2不为空，返回数据
                if (tuple[0] == key) {
                    return tuple[1];
                }
            };
        }
        //  2.1为空返回null
        return null;
    };
    // 删除操作
    HashTable.prototype.delete = function (key) {
        // 1.根据key获取对应的index
        let index = this.hash(key.this.limit);
        // 2.判断index位置是否为空
        if (this.items[index] == null) {
            return null;
        } else {
            for (let i = 0; i < this.items[index].length; i++) {
                let tuple = this.items[index][i];
                //  2.2不为空，返回数据
                if (tuple[0] == key) {
                    // 删除
                    this.items[index].splice(i, 1);
                    this.count--;
                    return tuple[1];
                }
            };
        }
        return null;
    };
    // 其他方法
    HashTable.prototype.isEmpty = function () {
        return this.count == 0;
    };
    HashTable.prototype.size = function () {
        return this.count;
    };
};