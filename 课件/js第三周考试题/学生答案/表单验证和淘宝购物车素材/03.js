$id = function(id){
	return document.getElementById(id);
}
$id("userName").onfocus = function(){
	$id("userNameId").innerHTML = "1.由字母，数字，下划线，点，减号组成" + "<br/>" + "2.只能以数字，字母开头或结尾，且长度为4-18";
	
}
$id("userName").onblur = function(){
	if(userName.value == /^[0-9a-z][0-9a-z_]{2,16}[0-9a-z]$/gi){
		$id("userNameId").innerHTML = "可以使用";
	}else{
		$id("userNameId").innerHTML ="输入不正确";
	}
}


$id("pwd").onfocus = function(){
	$id("pwdId").innerHTML = "1.密码长度为6-16位";
	
}
var pw ;
$id("pwd").onblur = function(){
	pw = pwd.value;
	if(pwd.value != /.{6,16}/g){
		$id("pwdId").innerHTML = "输入不正确";
	}else{
		$id("pwdId").innerHTML ="可以使用";
	}
	
	
}

$id("repwd").onfocus = function(){
	$id("repwdId").innerHTML = "再次输入密码";
	
}
$id("repwd").onblur = function(){
	if(repwd.value == pw){
		$id("repwdId").innerHTML = "输入正确";
	}else{
		$id("repwdId").innerHTML ="输入不正确";
	}
	
	
}

$id("nickName").onfocus = function(){
	$id("nickNameId").innerHTML = "长度为4-20个字符" ;
	
}

$id("tel").onfocus = function(){
	$id("telId").innerHTML = "请输入长度11为字符手机号";
	
}

$id("email").onfocus = function(){
	$id("emailId").innerHTML = "请输入邮箱";
	
}