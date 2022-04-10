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


$sql = "SELECT o.id,o.food,s.name FROM orderdb o INNER JOIN studentlogin s ON o.sid = s.id ";

$Table = $conn->query($sql);

if($Table->num_rows>0){
    $Message = "Successful";
    // $row = $Table->fetch_assoc();
    // $id = $row['id'];
    // $food = $row['food'];
    // $Response[] = array("id"=>$id,"food"=>$food);
    $count = 1;
    $Response = array();
    while($count <= $Table->num_rows){
        $row = $Table->fetch_assoc();
        array_push($Response,array("id"=>$row['id'],"name"=>$row['name'],"food"=>$row['food']));
        $count++;
    }

}
else{
    $Message = "Unsuccessful";
    $Response = array();
}


echo json_encode($Response);

?>
