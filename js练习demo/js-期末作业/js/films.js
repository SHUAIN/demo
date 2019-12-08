let data = [
    [{
        name: '钢铁侠',
        url: './img/films/ironman1.webp'
    },
    {
        name: '美国队长',
        url: './img/films/captain1.webp'
    },
    {
        name: '雷神',
        url: './img/films/thor1.webp'
    },
    {
        name: '绿巨人',
        url: './img/films/hulk1.webp'
    }],
    [{
        name: '新蜘蛛侠',
        url: './img/films/spiderman1.webp'
    },
    {
        name: '旧蜘蛛侠',
        url: './img/films/oldspider1.webp'
    },
    {
        name: '复仇者联盟',
        url: './img/films/avengers1.webp'
    },
    {
        name: '蚁人',
        url: './img/films/antman1.webp'
    }],
    [
        {
            name: '银河护卫队',
            url: './img/films/Galaxy1.webp'
        }, {
            name: '灵魂战车',
            url: './img/films/ghost1.webp'
        }, {
            name: '神奇四侠',
            url: './img/films/four2005.webp'
        }, {
            name: '特工卡特',
            url: './img/films/agentcart.webp'
        }
    ],
    [
        {
            name: '毒液',
            url: './img/films/venom.webp'
        }, {
            name: '超凡蜘蛛侠',
            url: './img/films/amazingspider1.webp'
        }, {
            name: '惊奇队长',
            url: './img/films/marvel.webp'
        }, {
            name: '死侍',
            url: './img/films/deadpool.webp'
        }
    ],
    [
        {
            name: '刀锋战士',
            url: './img/films/blade1.webp'
        }, {
            name: '惩罚者',
            url: './img/films/Punisher.webp'
        }, {
            name: '海扁王',
            url: './img/films/kick1.webp'
        }, {
            name: '黑豹',
            url: './img/films/panther.webp'
        }
    ],

];
let container = $('#container');
// 初始化列
let initCol = function (data) {
    console.log(data);
    let con = new Dom('div', { class: 'con' });
    for (let i = 0; i < data.length; i++) {
        let div = new Dom('div', { class: 'box' });
        let h1 = new Dom('h1', data[i].name);
        let img = new Dom('img', { src: data[i].url });
        div.addChild(h1);
        div.addChild(img);
        con.addChild(div);
    }
    return con;
}
// 初始化行
let initRow = function (data) {
    for (let i = 0; i < data.length; i++) {
        container.appendChild(initCol(data[i]).target);
    }
}
initRow(data);






