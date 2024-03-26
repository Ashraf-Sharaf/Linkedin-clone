<?php

include('connection.php');


$name=$_POST['name'];
$email=$_POST['email'];
$password=$_POST['password'];
$description=$_POST['description'];
$hashed_password = password_hash($password, PASSWORD_DEFAULT);


$query = $mysqli->prepare('INSERT INTO companies(name, email, password,description) VALUES (?, ?, ?, ?)');
$query->bind_param('ssss',$name,$email,$hashed_password,$description);

if($query->execute()){
    $response['status']="success";
}else{
    $response['status']="Can't sign up";
}

echo json_encode($response);