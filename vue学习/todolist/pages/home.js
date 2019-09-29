let html = `
<div class="home" ref="target">
    <ul class="nav" >
        <li>
            <span class="iconfont icon-instruction"></span>
        </li>
        <li class="tittle">TODO</li>
        <li>
            <span class="iconfont icon-search"></span>
        </li>
    </ul>
    <ul class="user">
        <li v-for="(item,index) in user" :key="index">
            {{item}}
        </li>
    </ul>
    <div class="swiper-container">
        <div class="swiper-wrapper" >
            <div class="swiper-slide" v-for="(item,index) in cards" :key="index" @touchend="change(index)">
               <p>
                <span :class=item.icon></span>
               </p>
               <p>{{item.name}}</p>
               <p>{{item.des}}</p>
            </div>
        </div>
    </div>
</div>
`;

let home = {
    template: html,
    data() {
        return {
            backColor: ['lightskyblue', 'lightsalmon'],
            user: {
                name: 'shauxin',
                about: 'keep passion'
            },
            cards: [{
                name: 'today',
                icon: 'iconfont icon-edit',
                des: '今天'
            },
            {
                name: 'plan',
                icon: 'iconfont icon-clock',
                des: '计划'
            },
            {
                name: 'all',
                icon: 'iconfont icon-favoriteslist',
                des: '全部'
            }],
        }
    },
    mounted() {
        var mySwiper = new Swiper('.swiper-container', {
            // 选项配置
            // loop: true  //开启循环
        })
    },
    methods: {
        change(index) {
            let i = index % 2;
            this.$refs.target.style.backgroundColor = this.backColor[i];
        }
    }

}