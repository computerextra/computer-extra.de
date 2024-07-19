<?php
require_once("../config.php");

$servername = MYSQL_SERVER;
$username = MYSQL_USER_CMS;
$password = MYSQL_PASS_CMS;
$database = MYSQL_DB_CMS;

$con = mysqli_connect($servername, $username, $password, $database);
$con->set_charset("utf8mb4");
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}
