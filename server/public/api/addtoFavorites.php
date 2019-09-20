<?php
require_once('functions.php');
require_once('db_connection.php');
set_exception_handler('error_handler');

startUp();

$json_input = file_get_contents('php://input');
$obj = json_decode($json_input, true);
$id = $obj["id"];

$categories = $obj["categories"];

$query = "";

if ($categories !== "favorites") {
  $query = "UPDATE recipe SET recipe.categories = 'favorites' WHERE id = $id";
} else {
  $query = "UPDATE recipe SET recipe.categories = NULL WHERE id = $id";
}

mysqli_query($conn, $query);

?>
