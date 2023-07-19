<?php

$host = "localhost";
$db_user = "root";
$db_pass = null;
$db_name = "full stack mini project"; // Fixed the missing semicolon and spaces in the database name

$mysqli = new mysqli($host, $db_user, $db_pass, $db_name);
if ($mysqli->connect_error) { // Fixed the variable name in the condition
    die('Connection was unsuccessful: ' . $mysqli->connect_error);
}