<?php
header('Content-Type:text/plain;charset=utf-8');
@$uname=$_REQUEST['uname'] or die ('uname required');
@$upwd=$_REQUEST['upwd'] or die ('upwd required');
require('init.php');

$sql="SELECT uid FROM user WHERE uname='$uname' AND upwd='$upwd'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_row($result);
if($row===null){
	echo'err';
}else{
	echo'ok';
}