<?php

require_once('functions.php');
require_once('db_connection.php');
set_exception_handler('error_handler');

startUp();

if (empty($_GET['id'])) {
  $whereClause = "";
} else if (!is_numeric($_GET['id'])) {
  throw new Exception("id needs to be a number");
} else {
  $whereClause = " WHERE recipe_ingredients.recipe_id = " . $_GET['id'];
}

$query = "SELECT * FROM recipe_ingredients 
JOIN recipe ON recipe_ingredients.recipe_id = recipe.id" . $whereClause;

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



?>