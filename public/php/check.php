<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$namespace = "ed196023-96e7-48a3-a63f-88602aa6f23e";

include 'UUID.php';

$UserAgent = $_POST["UserAgent"];
$CPU = $_POST["CPU"];
$Lang = $_POST["Lang"];
$ip = $_SERVER["REMOTE_ADDR"];

$name = $UserAgent . "-" . $CPU . "-" . $Lang . "-" . $ip;

$v5uuid = UUID::v5($namespace, $name);

echo json_encode(value: ["ip" => $v5uuid]);