<?php
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once "./config.php";

// read incoming data
$input = file_get_contents('php://input');

$namespace = "ed196023-96e7-48a3-a63f-88602aa6f23e";


include 'UUID.php';

$UserAgent = $_POST["UserAgent"];
$CPU = $_POST["CPU"];
$Lang = $_POST["Lang"];
$ip = $_SERVER["REMOTE_ADDR"];

$name = $UserAgent . "-" . $CPU . "-" . $Lang . "-" . $ip;

$v5uuid = UUID::v5($namespace, $name);

$mysqli = new mysqli(MYSQL_SERVER, MYSQL_Datenschutz_USER, MYSQL_Datenschutz_PASS, MYSQL_Datenschutz_DB);
if ($mysqli->connect_errno) {
    echo json_encode(["ok" => false, "error" => $mysqli->connect_error]);
    die();
}
// Check if UUID is present
$sql = "SELECT * FROM accept WHERE id = ?";
$statement = $mysqli->prepare($sql);
$statement->bind_param('s', $v5uuid);
$statement->execute();
$result = $statement->get_result();
if ($result->num_rows === 0) {
    $create = "INSERT INTO accept (id) VALUES (?)";
    $stmt = $mysqli->prepare($create);
    $stmt->bind_param("s", $v5uuid);
    $stmt->execute();
    echo json_encode(["ok" => true, "error" => null]);
} else {
    echo json_encode(["ok" => true, "error" => null]);
}

