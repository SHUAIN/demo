/*父子组件通信*/
Vue.component('page-one', {
    template: "<div>接受父组件传递的数据：{{msg}}<div>",
    // 对象接受数据
    props: {
        name
    },
    data() {
        return {
            msg: "page-one"

        }
    },
    created() {
        console.log(this.name);
        this.msg = this.name;
    }
});
/*子父组件通信*/
Vue.component('page-two', {
    template: "<div >{{msg}}<button @click='start'>clickme</button><div>",
    data() {
        return {
            msg: "page-two"
        }
    },
    methods: {
        start() {
            this.$emit("ok", this.msg);
        }
    }
});
/**插槽使用 */
let three = {
    // 定义插槽
    template: `
    <div> 
        <p><slot></slot></p>
        <p> <slot name='one'></slot></p>
    </div>
    `,
    data() {
        return {
        }
    }
}
/*兄弟组件通信*/
let one = {
    template:
        `
    <div>one
        <button @click='send'>clickme</button>
    </div>
    `,
    data() {
        return {
            msg: 'this is one'
        }
    },
    methods: {
        send() {
            Event.$emit('data-one', this.msg)
        }
    }
};
let two = {
    template:
        `
    <div>
        two
        <p>接受one组件传递的data：{{text}}</p>
    </div>
    `,
    data() {
        return {
            text: ''
        }
    },
    mounted() {
        // 监听one组件触发的事件 并接受传递的数据
        Event.$on('data-one', data => {
            console.log(data);
            this.text = data;
        })
    }
};


/**使用$attrs和inheritAttrs进行跨级通信*/
let fourchild = {
    template: '<div>祖父组件传递过来的数据:{{data}}</div>',
    data() {
        return {
            data: '初始化'
        }
    },
    created() {
        console.log(this.$attrs);
        this.data = this.$attrs['demotwo'];
    }
};
let four = {
    template:
        `
        <div >
            接受父组件传递的参数：{{text}}
            <fourchild v-bind="$attrs"></fourchild>
        </div>
    `,
    props: {
        demo: {
            type: String
        }
    },
    components: {
        "fourchild": fourchild
    },
    data() {
        return {
            text: ''
        }
    },
    // 关闭没有被props注册的父组件传递过来的属性 在html的渲染
    inheritAttrs: false,
    created() {
        this.text = this.demo;
        // 获取没有被该组件props绑定 但父组件传递过来的数据  以对象格式获取
        console.log(this.$attrs);
    }
};

/*使用provide和inject进行跨级通讯*/

Vue.component('five', {
    template: `
        <div>
            {{msg}}
            接受父组件传递的数据：{{obj}}
        </div>
    `,
    data() {
        return {
            msg: 'this is five',
            msg2: ''
        }
    },
    // 可以是字符数组 也可以是对象，对象的话key为本地绑定属性，value为接受的属性
    inject: ['obj'],
    mounted() {
        // console.log(this.name.name);
        // this.msg2 = this.name.name;
    }
})


/**使用$parent和$childern和ref进行父子组件通信 */
Vue.component('seven', {
    template: `
        <div>
            {{msg}}
            接受父组件的数据:{{msgtwo}}
        </div>
    `,
    data() {
        return {
            msg: 'this is seven',
            msgtwo: ''
        }
    },
    mounted() {
        // 获取父组件数据
        console.log(this.$parent.name);
        this.msgtwo = this.$parent.name;
    }
});