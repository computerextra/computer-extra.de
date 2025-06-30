<?php

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json; charset=utf-8');

require_once("config.php");

$res = mysqli_query($con, "SELECT mitarbeiter.name, mitarbeiter.short, mitarbeiter.image, mitarbeiter.sex, mitarbeiter.focus, abteilung.name as Abteilung FROM mitarbeiter LEFT JOIN abteilung ON mitarbeiter.abteilung_id = abteilung.id ORDER BY mitarbeiter.name ASC");
$data = mysqli_fetch_all($res, MYSQLI_ASSOC);
echo (json_encode($data));
