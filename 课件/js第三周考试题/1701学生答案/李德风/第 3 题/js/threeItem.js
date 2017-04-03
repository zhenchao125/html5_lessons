window.onload = function () {
    var form = document.forms.myform;
    var userNameId = document.getElementById("userNameId");
    var pwdId = document.getElementById("pwdId");
    var repwdId = document.getElementById("repwdId");
    var nickNameId = document.getElementById("nickNameId");
    var telId = document.getElementById("telId");
    var emailId = document.getElementById("emailId");
    var sum_1 = 0,sum_2 = 0,sum_3 = 0,sum_4 = 0,sum_5 = 0,sum_6 = 0;
    
    form.userName.onfocus = function () {
    	num_1 = 0;
        addImportPrompt(num_1,userNameId,"import_prompt","1、由字母、数字、下划线、点、减号组成<br>2、只能以数字、字母开头或结尾，且长度为4-18");
    }
    form.userName.onblur = function () {
        inputCheck(this,/(^[a-z\d][\w\.-]{3,17})|([\w\.-]{3,17}[a-z\d]$)/gi,userNameId,"ok","ok_prompt","通行证用户名不能为空，请输入通行证用户名","error_prompt");
    }
    form.pwd.onfocus = function () {
    	num_2 = 0;
        addImportPrompt(num_2,pwdId,"import_prompt","密码长度为6-16");
    }
    form.pwd.onblur = function () {
        inputCheck(this,/^\d\d{4,14}\d$/gi,pwdId,"ok","ok_prompt","密码不能为空，请输入密码","error_prompt");
    }
    form.repwd.onfocus = function () {
    	num_3 = 0;
        addImportPrompt(num_3,repwdId,"import_prompt","请再次输入密码");
    }
    form.repwd.onblur = function () {
        checkPassword(this,form.pwd,repwdId,"ok","ok_prompt","两次输入密码不一致，请重新输入","error_prompt");
    }
    form.nickName.onfocus = function () {
    	num_4 = 0;
        addImportPrompt(num_4,nickNameId,"import_prompt","1、长度为4-20个字符");
    }
    form.nickName.onblur = function () {
        inputCheck(this,/[\w@#\$%&\*]{4,20}/gi,nickNameId,"ok","ok_prompt","昵称不能为空，请输入昵称","error_prompt");
    }
    form.tel.onfocus = function () {
    	num_5 = 0;
        addImportPrompt(num_5,telId,"import_prompt","1、手机号以13、15、18开头<br>2、手机号码由11位数字组成");
    }
    form.tel.onblur = function () {
        inputCheck(this,/^1[358]\d{8}\d$/gi,telId,"ok","ok_prompt","关联手机号码输入不正确，请重新输入","error_prompt");
    }
    form.email.onfocus = function () {
    	num_6 = 0;
        addImportPrompt(num_6,emailId,"import_prompt","请输入你的电子邮箱");
    }
    form.email.onblur = function () {
        inputCheck(this,/\w{3,}@\w{2,}\.((com)|(net)|(cn))$/gi,emailId,"ok","ok_prompt","保密邮箱格式不正确，请重新输入","error_prompt");
    }
    form.register.onclick = function () {
    	var sum = sum_1+sum_2+sum_3+sum_4+sum_5+sum_6;
        if (sum == 6) {
            alert("ok");
        }else{
        	alter("输入不正确");
        }
    }
    function inputCheck (sum,input,regExp,promptEle,successText,successClassName,failText,failClassName) {
	    var oValue = input.value;
	    var isOk = oValue.search(regExp);
	    	
	    if (isOk > -1) {
	    	sum++;
	        promptEle.innerHTML = successText;
    		promptEle.className = successClassName;
	    }else{
	        promptEle.innerHTML = failText;
    		promptEle.className = failClassName;
	    }
	}
    function checkPassword (sum,input,checkInput,promptEle,successText,successClassName,failText,failClassName) {
	    if (input.value == checkInput.value) {
	    	sum++;
	        promptEle.innerHTML = successText;
    		promptEle.className = successClassName;
	    }else{
	        promptEle.innerHTML = failText;
    		promptEle.className = failClassName;
	    }
	}
    function addImportPrompt (promptEle,promptClassName,promptText) {
    	promptEle.innerHTML = promptText;
    	promptEle.className =  promptClassName;
	}
}