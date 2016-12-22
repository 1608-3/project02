<?php

header("Content-Type:application/json");

@$rcvName = $_REQUEST['rcvName'];
@$phone = $_REQUEST['phone'];
@$addr = $_REQUEST['addr'];
@$sendment = $_REQUEST['sendment'];
$order_time = time()*1000;
@$uname=$_REQUEST['uname'];

if(empty($rcvName) || empty($phone) ||empty($addr) || empty($sendment) || empty($uname)){
    die('[]');
 }

require('init.php');

//SQL1：根据用户名查询用户编号
 $sql = "SELECT uid FROM user WHERE uname='$uname'";
 $result = mysqli_query($conn,$sql);
 $userId = mysqli_fetch_assoc($result)['uid'];

//SQL2：向订单表中添加一条新记录，获取该订单的自增编号
 $sql = "INSERT INTO c_order VALUES(NULL, '$rcvName', '$phone', '$addr', '$sendment', '$order_time', '$userId')";
 mysqli_query($conn,$sql);
 $orderId = mysqli_insert_id($conn);

 //SQL3：查询出当前用户购物车中的所有商品及购买数量
 $sql = "SELECT productId,count FROM cart_detail WHERE cartId=(SELECT cid FROM cart WHERE userId='$userId')";
 $result = mysqli_query($conn,$sql);
 $productList = mysqli_fetch_all($result,MYSQLI_ASSOC);

 //SQL4：循环执行：向订单详情表中插入记录
 foreach($productList as $p){
     $sql = "INSERT INTO order_detail VALUES(NULL, '$orderId','$p[productId]','$p[count]')";
     mysqli_query($conn,$sql);
 }

 //SQL5：删除当前用户购物车中的内容
 $sql = "DELETE FROM cart_detail WHERE cartId=(SELECT cid FROM cart WHERE userId='$userId')";
 mysqli_query($conn,$sql);

 echo '{"code":1,"msg":"succ","orderId":'.$orderId.'}';
