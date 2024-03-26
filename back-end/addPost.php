<?php

include('connection.php');


$id=$_POST['id'];
$description=$_POST['description'];


$query = $mysqli->prepare('INSERT INTO usersposts (description, user_id) VALUES ( ?, ?)');
$query->bind_param('si',$description,$id);

if($query->execute()){
    $response['status']="success";
}else{
    $response['status']="Can't add post";
}

echo json_encode($response);