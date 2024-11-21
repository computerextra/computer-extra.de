<?php
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");

require "./vendor/autoload.php";

require "./vendor/tecnickcom/tcpdf/tcpdf_autoconfig.php";

// All versions
$Version = $_POST["Version"];
$Vorname = $_POST["Vorname"];
$Nachname = $_POST["Nachname"];
$Email = $_POST["Email"];

// Private Exclusive
$EmailPasswort = $_POST["EmailPasswort"];
$Geburtstag = $_POST["Geburtstag"];
$Geschlecht = $_POST["Geschlecht"];
$Mobil = $_POST["Mobil"];

// Business Exclusive
$Firmenname = $_POST["Firmenname"];
$Anschrift = $_POST["Anschrift"];
$Plz = $_POST["Plz"];
$Ort = $_POST["Ort"];
$Telefon = $_POST["Telefon"];


$ms_footer = "<p>
           Hiermit beauftrage ich die Firma Computer Extra GmbH, in meinem Namen,
           mit den oben genannten Angaben ein Microsoft Konto zu erstellen.
        </p>
        <p>
          Mit meiner Unterschrift bestätige ich, dass die oben genannten Daten
          vollständig und richtig sind. Ich bin mir darüber im Klaren, dass alle
          benötigten Daten und alle nötigen Bestätigungen an Microsoft Corp.
          übermittelt werden und dass Microsoft diese Daten auf ihren Servern
          eigenverantwortlich speichert. Die von uns erhobenen Daten werden
          zusätzlich durch uns DS-GVO konform auf unseren Servern gespeichert.
        </p>";
$ms_busines_footer = "<p>
          Hiermit beauftrage ich die Firma Computer Extra GmbH, in meinem Namen
          mit den oben genannten Angaben, ein Microsoft 365 Business Konto zu
          erstellen.
        </p>
        <p>
          Mit meiner Unterschrift bestätige ich, dass die oben genannten Daten
          vollständig und richtig sind. Ich bin mir darüber im Klaren, dass alle
          benötigten Daten und alle nötigen Bestätigungen an Microsoft Corp.
          übermittelt werden und dass Microsoft diese Daten auf ihren Servern
          eigenverantwortlich speichert. Des weiteren akzeptiere ich den MCA
          (Microsoft Kundenvertrag). Auf Verlangen wird mir dieser in
          Schriftform vorgelegt.
        </p>
        <p>
            Die von uns erhobenen Daten werden zusätzlich durch uns DS-GVO konform
          auf unseren Servern gespeichert.
          </p>
        ";
$apple_footer = "<p>
           Hiermit beauftrage ich die Firma Computer Extra GmbH, in meinem Namen,
          mit den oben genannten Angaben ein Apple Konto zu erstellen.
        </p>
        <p>
          Mit meiner Unterschrift bestätige ich, dass die oben genannten Daten
          vollständig und richtig sind. Ich bin mir darüber im Klaren, dass alle
          benötigten Daten und alle nötigen Bestätigungen an Apple Inc.
          übermittelt werden und dass Apple diese Daten auf ihren Servern
          eigenverantwortlich speichert. Die von uns erhobenen Daten werden
          zusätzlich durch uns DS-GVO konform auf unseren Servern gespeichert.
        </p>";
$google_footer = "<p>
           Hiermit beauftrage ich die Firma Computer Extra GmbH, in meinem Namen,
          mit den oben genannten Angaben ein Google Konto zu erstellen.
        </p>
        <p>
          Mit meiner Unterschrift bestätige ich, dass die oben genannten Daten
          vollständig und richtig sind. Ich bin mir darüber im Klaren, dass alle
          benötigten Daten und alle nötigen Bestätigungen an Google LLC.
          übermittelt werden und dass Google diese Daten auf ihren Servern
          eigenverantwortlich speichert. Die von uns erhobenen Daten werden
          zusätzlich durch uns DS-GVO konform auf unseren Servern gespeichert.
        </p>";

switch ($Version) {
    case "MS": {
        $header = "Microsoft Konto";
        $footer = $ms_footer;
        break;
    }
    case "MSBusi": {
        $header = "Microsoft Business Konto";
        $footer = $ms_busines_footer;
        break;
    }
    case "Apple": {
        $header = "Apple ID";
        $footer = $apple_footer;
        break;
    }
    case "Google": {
        $header = "Google Konto";
        $footer = $google_footer;
        break;
    }
    case "All": {
        $header = [
            "Microsoft Konto",
            "Apple ID",
            "Google Konto"
        ];
        $footer = [
            $ms_footer,
            $apple_footer,
            $google_footer,
        ];
    }
}

