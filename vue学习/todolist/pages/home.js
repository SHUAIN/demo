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
            <div ref="slide" class="swiper-slide" v-for="(item,index) in cards" :key="index" >
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
            backColor: ['lightsalmon','lightskyblue', 'lightsalmon'],
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
        let that=this;
        var mySwiper = new Swiper('.swiper-container', {
            // 选项配置
            // loop: true  //开启循环
            on: {
                // swiper 当切换到下一页时 执行该函数
                slideChangeTransitionEnd: function () {
                    console.log(this.activeIndex);
                    that.$refs.target.style.backgroundColor = that.backColor[this.activeIndex];
                },
            },
        })
    }
}