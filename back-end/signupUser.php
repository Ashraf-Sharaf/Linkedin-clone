<?php

include('connection.php');


$name=$_POST['name'];
$email=$_POST['email'];
$password=$_POST['password'];
$bio=$_POST['bio'];
$hashed_password = password_hash($password, PASSWORD_DEFAULT);


$query = $mysqli->prepare('INSERT INTO users (name, email, password,bio) VALUES (?, ?, ?, ?)');
$query->bind_param('ssss',$name,$email,$hashed_password,$bio);

if($query->execute()){
    $response['status']="success";
}else{
    $response['status']="Can't sign up";
}

echo json_encode($response);