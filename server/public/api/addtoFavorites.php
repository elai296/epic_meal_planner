<?php
require_once('functions.php');
require_once('db_connection.php');
set_exception_handler('error_handler');

startUp();

$json_input = file_get_contents('php://input');
$obj = json_decode($json_input, true);
$id = $obj["id"];

$categories = $obj["categories"];
print($categories);
$query = "";

if ($categories !== "favorites") {
  $query = "INSERT favorites SET recipe_id = $id";
} else {
  $query = "DELETE FROM favorites WHERE recipe_id = $id";
}

mysqli_query($conn, $query);

?>
