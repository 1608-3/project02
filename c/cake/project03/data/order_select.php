<?php
header('Content-Type: application/json;charset=UTF-8');

//���տͻ����ύ���û���
@$uname= $_REQUEST['uname'] or die('{"msg":"uname required"}');

require('init.php');

//SQL1�������û�����ѯ�û����
$sql = "SELECT uid FROM user WHERE uname='$uname'";
$result = mysqli_query($conn,$sql);
$userId = mysqli_fetch_assoc($result)['uid'];

//SQL2�������û���Ų�ѯ���еĶ�����ȱ�ٲ�Ʒ�б�
$sql = "SELECT oid,rcvName,phone,sendment,order_time FROM c_order WHERE userId='$userId'";
$result = mysqli_query($conn,$sql);
$orderList = mysqli_fetch_all($result,MYSQLI_ASSOC);

//SQL3:���ݶ�����Ų�ѯ���ö��������еĲ�Ʒ��Ϣ
foreach($orderList as $i=>$order){
  $oid = $order['oid']; //�������
  //$sql = "SELECT * FROM jd_product WHERE pid IN (1,3,5)";
  $sql = "SELECT img_md1,name,pid FROM product WHERE pid IN (SELECT productId FROM order_detail WHERE orderId='$oid')";
  $result = mysqli_query($conn,$sql);
  $productList = mysqli_fetch_all($result,MYSQLI_ASSOC);

  //$order['productList'] = $productList; //�޸�$order�е������޷�Ӱ�쵽ԭʼ��$orderList�е�����
  $orderList[$i]['productList'] = $productList;
}
echo json_encode($orderList);

