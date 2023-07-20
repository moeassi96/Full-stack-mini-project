<?php
include('connection.php');


header("Content-Type: application/json");
$data = json_decode(file_get_contents('php://input'), true);


$username = $data['username'];
$password = $data['password'];
$email = $data['email'];
$phone = $data['phone'];

$check_username = $mysqli->prepare('select username from users where username=?');
$check_username->bind_param('s', $username);
$check_username->execute();
$check_username->store_result();

$username_exists = $check_username->num_rows();

if($username_exists == 0){
    $hashed_password = password_hash($password,PASSWORD_BCRYPT);
    $query = $mysqli->prepare('insert into users(username,password,email,phone) values(?,?,?,?)');
    $query->bind_param('ssss', $username, $hashed_password, $email, $phone);
    $query->execute();
    $response['status'] = "Sign up successful";
}else{
    $response['status'] = "Invalid username";
}

echo json_encode($response);