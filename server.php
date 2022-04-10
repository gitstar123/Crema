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


// $conn = mysqli_connect($db_host, $db_user,$db_password,$db_name,$db_port);
$rid = $DecodedData['id'];
$rname = $DecodedData['name'];
$remail = $DecodedData['email'];
$rpassword = $DecodedData['password'];

// $IQ = "INSERT INTO studentlogin2 Values($rname,$remail,$rpassword)";

$sql = "INSERT INTO studentlogin VALUES('$rid','$rname','$remail','$rpassword')";


if($conn->query($sql) == TRUE){
    $Message = "HI";
}
else{
    $Message = "No";
}

$Response[] = array("Message"=>$Message);
echo json_encode($Response);

?>