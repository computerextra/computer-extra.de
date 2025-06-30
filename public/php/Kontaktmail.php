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

//Prüfsummen
$ok2Send = false;

$name = "";
$email = "";
$Nachricht = "";


if (isset($_POST["Name"])) {
  $name = $_POST["Name"];
}

if (isset($_POST["Email"])) {
  $email = $_POST["Email"];
  $ok2Send = true;
}
if (isset($_POST["Nachricht"])) {
  $Nachricht = $_POST["Nachricht"];
  $ok2Send = true;
}

if ($ok2Send) {
  $mail = new PHPMailer(true); // Passing `true` enables exceptions
  try {
    $mail->setLanguage('de', '/PHPMailer/language/');

    //Server settings
    $mail->isSMTP(); // Set mailer to use SMTP
    $mail->Host = SMTP_SERVER; // Specify main and backup SMTP servers
    $mail->SMTPAuth = true; // Enable SMTP authentication
    $mail->Username = SMTP_USER; // SMTP username
    $mail->Password = SMTP_PASS; // SMTP password
    $mail->SMTPSecure = 'ssl'; // Enable TLS encryption, `ssl` also accepted
    $mail->Port = SMTP_PORT; // TCP port to connect to

    $mail->setFrom(SMTP_FROM, 'Kontaktformular');
    $mail->addAddress(SMTP_TO_CONTACT);
    $mail->addBCC(SMTP_BCC);
    $mail->isHTML(true); // Set email format to HTML


    //Content
    $mail->Subject = 'Ihre Anfrage';
    $mail->CharSet = 'UTF-8';
    $mail->Body = "<hr>SIE HABEN EINE KONTAKTANFRAGE ERHALTEN<hr><br><br>Nachfolgende die Details der Anfrage:<br><br><b>Name:</b> $name<br><b>Email:</b> $email<br><br><b>Nachricht:</b><br>$Nachricht";
    $mail->send();
    //DEBUG!!!!  echo "Mail send.";
    echo (json_encode(["success" => true]));
  } catch (Exception $e) {
    echo (json_encode(["success" => false]));
  }
} else {
  echo (json_encode(["success" => false]));
}
