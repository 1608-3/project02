<?php
header('Content-Type:text/plain;charset=utf-8');
@$uname=$_REQUEST['uname'];
@$upwd=$_REQUEST['upwd'];
if(empty($uname)||empty($upwd)){
    echo'[]';
    return;
}
require('init.php');
$output=[];

$sql="SELECT uid FROM user WHERE uname='$uname' AND upwd='$upwd'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_row($result);
$arr = [];
if($row===null){
    $arr['msg'] = 'err';
}
else{
    $arr['msg'] = 'ok';
}

$output[] = $arr;
echo json_encode($output);