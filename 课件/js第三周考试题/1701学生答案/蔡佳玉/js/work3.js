var userName=document.getElementById('userName');
var userNameId=document.getElementById('userNameId');
var pwd=document.getElementById('pwd');
var pwdId=document.getElementById('pwdId');
var repwd=document.getElementById('repwd');
var repwdId=document.getElementById('repwdId');
var nickName=document.getElementById('nickName');
var nickNameId=document.getElementById('nickNameId');

	userName.onfocus=function(){
		var text='1、由字母、数字、下滑线、点、减号组成<br>2、只能以数字、字母开头或者结尾、长度为4-8';
		importShow(userNameId,text);		
	}    	
	userName.onblur=function (){
		var name=this.value;
		var tag=/^[a-zA-Z0-9]\w{2,16}[a-zA-Z0-9]$/;
		
		if(tag.test(name)){
			okShow(userNameId,'OK')
		}
		else if(!name){errorShow(userNameId,'输入的信息不能为空')}
		else{errorShow(userNameId,'输入的信息有误')}
	}	

	pwd.onfocus=function(){
		var text='密码长度6-16';
		importShow(pwdId,text);		
	}    	
	pwd.onblur=function (){
		var name=this.value;
		var tag=/.{6,16}/;
		
		if(tag.test(name)){
			okShow(pwdId,'OK')
		}
		else if(!name){errorShow(pwdId,'输入的信息不能为空')}
		else{errorShow(pwdId,'输入的信息有误')}
	}	
	repwd.onfocus=function(){
		var text='请重复输入密码';
		importShow(repwdId,text);		
	}    	
	repwd.onblur=function (){
		var name=this.value;
		var tag=/.{6,16}/;
		
		if(this.valu==pwd.value){
			okShow(repwdId,'OK')
		}
		else if(!name){errorShow(repwdId,'输入的信息不能为空')}
		else{errorShow(repwdId,'输入的信息有误')}
	}
	
	nickName.onfocus=function(){
		var text='输入昵称4-20位的字符';
		importShow(repwdId,text);		
	}    	
	nickName.onblur=function (){
		var name=this.value;
		var tag=/.{4,20}/;
		
		if(tag.test(name)){
			okShow(nickNameId,'OK')
		}
		else if(!name){errorShow(nickNameId,'输入的信息不能为空')}
		else{errorShow(nickNameId,'输入的信息有误')}
	}	







function importShow(ele,text){
	ele.setAttribute('class','import_prompt');
	ele.innerHTML=text;
}
function errorShow(ele,text){
	ele.setAttribute('class','error_prompt');
	ele.innerHTML=text;
}
function okShow(ele,text){
	ele.innerHTML='';
	ele.setAttribute('class','ok_prompt');
	ele.innerHTML=text;
}