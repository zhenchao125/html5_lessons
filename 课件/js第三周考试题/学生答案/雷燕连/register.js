//表单验证，用户名的正则表达式有问题
//用户名
var oUser=document.getElementById("userName");
var userNameId =document.getElementById("userNameId");
oUser.onfocus=f1;
oUser.onblur=f2;
function f1(){
	userNameId.innerHTML="请输入用户名";
}
function f2(){
	var reg=/^([a-zA-Z0-9]+[a-zA-Z0-9_\.\-]){4,18}$/;
	var reg=/^1[358]\d{9}$/;
	var str=oUser.value;
	if(str==""){
		userNameId.innerHTML="通行证用户名不能为空，请输入通行证用户名";
		return false;
	}
	if(reg.test(str)){
		userNameId.innerHTML="√";
		return true;
	}else{
		userNameId.innerHTML="1由字母，数字，下划线，点，减号组成  2.只能以数字，字母开头，且长度为4-18";
		return false;
	}
}
//密码
var pwd =document.getElementById("pwd");
var pwdId =document.getElementById("pwdId");
pwd.onfocus=f3;
pwd.onblur=f4;
function f3(){
	pwdId.innerHTML="请输入密码";
}
function f4(){
	var reg=/^([a-zA-Z0-9]|[%&@#!]){6,16}$/;
	var str=pwd.value;
	if(str==""){
		pwdId.innerHTML="密码不能为空，请输入密码";
		return false;
	}
	if(reg.test(str)){
		pwdId.innerHTML="√";
		return true;
	}else{
		pwdId.innerHTML="密码长度为6-16";
		return false;
	}
}

//重复验证密码
var repwd =document.getElementById("repwd");
var repwdId =document.getElementById("repwdId");
repwd.onfocus=f5;
repwd.onblur=f6;
function f5(){
	repwdId.innerHTML="请输入密码";
}
function f6(){
//	var reg=/
	var str=repwd.value;
	var str1=document.getElementById("pwd").value;
	if(str==""){
		repwdId.innerHTML="重复密码不能为空，请重复输入密码";
		return false;
	}
	if(str1!=str){
		repwdId.innerHTML="两次输入的密码不一致，请重新输入";
		return false;
	}else{
		repwdId.innerHTML="√";
		return true;
	}
}

//昵称
var nickName=document.getElementById("nickName");
var userNameId =document.getElementById("userNameId");
nickName.onfocus=f7;
nickName.onblur=f8;
function f7(){
	nickNameId.innerHTML="请输入昵称";
}
function f8(){
	var reg=/^([!#$%&*]|\w){4,20}$/;
	var str=nickName.value;
	if(str==""){
		nickNameId.innerHTML="昵称不能为空，请输入昵称";
		return false;
	}
	if(reg.test(str)){
		nickNameId.innerHTML="√";
		return true;
	}else{
		nickNameId.innerHTML="长度为4-20个字符";
		return false;
	}
}

//关联手机号码
var tel =document.getElementById("tel");
var telId =document.getElementById("telId");
tel.onfocus=f9;
tel.onblur=f10;
function f9(){
	telId.innerHTML="请输入关联手机号";
}
function f10(){
	var reg=/^1[358]\d{9}$/;
	var str=tel.value;
	if(str==""){
		telId.innerHTML="关联手机号不能为空，请输入关联手机号码";
		return false;
	}
	if(reg.test(str)){
		telId.innerHTML="√";
		return true;
	}else{
		telId.innerHTML="关联手机号码输入不正确，请重新输入";
		return false;
	}
}

//邮箱
var email =document.getElementById("email");
var emailId =document.getElementById("emailId");
email.onfocus=f11;
email.onblur=f12;
function f11(){
	emailId.innerHTML="请输入邮箱";
}
function f12(){
	var reg=/^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,4})$/;
	var str=email.value;
	if(str==""){
		emailId.innerHTML="邮箱不能为空，请输入邮箱";
		return false;
	}
	if(reg.test(str)){
		emailId.innerHTML="√";
		return true;
	}else{
		emailId.innerHTML="邮箱格式输入不正确，请重新输入";
		return false;
	}
}

var btn = document.getElementsByTagName("input")[8];
  btn.onclick = function fun(){
	fun2();
	fun4();
	fun6();
	fun8();
	fun10();
	fun12();
	if(fun2()==true && fun4()==true && fun6()==true && fun8()==true && fun10()==true && fun12()==true ){
		location.href="index.html"
	}
}