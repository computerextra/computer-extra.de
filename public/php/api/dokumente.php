<?php

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json; charset=utf-8');

require_once("config.php");

$res = mysqli_query($con, "SELECT id, filename, date_modified FROM Dokumente ORDER BY filename ASC");
$data = mysqli_fetch_all($res, MYSQLI_ASSOC);
echo (json_encode($data));
