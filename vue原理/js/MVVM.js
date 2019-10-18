class MVVM {
    constructor(options) {
        // 初始化实例
        this.$el = options.el;
        this.$data = options.data;
        // 根据是否有模板判断是否需要编译
        if (this.$el) {
            new Compile(this.$el, this);
        }
    }
}
