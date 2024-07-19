<?php

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json; charset=utf-8');

require_once("config.php");

$res = mysqli_query($con, "SELECT Mitarbeiter.name, Mitarbeiter.short, Mitarbeiter.image, Mitarbeiter.sex, Mitarbeiter.tags, Mitarbeiter.focus, Abteilung.name as Abteilung FROM Mitarbeiter LEFT JOIN Abteilung ON Mitarbeiter.abteilungId = Abteilung.id ORDER BY Mitarbeiter.name ASC");
$data = mysqli_fetch_all($res, MYSQLI_ASSOC);
echo (json_encode($data));
