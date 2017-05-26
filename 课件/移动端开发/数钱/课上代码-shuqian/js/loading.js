function loadingImg(obj){
			
	var loadedImg = {};
	var len = 0;
	for (var i in obj.loadImg){
		len++;
	}
	var prog = 0;
	for (var i in obj.loadImg){
		var imgObj = new Image();
		imgObj.src = obj.loadImg[i];
		imgObj.key = i;
		imgObj.onload = function (){
			loadedImg[this.key] = this;
			prog++;
			if (obj.prog){
				obj.prog(parseInt(prog/len*100));
			}
			if (prog>=len){
				//加载完成
				if (obj.complete){
					obj.complete(loadedImg);
				}
			}
		}
	}
}