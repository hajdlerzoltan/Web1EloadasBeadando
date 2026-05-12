<?php

#nem a legjobb igy tarolni credential-t de ez volt a leggyorsabb megoldas
$host = "192.168.1.69";
$db   = "Web1Eloadas";
$user = "web1eloadas";
$pass = "NJE_WEB_1";

try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$db;charset=utf8",
        $user,
        $pass
    );

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (Exception $e) {
    die("DB connection error");
}