<?php
require("./vendor/autoload.php");

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

define("MYSQL_SERVER", $_ENV["MYSQL_SERVER"]);

define("MYSQL_USER_FILTER", $_ENV["MYSQL_USER_FILTER"]);
define("MYSQL_PASS_FILTER", $_ENV["MYSQL_PASS_FILTER"]);
define("MYSQL_DB_FILTER", $_ENV["MYSQL_DB_FILTER"]);

define("MYSQL_USER_CMS", $_ENV["MYSQL_USER_CMS"]);
define("MYSQL_PASS_CMS", $_ENV["MYSQL_PASS_CMS"]);
define("MYSQL_DB_CMS", $_ENV["MYSQL_DB_CMS"]);

define("SMTP_SERVER", $_ENV["SMTP_SERVER"]);
define("SMTP_PORT", $_ENV["SMTP_PORT"]);
define("SMTP_USER", $_ENV["SMTP_USER"]);
define("SMTP_PASS", $_ENV["SMTP_PASS"]);
define("SMTP_FROM", $_ENV["SMTP_FROM"]);

define("SMTP_TO_CONTACT", $_ENV["SMTP_TO_CONTACT"]);
define("SMTP_TO_APPLICATION", $_ENV["SMTP_TO_APPLICATION"]);
define("SMTP_BCC", $_ENV["SMTP_BCC"]);
