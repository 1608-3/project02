<?php
header('Content-Type: application/json;charset=UTF-8');

@$uname = $_REQUEST['uname'];
if(empty($uname)){
    echo '[]';
    return;
}
require('init.php');

//�����û�����ѯ�����ﳵ���
$sql = "SELECT cid FROM cart WHERE userId=(SELECT uid FROM user WHERE uname='$uname')";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);
if($row){   //�й��ﳵ
	$cid = $row[0];
}else{
   die('[]');
}

//���ݹ��ﳵ��ţ���ѯ����Ʒ��������
$sql = "SELECT did,pid,ename,name,price,count,img_sm1 FROM product, cart_detail WHERE pid=productId AND cartId='$cid'";
$result = mysqli_query($conn,$sql);
$list = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($list);