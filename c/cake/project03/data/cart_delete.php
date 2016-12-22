<?php
header('Content-Type: application/json;charset=UTF-8');

@$pid = $_REQUEST['pid'];
if(empty($pid)){
    die('[]');
}
require('init.php');

$sql = "DELETE FROM cart_detail WHERE productId=$pid";
$result = mysqli_query($conn,$sql);
if($result){
	echo '{"msg":"succ"}';
}else{
   echo '{"msg":"err"}';
}

