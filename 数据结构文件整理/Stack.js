class Stack {
    item = [];
    constructor() { };
    push(val) {
        return this.item.push(val);
    };
    print() {
        for (let i = this.item.length - 1; i >= 0; i--) {
            console.log(this.item[i]);
        };
    };
    pop(val) {
        return this.item.pop(val);
    };
    isEmpty(val) {
        return this.item.length == 0;
    };
    clear() {
        this.item = [];
    };
    size() {
        return this.item.length;
    };
    peek() {
        return this.item[this.item.length - 1];
    };
};