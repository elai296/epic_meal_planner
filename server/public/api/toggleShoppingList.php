<?php
require_once('functions.php');
require_once('db_connection.php');
set_exception_handler('error_handler');

startUp();

$json_input = file_get_contents('php://input');
$obj = json_decode($json_input, true);
// $stuff = $_POST["itemObject"];
// $obj= json_decode($stuff, true);

$id = $obj["id"];
$isCompleted = $obj["is_completed"];
$myInt = (int)$isCompleted;

$query = "UPDATE `shopping_list` SET `shopping_list`.`is_completed` = " . $myInt . " WHERE id =" . $id;

$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception(mysqli_connect_error());
} else if (!mysqli_num_rows($result) && !empty($_GET['id'])) {
  throw new Exception('Invalid ID: ' . $_GET['id']);
}

$output = [];
while ($row = mysqli_fetch_assoc($result)) {
  $output[] = $row;
};

print(json_encode($output));
