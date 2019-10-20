class Compile {
    // @param {el:String/DOM}
    // @param {vm:Object}
    constructor(el, vm) {
        this.el = this.isElementNode(el) ? el : document.querySelector(el);
        this.vm = vm;
        if (this.el) {
            // 如果元素可以获取 才可以编译
            // 1.在fragment操作目标节点内的dom  
            let fragment = this.node2fragment(this.el);
            // 2.编译=>提取目标元素节点 和文本节点{{}}
            this.compile(fragment);
            // 3.完成后然后插入到dom树中
            this.el.appendChild(fragment);
        }
    }
    // 辅助函数
    isElementNode(node) {
        // des:判断是否是节点
        return node.nodeType === 1;
    }
    isDirective(name) {
        // des:判断是不是指令  返回布尔值  ES6方法
        return name.includes('s-');
    }
    // 核心方法
    node2fragment(el) {
        // des:获取目标节点内部的所有dom到内存中
        let fragment = document.createDocumentFragment();
        let firstChild;
        while (firstChild = el.firstChild) {
            fragment.appendChild(firstChild);
        }
        return fragment;
    }
    compileElement(node) {
        // des:编译节点  获取每个节点是否含有指令属性
        // 获取dom属性  是类数组形式
        let attrs = node.attributes;
        [...attrs].forEach((attr) => {
            // 获取dom属性名
            // console.log(attr.name);
            // 获取dom属性值
            // console.log(attr.value);
            if (this.isDirective(attr.name)) {
                // 是指令  
                // 取指令名字
                let [, type] = attr.name.split('-');
                // des:对文本进行操作  
                // node:当前节点 
                // this.vm.$data：获取data
                // attr.value：当前节点的命令属性
                CompileUtil[type](node, this.vm, attr.value);
            }
        })
    };
    compileText(node) {
        // des:获取该节点的文本  
        let text = node.textContent;
        // 通过正则判断是否有表达式 {{ }}  
        // []为匹配任意字符 ；(^})为开头不能是 }；+执行该规则多次
        let reg = /\{\{(.*)\}\}/g;
        if (reg.test(text)) {

            // des:对文本进行操作  
            // node:当前节点 
            // this.vm.$data：获取data
            // text：当前节点的表达式
            CompileUtil['text'](node, this.vm, text);
        }
    };
    compile(fragment) {
        // des:编译 检查元素是否有指令和文本中是否有表达式
        // 取到文档碎片的第一层子节点,判断每个节点时元素还是文本
        let childs = fragment.childNodes;
        // 节点集合是类数组 需要转换成数组在遍历
        /**
         * 1.Array.from(节点集合)
         * 2.ES6解构[节点集合]
         */
        [...childs].forEach((node) => {
            if (this.isElementNode(node)) {
                // 是元素 遍历该元素的子节点并递归循环该元素的子元素
                this.compile(node);
                // 编译元素
                this.compileElement(node);
            } else {
                // 编译文本
                this.compileText(node);
            }
        });
    }
}

// 编译工具对象
CompileUtil = {
    getVal(vm, value) {
        // des:获取data中的数据
        // 转换成数组
        value = value.split('.');
        // 数组的方法
        return value.reduce((prev, next) => {
            return prev[next];
        }, vm.$data);
    },
    text(node, vm, value) {
        // des:文本处理
        let updateFn = this.updater['textUpdater'];
        // 文本替换  将文本节点的表达式替换成实例data的数据
        let val = value = value.replace(/\{\{(.*)\}\}/, (...rest) => {
            return this.getVal(vm, rest[1]);
        });
        updateFn && updateFn(node, val);
    },
    model(node, vm, value) {
        // des:v-model处理
        let updateFn = this.updater['modelUpdater'];
        // 确定调用的函数存在 在执行
        updateFn && updateFn(node, this.getVal(vm, value));
    },
    // ... 其他指令
    updater: {
        textUpdater(node, value) {
            // 文本更新
            node.textContent = value;
        },
        modelUpdater(node, value) {
            // 有model节点更新
            node.value = value;
        }
    }
}