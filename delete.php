<?php
$db_host="localhost";
$db_user="root";
$db_password="";
$db_name="cremacafe";
$db_port="3306";

//Create Connection
$conn= new mysqli($db_host, $db_user,$db_password,$db_name,$db_port);
//checking connection


$EncodedData = file_get_contents('php://input');
$DecodedData = json_decode($EncodedData,true);

$id = $DecodedData['id'];

$SQ = "DELETE FROM orderdb WHERE id='$id'";
$Table = $conn->query($SQ);
?>