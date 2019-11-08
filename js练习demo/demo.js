let one = document.querySelector('#one');
let oneSon = document.querySelectorAll('.one-son');
// 1.存储初始位置---A
let first = [];
// 2.获取one下的每一个dom的位置---A
for (let i = 0; i < [...oneSon].length; i++) {
    first[i] = oneSon[i].getBoundingClientRect();
}
let twoSon = document.querySelectorAll('.two-son');
let last = [];
// 3.改变到动画后位置---B
// 4.并获取其位置---B
for (let i = 0; i < [...twoSon].length; i++) {
    last[i] = [...twoSon][i].getBoundingClientRect();
}
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
// 获取差值
for (let i = 0; i < invert.length; i++) {
    invert[i].left = first[i].left - last[i].left;
    invert[i].top = first[i].top - last[i].top;
    invert[i].width = first[i].width / last[i].width;
    invert[i].height = first[i].height / last[i].height;
}
// 通过css属性让B变道A的位置并隐藏
for (let i = 0; i < [...twoSon].length; i++) {
    console.log([...twoSon][i]);
    // 定义变化位置
    [...twoSon][i].style.transformOrigin = 'top left';
    [...twoSon][i].style.transform = `translate(${invert[i].left}px,${invert[i].top}px) scale(${invert[i].width}, ${invert[i].height}) `;
}


// 测试
for (let i = 0; i < invert.length; i++) {
    console.log(invert[i].left);
    console.log(invert[i].top);
    console.log(invert[i].width);
    console.log(invert[i].height);
    console.log(" ");
}
let status = true
function change(index) {
    if (status) {
        twoSon[index].style.index = 99;
        twoSon[index].style.transform = '';
        twoSon[index].style.transition = ' all 1s';
        status=!status;
    } else {
        twoSon[index].style.index = -99;
        twoSon[index].style.transform = `translate(${invert[index].left}px,${invert[index].top}px) scale(${invert[index].width}, ${invert[index].height}) `;
        twoSon[index].style.transition = ' all 1s';
        status=!status;

    }

};
one.addEventListener('click', (e) => {
    let dom = e.target;
    if (dom.className === 'one-son') {
        switch (dom.innerText) {
            case '1':
                change(0)
                break;
            case '2':
                change(1)
                break;
            case '3':
                change(2)
                break;
            default:
                break;
        }


    }
});







