<?php 
include('connection.php');



if (isset($_POST['email'], $_POST['password'])) {
    
    $email = $_POST['email'];
    $password = $_POST['password'];

    $query = $mysqli->prepare(
        'SELECT id,password 
        FROM users 
        WHERE email=?');
    $query->bind_param('s', $email);
    $query->execute();
    $query->store_result();
    $query->bind_result($id,$pass);
    $query->fetch();

    if ($query->num_rows() == 1) {
        if (password_verify($password, $pass)) {
            $response['status'] = "success";
            $response['id'] = $id;

        } else {
            $response['status'] = "failed"; 
        }
    } else {
        $response['status'] = "failed"; 
    }
} else {
    $response['status'] = "failed"; 
}

echo json_encode($response);
?>
