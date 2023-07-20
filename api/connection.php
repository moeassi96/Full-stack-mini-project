<?php

$host = "localhost";
$db_user = "root";
$db_pass = null;
$db_name = "full stack mini project";

$mysqli = new mysqli($host, $db_user, $db_pass, $db_name);
if ($mysqli->connect_error) { 
    die('Connection was unsuccessful: ' . $mysqli->connect_error);
}