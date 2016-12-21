<?php
header('Content-Type:application/json;charset=utf-8');
@$type=$_REQUEST['type'] or die('type required');

require('init.php');

$sql="SELECT * FROM scene WHERE type='$type'";
$result=mysqli_query($conn,$sql);


if($result===false){
	echo 'err';
}else{
	$list=mysqli_fetch_all($result,1);
	$str=json_encode($list);
	echo $str;
}