<?php
require_once('functions.php');
require_once('db_connection.php');
set_exception_handler('error_handler');

startUp();

$query= "SELECT * FROM `favorites`
  JOIN recipe
  ON favorites.recipe_id = recipe.id";

$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception(mysqli_connect_error());
}

$output = [];
while ($row = mysqli_fetch_assoc($result)) {
  $output[] = $row;
};

print(json_encode($output));
?>
