<?php
require "./vendor/autoload.php";

require_once("./config.php");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "./vendor/phpmailer/phpmailer/src/Exception.php";
require "./vendor/phpmailer/phpmailer/src/PHPMailer.php";
require "./vendor/phpmailer/phpmailer/src/SMTP.php";

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$data = $_POST;
$files = $_FILES;

$anschreiben = $files["Anschreiben"];
$lebenslauf = $files["Lebenslauf"];

if (!isset($data)) {
    echo (json_encode(["success" => false]));
    die("Keine Daten gesendet");
}
if (!isset($data["Name"])) {
    echo (json_encode(["success" => false]));
    die("Kein Name angegeben");
}
if (!isset($data["Mail"])) {
    echo (json_encode(["success" => false]));
    die("Keine Mail angegeben");
}
if (!isset($data["Phone"])) {
    echo (json_encode(["success" => false]));
    die("Kein Phone angegeben");
}
if (!isset($data["Job"])) {
    echo (json_encode(["success" => false]));
    die("Kein Job angegeben");
}


if (isset($anschreiben)) {
    $filename = 'Anschreiben';
    $extension = pathinfo($anschreiben['name'], PATHINFO_EXTENSION);
    $basename = $filename . '.' . $extension; // Anschreiben.pdf

    //Save Location
    $source = $anschreiben['tmp_name'];
    $destination = "uploads/{$basename}";
    move_uploaded_file($source, $destination);
}
if (isset($lebenslauf)) {
    $filename = 'Lebenslauf';
    $extension = pathinfo($lebenslauf['name'], PATHINFO_EXTENSION);
    $basename = $filename . '.' . $extension; // Anschreiben.pdf

    //Save Location
    $source = $lebenslauf['tmp_name'];
    $destination = "uploads/{$basename}";
    move_uploaded_file($source, $destination);
}

// Check if IP is in Database
$ip = $_SERVER['REMOTE_ADDR'];
// Connect to Database
$mysqli = new mysqli(MYSQL_SERVER, MYSQL_USER_FILTER, MYSQL_PASS_FILTER, MYSQL_DB_FILTER);
if ($mysqli->connect_errno) {
    echo (json_encode(["success" => false]));
    die("Verbindung fehlgeschlagen: " . $mysqli->connect_error);
}
$sql = "SELECT * FROM IP WHERE ip=?";
$statement = $mysqli->prepare($sql);
$statement->bind_param('s', $ip);
$statement->execute();
$result = $statement->get_result();
if ($result->num_rows > 0) {
    echo (json_encode(["success" => false]));
    die();
}

$anschreiben = false;
$lebenslauf  = false;
if (isset($files["Anschreiben"])) {
    $anschreiben = true;
}
if (isset($files["Lebenslauf"])) {
    $lebenslauf = true;
}

$mail = new PHPMailer(true); // Passing `true` enables exceptions
try {
    $mail->setLanguage('de', '/PHPMailer/language/');

    //Server settings
    // DEBUG $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP(); // Set mailer to use SMTP
    $mail->Host = SMTP_SERVER; // Specify main and backup SMTP servers
    $mail->SMTPAuth = true; // Enable SMTP authentication
    $mail->Username = SMTP_USER; // SMTP username
    $mail->Password = SMTP_PASS; // SMTP password
    $mail->SMTPSecure = 'ssl'; // Enable TLS encryption, `ssl` also accepted
    $mail->Port = SMTP_PORT; // TCP port to connect to

    $mail->setFrom(SMTP_FROM, 'Bewerbung');
    $mail->addAddress(SMTP_TO_APPLICATION);
    $mail->addBCC(SMTP_BCC);
    $mail->isHTML(true); // Set email format to HTML

    //Anhang
    if ($anschreiben) {
        $mail->addAttachment('uploads/Anschreiben.pdf');
    }
    if ($lebenslauf) {
        $mail->addAttachment('uploads/Lebenslauf.pdf');
    }

    $body = 'Email von: ' . $data["Name"] . '<br>Mail: ' . $data["Mail"] . '<br>Telefon: ' . $data["Phone"] . '<br>Bewerbung als: ' . $data["Job"];
    if ($data["Job"] === "Ausbildung") {
        $body .= '<br>Ausbildung: ' . $data["Ausbildung"];
    }

    //Content
    $mail->Subject = 'Neue Bewerbung';
    $mail->CharSet = 'UTF-8';
    $mail->Body = $body;

    $mail->send();
    echo (json_encode(["success" => true]));
} catch (Exception $e) {
    echo (json_encode(["success" => false]));
    die();
}
