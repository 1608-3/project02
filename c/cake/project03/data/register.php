<?php

header("Content-Type:application/json");
$output=[];
@$uname = $_REQUEST['uname'] or die('uname required');

require('init.php');

$sql="SELECT uid FROM user WHERE uname='$uname'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_row($result);
//用户名是否存在
if($row!==null){
    $output['msg'] = 'exist';
}else{
    @$upwd = $_REQUEST['upwd'];
   // 密码六位以上
    if(!preg_match('/^\w{6,}$/i',$upwd)){
        die('[]');
    }else{
         @$upwd1 = $_REQUEST['upwd1'];
        // 两次密码是否一致
            if($upwd!==$upwd1){
                die('[]');
            }else{
            //是否全部输入
                    @$email = $_REQUEST['email'];
                    if(empty($uname) || empty($upwd) ||empty($upwd1)
                     || empty($email)){
                        die('[]');
                     }else{
                        $sql = "INSERT INTO user VALUES(NULL,'$uname','$upwd','$email')";
                        $result = mysqli_query($conn,$sql);
                        if($result){
                           $output['msg'] = 'succ';
                        }
                        else{
                           $output['msg'] = 'err';
                        }
                     }
            }
    }
}
 echo json_encode($output);
?>