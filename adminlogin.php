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

$remail = $DecodedData['email'];
$rpassword = $DecodedData['password'];

$SQ = "SELECT * FROM dbadmin WHERE email='$remail' AND password='$rpassword'";
$Table = $conn->query($SQ);

if ($Table->num_rows>0){
    $Message = 1;
    $row = $Table->fetch_assoc();
    $id = $row['id'];
}
else{
    $Message = 0;
}
//  $Response[] = array("Message"=>$Message,"id"=>$id);
$Response[] = array("Message"=>$Message,"id"=>$id);
 echo json_encode($Response);

?>