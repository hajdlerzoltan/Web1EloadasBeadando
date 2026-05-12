<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json");

header("Content-Type: application/json");
require "db.php";

// READ
if ($_SERVER["REQUEST_METHOD"] === "GET") {

    $stmt = $pdo->query("SELECT * FROM helyszin");
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

// CREATE
if ($data["action"] === "create") {

    $stmt = $pdo->prepare("INSERT INTO helyszin (nev, megyeid) VALUES (?, ?)");
    $stmt->execute([$data["nev"], $data["megyeid"]]);
}

// UPDATE
if ($data["action"] === "update") {

    $stmt = $pdo->prepare("UPDATE helyszin SET nev=?, megyeid=? WHERE id=?");
    $stmt->execute([$data["nev"], $data["megyeid"], $data["id"]]);
}

// DELETE
if ($data["action"] === "delete") {

    $stmt = $pdo->prepare("DELETE FROM helyszin WHERE id=?");
    $stmt->execute([$data["id"]]);
}

echo json_encode(["status" => "ok"]);