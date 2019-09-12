<?php
require_once('./functions.php');
set_exception_handler("error_handler");
startup();
require_once("db_connection.php");

$qery = "SELECT * FROM `recipe`";
$result = mysqli_query($conn, $query);

if(!$result) {
  throw new Exception("ERROR: " . mysqli_connect_error($conn));
}

$output = [];

while($row = mysqli_fetch_array($result)) {
  $output[] = $row;
};

$json_output = json_encode($output);
print($json_output);
?>
