<?php

include('connection.php');


$query = $mysqli->prepare(
    'SELECT p.id,p.description ,u.name,u.bio 
    FROM usersposts as p
    INNER JOIN users as u ON p.user_id = u.id
');

$query->execute();
$query->store_result();
$num_rows = $query->num_rows();

if($num_rows == 0) {
    $response["status"] = "No Posts";
}else{
    $posts = [];
    $query->bind_result($id,$description, $name, $bio);
    while($query->fetch()){
        $post = [
            'id' => $id,
            'description' => $description,
            'name' => $name,
            'bio' => $bio,
        ];

        $posts[] = $post;
    }

    $response["status"] = "Success";
    $response["posts"] = $posts;
}

echo json_encode($response);


