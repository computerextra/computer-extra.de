<?php

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json; charset=utf-8');

require_once("config.php");

$res = mysqli_query($con, "SELECT * FROM Partner ORDER BY name ASC");
$data = mysqli_fetch_all($res, MYSQLI_ASSOC);
echo (json_encode($data));
