<?php
$db_host="localhost";
$db_user="root";
$db_password="";
$db_name="cremacafe";
$db_port="3306";

//Create Connection
$conn= new mysqli($db_host, $db_user,$db_password,$db_name,
$db_port);
//checking connection


$EncodedData = file_get_contents('php://input');
$DecodedData = json_decode($EncodedData,true);

$rid = $DecodedData['id'];
$rsid = $DecodedData['sid'];
$rfood = $DecodedData['food'];

$sql = "INSERT INTO orderdb VALUES('$rid','$rsid','$rfood')";

if($conn->query($sql) == TRUE){
    $Message = "Successful";
    // $row = $Table->fetch_assoc();
    // $id = $row['id'];
    // $food = $row['food'];
}
else{
    $Message = "Unsuccessful";
}

$Response[] = array("Message"=>$Message);
echo json_encode($Response);

?>
