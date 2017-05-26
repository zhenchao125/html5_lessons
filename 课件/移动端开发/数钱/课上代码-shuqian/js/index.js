/*document.addEventListener("touchstart", function (e){
	e.preventDefault();
}, false);
document.addEventListener("touchmove", function (e){
	e.preventDefault();
}, false);*/
/*$(document).on("tap swipe",function (e){
	e.preventDefault();
})*/

//加载图片资源和loading效果
loadingImg({
	loadImg:{
		"p1_bg":"images/p1_bg.png",
		"p1_title1":"images/p1_title1.png",
		"p1_title2":"images/p1_title2.png",
		"shou":"images/shou.png",
		"start_game_btn":"images/start_game_btn.png",
		"form_close":"images/form_close.png",
		"form_title":"images/form_title.png",
		"game_100":"images/game/game_100.png",
		"game_bg":"images/game/game_bg.png",
		"game_shou":"images/game/game_shou.png",
		"game_time":"images/game/game_time.png",
		"game_txt1":"images/game/game_txt1.png",
		"game_txt2":"images/game/game_txt2.png",
		"game_txt3":"images/game/game_txt3.png",
		"game_zhuan":"images/game/game_zhuan.png"
	},
	prog:function (num){
		$("#loading>span").html(num+"%");
	},
	complete:init
});
function init(){
	setTimeout(function (){
		$("#loading").hide();
		$(".p1_title1").addClass('swing');
		$(".p1_title2").addClass("bounceIn");
		$(".start_game_btn").addClass('pulse');
		$(".shou").addClass("fadeOut");

		$(".start_game_btn").on("tap",function (){
			$("#user_form").css({
				display:"flex"
			})
		})

		$(".form_sub").on("tap",function (e){

			var nameReg = /^[\u4e00-\u9ef8]{2,16}$/;
			var telReg = /^1[34578]\d{9}$/;
			if (nameReg.test($(".form_name").val())&&telReg.test($(".form_tel").val())){
				//alert("http://localhost/shuqian/form_handle.php");
				$.ajax({
					type:"get",
					url:"/shuqian/form_handle.php",
					data:{
						name:$(".form_name").val(),
						tel:$(".form_tel").val()
					},
					dataType:"json",
					success:function (data){
						// console.log(data)
						if (data.err=="0"){
							// alert("跳转到游戏界面")
							//隐藏表单也
							$("#user_form").css({
								display:"none"
							})
							//显示游戏界面
							gameInit()

						}else{
							alert(data.msg);
						}
					}
				});
			}else{
				alert("输入有误")
			}
		})

		//表单关闭按钮
		$("#form_close").on("tap",function (){

			$("#user_form").css({
				display:"none"
			})
		})

		function gameInit(){

			//禁止手机上默认的上下滑动
			document.addEventListener("touchstart", function (e){
				e.preventDefault();
			}, false);
			document.addEventListener("touchmove", function (e){
				e.preventDefault();
			}, false);

			$("#game").show();
			$(".game_shou").addClass("fadeOutUp");

			//游戏页面的一些处理

			//数钱
			var moneyNum = 0;
			var downTimeNum = 20;

			var downTimeBol = false;

			$("#game").on("swipeUp",function (e){

				$(".game_shou").remove();
				moneyNum++;
				var moneyStr = String(moneyNum);
				for (var i=0; i<moneyStr.length; i++){
					$(".time_num").eq($(".time_num").size()-i-1).html(moneyStr[moneyStr.length-i-1]);
				}
				downTimeBol = true;

				//滑动创建元素，并动画
				var gameMoneyObj = $('<img class="game_money_move" src="images/game/game_100.png" alt="">');

				$(".game_money").before(gameMoneyObj);
				gameMoneyObj.removeTime = setTimeout(function (){

					gameMoneyObj.remove();
				},1000);
				// e.preventDefault();
				// e.stopPropagation();
				// e.cancelBubble = true;
			})


			var gameTxts = ["images/game/game_txt1.png","images/game/game_txt2.png","images/game/game_txt3.png"];
			var gameTxtIndex = 0;
			var gameTimer = setInterval(function (){
				gameTxtIndex++;
				if (gameTxtIndex%3==0){
					gameTxtIndex = 0;
				}
				$(".game_txt").attr({
					"src":gameTxts[gameTxtIndex]
				})
				if (downTimeBol){
					downTimeNum--;
					$(".time>span").html(downTimeNum);
					if (downTimeNum<=0){
						alert("游戏结束");
						clearInterval(gameTimer);
					}
				}
			},1000)
		}
	},100);
}










