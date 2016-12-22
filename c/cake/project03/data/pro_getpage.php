<?php
header("Content-Type:application/json");

@$start = $_REQUEST['start'];
if(empty($start)){
    $start = 0;
}
$count = 6;

require('init.php');

$sql = "SELECT * FROM product LIMIT $start,$count";
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