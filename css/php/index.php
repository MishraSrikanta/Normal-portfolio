<?php
    $name = $_post['name'];
    $phone = $_post['phone'];
    $email = $_post['email'];
    $des = $_post['des'];

$conn = new mysqli('localhost','portfolio','contact');
if($conn->connect_error){
    die('connection failed : '.$conn->connect_errno);
}
else{
$stmt = $conn->prepare("insert into contact(name, phone, email, des)
    values(?, ?, ?, ?)");
    $stmt->bind_param("siss", $name, $phone, $email, $des);
    $stmt->execute();
    echo "...Registration Successfully...";
    $stmt->close();
    $conn->close();
}
?>