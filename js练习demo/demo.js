let one = document.querySelector('#one');
let oneSon = document.querySelectorAll('.one-son');
let twoSon = document.querySelectorAll('.two-son');
// 控制动画动画打开还是关闭
let status = true;
// 1.存储初始位置---A
let first = [];
let last = [];
// 2.获取one下的每一个dom的位置---A
for (let i = 0; i < [...oneSon].length; i++) {
    first[i] = oneSon[i].getBoundingClientRect();
}
// 3.改变到动画后位置---B
// 4.并获取其位置---B
for (let i = 0; i < [...twoSon].length; i++) {
    last[i] = [...twoSon][i].getBoundingClientRect();
}
// 记录动画前后的位置大小差
let invert = [
    {
        left: 0,
        top: 0,
        width: 0,
        height: 0
    },
    {
        left: 0,
        top: 0,
        width: 0,
        height: 0
    },
    {
        left: 0,
        top: 0,
        width: 0,
        height: 0
    },
];

// 获取差值 并记录
for (let i = 0; i < invert.length; i++) {
    invert[i].left = first[i].left - last[i].left;
    invert[i].top = first[i].top - last[i].top;
    invert[i].width = first[i].width / last[i].width;
    invert[i].height = first[i].height / last[i].height;
}

// 通过css属性让B变到A的位置并隐藏
for (let i = 0; i < [...twoSon].length; i++) {
    console.log([...twoSon][i]);
    // 定义变化位置
    [...twoSon][i].style.transformOrigin = 'top left';
    [...twoSon][i].style.transform = `translate(${invert[i].left}px,${invert[i].top}px) scale(${invert[i].width}, ${invert[i].height}) `;
}

// 改变样式
function change(index, dom) {
    if (status) {
        twoSon[index].style.index = 99;
        // twoSon[index].style.visibility='visible';
        twoSon[index].style.transform = '';
        twoSon[index].style.transition = ' all 1s';
        dom.style.opacity = 0;
        status = !status;
    } else {
        twoSon[index].style.index = -99;
        // twoSon[index].style.visibility='hidden';
        twoSon[index].style.transform = `translate(${invert[index].left}px,${invert[index].top}px) scale(${invert[index].width}, ${invert[index].height}) `;
        twoSon[index].style.transition = ' all 1s';
        dom.style.opacity = 1;

        status = !status;
    }

};
one.addEventListener('click', (e) => {
    let dom = e.target;
    if (dom.className === 'one-son') {
        switch (dom.innerText) {
            case '1':
                change(0, dom)
                break;
            case '2':
                change(1, dom)
                break;
            case '3':
                change(2, dom)
                break;
            default:
                break;
        }


    }
});







