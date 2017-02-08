    var $id = function(id) {
		return document.getElementById(id);
	}


	var allCheckBox = $id("allCheckBox");
	var cartCheckBox = document.getElementsByName("cartCheckBox");

	/*
	 * 全选效果
	 */
	allCheckBox.onclick = function(){

	var check = allCheckBox.getAttribute("checked");
	if(!check){
		allCheckBox.setAttribute("checked","checked");
		for(var i = 0; i<cartCheckBox.length ; i++){
			cartCheckBox[i].setAttribute("checked","checked");
			}	
		}else{
			allCheckBox.removeAttribute("checked");
			for(var i = 0; i<cartCheckBox.length ; i++){
				cartCheckBox[i].removeAttribute("checked");
			}
		}
    }

	/*
	 * 改变商品数量
	 */
    var count = 0;
	var add = document.getElementsByName("add")[0];
	var minus = document.getElementsByName("minus")[0];
	var num_1 = document.getElementById("num_1");
	add.onclick = function(){
		count++;
		num_1.value = count;
	}
	minus.onclick = function(){
		if(count == 0){
			alert("数量不能小于 0");
		}else{
			count--;
		}
		num_1.value = count;
	}
	

   /*
	* 删除行
	*/
	var aName= document.getElementsByName("aName")[0];
	var aName1= document.getElementsByName("aName")[1];
	var aName2= document.getElementsByName("aName")[2];
    function deletEle(){
    var pro = $id("product1");
    var parent = pro.parentElement;
    parent.removeChild(pro);
   }

  aName.onclick = deletEle;
  aName1.onclick = deletEle;
  aName2.onclick = deletEle;
  
  
  
  
 