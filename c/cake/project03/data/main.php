<?php
header('Content-Type:application/json;charset=utf-8');
require('init.php');

$sql="SELECT * FROM banner";
$result=mysqli_query($conn,$sql);

if($result===false){
	echo 'err';
}else{
	$list=mysqli_fetch_all($result,1);
	echo json_encode($list);
}