// 通过组件函数创建一个组件
let one = Vue.extend({
    template: `<div>{{name}}</div>`,
    data() {
        return {
            name: '通过extend API创建的组件'
        }
    }
});
// 注册上面的组件
Vue.component('one', one);

// 创建一个聚焦输入框的指令
// Vue.directive('focus', {
//     // 当被绑定的元素插入到 DOM 中时……
//     inserted: function (el) {
//         // 聚焦元素
//         el.focus()
//     }
// })
let app = new Vue({
    el: "#app",
    data() {
        return {
            name: 'testApi',
            man: {
                name: 'wade',
                sex: '男',
            }
        }
    },
    methods: {
        change() {
            this.name = "更新name";
            console.log(this.name);
            let that = this;
            Vue.nextTick(function () {
                console.log('dom updated');
                that.name += ' dom更新完成'
            })
        },
        add() {
            // alert('1');
            Vue.set(this.man, 'age', 41);
            console.log(this.man);
        },
        del() {
            this.$delete(this.man, 'age');
        }
    },
    // 局部定义
    directives: {
        focus: {
            // 指令的定义
            inserted: function (el) {
                el.focus()
            }
        }
    }

})