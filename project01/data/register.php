<?php
header('Content-Type:text/plain;charset=utf-8');
@$nuname=$_REQUEST['nuname'] or die ('nuname required');
@$nupwd=$_REQUEST['nupwd'] or die ('nupwd required');
require('init.php');

$sql="INSERT INTO user VALUES(NULL,'$nuname','$nupwd')";
$result=mysqli_query($conn,$sql);
if($result===false){
	echo'err';
}else{
	echo'ok';
}