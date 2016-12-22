<?php
/**此页面需要被其它页面包含**/
    $db_url = '127.0.0.1';
    $db_user = 'root';
    $db_pwd = '';
    $db_name = 'cake';
    $db_port = 3306;
    $conn = mysqli_connect($db_url,$db_user,$db_pwd,$db_name,$db_port);
    $sql = "set names utf8";
    mysqli_query($conn,$sql);