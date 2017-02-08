var $id = function(id) {
		return document.getElementById(id);
	}

/*
 *用户名验证
 */
var username = $id("userName");
var userNameId = $id("userNameId");
	username.onfocus = function(){
		userNameId.innerHTML = "1、由数字、字母、下划线、点、减号组成<br/>2、只能以数字、字母开头或结尾且长度4-18";
		userNameId.className = "import_prompt";
		
	}
	username.onblur = function(){
		var nameS= this.value;
	    var regs = /^[A-Za-z0-9][A-Za-z0-9_\.-]{2,16}[A-Za-z0-9]$/g;
		var flag = regs.test(nameS);
		if(flag){
			userNameId.className = "ok_prompt";
			userNameId.innerHTML = " 输入正确";
		}else{
			userNameId.className = "error_prompt";
			userNameId.innerHTML = "1、由数字、字母、下划线、点、减号组成<br/>2、只能以数字、字母开头或结尾且长度4-18";
		}
		if(this.value.length == 0){
			userNameId.className = "error_prompt";
			userNameId.innerHTML = "通行证用户名不能为空，请输入通行证用户名";
		}
		
	}

    /*
     * 密码验证
     */
    var pwd = $id("pwd");
    var pwdId = $id("pwdId");
    var pwdVa;
    
     pwd.onblur = function(){
    	pwdId.className = "密码长度为6-16";
    	pwdId.className = "import_prompt";
		} 
    pwd.onblur = function(){
    	pwdVa = this.value;
        pwdVaL = this.value.length;
        if(pwdVaL <6 || pwdVaL >16){
        	pwdId.innerHTML = "密码长度为6-16";
        	pwdId.className = "error_prompt";
        }else if(pwdVaL == 0){
			pwdId.innerHTML = "密码不能为空，请输入密码";
			pwdId.className = "error_prompt";
		}else{
			pwdId.innerHTML = "密码正query";
			pwdId.className = "ok_prompt";
		}
	}
    
     /*
     * 重复密码验证
     */
    var repwd = $id("repwd");
    var repwdId = $id("repwdId");
    
    repwd.onfocus = function(){
	}
     
    repwd.onblur = function(){
		var s = this.value;
		if(this.value.length == 0){
			repwdId.className = "error_prompt";
			repwdId.innerHTML = "重复密码不能为空，请输入重复密码";
		}else if(this.value != pwdVa){
			repwdId.className = "error_prompt";
			repwdId.innerHTML = "两次密码输入不一致，请重新输入";
		}
		
	}
    
	 /*
	  *昵称验证
	 */
	var nickName = $id("nickName");
    var nickNameId = $id("nickNameId");
    
    nickName.onfocus = function(){
    	nickNameId.className = "import_prompt";
		nickNameId.innerHTML = "1、包含字母、数字、下划线以及特殊字符@#!$%&*特殊字符</br>2、长度为4-20个字符";
	}
     
    nickName.onblur = function(){
		var nickNameS = this.value.length;
		if(!(nickNameS>=4 && nickNameS<=20)){
			nickNameId.className = "error_prompt";
			nickNameId.innerHTML = "1、长度为4-20个字符";
		}else if(this.value.length == 0){
			nickNameId.className = "error_prompt";
			nickNameId.innerHTML = "昵称不能为空，请输入昵称";
		}else{
			nickNameId.className = "ok_prompt";
			nickNameId.innerHTML = "昵称输入正确";
		}
	}
    

   /*
	 *手机号验证
	 */
	var tel = $id("tel");
    var telId = $id("telId");
    
    tel.onfocus = function(){
    	telId.className = "import_prompt";
		telId.innerHTML = "1、手机号以13、15、18开头</br>2、手机号由11位组成";
	}
    
    tel.onblur = function(){
		var nickNameS = this.value;
		var regs = /^1[358]\d{9}/g;
		var flag = regs.test(nickNameS);
		if(!flag){
			telId.className = "error_prompt";
			telId.innerHTML = "关联手机号输入不正确，请重新输入";
		}else if(this.value.length == 0){
			telId.className = "error_prompt";
			telId.innerHTML = "关联手机号不能为空，请输入关联手机号";
		}else{
			telId.className = "ok_prompt";
			telId.innerHTML = "格式正确";
		}
	}
    
    /*
	 *邮箱验证
	 */
	var email = $id("email");
    var emailId = $id("emailId");
     email.onfocus = function(){
     	emailId.className = "import_prompt";
     	emailId.innerHTML = "请输入你常用的邮箱";
	}
     
    email.onblur = function(){
		var emailS = this.value;
		
		var regs = /^\w{5,10}@\w+\.((com)|(cn)|(com\.cn))$/gi;
		var flag = regs.test(emailS);
		if(!flag){
			emailId.className = "error_prompt";
			emailId.innerHTML = "保密邮箱输入不正确，请重新输入";
		}else{
			emailId.className = "ok_prompt";
			emailId.innerHTML = "输入正确";
		}
		if(this.value.length == 0){
			emailId.className = "error_prompt";		
			emailId.innerHTML = "保密邮箱不能为空，请输入保密邮箱";
		}
	}