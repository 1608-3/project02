<?php
header('Content-Type: application/json;charset=UTF-8');
@$uname=$_REQUEST['uname'];
@$pid=$_REQUEST['pid'];
if(empty($uname) || empty($pid)){
    echo '[]';
    return;
}
require('init.php');

//�����û��������û����
$sql = "SELECT uid FROM user WHERE uname='$uname'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);
if($row){		//�ܹ������û�����ѯ�����
	$uid = $row[0];
}else {			//�޷���ѯ���û����
	die('no uname');
}

//�����û���Ų�ѯ���ﳵ���
$sql = "SELECT cid FROM cart WHERE userId='$uid'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_row($result);
if($row){			//��ѯ����ǰ�û��Ĺ��ﳵ���
	$cid = $row[0];
}else {		//��ǰ�û�û�й��ﳵ
	$sql = "INSERT INTO cart VALUES(NULL,'$uid')";
	mysqli_query($conn, $sql);
	$cid = mysqli_insert_id($conn);
}

//���ݲ�Ʒ��ź͹��ﳵ��ţ���ѯ������Ƿ��м�¼
$sql = "SELECT did,count FROM cart_detail WHERE cartId='$cid' AND productId='$pid'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);
if(!$row){  //��ǰ���ﳵ����δ�������Ʒ
	$count = 1;
	$sql = "INSERT INTO cart_detail VALUES(NULL, '$cid','$pid','$count')";
	mysqli_query($conn, $sql);
}else {  //��ǰ���ﳵ���ѹ�����ù������Ʒ
	$did = $row[0];			//������
	$count = $row[1];		//�ѹ��������
	$count++;
	$sql = "UPDATE cart_detail SET count='$count' WHERE did='$did'";
	mysqli_query($conn, $sql);
}

echo '{"msg":"succ","count":'.$count.'}';

