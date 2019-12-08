let submit = $('#submit');
let list = $('#list');
let comment = [];
//添加新评论
submit.addEventListener('click', () => {
    let context = $('#context');
    // 创建时间戳
    const d = new Date();
    const now = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
    const time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    // 创建新评论信息
    let obj = {
        time: `${now} ${time}`,
        text: context.value
    };
    // 存储当前评论到评论数组
    comment.push(obj);
    // 存储到评论数据到session  
    // 键值对形式存储 值为string，所以转换对象为json格式存储
    localStorage.setItem(comment.length, JSON.stringify(obj));
    context.value = '';
    // 渲染新添加评论到页面
    initComment(comment);
});
// 渲染评论到页面
let initComment = function (arr) {
    // 卸载上一次渲染的页面
    clear(list);
    // 重新渲染评论到页面
    for (let i = 0; i < arr.length; i++) {
        let div = new Dom('div');
        let h3 = new Dom('h3', arr[i].time);
        div.addChild(h3);
        let p = new Dom('p');
        let span = new Dom('span', arr[i].text);
        p.addChild(span);
        let button = new Dom('button', { class: 'reply' }, '回复');
        p.addChild(button);
        div.addChild(p);
        list.appendChild(div.target);
    }
};
// 判断localStorage中是否有数据 有就获取装入到commonent数组
// 这里转换是因为localstrong不是一个纯数据对象
let obj = JSON.parse(JSON.stringify(localStorage));
// 遍历localstrong数据装进comment
for (let i in obj) {
    // 因为是json格式存储，这里需要转换成js对象
    comment.push(JSON.parse(obj[i]));
}
initComment(comment);