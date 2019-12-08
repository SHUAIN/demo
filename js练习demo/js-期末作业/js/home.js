// 初始化swiper
var mySwiper = new Swiper('.swiper-container', {
    loop: true, // 循环模式选项
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
let cover = document.querySelector('#cover');
let container = document.querySelector('#container');
let menu = document.querySelector('#menu');
let nav = document.querySelector('#nav');
let hideCover = function () {
    return function () {
        cover.style.opacity = `0`;
        setTimeout(() => {
            cover.style.visibility = 'hidden';
            container.style.opacity = '10';
        }, 700);
    }
}
cover.addEventListener('click', hideCover());
let status = true;
let showNav = function () {
    return function (e) {
        if (status) {
            nav.style.visibility = "visible";
            nav.style.opacity = '10';
            status = !status;
        } else {
            nav.style.opacity = '0';
            setTimeout(() => {
                nav.style.visibility = "hidden";
            }, 700);
            status = !status;
        }
    }
}
menu.addEventListener('click', showNav());