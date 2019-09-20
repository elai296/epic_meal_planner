<?php
require_once('functions.php');
require_once('db_connection.php');
set_exception_handler('error_handler');

startUp();

$data = getBodyData();
$id = $data['id'];

if( intval($id) < 0 ){
  throw new Exception("error");
}

if (empty($id)) {
  throw new Exception("a recipe id must be provided");
} else if (!is_numeric($id)) {
  throw new Exception("id needs to be a number");
} else {
  $whereClause = " WHERE recipe_ingredients.recipe_id = " . $id;
}

$query = "INSERT INTO shopping_list(ingredients_id)
          SELECT id
          FROM recipe_ingredients ". $whereClause;

$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception(mysqli_error());
} else if (!mysqli_affected_rows($conn) && !empty($id)) {
  throw new Exception('Invalid ID: ' . $id);
} else {
  $output = ['success' => true];
}

print(json_encode($output));



?>
