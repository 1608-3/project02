<?php
header('Content-Type: application/json;charset=UTF-8');
@$uname=$_REQUEST['uname'];
@$pid=$_REQUEST['pid'];
if(empty($uname) || empty($pid)){
    echo '[]';
    return;
}
require('init.php');

//根据用户名查找用户编号
$sql = "SELECT uid FROM user WHERE uname='$uname'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);
if($row){		//能够根据用户名查询到编号
	$uid = $row[0];
}else {			//无法查询到用户编号
	die('no uname');
}

//根据用户编号查询购物车编号
$sql = "SELECT cid FROM cart WHERE userId='$uid'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_row($result);
if($row){			//查询到当前用户的购物车编号
	$cid = $row[0];
}else {		//当前用户没有购物车
	$sql = "INSERT INTO cart VALUES(NULL,'$uid')";
	mysqli_query($conn, $sql);
	$cid = mysqli_insert_id($conn);
}

//根据产品编号和购物车编号，查询详情表是否有记录
$sql = "SELECT did,count FROM cart_detail WHERE cartId='$cid' AND productId='$pid'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);
if(!$row){  //当前购物车中尚未购买该商品
	$count = 1;
	$sql = "INSERT INTO cart_detail VALUES(NULL, '$cid','$pid','$count')";
	mysqli_query($conn, $sql);
}else {  //当前购物车中已购买过该购买该商品
	$did = $row[0];			//详情编号
	$count = $row[1];		//已购买的数量
	$count++;
	$sql = "UPDATE cart_detail SET count='$count' WHERE did='$did'";
	mysqli_query($conn, $sql);
}

echo '{"msg":"succ","count":'.$count.'}';

