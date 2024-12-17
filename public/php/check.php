<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$ip = $_SERVER["REMOTE_ADDR"];

echo json_encode(value: ["ip" => $ip]);