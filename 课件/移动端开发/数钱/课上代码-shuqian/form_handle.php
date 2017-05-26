<?php 
	
	$name = $_GET["name"];
	$tel = $_GET["tel"];

	//连接数据库并验证
	//连接数据库
	mysql_connect("localhost","root","");

	//选择哪个数据库
	mysql_select_db("shuqian");

	//设置数据库编码
	mysql_query("set names utf8");
	//编写sql查询语句
	//判断数据库中是否已经存在tel
	$sql = "SELECT tel FROM users";
	$result = mysql_query($sql);
	while($row = mysql_fetch_row($result)){
		if ($row[0] == $tel){
			$arr = array("err"=>"1","msg"=>"电话号码已经存在");
			echo json_encode($arr);
			//程序退出
			exit();
		}
	}
	//将name和tel写入到数据  
	$sql = "INSERT INTO users(id,name,tel) VALUES(NULL,'{$name}','{$tel}')";

	//执行sql
	mysql_query($sql);
	$returnArr = array("err"=>"0","id"=>mysql_insert_id(),"msg"=>"插入成功");
	echo json_encode($returnArr);

 ?>