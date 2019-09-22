function SetCustomer() {
    // 属性
    this.items = {};
    // 方法
    SetCustomer.prototype.add = function (value) {
        this.items[value] = value;
    };
    SetCustomer.prototype.remove = function (value) {
        if (this.has(value)) {
            delete this.items[value];
            return true;
        } else {
            return false;
        }
    };
    SetCustomer.prototype.has = function (value) {
        /**第一种*/
        // for (let i in this.items) {
        //     if (value == i) {
        //         return true;
        //     }
        // };
        // return false;
        /*第二种*/
        if (this.items.hasOwnProperty(value)) {
            return true;
        } else {
            return false;
        }
    };
    SetCustomer.prototype.clear = function () {
        this.items = {};
    };
    SetCustomer.prototype.size = function () {
        // let index = 0;
        // for (let i in this.items) {
        //     index++;
        // };
        // return index;
        return Object.keys(this.items).length;
    };
    SetCustomer.prototype.values = function () {
        // let data = [];
        // for (let i in this.items) {
        //     data.push(this.items[i]);
        // };
        // 以为集合键值一致的 所以取键也行
        return Object.keys(this.items);
    };
    // 封装并集操作 提供另一个集合 和当前集合求并集
    SetCustomer.prototype.union = function (otherSet) {
        // 1.创建新集合
        let unionSet = new SetCustomer();
        // 2.将A集合元素添加到新集合
        for (let i = 0; i < this.size(); i++) {
            unionSet.add(this.values()[i]);
        };
        // 3.将B集合添加到新集合
        for (let i = 0; i < otherSet.size(); i++) {
            unionSet.add(otherSet.values()[i]);
        };
        return unionSet;
    };
    // 封装交集操作 提供另一个集合 和当前集合求交集
    SetCustomer.prototype.intersection = function (otherSet) {
        let insSet = new SetCustomer();
        for (let i = 0; i < this.size(); i++) {
            if (otherSet.has(this.values()[i])) {
                insSet.add(this.values()[i]);
            }
        };
        return insSet;
    };
    // 封装差集操作
    SetCustomer.prototype.difference = function (otherSet) {
        let diffSet = new SetCustomer();
        for (let i = 0; i < this.size(); i++) {
            if (!otherSet.has(this.values()[i])) {
                diffSet.add(this.values()[i]);
            }
        };
        return diffSet;
    };
    // 求证本集合是不是另一个集合的子集
    SetCustomer.prototype.subset = function (otherSet) {
        if (this.size() > otherSet.size) {
            return false;
        } else {
            for (let i = 0; i < this.size(); i++) {
                if (!otherSet.has(this.values()[i])) {
                    return false;
                }
            };
            return true;
        }
    };
};