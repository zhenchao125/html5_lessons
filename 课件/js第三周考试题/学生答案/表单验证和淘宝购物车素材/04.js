$id = function(id) {
		return document.getElementById(id);
	}
	//实现全选和全不选
var ipt = document.getElementsByTagName("input");
var flag = true;
$id("allCheckBox").onclick = function() {
		flag = !flag;
		if(true) {
			for(var i = 0; i < ipt.length; i++) {
				ipt[i].checked = flag;
			}
		}

	}
	//点击加号和减号的改变效果
var hand = document.getElementsByClassName("hand");
var iput = document.getElementsByClassName("num_input");
var i = 0;
var sum = 0;
hand[0].onclick = function() {
	if(sum <= 1) {
		alert("商品数量不能小于0");
		iput[0].value = 1;
	} else {
		sum -= 1;
		iput[0].value = sum;
	}
}
hand[1].onclick = function() {
	sum += 1;
	iput[0].value = sum;
}
hand[2].onclick = function() {
	if(sum <= 1) {
		alert("商品数量不能小于0");
		iput[1].value = 1;
	} else {
		sum -= 1;
		iput[1].value = sum;
	}
}
hand[3].onclick = function() {
	sum += 1;
	iput[1].value = sum;
}

