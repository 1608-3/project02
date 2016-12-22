<?php
header("Content-Type:application/json");

@$kw = $_REQUEST['kw'];

require('init.php');

$output = [];
if(empty($kw)){
    $count = 6;
    $sql = "SELECT * FROM product LIMIT $count";
    $result = mysqli_query($conn,$sql);

    while(($row=mysqli_fetch_assoc($result))!==NULL){
            $output[]=$row;
        }
}else{
    $sql = "SELECT * FROM product WHERE name LIKE '%$kw%'";
    $result = mysqli_query($conn,$sql);

    while(($row=mysqli_fetch_assoc($result))!==NULL){
            $output[]=$row;
        }
}

echo json_encode($output);
?>