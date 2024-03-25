<?php

include('connection.php');

$name=$_POST['name'];
$email=$_POST['email'];
$password=$_POST['password'];

$query = $mysqli->prepare('INSERT INTO users (name, email, password) VALUES (?, ?, ?)');
$query->bind_param('sss',$name,$email,$password);

if($query->execute()){
    $response['status']="Signed up successfully";
}else{
    $response['status']="Can't sign up";
}

echo json_encode($response);