function getBody($header, $footer)
{
    global $Vorname, $Nachname, $Email, $EmailPasswort, $Geburtstag, $Geschlecht, $Mobil;
    return '<h1 style="text-align: center; ">' . nl2br($header) . "</h1>
    <br />
    <br />
    <br />
    <br />
    <table>
        <tr>
            <td>Vorname</td>
            <td>$Vorname</td>
        </tr>
         <tr>
            <td>Nachname</td>
            <td>$Nachname</td>
        </tr>
         <tr>
            <td>Email</td>
            <td>$Email</td>
        </tr>
         <tr>
            <td>Email Passwort</td>
            <td>$EmailPasswort</td>
        </tr>
        <tr>
            <td>Geburtstag</td>
            <td>$Geburtstag[2].$Geburtstag[1].$Geburtstag[0]</td>
        </tr>
         <tr>
            <td>Geschlecht</td>
            <td>" . match ($Geschlecht) {
        "M" => "Männlich",
        "W" => "Weiblich",
        "D" => "Divers"
    } . "</td>
        </tr>
         <tr>
            <td>Mobil</td>
            <td>$Mobil</td>
        </tr>

    </table>
    <br />
    <br />
    <br />
    <br />
    <p>" . nl2br($footer) . "</p>
    <table>
        <tr>
            <td>_______________________</td>
            <td>_______________________</td>
        </tr>
        <tr>
            <td>Ort, Datum</td>
            <td>Unterschrift</td>   
        </tr>
    </table>
    ";
}

if (!is_array($header) && $Version != "MSBusi") {
    $html = getBody($header, $footer);
} elseif (is_array($header)) {
    $html_ms = getBody($header[0], $footer[0]);
    $html_apple = getBody($header[1], $footer[1]);
    $html_google = getBody($header[2], $footer[2]);
} else {
    $html = '<h1 style="text-align: center; ">' . nl2br($header) . "</h1>
    <br />
    <br />
    <br />
    <br />
    <table>
        <tr>
            <td>Firmenname</td>
            <td>$Firmenname</td>
        </tr>
         <tr>
            <td>Geschäftsführung</td>
            <td>$Vorname $Nachname</td>
        </tr>
         <tr>
            <td>Anschrift</td>
            <td>$Anschrift</td>
        </tr>
        <tr>
            <td>PLZ, Ort</td>
            <td>$Plz, $Ort</td>
        </tr>
         <tr>
            <td>Kontakt E-Mail</td>
            <td>$Email</td>
        </tr>
         <tr>
            <td>Telefon</td>
            <td>$Telefon</td>
        </tr>
    </table>
    <br />
    <br />
    <br />
    <br />
    <p>" . nl2br($footer) . "</p>
    <table>
        <tr>
            <td>_______________________</td>
            <td>_______________________</td>
        </tr>
        <tr>
            <td>Ort, Datum</td>
            <td>Unterschrift / Firmenstempel</td>   
        </tr>
    </table>
    ";
}


$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('Computer Extra GmbH');
$pdf->SetTitle('Datenschutz Formular');

$pdf->setHeaderFont(array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
$pdf->setFooterFont(array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));

$pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

$pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
$pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
$pdf->SetFooterMargin(PDF_MARGIN_FOOTER);
$pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);
$pdf->SetFont('dejavusans', '', 10);

if (!is_array($header)) {
    $pdf->AddPage();                    // pretty self-explanatory
    // Write html
    $pdf->writeHTML($html, true, false, true, false, '');
} elseif (is_array($header)) {
    $pdf->AddPage();                    // pretty self-explanatory
    $pdf->writeHTML($html_ms, true, false, true, false, '');
    $pdf->AddPage();                    // pretty self-explanatory
    $pdf->writeHTML($html_apple, true, false, true, false, '');
    $pdf->AddPage();                    // pretty self-explanatory
    $pdf->writeHTML($html_google, true, false, true, false, '');
}

$pdf->Output("Formular.pdf");
