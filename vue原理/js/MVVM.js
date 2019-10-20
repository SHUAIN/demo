class MVVM {
    constructor(options) {
        // 初始化实例
        this.$el = options.el;
        this.$data = options.data;
        // 根据是否有挂载的模板来判断是否进行后面的操作
        if (this.$el) {
            // 数据劫持
            new Observer(this.$data);
            // 编译模板
            new Compile(this.$el, this);
        }
    }
}
