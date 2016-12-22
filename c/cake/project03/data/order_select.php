<?php
header('Content-Type: application/json;charset=UTF-8');

//接收客户端提交的用户名
@$uname= $_REQUEST['uname'] or die('{"msg":"uname required"}');

require('init.php');

//SQL1：根据用户名查询用户编号
$sql = "SELECT uid FROM user WHERE uname='$uname'";
$result = mysqli_query($conn,$sql);
$userId = mysqli_fetch_assoc($result)['uid'];

//SQL2：根据用户编号查询所有的订单，缺少产品列表
$sql = "SELECT oid,rcvName,phone,sendment,order_time FROM c_order WHERE userId='$userId'";
$result = mysqli_query($conn,$sql);
$orderList = mysqli_fetch_all($result,MYSQLI_ASSOC);

//SQL3:根据订单编号查询出该订单中所有的产品信息
foreach($orderList as $i=>$order){
  $oid = $order['oid']; //订单编号
  //$sql = "SELECT * FROM jd_product WHERE pid IN (1,3,5)";
  $sql = "SELECT img_md1,name,pid FROM product WHERE pid IN (SELECT productId FROM order_detail WHERE orderId='$oid')";
  $result = mysqli_query($conn,$sql);
  $productList = mysqli_fetch_all($result,MYSQLI_ASSOC);

  //$order['productList'] = $productList; //修改$order中的数据无法影响到原始的$orderList中的数据
  $orderList[$i]['productList'] = $productList;
}
echo json_encode($orderList);

