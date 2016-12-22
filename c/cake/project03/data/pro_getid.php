<?php
header("Content-Type:application/json");
@$id = $_REQUEST['id'];
if(empty($id)){
    echo '[]';
    return ;
}

require('init.php');

$sql = "SELECT * FROM product WHERE pid=$id";
$result = mysqli_query($conn,$sql);

$output = [];
while(true){
    $row = mysqli_fetch_assoc($result);
    if(!$row){
        break;
    }
    $output[] = $row;
}

echo json_encode($output);
?>