let $ = function (dom) {
    return document.querySelector(dom);
};
let back = $('#top');
// 返回顶部
back.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
});
// 参数列表:
// 1.创建dom名(必须)
// 2.套设置的属性(可选)，3.设置的属性的值(可选)
// 获取dom


// @param{dom:object,创建的dom}
// @param{att:object要给dom设置的属性}
class Dom {
    constructor(dom, ...rest) {
        this.target = document.createElement(dom);
        if (rest[0] instanceof Object) {
            this.initDom(rest[0]);
        }
        if (typeof rest[0] === 'string') {
            this.addText(rest[0]);
        }
        if (typeof rest[1] === 'string') {
            this.addText(rest[1]);
        }
    }
    // 初始化dom属性
    initDom(atts) {
        if (atts instanceof Object) {
            for (let i in atts) {
                this.target.setAttribute(i, atts[i]);
            }
        }
    }
    // 添加文本节点
    addText(txt) {
        let t = document.createTextNode(txt);
        this.target.appendChild(t);
    }
    // 添加子节点
    addChild(dom) {
        this.target.appendChild(dom.target);
    }
}
// 卸载页面dom
let clear = function (targetDom) {
    let frag = document.createDocumentFragment(), child;
    while (child = targetDom.children) {
        if (child.length === 0) {
            break;
        }
        frag.appendChild(child[0]);
    }
}