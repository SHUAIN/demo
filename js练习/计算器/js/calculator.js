//获取显示框
var show = document.getElementById("show");
//获取所有按键
var box = document.getElementById("btn");
//保存前后操作的2个数
var one = '',
	two = '';
//开关,来判断在输入的是第几个数,默认关闭
var on = false;
//保存计算结果
var result = '';
//保存符号
var symbol = '';
btn.onclick = function (ev) {
	//获取点击目标
	var num = ev.target;
	//获取的内容
	var math = num.textContent;
	/*判断点击是数字还是符号
		1.是=就直接运算
		2.是数字保存	
	*/
	if (isNaN(math)) {
		if (math === '=' ) {
			computed(parseInt(one), parseInt(two));
		} else {
			
			if (symbol=='') {
				on = true;
				symbol = math;
				show.value = math;
			} else {
				computed(parseInt(one), parseInt(two));
				on = true;
				symbol = math;
				show.value = math;
			}
			
		}

	} else {
		//是数字
		saveNum(math);
	}
}
//保存计算数据
function saveNum(math) {
	if (on == false) {
		//保存
		one +=math;
		// 同步到显示
		show.value = one;
	} else {
		//保存
		two += math;
		// 同步到显示
		show.value = two;
	}
}
//判断
function computed(a, b) {
	console.log('a='+a);
	console.log('b='+b);
	
	/*
		判断a，b是不是都有
	*/
	if (isNaN(a)) {
		a = result;
		calculate(a, b);
	}else if(isNaN(b)){
		b=result;
		calculate(a,b);
	} else {
		calculate(a, b);
	}
	one = '';
	two = '';
	on = false;
}
//计算
function calculate(a, b) {
	console.log('a='+a);
	console.log('b='+b);
	switch (symbol) {
		case '+':
			result = (a + b);
			show.value = result;
			symbol='';
			break;
		case '-':
			result = (a - b);
			show.value = result;
			symbol='';
			break;
		case '*':
			result = (a * b);
			show.value = result;
			symbol='';
			break;
		case '/':
			result = (a / b);
			show.value = result;
			symbol='';
			break;
		default:
			break;
	}
}