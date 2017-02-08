//全选全不选
var all = document.getElementById("allCheckBox");
var cartCheckBoxs = document.getElementsByName("cartCheckBox");
	all.onclick = function () {
			var checked = all.checked;
		for (var i = 0; i < cartCheckBoxs.length; i++) {
			cartCheckBoxs[i].checked = checked;
		}
	}

//积分
var jifens = document.getElementsByClassName("cart_td_4");
var inputs  = document.getElementsByClassName("num_input");
var sum = 0;
for (i = 0; i<jifens.length; i++){
	for (j = 0; j<inputs.length; j++){
		if(i == j){
			var a = jifens[i]*inputs[j];
			sum+= a;
		}else{
			i++;
		}
	}
}
//删除
var delecteds = document.getElementsByClassName("cart_td_8");
var shopping = document.getElementById("shopping");
for(i = 0; i <delecteds.length;i++){
	var a1 = delecteds[i].firstChild;
	a1.onclick = function removeRow() {
		var length = delecteds.length-1;
		if(length>=0) {
		shopping.removeChild(delecteds[length]);
		}	
	}
}
 



