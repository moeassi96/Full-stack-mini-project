<?php
include('connection.php');

header("Content-Type: application/json");
$data = json_decode(file_get_contents('php://input'), true);

$username = $data['username'];
$password = $data['password'];

$query = $mysqli->prepare('select username,password,email,phone from users where username=?');
$query->bind_param('s', $username);
$query->execute();
$query->store_result();
$query->bind_result($username, $hashed_password, $email, $phone);
$query->fetch();

$num_rows = $query->num_rows();
if ($num_rows == 0) {
    $response['status'] = "user not found";
} else {
    if (password_verify($password, $hashed_password)) {
        $response['status'] = 'logged in';
        $response['username'] = $username;
        $response['email'] = $email;
    } else {
        $response['status'] = "wrong password";
    }
}
echo json_encode($response);